import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { courses } from '../data/courses'


const Courses = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-zen font-bold text-gradient mb-2">
            {t('courses.title')}
          </h1>
          <p className="text-indigo-900/60 text-lg">
            {t('courses.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {courses.map((course) => {
            return (
              <button
                key={course.id}
                onClick={() => navigate(course.path)}
                className="card-interactive p-4 rounded-xl text-left group flex items-center md:block"
              >
                <div className="flex items-start md:mb-3 mr-4 md:mr-0">
                  <div className={`w-16 h-16 md:w-12 md:h-12 shrink-0 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl md:text-2xl`}>
                    {course.emoji}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-lg font-bold text-indigo-900 mb-1 group-hover:text-indigo-700 transition-colors">
                    {t(course.titleKey)}
                  </h3>

                  <p className="text-sm text-indigo-900/60 group-hover:text-indigo-900/80 transition-colors line-clamp-2">
                    {t(course.descriptionKey)}
                  </p>

                  <div className="hidden md:flex mt-3 items-center text-sakura-pink group-hover:translate-x-1 transition-transform">
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
