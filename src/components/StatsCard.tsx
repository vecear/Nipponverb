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
    <div
      className="card p-2 md:p-3"
    >
      <div className="space-y-1.5 md:space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] md:text-sm font-semibold text-white/80">{title}</h3>
          {icon && <span className="text-xl md:text-xl">{icon}</span>}
        </div>

        <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto">
          <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-white/10"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke={color}
              strokeWidth="12"
              fill="transparent"
              strokeLinecap="round"
              style={{
                strokeDasharray: `${(percentage / 100) * 352} 352`,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm md:text-xl font-bold">{value}%</span>
          </div>
        </div>

        <p className="text-center text-[8px] md:text-xs text-white/60 leading-tight">{subtitle}</p>
      </div>
    </div>
  )
}

export default StatsCard
