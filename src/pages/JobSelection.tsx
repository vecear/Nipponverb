import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { JOBS, getJobById, getCurrentTitle, Job } from '../data/jobs'
import { useUserStore } from '../store/useUserStore'
import { handleJobSelection } from '../services/progressionService'
import { useAuth } from '../contexts/AuthContext'

const JobSelection = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { profile, setProfile } = useUserStore()
  const [selectedJobIndex, setSelectedJobIndex] = useState(0)
  const [isConfirming, setIsConfirming] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const gender = profile?.gender || 'male'
  const selectedJob = JOBS[selectedJobIndex]

  const handlePrev = () => {
    setSelectedJobIndex((prev) => (prev === 0 ? JOBS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedJobIndex((prev) => (prev === JOBS.length - 1 ? 0 : prev + 1))
  }

  const handleConfirm = async () => {
    if (!currentUser || !profile?.progression) return

    setIsSubmitting(true)
    try {
      const newProgression = await handleJobSelection(
        currentUser.uid,
        profile.progression,
        selectedJob.id
      )

      setProfile({
        ...profile,
        progression: newProgression,
      })

      // 導航回首頁
      navigate('/')
    } catch (error) {
      console.error('Job selection error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFirstStageTitle = (job: Job) => {
    const stages = gender === 'male' ? job.stages.male : job.stages.female
    return stages[0]
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* 標題 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-zen font-bold text-gradient mb-2">
          {t('progression.jobSelection.title', '轉職之儀')}
        </h1>
        <p className="text-white/60">
          {t('progression.jobSelection.subtitle', '選擇你的道路，開啟新的旅程')}
        </p>
      </motion.div>

      {/* 職業選擇器 */}
      <div className="relative w-full max-w-4xl">
        <div className="flex items-center justify-center gap-4">
          {/* 左箭頭 */}
          <button
            onClick={handlePrev}
            className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
            disabled={isConfirming}
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          {/* 職業卡片 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedJob.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-8 w-full max-w-md"
            >
              {/* 職業圖示 */}
              <div
                className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${selectedJob.color} flex items-center justify-center text-5xl mb-6`}
              >
                {selectedJob.icon}
              </div>

              {/* 職業名稱 */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-1">
                  {selectedJob.nameJp}
                </h2>
                <p className="text-white/60 text-lg">
                  {selectedJob.nameReading}
                </p>
                <p className="text-sakura-pink mt-2">{selectedJob.nameTw}</p>
              </div>

              {/* 職業描述 */}
              <p className="text-white/80 text-center mb-6 leading-relaxed">
                {selectedJob.description}
              </p>
              <p className="text-white/50 text-center text-sm mb-6 italic">
                {selectedJob.descriptionJp}
              </p>

              {/* 初始階段預覽 */}
              <div className="glass rounded-xl p-4 mb-6">
                <p className="text-white/50 text-sm text-center mb-2">
                  {t('progression.jobSelection.initialTitle', '初始稱號')}
                </p>
                <div className="text-center">
                  <p className="text-xl font-bold text-electric-cyan">
                    {getFirstStageTitle(selectedJob).nameJp}
                  </p>
                  <p className="text-white/60 text-sm">
                    {getFirstStageTitle(selectedJob).nameReading}
                  </p>
                  <p className="text-white/80 mt-1">
                    {getFirstStageTitle(selectedJob).nameTw}
                  </p>
                </div>
              </div>

              {/* 指示器 */}
              <div className="flex justify-center gap-2 mb-6">
                {JOBS.map((job, index) => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJobIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedJobIndex
                        ? 'bg-sakura-pink w-6'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    disabled={isConfirming}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 右箭頭 */}
          <button
            onClick={handleNext}
            className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
            disabled={isConfirming}
          >
            <ChevronRight size={28} className="text-white" />
          </button>
        </div>
      </div>

      {/* 確認按鈕 */}
      <div className="mt-8">
        {!isConfirming ? (
          <button
            onClick={() => setIsConfirming(true)}
            className="btn-primary px-8 py-3 text-lg"
          >
            {t('progression.jobSelection.select', '選擇此職業')}
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6 max-w-md"
          >
            <p className="text-white text-center mb-4">
              {t(
                'progression.jobSelection.confirmMessage',
                '確定要選擇「{{job}}」作為你的職業嗎？',
                { job: selectedJob.nameTw }
              )}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setIsConfirming(false)}
                className="btn-secondary px-6 py-2"
                disabled={isSubmitting}
              >
                {t('common.cancel', '取消')}
              </button>
              <button
                onClick={handleConfirm}
                disabled={isSubmitting}
                className="btn-primary px-6 py-2 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <span className="animate-spin">...</span>
                ) : (
                  <>
                    <Check size={18} />
                    {t('common.confirm', '確認')}
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* 提示 */}
      <p className="text-white/40 text-sm mt-6 text-center max-w-md">
        {t(
          'progression.jobSelection.hint',
          '職業選擇後將無法更改，請謹慎選擇最適合你的道路'
        )}
      </p>
    </div>
  )
}

export default JobSelection
