import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import StatsCard from '../components/StatsCard'
import ExpBar from '../components/ExpBar'
import { useUserStore } from '../store/useUserStore'
import { DEFAULT_PROGRESSION, EXP_CONSTANTS } from '../types/progression'
import { getJobById, NOVICE_TITLE } from '../data/jobs'

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
          color: job.color,
          hasJob: true,
        }
      }
    }

    return {
      icon: '❓',
      name: '未選擇',
      nameTw: '未選擇職業',
      color: 'from-gray-500 to-gray-600',
      hasJob: false,
      needsJobChange: progression.level >= EXP_CONSTANTS.JOB_CHANGE_LEVEL,
    }
  }

  const jobInfo = getJobInfo()

  // Default stats for new users
  const stats = {
    verbs: { accuracy: 0, learned: 0 },
    kanji: { accuracy: 0, learned: 0 },
    grammar: { accuracy: 0, learned: 0 },
    vocabulary: { accuracy: 0, learned: 0 },
    ...(profile?.stats || {})
  }

  const modes = [
    {
      title: t('practice.categories.gojuon.title'),
      description: t('practice.categories.gojuon.description'),
      icon: 'あア',
      path: '/practice/gojuon',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: t('practice.categories.verbs.title'),
      description: t('practice.categories.verbs.description'),
      icon: '✍️',
      path: '/practice/verbs',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: t('practice.categories.grammar.title'),
      description: t('practice.categories.grammar.description'),
      icon: '📖',
      path: '/practice/grammar',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: t('practice.categories.kanji.title'),
      description: t('practice.categories.kanji.description'),
      icon: '漢',
      path: '/practice/kanji',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: t('practice.categories.vocabulary.title'),
      description: t('practice.categories.vocabulary.description'),
      icon: '🔤',
      path: '/practice/vocabulary',
      color: 'from-yellow-400 to-orange-500',
    },
  ]

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Hero Section */}
      <div className="text-center py-2 md:py-4">
        <h1 className="text-2xl md:text-4xl font-zen font-bold mb-2">
          {t('dashboard.welcome', { name: profile?.displayName || currentUser?.displayName || 'Student' })}
        </h1>
        <p className="text-lg md:text-xl text-white/60">
          {t('dashboard.continueJourney')}
        </p>
      </div>

      {/* Game Status Section */}
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* 職業圖示和資訊 */}
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${jobInfo.color} flex items-center justify-center text-3xl md:text-4xl shadow-lg`}>
              {jobInfo.icon}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sakura-pink font-bold text-lg md:text-xl">Lv.{progression.level}</span>
                {jobInfo.hasJob && (
                  <span className="px-2 py-0.5 bg-electric-cyan/20 text-electric-cyan rounded-full text-xs">
                    {jobInfo.name}
                  </span>
                )}
              </div>
              <span className="text-white/80 text-sm md:text-base">{jobInfo.nameTw}</span>
              {/* 轉職提示 */}
              {'needsJobChange' in jobInfo && jobInfo.needsJobChange && (
                <button
                  onClick={() => navigate('/job-selection')}
                  className="mt-1 text-xs text-sakura-pink hover:text-sakura-pink/80 underline"
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
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/60">{t('progression.exp', '總經驗值')}</span>
            <span className="text-white font-medium">{progression.totalExp.toLocaleString()} EXP</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <StatsCard
          title={t('practice.categories.verbs.title')}
          value={stats.verbs.accuracy}
          subtitle={t('dashboard.stats.learned', { count: stats.verbs.learned })}
          color="#FFB7C5"
          icon="✍️"
        />
        <StatsCard
          title={t('practice.categories.kanji.title')}
          value={stats.kanji.accuracy}
          subtitle={t('dashboard.stats.learned', { count: stats.kanji.learned })}
          color="#00D9FF"
          icon="漢"
        />
        <StatsCard
          title={t('practice.categories.grammar.title')}
          value={stats.grammar.accuracy}
          subtitle={t('dashboard.stats.patternsMastered', { count: stats.grammar.learned })}
          color="#9333EA"
          icon="📖"
        />
        <StatsCard
          title={t('practice.categories.vocabulary.title')}
          value={stats.vocabulary?.accuracy || 0}
          subtitle={t('dashboard.stats.learned', { count: stats.vocabulary?.learned || 0 })}
          color="#FACC15"
          icon="🔤"
        />
      </div>

      {/* Practice Categories Section - Full width */}
      <div>
        <h2 className="text-lg md:text-xl font-zen font-bold mb-3">{t('dashboard.practiceCategories')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
          {modes.map((mode, index) => (
            <div key={index}>
              <Link to={mode.path}>
                <div className="card p-2 md:p-3 h-full hover:bg-white/15 hover:scale-[1.02] cursor-pointer transition-all duration-150">
                  <div className="text-center space-y-1 md:space-y-2">
                    <div className="text-2xl md:text-3xl">
                      {mode.icon}
                    </div>
                    <h3 className="text-xs md:text-base font-zen font-bold leading-tight">
                      {mode.title}
                    </h3>
                    <p className="hidden md:block text-[10px] text-white/60 line-clamp-1">{mode.description}</p>
                    <div className={`h-1 rounded-full bg-gradient-to-r ${mode.color} mt-1 md:mt-2`}></div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
