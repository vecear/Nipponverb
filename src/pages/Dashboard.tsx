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
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-zen font-bold mb-4">
          {t('dashboard.welcome', { name: profile?.displayName || currentUser?.displayName || 'Student' })}
        </h1>
        <p className="text-lg md:text-xl text-white/60">
          {t('dashboard.continueJourney')}
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 md:gap-6">
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

      <div>
        <h2 className="text-2xl md:text-3xl font-zen font-bold mb-6">{t('dashboard.practiceCategories')}</h2>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {modes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
            >
              <Link to={mode.path}>
                <div className="card p-2 md:p-6 h-full hover:bg-white/15 hover:scale-[1.02] cursor-pointer transition-all duration-150">
                  <div className="text-center space-y-2 md:space-y-4">
                    <div className="text-4xl md:text-6xl">
                      {mode.icon}
                    </div>
                    <h3 className="text-sm md:text-2xl font-zen font-bold">
                      {mode.title}
                    </h3>
                    <p className="hidden md:block text-white/60">{mode.description}</p>
                    <div className={`h-1 rounded-full bg-gradient-to-r ${mode.color} mt-2 md:mt-4`}></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-3xl font-zen font-bold mb-6">{t('dashboard.quickAccess')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/simulation">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="card-interactive"
            >
              <div className="flex items-center space-x-4">
                <div className="text-5xl">📝</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{t('simulation.title')}</h3>
                  <p className="text-white/60">{t('simulation.subtitle')}</p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link to="/stages">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="card-interactive"
            >
              <div className="flex items-center space-x-4">
                <div className="text-5xl">🎭</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{t('stages.title')}</h3>
                  <p className="text-white/60">{t('stages.subtitle')}</p>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
