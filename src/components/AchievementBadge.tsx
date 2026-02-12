import { motion } from 'framer-motion'
import { Achievement } from '../utils/achievements'

interface AchievementBadgeProps {
  achievement: Achievement
  isNew?: boolean
}

const tierStyles = {
  bronze: 'from-ochre to-ochre-dark border-ochre',
  silver: 'from-sky-pale to-sky border-wave-light',
  gold: 'from-yamabuki to-yamabuki-light border-vermilion',
}

const AchievementBadge = ({ achievement, isNew }: AchievementBadgeProps) => (
  <motion.div
    initial={isNew ? { scale: 0, rotate: -180 } : {}}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: 'spring', stiffness: 200 }}
    className={`inline-flex flex-col items-center gap-0.5 p-2 rounded-lg border-2
      bg-gradient-to-br ${tierStyles[achievement.tier]}
      ${isNew ? 'ring-2 ring-vermilion ring-offset-2 ring-offset-washi' : ''}`}
  >
    <span className="text-xl sm:text-2xl">{achievement.icon}</span>
    <span className="text-[10px] sm:text-xs font-bold text-sumi text-center leading-tight">
      {achievement.titleZh}
    </span>
    {isNew && (
      <span className="text-[8px] sm:text-[10px] text-vermilion font-bold">NEW!</span>
    )}
  </motion.div>
)

export default AchievementBadge
