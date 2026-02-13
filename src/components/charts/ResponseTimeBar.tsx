interface ResponseTimeBarProps {
  data: { label: string; timeMs: number; isCorrect: boolean }[]
  maxItems?: number
}

const ResponseTimeBar = ({ data, maxItems = 20 }: ResponseTimeBarProps) => {
  const items = data.slice(0, maxItems)
  if (items.length === 0) return null

  const maxTime = Math.max(...items.map(d => d.timeMs), 1)

  return (
    <div className="space-y-1">
      {items.map((item, i) => {
        const width = Math.max(5, (item.timeMs / maxTime) * 100)
        const seconds = (item.timeMs / 1000).toFixed(1)

        return (
          <div key={i} className="flex items-center gap-2">
            <span className={`text-[10px] w-5 text-right font-bold shrink-0 ${
              item.isCorrect ? 'text-green-600' : 'text-red-500'
            }`}>
              {i + 1}
            </span>
            <div className="flex-1 h-3 bg-wave-deep/5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-[125ms] ${
                  item.isCorrect ? 'bg-green-500/60' : 'bg-red-400/60'
                }`}
                style={{ width: `${width}%` }}
              />
            </div>
            <span className="text-[10px] text-sumi-faded w-9 text-right shrink-0 tabular-nums">
              {seconds}s
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default ResponseTimeBar
