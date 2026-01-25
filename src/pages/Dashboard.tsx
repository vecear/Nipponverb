import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ExpBar from '../components/ExpBar'
import { useUserStore } from '../store/useUserStore'
import { DEFAULT_PROGRESSION, EXP_CONSTANTS } from '../types/progression'
import { getJobById, NOVICE_TITLE, getCharacterImagePath } from '../data/jobs'
import { courses } from '../data/courses'

// Icons replaced with unicode/gradients
// import brushIcon from '../assets/icons/brush_sumi_e.png'
// import swordIcon from '../assets/icons/sword_sumi_e.png'
// import lanternIcon from '../assets/icons/lantern_sumi_e.png'
// import toriiIcon from '../assets/icons/torii_sumi_e.png'
// import bookIcon from '../assets/icons/book_sumi_e.png'

const Dashboard = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { profile } = useUserStore()

  // 取得進度資料
  const progression = profile?.progression || DEFAULT_PROGRESSION
  const gender = profile?.gender || 'male'

  // 取得職業資訊
  const getJobInfo = () => {
    if (progression.level < EXP_CONSTANTS.JOB_CHANGE_LEVEL) {
      return {
        icon: '🎯',
        name: NOVICE_TITLE.nameJp,
        nameTw: NOVICE_TITLE.nameTw,
        description: '初入江湖的見習者', // Default description for novice
        color: 'from-gray-500 to-gray-600',
        hasJob: false,
      }
    }

    if (progression.jobId) {
      const job = getJobById(progression.jobId)
      if (job) {
        return {
          icon: job.icon,
          name: job.nameJp,
          nameTw: job.nameTw,
          description: job.description, // Add description from job data
          color: job.color,
          hasJob: true,
        }
      }
    }

    return {
      icon: '❓',
      name: '未選擇',
      nameTw: '未選擇職業',
      description: '尚未選擇職業道路', // Default description for no job
      color: 'from-gray-500 to-gray-600',
      hasJob: false,
      needsJobChange: progression.level >= EXP_CONSTANTS.JOB_CHANGE_LEVEL,
    }
  }

  const jobInfo = getJobInfo()

  // 取得角色圖片路徑
  const characterImage = getCharacterImagePath(progression.level, progression.jobId, gender)



  const modes = [
    {
      title: t('practice.categories.gojuon.title'),
      description: t('practice.categories.gojuon.description'),
      icon: 'あア',
      path: '/practice/gojuon',
      color: 'from-green-500 to-teal-500',
      image: undefined, // brushIcon,
    },
    {
      title: t('practice.categories.verbs.title'),
      description: t('practice.categories.verbs.description'),
      icon: '✍️',
      path: '/practice/verbs',
      color: 'from-blue-500 to-cyan-500',
      image: undefined, // swordIcon,
    },
    {
      title: t('practice.categories.grammar.title'),
      description: t('practice.categories.grammar.description'),
      icon: '📖',
      path: '/practice/grammar',
      color: 'from-purple-500 to-pink-500',
      image: undefined, // lanternIcon,
    },
    {
      title: t('practice.categories.kanji.title'),
      description: t('practice.categories.kanji.description'),
      icon: '漢',
      path: '/practice/kanji',
      color: 'from-orange-500 to-red-500',
      image: undefined, // toriiIcon,
    },
    {
      title: t('practice.categories.vocabulary.title'),
      description: t('practice.categories.vocabulary.description'),
      icon: '🔤',
      path: '/practice/vocabulary',
      color: 'from-yellow-400 to-orange-500',
      image: undefined, // bookIcon,
    },
  ]

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Hero Section */}
      <div className="text-center py-2 md:py-4">
        <h1 className="text-2xl md:text-4xl font-zen font-bold mb-2 text-indigo-900">
          {t('dashboard.welcome', { name: profile?.displayName || currentUser?.displayName || 'Student' })}
        </h1>
        <p className="text-lg md:text-xl text-indigo-900/90 font-medium">
          {t('dashboard.continueJourney')}
        </p>
      </div>

      {/* Game Status Section */}
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* 角色圖片和資訊 */}
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-none border-2 border-indigo-900 bg-gradient-to-br ${jobInfo.color} flex items-center justify-center overflow-hidden shadow-md`}>
              <img
                src={characterImage}
                alt={jobInfo.nameTw}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // 圖片載入失敗時顯示 emoji
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.innerHTML = `<span class="text-3xl md:text-4xl">${jobInfo.icon}</span>`
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold text-lg md:text-xl">Lv.{progression.level}</span>
                {jobInfo.hasJob && (
                  <span className="px-2 py-0.5 bg-indigo-100 text-indigo-900 border border-indigo-900 rounded-sm text-xs font-bold">
                    {jobInfo.name}
                  </span>
                )}
              </div>
              <span className="text-indigo-900 text-sm md:text-base font-bold">{jobInfo.nameTw}</span>
              <span className="text-indigo-900/90 text-xs md:text-sm mt-1">{jobInfo.description}</span>
              {/* 轉職提示 */}
              {'needsJobChange' in jobInfo && jobInfo.needsJobChange && (
                <button
                  onClick={() => navigate('/job-selection')}
                  className="mt-2 btn-primary text-xs !py-1 !px-3 shadow-none border-0"
                >
                  {t('progression.jobSelection.go', '前往轉職')}
                </button>
              )}
            </div>
          </div>

          {/* 經驗值條 */}
          <div className="flex-1">
            <ExpBar
              progression={progression}
              gender={gender}
              showTitle={false}
              size="md"
            />
          </div>
        </div>

        {/* 總經驗值統計 */}
        <div className="mt-4 pt-4 border-t-2 border-dashed border-indigo-900/20">
          <div className="flex items-center justify-between text-sm">
            <span className="text-indigo-900/90 font-bold">{t('progression.exp', '總經驗值')}</span>
            <span className="text-indigo-900 font-bold font-mono">{progression.totalExp.toLocaleString()} EXP</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* Course List Section */}
      <div>
        <h2 className="text-lg md:text-xl font-zen font-bold mb-3 text-indigo-900 border-b-2 border-indigo-900/20 pb-1 inline-block">{t('courses.title', 'Course List')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {courses.map((course) => {

            return (
              <button
                key={course.id}
                onClick={() => navigate(course.path)}
                className="card-interactive p-3 h-full group"
              >
                <div className="text-center space-y-2">
                  <div className="flex justify-center">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-md p-2 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110`}>
                      <span className="text-2xl md:text-3xl">{course.emoji}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-zen font-bold leading-tight mt-2 text-indigo-900 group-hover:text-red-600">
                    {t(course.titleKey)}
                  </h3>

                  <p className="block text-sm text-indigo-900/90 line-clamp-2">
                    {t(course.descriptionKey)}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Practice Categories Section - Full width */}
      <div>
        <h2 className="text-lg md:text-xl font-zen font-bold mb-3 text-indigo-900 border-b-2 border-indigo-900/20 pb-1 inline-block">{t('dashboard.practiceCategories')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {modes.map((mode, index) => (
            <div key={index}>
              <Link to={mode.path}>
                <div className="card-interactive p-3 h-full group">
                  <div className="text-center space-y-2">
                    <div className="text-3xl md:text-4xl text-indigo-900 group-hover:scale-110 transition-transform duration-300">
                      {mode.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-zen font-bold leading-tight text-indigo-900 group-hover:text-red-600">
                      {mode.title}
                    </h3>
                    <p className="block text-sm text-indigo-900/90 line-clamp-2">{mode.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Dashboard
