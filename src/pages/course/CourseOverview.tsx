import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getCourseByLevel } from '../../data/courses/index'
import type { JLPTLevel } from '../../types/course'

const CourseOverview = () => {
  const { level } = useParams<{ level: string }>()
  const navigate = useNavigate()

  const jlptLevel = level?.toUpperCase() as JLPTLevel
  const course = getCourseByLevel(jlptLevel)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-sumi-faded mb-4">找不到此課程</p>
          <button onClick={() => navigate('/course')} className="btn-primary">
            返回課程列表
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/course')}
          className="flex items-center gap-1 text-sm text-sumi-faded hover:text-wave-deep mb-4 transition-colors"
        >
          <ArrowLeft size={16} />
          返回課程列表
        </button>

        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-zen font-bold text-wave-deep mb-2">
            {course.titleZh}
          </h1>
          <p className="text-sumi-faded text-sm sm:text-base">{course.description}</p>
          <div className="flex gap-4 mt-3 text-xs sm:text-sm text-sumi-faded">
            <span>{course.totalVocab} 單字</span>
            <span>{course.totalGrammar} 文法</span>
            <span>{course.totalLessons} 堂課</span>
          </div>
        </div>

        {course.units.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-sumi-faded text-lg mb-2">課堂內容建置中</p>
            <p className="text-sumi-faded text-sm">課堂資料將在後續更新中加入</p>
          </div>
        ) : (
          <div className="space-y-4">
            {course.units.map((unit) => (
              <div key={unit.id} className="card p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-wave-deep mb-1">
                  Unit {unit.order}: {unit.titleZh}
                </h2>
                <p className="text-sm text-sumi-faded mb-3">{unit.description}</p>
                <div className="space-y-2">
                  {unit.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => navigate(`/course/${level}/lesson/${lesson.id}`)}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-white/50 border border-indigo-900/10 hover:bg-white/80 hover:border-indigo-900/20 transition-all text-left"
                    >
                      <div>
                        <span className="text-sm font-bold text-wave-deep">
                          第 {lesson.order} 課：{lesson.titleZh}
                        </span>
                        <span className="text-xs text-sumi-faded ml-2">
                          {lesson.titleJp}
                        </span>
                      </div>
                      <span className="text-xs text-sumi-faded">
                        {lesson.vocabulary.length} 單字 · {lesson.grammarIds.length} 文法
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseOverview
