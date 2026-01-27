import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { courses } from '../data/courses'


const Courses = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-zen font-bold text-wave-deep mb-2">
            {t('courses.title')}
          </h1>
          <p className="text-sumi-faded text-sm sm:text-lg">
            {t('courses.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
          {courses.map((course) => {
            return (
              <button
                key={course.id}
                onClick={() => navigate(course.path)}
                className="card-interactive p-3 sm:p-4 text-left group flex items-center md:block"
              >
                <div className="flex items-start md:mb-3 mr-3 sm:mr-4 md:mr-0">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-12 md:h-12 shrink-0 bg-gradient-to-br ${course.color} flex items-center justify-center text-2xl sm:text-3xl md:text-2xl shadow-ukiyo overflow-hidden`}>
                    {course.image ? (
                      <img
                        src={course.image}
                        alt={t(course.titleKey)}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // 圖片載入失敗時顯示 emoji
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-3xl md:text-2xl">${course.emoji}</span>`
                        }}
                      />
                    ) : (
                      <span>{course.emoji}</span>
                    )}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-xl md:text-lg font-bold text-wave-deep mb-1 group-hover:text-vermilion transition-colors">
                    {t(course.titleKey)}
                  </h3>

                  <p className="text-xs sm:text-sm text-sumi-faded group-hover:text-sumi-light transition-colors line-clamp-2">
                    {t(course.descriptionKey)}
                  </p>

                  <div className="hidden md:flex mt-3 items-center text-vermilion group-hover:translate-x-1 transition-transform">
                    <span className="text-xs font-medium">{t('courses.startLearning')}</span>
                    <span className="ml-1 text-xs">→</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Courses
