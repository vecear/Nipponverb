import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import StatsCard from '../components/StatsCard'

const Dashboard = () => {
  const { currentUser } = useAuth()

  const modes = [
    {
      title: 'Gojūon (五十音)',
      description: 'Master Hiragana and Katakana characters',
      icon: 'あア',
      path: '/practice/gojuon',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Verb Conjugation',
      description: 'Practice verb forms and conjugations',
      icon: '✍️',
      path: '/practice/verbs',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Grammar Practice',
      description: 'Master JLPT grammar patterns',
      icon: '📖',
      path: '/practice/grammar',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Kanji Reading',
      description: 'Learn kanji readings and meanings',
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
          Welcome back, <span className="text-gradient">{currentUser?.displayName || 'Student'}</span>
        </h1>
        <p className="text-xl text-white/60">
          Continue your Japanese learning journey
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
        <h2 className="text-3xl font-zen font-bold mb-6">Practice Categories</h2>
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
        <h2 className="text-3xl font-zen font-bold mb-6">Recent Activity</h2>
        <div className="card space-y-4">
          {[
            { action: 'Completed Verb Practice', time: '2 hours ago', score: '8/10' },
            { action: 'Cleared Stage: At the Station', time: '1 day ago', score: 'Perfect' },
            { action: 'JLPT N3 Mock Exam', time: '3 days ago', score: '145/180' },
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div>
                <p className="font-semibold">{activity.action}</p>
                <p className="text-sm text-white/60">{activity.time}</p>
              </div>
              <div className="text-sakura-pink font-bold">{activity.score}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
