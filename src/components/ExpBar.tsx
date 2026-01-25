import { motion } from 'framer-motion'
import { UserProgression } from '../types/progression'
import { getCurrentLevelProgress } from '../services/progressionService'
import { getJobById, getCurrentTitle, NOVICE_TITLE } from '../data/jobs'
import { EXP_CONSTANTS } from '../types/progression'

interface ExpBarProps {
  progression: UserProgression
  gender: 'male' | 'female'
  showTitle?: boolean
  size?: 'sm' | 'md' | 'lg'
  theme?: 'light' | 'dark'
  className?: string
}

const ExpBar = ({
  progression,
  gender,
  showTitle = true,
  size = 'md',
  theme = 'light',
  className = '',
}: ExpBarProps) => {
  const { currentExp, requiredExp, percentage } =
    getCurrentLevelProgress(progression)

  // 取得當前稱號
  const getCurrentTitleInfo = () => {
    if (progression.level < EXP_CONSTANTS.JOB_CHANGE_LEVEL) {
      return NOVICE_TITLE
    }

    if (progression.jobId) {
      const job = getJobById(progression.jobId)
      if (job) {
        return getCurrentTitle(job, progression.level, gender)
      }
    }

    return null
  }

  const titleInfo = getCurrentTitleInfo()

  // 尺寸配置
  const sizeConfig = {
    sm: {
      height: 'h-2',
      fontSize: 'text-xs',
      levelSize: 'text-sm',
      padding: 'p-2',
    },
    md: {
      height: 'h-3',
      fontSize: 'text-sm',
      levelSize: 'text-lg',
      padding: 'p-3',
    },
    lg: {
      height: 'h-4',
      fontSize: 'text-base',
      levelSize: 'text-xl',
      padding: 'p-4',
    },
  }

  const config = sizeConfig[size]
  const isDark = theme === 'dark'
  const textColor = isDark ? 'text-white' : 'text-indigo-900'
  const subTextColor = isDark ? 'text-white/60' : 'text-indigo-900/60'

  return (
    <div className={`${className}`}>
      {/* 稱號和等級 */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          {/* 等級徽章 */}
          <div className="flex items-center gap-1">
            <span className={`text-sakura-pink font-bold`}>Lv.</span>
            <span className={`${textColor} font-bold ${config.levelSize}`}>
              {progression.level}
            </span>
          </div>

          {/* 稱號 */}
          {showTitle && titleInfo && (
            <div className="flex flex-col">
              <span className={`text-electric-cyan font-medium`}>
                {titleInfo.nameJp}
              </span>
              <span className={`${subTextColor} ${config.fontSize}`}>
                {titleInfo.nameTw}
              </span>
            </div>
          )}
        </div>

        {/* 經驗值數字 */}
        <div className={`${subTextColor} ${config.fontSize}`}>
          <span className={textColor}>{currentExp.toLocaleString()}</span>
          <span> / </span>
          <span>{requiredExp.toLocaleString()} EXP</span>
        </div>
      </div>

      {/* 經驗值條 */}
      <div
        className={`relative ${config.height} ${isDark ? 'bg-white/10' : 'bg-indigo-900/10'} rounded-full overflow-hidden`}
      >
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1D3450] to-[#2A6F97] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* 發光效果 */}
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1D3450]/50 to-[#2A6F97]/50 rounded-full blur-sm"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* 百分比 */}
      <div className={`text-right mt-1 ${isDark ? 'text-white/40' : 'text-indigo-900/40'} ${config.fontSize}`}>
        {percentage}%
      </div>
    </div>
  )
}

export default ExpBar
