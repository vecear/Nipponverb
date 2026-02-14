import { useState, useMemo, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Play, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { getCourseByLevel } from '../../data/courses/index'
import type { JLPTLevel, LessonDefinition } from '../../types/course'
import { unifiedToQuestion } from '../../utils/questionAdapters'
import type { Question } from '../../types'
import type { AnswerRecord } from '../../store/usePracticeStore'
import FuriganaText from '../../components/FuriganaText'
import PracticeSession from '../../components/PracticeSession'
import { useAuth } from '../../contexts/AuthContext'
import { useUserStore } from '../../store/useUserStore'
import { handleCourseLessonComplete } from '../../services/progressionService'
import { useCourseProgressStore } from '../../store/useCourseProgressStore'

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const LessonPage = () => {
  const { level, lessonId } = useParams<{ level: string; lessonId: string }>()
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const userProfile = useUserStore(s => s.profile)
  const markLessonCompleted = useCourseProgressStore(s => s.markLessonCompleted)

  const jlptLevel = level?.toUpperCase() as JLPTLevel
  const course = getCourseByLevel(jlptLevel)

  // Find current lesson and next lesson
  let lesson: LessonDefinition | undefined
  let nextLessonId: string | undefined
  if (course) {
    for (let ui = 0; ui < course.units.length; ui++) {
      const unit = course.units[ui]
      for (let li = 0; li < unit.lessons.length; li++) {
        if (unit.lessons[li].id === lessonId) {
          lesson = unit.lessons[li]
          if (li + 1 < unit.lessons.length) {
            nextLessonId = unit.lessons[li + 1].id
          } else if (ui + 1 < course.units.length && course.units[ui + 1].lessons.length > 0) {
            nextLessonId = course.units[ui + 1].lessons[0].id
          }
          break
        }
      }
      if (lesson) break
    }
  }

  // Quiz state
  const [phase, setPhase] = useState<'learning' | 'quiz' | 'results'>('learning')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answerRecords, setAnswerRecords] = useState<AnswerRecord[]>([])
  const [expAwarded, setExpAwarded] = useState(false)

  const quizQuestions: Question[] = useMemo(() => {
    if (!lesson || lesson.quizQuestions.length === 0) return []
    return shuffleArray(lesson.quizQuestions.map(q => unifiedToQuestion(q)))
  }, [lesson])

  const currentQuestion = quizQuestions[currentIndex] ?? null

  const handleStartQuiz = () => {
    setPhase('quiz')
    setCurrentIndex(0)
    setScore(0)
    setAnswerRecords([])
    setExpAwarded(false)
  }

  const finishQuiz = async (_records: AnswerRecord[], finalScore: number) => {
    setPhase('results')
    if (!lesson || !course) return
    markLessonCompleted(course.id, lesson.id, finalScore, quizQuestions.length)
    if (currentUser?.uid && userProfile?.progression && !expAwarded) {
      setExpAwarded(true)
      try {
        await handleCourseLessonComplete(
          currentUser!.uid,
          userProfile.progression as any,
          (userProfile.gender || 'male') as any,
          'course_lesson_complete'
        )
      } catch { /* silent */ }
    }
  }

  const handleAnswer = useCallback((answer: string) => {
    const q = quizQuestions[currentIndex]
    if (!q) return
    const isCorrect = answer === q.correct
    const newRecord: AnswerRecord = { questionId: q.id, selectedAnswer: answer, isCorrect }
    const newRecords = [...answerRecords, newRecord]
    setAnswerRecords(newRecords)
    if (isCorrect) setScore(s => s + 1)
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(i => i + 1)
    } else {
      finishQuiz(newRecords, isCorrect ? score + 1 : score)
    }
  }, [currentIndex, quizQuestions, answerRecords, score])

  const handleSubmit = useCallback(() => {
    finishQuiz(answerRecords, score)
  }, [answerRecords, score])

  const handleEnd = useCallback(() => {
    setPhase('learning')
    setCurrentIndex(0)
    setScore(0)
    setAnswerRecords([])
  }, [])

  // ─── Not Found ───
  if (!course || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-sumi-faded mb-4">找不到此課堂</p>
          <button
            onClick={() => navigate(level ? `/course/${level}` : '/course')}
            className="btn-primary"
          >
            返回課程
          </button>
        </div>
      </div>
    )
  }

  // ─── Quiz Phase ───
  if (phase === 'quiz') {
    return (
      <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4">
        <PracticeSession
          category="course"
          questions={quizQuestions}
          currentQuestion={currentQuestion}
          currentIndex={currentIndex}
          score={score}
          answerRecords={answerRecords}
          showResults={false}
          onAnswer={handleAnswer}
          onEnd={handleEnd}
          onSubmit={handleSubmit}
        />
      </div>
    )
  }

  // ─── Results Phase ───
  if (phase === 'results') {
    const answered = answerRecords.length
    const accuracy = answered > 0 ? Math.round((score / answered) * 100) : 0
    return (
      <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-6 text-center mb-4"
          >
            <h1 className="text-2xl font-zen font-bold text-wave-deep mb-2">
              課堂測驗完成！
            </h1>
            <div className="flex justify-center gap-8 my-4">
              <div>
                <div className="text-3xl font-bold text-vermilion">{score}/{answered}</div>
                <div className="text-xs text-sumi-faded">正確題數</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wave-deep">{accuracy}%</div>
                <div className="text-xs text-sumi-faded">正確率</div>
              </div>
            </div>
            {expAwarded && (
              <div className="text-sm text-green-600 font-bold mb-2">+80 EXP</div>
            )}
            <div className="flex flex-col gap-2 mt-4">
              <button onClick={handleStartQuiz} className="btn-secondary text-sm">
                重新測驗
              </button>
              {nextLessonId && (
                <button
                  onClick={() => {
                    setPhase('learning')
                    navigate(`/course/${level}/lesson/${nextLessonId}`)
                  }}
                  className="btn-primary text-sm flex items-center justify-center gap-1"
                >
                  下一堂課 <ChevronRight size={16} />
                </button>
              )}
              <button
                onClick={() => navigate(`/course/${level}`)}
                className="text-sm text-sumi-faded hover:text-wave-deep transition-colors"
              >
                返回課程總覽
              </button>
            </div>
          </motion.div>

          <div className="space-y-2">
            {quizQuestions.map((q) => {
              const record = answerRecords.find(r => r.questionId === q.id)
              if (!record) return null
              return (
                <div key={q.id} className={`card p-3 border-l-4 ${record.isCorrect ? 'border-green-500' : 'border-red-400'}`}>
                  <div className="flex items-start gap-2">
                    <span className={`text-sm font-bold ${record.isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                      {record.isCorrect ? '✓' : '✗'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm"><FuriganaText text={q.stem || ''} /></p>
                      {q.meaning && <p className="text-xs text-sumi-faded">{q.meaning}</p>}
                      {!record.isCorrect && (
                        <p className="text-xs mt-1">
                          <span className="text-red-400">你的答案：{record.selectedAnswer}</span>
                          <span className="text-green-600 ml-2">正確：{q.correct}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // ─── Learning Phase ───
  return (
    <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(`/course/${level}`)}
          className="flex items-center gap-1 text-sm text-sumi-faded hover:text-wave-deep mb-4 transition-colors"
        >
          <ArrowLeft size={16} />
          返回課程總覽
        </button>

        <div className="mb-6">
          <h1 className="text-xl sm:text-3xl font-zen font-bold text-wave-deep mb-1">
            {lesson.titleZh}
          </h1>
          <p className="text-sm text-sumi-faded">{lesson.titleJp}</p>
        </div>

        {lesson.objectives.length > 0 && (
          <div className="card p-4 mb-4">
            <h2 className="text-base font-bold text-wave-deep mb-2">學習目標</h2>
            <ul className="list-disc list-inside text-sm text-sumi-faded space-y-1">
              {lesson.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
          </div>
        )}

        {lesson.vocabulary.length > 0 && (
          <div id="vocabulary" className="card p-4 mb-4">
            <h2 className="text-base font-bold text-wave-deep mb-3">
              單字（{lesson.vocabulary.length}）
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {lesson.vocabulary.map((v, i) => (
                <div key={i} className="p-2 rounded-lg bg-white/50 border border-indigo-900/5">
                  <div className="font-bold text-wave-deep">{v.word}</div>
                  <div className="text-xs text-sumi-faded">{v.reading} — {v.meaning_zh}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {lesson.grammarSummaries.length > 0 && (
          <div id="grammar" className="card p-4 mb-4">
            <h2 className="text-base font-bold text-wave-deep mb-3">
              文法（{lesson.grammarSummaries.length}）
            </h2>
            <div className="space-y-3">
              {lesson.grammarSummaries.map(g => (
                <div key={g.grammarId} className="p-3 rounded-lg bg-white/50 border border-indigo-900/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-wave-deep"><FuriganaText text={g.pattern} /></span>
                    <button
                      onClick={() => navigate(`/grammar/${g.grammarId}`)}
                      className="text-xs text-vermilion hover:underline"
                    >
                      查看詳解
                    </button>
                  </div>
                  <p className="text-sm text-sumi-faded mb-1">{g.meaning}</p>
                  <div className="text-xs">
                    <FuriganaText text={g.quickExample} />
                    <span className="text-sumi-faded ml-2">{g.quickExampleZh}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {lesson.dialogue.length > 0 && (
          <div id="dialogue" className="card p-4 mb-4">
            <h2 className="text-base font-bold text-wave-deep mb-3">情境對話</h2>
            <div className="space-y-3">
              {lesson.dialogue.map((line, i) => (
                <div key={i} className="flex gap-3">
                  <div className="shrink-0 w-14 text-right">
                    <span className="text-xs font-bold text-wave-mid"><FuriganaText text={line.speaker} /></span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm"><FuriganaText text={line.japanese} /></div>
                    <div className="text-xs text-sumi-faded mt-0.5">{line.chinese}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {lesson.quizQuestions.length > 0 && (
          <div id="quiz" className="card p-4 mb-4 text-center">
            <h2 className="text-base font-bold text-wave-deep mb-3">
              綜合測驗（{lesson.quizQuestions.length} 題）
            </h2>
            <p className="text-sm text-sumi-faded mb-4">
              完成以上學習內容後，挑戰本課綜合測驗
            </p>
            <button
              onClick={handleStartQuiz}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Play size={16} />
              開始測驗
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default LessonPage
