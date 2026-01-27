import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ExpBar from '../components/ExpBar'
import { useUserStore } from '../store/useUserStore'
import { DEFAULT_PROGRESSION, EXP_CONSTANTS } from '../types/progression'
import { getJobById, NOVICE_TITLE, getCharacterImagePath } from '../data/jobs'
import { getCharacterStory } from '../data/characterStories'
import { courses } from '../data/courses'

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

  // 取得角色故事
  const characterStory = getCharacterStory(progression.level, progression.jobId, gender)



  const modes = [
    {
      title: t('practice.categories.gojuon.title'),
      description: t('practice.categories.gojuon.description'),
      icon: 'あア',
      path: '/practice/gojuon',
      color: 'from-green-500 to-teal-500',
      image: '/assets/icons/practice/practice-gojuon.png',
    },
    {
      title: t('practice.categories.verbs.title'),
      description: t('practice.categories.verbs.description'),
      icon: '✍️',
      path: '/practice/verbs',
      color: 'from-blue-500 to-cyan-500',
      image: '/assets/icons/practice/practice-verbs.png',
    },
    {
      title: t('practice.categories.grammar.title'),
      description: t('practice.categories.grammar.description'),
      icon: '📖',
      path: '/practice/grammar',
      color: 'from-purple-500 to-pink-500',
      image: '/assets/icons/practice/practice-grammar.png',
    },
    {
      title: t('practice.categories.kanji.title'),
      description: t('practice.categories.kanji.description'),
      icon: '漢',
      path: '/practice/kanji',
      color: 'from-orange-500 to-red-500',
      image: '/assets/icons/practice/practice-kanji.png',
    },
    {
      title: t('practice.categories.vocabulary.title'),
      description: t('practice.categories.vocabulary.description'),
      icon: '🔤',
      path: '/practice/vocabulary',
      color: 'from-yellow-400 to-orange-500',
      image: '/assets/icons/practice/practice-vocabulary.png',
    },
  ]

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Hero Section - 浮世繪風格 */}
      <div className="text-center py-2 md:py-4">
        <h1 className="text-2xl md:text-4xl font-zen font-bold mb-2 text-wave-deep">
          {t('dashboard.welcome', { name: profile?.displayName || currentUser?.displayName || 'Student' })}
        </h1>
        <p className="text-lg md:text-xl text-sumi-light font-medium">
          {t('dashboard.continueJourney')}
        </p>
      </div>

      {/* Game Status Section - 浮世繪風格 */}
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* 角色圖片和資訊 */}
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-none border-2 border-wave-deep bg-gradient-to-br ${jobInfo.color} flex items-center justify-center overflow-hidden shadow-ukiyo`}>
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
                <span className="text-vermilion font-bold text-lg md:text-xl">Lv.{progression.level}</span>
                {jobInfo.hasJob && (
                  <span className="px-2 py-0.5 bg-foam text-wave-deep border border-wave-deep rounded-sm text-xs font-bold">
                    {jobInfo.name}
                  </span>
                )}
              </div>
              <span className="text-wave-deep text-sm md:text-base font-bold">{jobInfo.nameTw}</span>
              <p className="text-sumi-faded text-xs md:text-sm mt-1 leading-relaxed max-w-md">{characterStory}</p>
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
        <div className="mt-4 pt-4 border-t-2 border-dashed border-wave-mid/30">
          <div className="flex items-center justify-between text-sm">
            <span className="text-sumi-faded font-bold">{t('progression.exp', '總經驗值')}</span>
            <span className="text-wave-deep font-bold font-mono">{progression.totalExp.toLocaleString()} EXP</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* Course List Section - 浮世繪風格 */}
      <div>
        <h2 className="text-lg md:text-xl font-zen font-bold mb-3 text-wave-deep border-b-2 border-wave-mid/30 pb-1 inline-block">{t('courses.title', 'Course List')}</h2>
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
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-ukiyo p-1 group-hover:shadow-ukiyo-hover transition-all duration-300 transform group-hover:scale-110 overflow-hidden`}>
                      {course.image ? (
                        <img
                          src={course.image}
                          alt={t(course.titleKey)}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                            e.currentTarget.parentElement!.innerHTML = `<span class="text-2xl md:text-3xl">${course.emoji}</span>`
                          }}
                        />
                      ) : (
                        <span className="text-2xl md:text-3xl">{course.emoji}</span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-zen font-bold leading-tight mt-2 text-wave-deep group-hover:text-vermilion">
                    {t(course.titleKey)}
                  </h3>

                  <p className="block text-sm text-sumi-faded line-clamp-2">
                    {t(course.descriptionKey)}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Practice Categories Section - 浮世繪風格 */}
      <div>
        <h2 className="text-lg md:text-xl font-zen font-bold mb-3 text-wave-deep border-b-2 border-wave-mid/30 pb-1 inline-block">{t('dashboard.practiceCategories')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {modes.map((mode, index) => (
            <div key={index}>
              <Link to={mode.path}>
                <div className="card-interactive p-3 h-full group">
                  <div className="text-center space-y-2">
                    <div className="flex justify-center">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${mode.color} flex items-center justify-center shadow-ukiyo p-1 group-hover:shadow-ukiyo-hover transition-all duration-300 transform group-hover:scale-110 overflow-hidden`}>
                        {mode.image ? (
                          <img
                            src={mode.image}
                            alt={mode.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                              e.currentTarget.parentElement!.innerHTML = `<span class="text-2xl md:text-3xl">${mode.icon}</span>`
                            }}
                          />
                        ) : (
                          <span className="text-2xl md:text-3xl">{mode.icon}</span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-zen font-bold leading-tight text-wave-deep group-hover:text-vermilion">
                      {mode.title}
                    </h3>
                    <p className="block text-sm text-sumi-faded line-clamp-2">{mode.description}</p>
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
