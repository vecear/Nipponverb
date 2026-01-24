import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useTranslation } from 'react-i18next'
import { Menu, X, Shield } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { useUserStore } from '../store/useUserStore'
import { isAdmin, getAdminList } from '../services/adminService'

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const { profile } = useUserStore()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserAdmin, setIsUserAdmin] = useState(false)

  // 檢查是否為管理員
  useEffect(() => {
    const checkAdmin = async () => {
      if (currentUser?.email) {
        try {
          // 先載入管理員列表以填充快取
          await getAdminList()
          setIsUserAdmin(isAdmin(currentUser.email))
        } catch (error) {
          // 發生錯誤時，檢查是否為預設管理員
          const isDefaultAdmin = currentUser.email.toLowerCase() === 'vecear@gmail.com'
          setIsUserAdmin(isDefaultAdmin)
        }
      }
    }
    checkAdmin()
  }, [currentUser?.email])

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const navLinks = [
    { to: '/', label: t('nav.dashboard') },
    { to: '/courses', label: t('nav.courses') },
    { to: '/practice', label: t('nav.practice') },
    { to: '/simulation', label: t('nav.simulation') },
    { to: '/stages', label: t('nav.stages') },
  ]

  return (
    <nav
      className="glass sticky top-0 z-50 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-zen font-bold text-gradient truncate">
              Nipponverb
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <Link to="/profile" className="flex items-center space-x-2">
              {currentUser?.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-sakura-pink"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sakura-pink to-electric-cyan flex items-center justify-center text-white font-bold">
                  {(profile?.displayName || currentUser?.displayName)?.[0] || 'U'}
                </div>
              )}
            </Link>

            {/* 管理員後台連結 */}
            {isUserAdmin && (
              <Link
                to="/admin"
                className="hidden md:flex items-center gap-1 text-sakura-pink hover:text-sakura-pink/80 transition-colors"
                title={t('nav.admin', '後台管理')}
              >
                <Shield size={20} />
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="hidden md:block btn-secondary text-sm px-4 py-2"
            >
              {t('nav.logout')}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl overflow-hidden"
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-lg font-medium text-white/80 hover:text-white px-4 py-2 hover:bg-white/5 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
              {/* 手機版管理員連結 */}
              {isUserAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center gap-2 text-lg font-medium text-sakura-pink px-4 py-2 hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Shield size={20} />
                  {t('nav.admin', '後台管理')}
                </Link>
              )}
              <div className="px-4">
                <LanguageSwitcher />
              </div>
              <button
                onClick={handleLogout}
                className="w-full btn-secondary text-sm py-3"
              >
                {t('nav.logout')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
