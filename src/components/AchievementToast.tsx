import { motion, AnimatePresence } from 'framer-motion'
import { Achievement } from '../utils/achievements'

interface AchievementToastProps {
  achievements: Achievement[]
  onDismiss: () => void
}

const AchievementToast = ({ achievements, onDismiss }: AchievementToastProps) => {
  if (achievements.length === 0) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-sm"
      >
        <div className="card p-4 border-2 border-yamabuki shadow-lg bg-washi">
          <div className="text-center mb-3">
            <p className="text-sm font-bold text-yamabuki">🎉 新成就解鎖！</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {achievements.map(a => (
              <motion.div
                key={a.id}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="flex flex-col items-center gap-0.5"
              >
                <span className="text-2xl">{a.icon}</span>
                <span className="text-[10px] font-bold text-sumi">{a.titleZh}</span>
                <span className="text-[8px] text-sumi-faded">{a.descriptionZh}</span>
              </motion.div>
            ))}
          </div>
          <button
            onClick={onDismiss}
            className="w-full btn-secondary py-1.5 text-sm"
          >
            太棒了！
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AchievementToast
