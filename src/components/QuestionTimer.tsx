import { useState, useEffect, useRef } from 'react'

interface QuestionTimerProps {
  isRunning: boolean
  showTimer?: boolean
  warningThresholdMs?: number
}

const QuestionTimer = ({
  isRunning,
  showTimer = true,
  warningThresholdMs = 30000,
}: QuestionTimerProps) => {
  const [elapsed, setElapsed] = useState(0)
  const startRef = useRef<number>(Date.now())
  const intervalRef = useRef<number>()

  useEffect(() => {
    if (isRunning) {
      startRef.current = Date.now()
      setElapsed(0)
      intervalRef.current = window.setInterval(() => {
        setElapsed(Date.now() - startRef.current)
      }, 100)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning])

  if (!showTimer) return null

  const seconds = Math.floor(elapsed / 1000)
  const isWarning = elapsed > warningThresholdMs

  return (
    <div className={`text-xs font-mono tabular-nums ${
      isWarning ? 'text-vermilion animate-pulse' : 'text-sumi-faded'
    }`}>
      {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
    </div>
  )
}

export default QuestionTimer
