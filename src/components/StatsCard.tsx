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
      className="card-interactive"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white/80">{title}</h3>
          {icon && <span className="text-3xl">{icon}</span>}
        </div>

        <div className="relative w-32 h-32 mx-auto">
          <svg className="transform -rotate-90 w-32 h-32">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-white/10"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              stroke={color}
              strokeWidth="8"
              fill="transparent"
              strokeLinecap="round"
              initial={{ strokeDasharray: '0 352' }}
              animate={{
                strokeDasharray: `${(percentage / 100) * 352} 352`,
              }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{value}%</span>
          </div>
        </div>

        <p className="text-center text-white/60">{subtitle}</p>
      </div>
    </motion.div>
  )
}

export default StatsCard
