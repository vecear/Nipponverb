import { motion } from 'framer-motion'

interface StatsCardProps {
  title: string
  value: number
  subtitle: string
  color: string
  icon?: string
}

const StatsCard = ({ title, value, subtitle, color, icon }: StatsCardProps) => {
  const percentage = Math.min(value, 100)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
      className="card p-2 md:p-6"
    >
      <div className="space-y-2 md:space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] md:text-lg font-semibold text-white/80">{title}</h3>
          {icon && <span className="text-xl md:text-3xl">{icon}</span>}
        </div>

        <div className="relative w-16 h-16 md:w-32 md:h-32 mx-auto">
          <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="10"
              fill="transparent"
              className="text-white/10"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              stroke={color}
              strokeWidth="10"
              fill="transparent"
              strokeLinecap="round"
              initial={{ strokeDasharray: '0 352' }}
              animate={{
                strokeDasharray: `${(percentage / 100) * 352} 352`,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm md:text-3xl font-bold">{value}%</span>
          </div>
        </div>

        <p className="text-center text-[8px] md:text-base text-white/60 leading-tight md:leading-normal">{subtitle}</p>
      </div>
    </motion.div>
  )
}

export default StatsCard
