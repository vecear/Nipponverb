import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import StatsCard from '../components/StatsCard'

const Dashboard = () => {
  const { t } = useTranslation()
  const { currentUser } = useAuth()

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
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <h1 className="text-5xl font-zen font-bold mb-4">
          {t('dashboard.welcome', { name: currentUser?.displayName || 'Student' })}
        </h1>
        <p className="text-xl text-white/60">
          {t('dashboard.continueJourney')}
        </p>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Verbs"
          value={85}
          subtitle="120 learned"
          color="#FFB7C5"
          icon="✍️"
        />
        <StatsCard
          title="Kanji"
          value={92}
          subtitle="500 learned"
          color="#00D9FF"
          icon="漢"
        />
        <StatsCard
          title="Grammar"
          value={78}
          subtitle="45 patterns mastered"
          color="#9333EA"
          icon="📖"
        />
      </div>

      <div>
        <h2 className="text-3xl font-zen font-bold mb-6">{t('dashboard.practiceCategories')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={mode.path}>
                <div className="card-interactive h-full">
                  <div className="text-center space-y-4">
                    <div className={`text-6xl animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                      {mode.icon}
                    </div>
                    <h3 className="text-2xl font-zen font-bold">
                      {mode.title}
                    </h3>
                    <p className="text-white/60">{mode.description}</p>
                    <div className={`h-1 rounded-full bg-gradient-to-r ${mode.color} mt-4`}></div>
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
