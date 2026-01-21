import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import StatsCard from '../components/StatsCard'
import { useUserStore } from '../store/useUserStore'

const Dashboard = () => {
  const { t } = useTranslation()
  const { currentUser } = useAuth()
  const { profile } = useUserStore()

  // Default stats for new users
  const stats = profile?.stats || {
    verbs: { accuracy: 0, learned: 0 },
    kanji: { accuracy: 0, learned: 0 },
    grammar: { accuracy: 0, learned: 0 }
  }

  const modes = [
    // ... (rest of modes remain same)
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

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <StatsCard
          title="Verbs"
          value={stats.verbs.accuracy}
          subtitle={`${stats.verbs.learned} learned`}
          color="#FFB7C5"
          icon="✍️"
        />
        <StatsCard
          title="Kanji"
          value={stats.kanji.accuracy}
          subtitle={`${stats.kanji.learned} learned`}
          color="#00D9FF"
          icon="漢"
        />
        <StatsCard
          title="Grammar"
          value={stats.grammar.accuracy}
          subtitle={`${stats.grammar.learned} patterns mastered`}
          color="#9333EA"
          icon="📖"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Categories Section - Takes up 2/3 on desktop */}
        <div className="lg:col-span-2">
          <h2 className="text-lg md:text-xl font-zen font-bold mb-3">{t('dashboard.practiceCategories')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
            {modes.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Access Section - Takes up 1/3 on desktop */}
        <div className="lg:col-span-1">
          <h2 className="text-lg md:text-xl font-zen font-bold mb-3">{t('dashboard.quickAccess')}</h2>
          <div className="flex flex-col gap-3">
            <Link to="/simulation">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="card-interactive p-3"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl md:text-3xl">📝</div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold">{t('simulation.title')}</h3>
                    <p className="text-[10px] text-white/60">{t('simulation.subtitle')}</p>
                  </div>
                </div>
              </motion.div>
            </Link>

            <Link to="/stages">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="card-interactive p-3"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl md:text-3xl">🎭</div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold">{t('stages.title')}</h3>
                    <p className="text-[10px] text-white/60">{t('stages.subtitle')}</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
