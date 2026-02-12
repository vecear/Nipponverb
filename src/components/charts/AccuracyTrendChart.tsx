interface AccuracyTrendChartProps {
  history: { date: string; accuracy: number }[]
  width?: number
  height?: number
}

const AccuracyTrendChart = ({
  history,
  width = 300,
  height = 120,
}: AccuracyTrendChartProps) => {
  if (history.length < 2) return null

  const padding = { top: 10, right: 10, bottom: 20, left: 30 }
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom

  const points = history.map((h, i) => ({
    x: padding.left + (i / (history.length - 1)) * chartW,
    y: padding.top + chartH - (h.accuracy / 100) * chartH,
    accuracy: h.accuracy,
    date: h.date,
  }))

  const pathD = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ')

  const areaD = pathD +
    ` L ${points[points.length - 1].x} ${padding.top + chartH}` +
    ` L ${points[0].x} ${padding.top + chartH} Z`

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A7C9B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4A7C9B" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Y 軸標籤 */}
      {[0, 50, 100].map(v => (
        <text
          key={v}
          x={padding.left - 5}
          y={padding.top + chartH - (v / 100) * chartH + 4}
          textAnchor="end"
          className="fill-sumi-faded"
          fontSize="8"
        >
          {v}%
        </text>
      ))}

      {/* 網格線 */}
      {[0, 50, 100].map(v => (
        <line
          key={v}
          x1={padding.left}
          y1={padding.top + chartH - (v / 100) * chartH}
          x2={width - padding.right}
          y2={padding.top + chartH - (v / 100) * chartH}
          stroke="#1A3A5C"
          strokeOpacity="0.1"
          strokeDasharray="4 2"
        />
      ))}

      {/* 漸層填充 */}
      <path d={areaD} fill="url(#areaGrad)" />

      {/* 折線 */}
      <path
        d={pathD}
        fill="none"
        stroke="#4A7C9B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 資料點 */}
      {points.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy={p.y}
            r="3"
            fill="#FDFBF7"
            stroke="#4A7C9B"
            strokeWidth="2"
          />
          {/* 數值標籤（只在首尾和最高/最低點顯示） */}
          {(i === 0 || i === points.length - 1) && (
            <text
              x={p.x}
              y={p.y - 8}
              textAnchor="middle"
              className="fill-sumi-faded"
              fontSize="8"
              fontWeight="bold"
            >
              {p.accuracy}%
            </text>
          )}
        </g>
      ))}

      {/* X 軸日期標籤 */}
      {[points[0], points[points.length - 1]].map((p, i) => (
        <text
          key={i}
          x={p.x}
          y={height - 4}
          textAnchor="middle"
          className="fill-sumi-faded"
          fontSize="7"
        >
          {new Date(p.date).toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' })}
        </text>
      ))}
    </svg>
  )
}

export default AccuracyTrendChart
