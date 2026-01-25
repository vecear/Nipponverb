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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <button
                key={course.id}
                onClick={() => navigate(course.path)}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 text-left group border border-indigo-900/10 hover:border-indigo-900/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl`}>
                    {course.emoji}
                  </div>
                  <Icon className="text-indigo-900/40 group-hover:text-indigo-900/60 transition-colors" size={24} />
                </div>

                <h3 className="text-2xl font-bold text-indigo-900 mb-2 group-hover:text-indigo-700 transition-colors">
                  {t(course.titleKey)}
                </h3>

                <p className="text-indigo-900/60 group-hover:text-indigo-900/80 transition-colors">
                  {t(course.descriptionKey)}
                </p>

                <div className="mt-4 flex items-center text-sakura-pink group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium">{t('courses.startLearning')}</span>
                  <span className="ml-2">→</span>
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
