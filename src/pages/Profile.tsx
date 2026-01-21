import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Profile = () => {
  const { t } = useTranslation()
  const { currentUser } = useAuth()
  const [selectedLevel, setSelectedLevel] = useState<string>('N3')

  const levels = ['N5', 'N4', 'N3', 'N2', 'N1']

  const stats = [
    { label: t('profile.stats.totalStudyTime'), value: '127 hours' },
    { label: t('profile.stats.questionsAnswered'), value: '2,450' },
    { label: t('profile.stats.currentStreak'), value: '15 days' },
    { label: t('profile.stats.stagesCompleted'), value: '12/25' },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card mb-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            {currentUser?.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-sakura-pink"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-sakura-pink to-electric-cyan flex items-center justify-center text-white text-5xl font-bold">
                {currentUser?.displayName?.[0] || 'U'}
              </div>
            )}
            <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {t('profile.streak', { days: 15 })} 🔥
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-zen font-bold mb-2">
              {currentUser?.displayName || 'Student'}
            </h1>
            <p className="text-white/60 mb-4">{currentUser?.email}</p>

            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-white/80">{t('profile.targetLevel')}:</span>
              <div className="flex gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-1 rounded-full text-sm font-semibold transition-all ${
                      selectedLevel === level
                        ? 'bg-gradient-to-r from-sakura-pink to-electric-cyan text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card text-center"
          >
            <div className="text-2xl font-bold text-gradient mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-white/60">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-zen font-bold mb-6">{t('profile.learningProgress')}</h2>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{t('profile.progress.verbs')}</span>
              <span className="text-white/60">120/200</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-sakura-pink to-pink-600 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{t('profile.progress.kanji')}</span>
              <span className="text-white/60">500/1000</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-electric-cyan to-blue-600 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{t('profile.progress.grammar')}</span>
              <span className="text-white/60">45/80</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '56%' }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-zen font-bold mb-6">{t('profile.achievements.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🔥', name: t('profile.achievements.streak15'), unlocked: true },
            { icon: '⭐', name: t('profile.achievements.firstPerfect'), unlocked: true },
            { icon: '📚', name: t('profile.achievements.questions100'), unlocked: true },
            { icon: '🏆', name: t('profile.achievements.stageMaster'), unlocked: false },
            { icon: '💎', name: t('profile.achievements.kanji500'), unlocked: true },
            { icon: '🎯', name: t('profile.achievements.n3Ready'), unlocked: false },
            { icon: '🌸', name: t('profile.achievements.grammarExpert'), unlocked: false },
            { icon: '👑', name: t('profile.achievements.jlptChampion'), unlocked: false },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-xl text-center ${
                achievement.unlocked
                  ? 'bg-gradient-to-br from-sakura-pink/20 to-electric-cyan/20 border-2 border-sakura-pink/50'
                  : 'bg-white/5 opacity-50'
              }`}
            >
              <div className={`text-4xl mb-2 ${achievement.unlocked ? '' : 'grayscale'}`}>
                {achievement.icon}
              </div>
              <div className="text-xs font-semibold">{achievement.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
