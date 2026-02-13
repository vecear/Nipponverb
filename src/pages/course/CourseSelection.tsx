import { useNavigate } from 'react-router-dom'
import { COURSE_ICONS } from '../../config/assets'
import { getAvailableLevels } from '../../data/courses/index'

const allLevels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const
const availableLevels = new Set(getAvailableLevels())

const levelIcons: Record<string, string> = {
  N5: COURSE_ICONS.n5,
  N4: COURSE_ICONS.n4,
  N3: COURSE_ICONS.n3,
  N2: COURSE_ICONS.n2,
  N1: COURSE_ICONS.n1,
}

const CourseSelection = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-4xl font-zen font-bold text-wave-deep mb-2">
            JLPT 結構課程
          </h1>
          <p className="text-sumi-faded text-sm sm:text-lg">
            循序漸進學習日語，掌握 JLPT 考試所需能力
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {allLevels.map((level) => {
            const isAvailable = availableLevels.has(level)
            return (
              <button
                key={level}
                onClick={() => isAvailable && navigate(`/course/${level.toLowerCase()}`)}
                disabled={!isAvailable}
                className={`card p-4 sm:p-6 text-left transition-all ${
                  isAvailable
                    ? 'card-interactive cursor-pointer'
                    : 'opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gradient-to-br from-wave-light to-wave-deep flex items-center justify-center">
                    <img
                      src={levelIcons[level]}
                      alt={level}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement!.textContent = level
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-wave-deep">{level}</h2>
                    {!isAvailable && (
                      <span className="text-xs text-sumi-faded">即將推出</span>
                    )}
                  </div>
                </div>
                {isAvailable && (
                  <p className="text-xs sm:text-sm text-sumi-faded">
                    點擊開始學習
                  </p>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CourseSelection
