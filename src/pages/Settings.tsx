import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useTranslation } from 'react-i18next'
import {
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  linkWithCredential,
  reauthenticateWithCredential,
  sendEmailVerification,
} from 'firebase/auth'

const Settings = () => {
  const { t } = useTranslation()
  const { currentUser } = useAuth()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // Email change state
  const [newEmail, setNewEmail] = useState('')
  const [emailPassword, setEmailPassword] = useState('')

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // Link email/password for Google users
  const [linkEmail, setLinkEmail] = useState('')
  const [linkPassword, setLinkPassword] = useState('')
  const [confirmLinkPassword, setConfirmLinkPassword] = useState('')

  const isGoogleUser = currentUser?.providerData.some(
    (provider) => provider.providerId === 'google.com'
  )

  const hasPasswordAuth = currentUser?.providerData.some(
    (provider) => provider.providerId === 'password'
  )

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage(null), 5000)
  }

  const handleChangeEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentUser || !newEmail) return

    setLoading(true)
    try {
      // Re-authenticate user before changing email
      if (hasPasswordAuth && emailPassword) {
        const credential = EmailAuthProvider.credential(
          currentUser.email!,
          emailPassword
        )
        await reauthenticateWithCredential(currentUser, credential)
      }

      await updateEmail(currentUser, newEmail)
      await sendEmailVerification(currentUser)

      showMessage('success', t('settings.emailChangeSuccess'))
      setNewEmail('')
      setEmailPassword('')
    } catch (error: any) {
      console.error('Email change error:', error)
      showMessage('error', error.message || t('settings.emailChangeError'))
    } finally {
      setLoading(false)
    }
  }

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentUser) return

    if (newPassword !== confirmPassword) {
      showMessage('error', t('settings.passwordMismatch'))
      return
    }

    if (newPassword.length < 6) {
      showMessage('error', t('settings.passwordTooShort'))
      return
    }

    setLoading(true)
    try {
      // Re-authenticate user before changing password
      const credential = EmailAuthProvider.credential(
        currentUser.email!,
        currentPassword
      )
      await reauthenticateWithCredential(currentUser, credential)

      await updatePassword(currentUser, newPassword)
      showMessage('success', t('settings.passwordChangeSuccess'))
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (error: any) {
      console.error('Password change error:', error)
      showMessage('error', error.message || t('settings.passwordChangeError'))
    } finally {
      setLoading(false)
    }
  }

  const handleLinkEmailPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentUser) return

    if (linkPassword !== confirmLinkPassword) {
      showMessage('error', t('settings.passwordMismatch'))
      return
    }

    if (linkPassword.length < 6) {
      showMessage('error', t('settings.passwordTooShort'))
      return
    }

    setLoading(true)
    try {
      const credential = EmailAuthProvider.credential(linkEmail, linkPassword)
      await linkWithCredential(currentUser, credential)
      await sendEmailVerification(currentUser)

      showMessage('success', t('settings.linkAccountSuccess'))
      setLinkEmail('')
      setLinkPassword('')
      setConfirmLinkPassword('')

      // Reload to update provider data
      window.location.reload()
    } catch (error: any) {
      console.error('Link account error:', error)
      showMessage('error', error.message || t('settings.linkAccountError'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-zen font-bold mb-2 text-gradient">
          {t('settings.title')}
        </h1>
        <p className="text-white/90">{t('settings.subtitle')}</p>
      </div>

      {message && (
        <div
          className={`card mb-6 ${message.type === 'success'
            ? 'bg-green-500/20 border-2 border-green-500'
            : 'bg-red-500/20 border-2 border-red-500'
            }`}
        >
          <p className={message.type === 'success' ? 'text-green-400' : 'text-red-400'}>
            {message.text}
          </p>
        </div>
      )}

      {/* Account Information */}
      <div className="card mb-6">
        <h2 className="text-2xl font-zen font-bold mb-4">{t('settings.accountInfo')}</h2>
        <div className="space-y-3 text-white/80">
          <div className="flex justify-between">
            <span className="text-white/90">{t('settings.currentEmail')}:</span>
            <span>{currentUser?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/90">{t('settings.loginMethod')}:</span>
            <div className="flex gap-2">
              {isGoogleUser && (
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Google</span>
              )}
              {hasPasswordAuth && (
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  {t('settings.emailPassword')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Link Email/Password for Google Users */}
      {isGoogleUser && !hasPasswordAuth && (
        <div className="card mb-6">
          <h2 className="text-2xl font-zen font-bold mb-4">
            {t('settings.linkEmailPassword')}
          </h2>
          <p className="text-white/90 mb-6">{t('settings.linkEmailPasswordDesc')}</p>
          <form onSubmit={handleLinkEmailPassword} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t('settings.email')}
              </label>
              <input
                type="email"
                value={linkEmail}
                onChange={(e) => setLinkEmail(e.target.value)}
                className="input-field w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t('settings.newPassword')}
              </label>
              <input
                type="password"
                value={linkPassword}
                onChange={(e) => setLinkPassword(e.target.value)}
                className="input-field w-full"
                minLength={6}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t('settings.confirmPassword')}
              </label>
              <input
                type="password"
                value={confirmLinkPassword}
                onChange={(e) => setConfirmLinkPassword(e.target.value)}
                className="input-field w-full"
                minLength={6}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? t('common.loading') : t('settings.linkAccount')}
            </button>
          </form>
        </div>
      )}

      {/* Change Email */}
      {hasPasswordAuth && (
        <div className="card mb-6">
          <h2 className="text-2xl font-zen font-bold mb-4">{t('settings.changeEmail')}</h2>
          <form onSubmit={handleChangeEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t('settings.newEmail')}
              </label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="input-field w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t('settings.currentPassword')}
              </label>
              <input
                type="password"
                value={emailPassword}
                onChange={(e) => setEmailPassword(e.target.value)}
                className="input-field w-full"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? t('common.loading') : t('settings.updateEmail')}
            </button>
          </form>
        </div>
      )}

      {/* Change Password */}
      {hasPasswordAuth && (
        <div className="card mb-6">
          <h2 className="text-2xl font-zen font-bold mb-4">
            {t('settings.changePassword')}
          </h2>
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t('settings.currentPassword')}
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="input-field w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t('settings.newPassword')}
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input-field w-full"
                minLength={6}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t('settings.confirmPassword')}
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input-field w-full"
                minLength={6}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? t('common.loading') : t('settings.updatePassword')}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Settings
