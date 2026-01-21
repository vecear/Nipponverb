import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { X, Mail, Lock, Link as LinkIcon, AlertCircle, CheckCircle, Edit2, Save } from 'lucide-react'
import { useUserStore } from '../store/useUserStore'
import { updateUserProfile } from '../services/userService'

const Profile = () => {
  const { t } = useTranslation()
  const { currentUser, updateUserEmail, updateUserPassword, linkGoogleAccount, reauthenticate } = useAuth()
  const { profile, updateProfile } = useUserStore()

  const [isEditingName, setIsEditingName] = useState(false)
  const [newName, setNewName] = useState(profile?.displayName || '')

  // Initialize levels
  const levels = ['N5', 'N4', 'N3', 'N2', 'N1']

  const [selectedLevel, setSelectedLevel] = useState<string>(profile?.currentLevel || 'N3')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState(currentUser?.email || '')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [reauthPassword, setReauthPassword] = useState('')
  const [requiresReauth, setRequiresReauth] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const isGoogleUser = currentUser?.providerData.some(p => p.providerId === 'google.com')
  const isGoogleLinked = currentUser?.providerData.some(p => p.providerId === 'google.com')

  // Calculate stats from profile
  const verbsLearned = profile?.stats?.verbs?.learned || 0
  const kanjiLearned = profile?.stats?.kanji?.learned || 0
  const grammarLearned = profile?.stats?.grammar?.learned || 0
  const stagesClearedCount = profile?.stats?.stages_cleared?.length || 0
  const totalQuestions = verbsLearned + kanjiLearned + grammarLearned

  const stats = [
    { label: t('profile.stats.totalStudyTime'), value: '--' }, // Time tracking not yet implemented
    { label: t('profile.stats.questionsAnswered'), value: totalQuestions.toLocaleString() },
    { label: t('profile.stats.currentStreak'), value: '--' }, // Streak tracking not yet implemented
    { label: t('profile.stats.stagesCompleted'), value: `${stagesClearedCount}/25` },
  ]

  const handleSaveName = async () => {
    if (!currentUser || !newName.trim()) return
    setLoading(true)
    try {
      await updateUserProfile(currentUser.uid, { displayName: newName.trim() })
      updateProfile({ displayName: newName.trim() })
      setIsEditingName(false)
      setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
    } catch (err) {
      setStatus({ type: 'error', message: t('profile.settings.updateError') })
    }
    setLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="card mb-6 md:mb-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="relative">
            {currentUser?.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt="Profile"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-sakura-pink"
              />
            ) : (
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-sakura-pink to-electric-cyan flex items-center justify-center text-white text-3xl md:text-5xl font-bold">
                {profile?.displayName?.[0] || currentUser?.displayName?.[0] || 'U'}
              </div>
            )}
            <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {t('profile.streak', { days: 0 })} 🔥
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1 md:mb-2">
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 outline-none focus:border-sakura-pink text-xl md:text-2xl font-bold font-zen"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-2 hover:bg-white/10 rounded-full text-sakura-pink transition-all"
                  >
                    <Save size={20} />
                  </button>
                  <button
                    onClick={() => {
                      setIsEditingName(false)
                      setNewName(profile?.displayName || '')
                    }}
                    className="p-2 hover:bg-white/10 rounded-full text-white/40 transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <>
                  <h1 className="text-2xl md:text-4xl font-zen font-bold text-gradient">
                    {profile?.displayName || currentUser?.displayName || 'Student'}
                  </h1>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="p-2 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-all"
                    title={t('profile.settings.editName')}
                  >
                    <Edit2 size={18} />
                  </button>
                </>
              )}
            </div>
            <p className="text-white/60 mb-4">{currentUser?.email}</p>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3">
              <span className="text-white/80 text-sm md:text-base">{t('profile.targetLevel')}:</span>
              <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold transition-all ${selectedLevel === level
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
          <div className="mt-6 md:mt-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all font-semibold border border-white/10"
            >
              {t('profile.settings.modifyData')}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="bg-[#0f172a] border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">{t('profile.settings.accountManagement')}</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-full transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {status && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  }`}>
                  {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  <span className="text-sm font-medium">{status.message}</span>
                </div>
              )}

              {requiresReauth ? (
                <div className="space-y-6">
                  <div className="p-4 bg-sakura-pink/5 border border-sakura-pink/20 rounded-xl text-center">
                    <div className="w-12 h-12 bg-sakura-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="text-sakura-pink" size={24} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">
                      {t('profile.settings.reauthTitle')}
                    </h4>
                    <p className="text-sm text-white/70 mb-6">
                      {t('profile.settings.reauthDesc')}
                    </p>

                    {!isGoogleUser ? (
                      <div className="space-y-4">
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                          <input
                            type="password"
                            value={reauthPassword}
                            onChange={(e) => setReauthPassword(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-sakura-pink/50 outline-none transition-all"
                            placeholder={t('profile.settings.currentPassword')}
                          />
                        </div>
                        <button
                          onClick={async () => {
                            setLoading(true)
                            setStatus(null)
                            try {
                              await reauthenticate(reauthPassword)
                              setRequiresReauth(false)
                              setReauthPassword('')
                              setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
                            } catch (err: any) {
                              setStatus({ type: 'error', message: t('profile.settings.updateError') })
                            }
                            setLoading(false)
                          }}
                          disabled={loading || !reauthPassword}
                          className="w-full py-2 rounded-xl bg-sakura-pink text-white font-bold transition-all disabled:opacity-50"
                        >
                          {loading ? t('common.loading') : t('profile.settings.verify')}
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={async () => {
                          setLoading(true)
                          setStatus(null)
                          try {
                            await reauthenticate()
                            setRequiresReauth(false)
                            setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
                          } catch (err: any) {
                            setStatus({ type: 'error', message: t('profile.settings.updateError') })
                          }
                          setLoading(false)
                        }}
                        className="w-full py-3 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-3"
                      >
                        <Lock size={18} />
                        {t('profile.settings.verifyWithGoogle')}
                      </button>
                    )}

                    <button
                      onClick={() => setRequiresReauth(false)}
                      className="mt-4 text-sm text-white/40 hover:text-white/60"
                    >
                      {t('common.cancel')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Change Email */}
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">
                      {t('profile.settings.changeEmail')}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-sakura-pink/50 outline-none transition-all"
                        placeholder={t('profile.settings.newEmail')}
                      />
                    </div>
                    <button
                      onClick={async () => {
                        setLoading(true)
                        setStatus(null)
                        try {
                          await updateUserEmail(email)
                          setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
                        } catch (err: any) {
                          if (err.code === 'auth/requires-recent-login') {
                            setRequiresReauth(true)
                          } else {
                            setStatus({ type: 'error', message: t('profile.settings.updateError') })
                          }
                        }
                        setLoading(false)
                      }}
                      disabled={loading || email === currentUser?.email}
                      className="mt-2 w-full py-2 rounded-xl bg-sakura-pink/20 hover:bg-sakura-pink/30 text-sakura-pink font-semibold transition-all disabled:opacity-50"
                    >
                      {t('common.save')}
                    </button>
                  </div>

                  <hr className="border-white/5" />

                  {/* Change Password */}
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">
                      {t('profile.settings.changePassword')}
                    </label>
                    <div className="space-y-2">
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-sakura-pink/50 outline-none transition-all"
                          placeholder={t('profile.settings.newPassword')}
                        />
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-sakura-pink/50 outline-none transition-all"
                          placeholder={t('profile.settings.confirmPassword')}
                        />
                      </div>
                    </div>
                    <button
                      onClick={async () => {
                        if (newPassword !== confirmPassword) {
                          setStatus({ type: 'error', message: "Passwords don't match" })
                          return
                        }
                        setLoading(true)
                        setStatus(null)
                        try {
                          await updateUserPassword(newPassword)
                          setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
                          setNewPassword('')
                          setConfirmPassword('')
                        } catch (err: any) {
                          if (err.code === 'auth/requires-recent-login') {
                            setRequiresReauth(true)
                          } else {
                            setStatus({ type: 'error', message: t('profile.settings.updateError') })
                          }
                        }
                        setLoading(false)
                      }}
                      disabled={loading || !newPassword || newPassword !== confirmPassword}
                      className="mt-2 w-full py-2 rounded-xl bg-sakura-pink/20 hover:bg-sakura-pink/30 text-sakura-pink font-semibold transition-all disabled:opacity-50"
                    >
                      {t('profile.settings.changePassword')}
                    </button>
                  </div>

                  <hr className="border-white/5" />

                  {/* Link Google */}
                  <div>
                    <button
                      onClick={async () => {
                        if (isGoogleLinked) return
                        setLoading(true)
                        setStatus(null)
                        try {
                          await linkGoogleAccount()
                          setStatus({ type: 'success', message: t('profile.settings.updateSuccess') })
                        } catch (err: any) {
                          setStatus({ type: 'error', message: t('profile.settings.updateError') })
                        }
                        setLoading(false)
                      }}
                      disabled={loading || isGoogleLinked}
                      className={`w-full py-3 rounded-xl flex items-center justify-center gap-3 font-semibold transition-all ${isGoogleLinked
                        ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                        : 'bg-white text-black hover:bg-white/90 shadow-lg'
                        }`}
                    >
                      {isGoogleLinked ? <CheckCircle size={18} /> : <LinkIcon size={18} />}
                      {isGoogleLinked ? t('profile.settings.googleLinked') : t('profile.settings.linkGoogle')}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
            className="card p-4 text-center"
          >
            <div className="text-xl md:text-2xl font-bold text-gradient mb-1 md:mb-2">{stat.value}</div>
            <div className="text-xs md:text-sm text-white/60">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="card mb-8">
        <h2 className="text-2xl font-zen font-bold mb-6">{t('profile.learningProgress')}</h2>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{t('profile.progress.verbs')}</span>
              <span className="text-white/60">{verbsLearned}/200</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-sakura-pink to-pink-600 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((verbsLearned / 200) * 100, 100)}%` }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{t('profile.progress.kanji')}</span>
              <span className="text-white/60">{kanjiLearned}/1000</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-electric-cyan to-blue-600 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((kanjiLearned / 1000) * 100, 100)}%` }}
                transition={{ duration: 0.5, delay: 0.15 }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{t('profile.progress.grammar')}</span>
              <span className="text-white/60">{grammarLearned}/80</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((grammarLearned / 80) * 100, 100)}%` }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl md:text-2xl font-zen font-bold mb-4 md:mb-6">{t('profile.achievements.title')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { id: 'streak-15', icon: '🔥', name: t('profile.achievements.streak15') },
            { id: 'first-perfect', icon: '⭐', name: t('profile.achievements.firstPerfect') },
            { id: 'questions-100', icon: '📚', name: t('profile.achievements.questions100') },
            { id: 'stage-master', icon: '🏆', name: t('profile.achievements.stageMaster') },
            { id: 'kanji-500', icon: '💎', name: t('profile.achievements.kanji500') },
            { id: 'n3-ready', icon: '🎯', name: t('profile.achievements.n3Ready') },
            { id: 'grammar-expert', icon: '🌸', name: t('profile.achievements.grammarExpert') },
            { id: 'jlpt-champion', icon: '👑', name: t('profile.achievements.jlptChampion') },
          ].map((achievement, index) => {
            const isUnlocked = profile?.stats?.stages_cleared?.includes(achievement.id) || false
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.025, duration: 0.15 }}
                className={`p-3 md:p-4 rounded-xl text-center ${isUnlocked
                  ? 'bg-gradient-to-br from-sakura-pink/20 to-electric-cyan/20 border-2 border-sakura-pink/50'
                  : 'bg-white/5 opacity-50'
                  }`}
              >
                <div className={`text-3xl md:text-4xl mb-1 md:mb-2 ${isUnlocked ? '' : 'grayscale'}`}>{achievement.icon}</div>
                <div className="text-[10px] md:text-xs font-semibold">{achievement.name}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Profile
