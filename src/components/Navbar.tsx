import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useTranslation } from 'react-i18next'
import {
  Shield,
  Home,
  BookOpen,
  Swords,
  ClipboardList,
  Map,
} from 'lucide-react'

import { useUserStore } from '../store/useUserStore'
import { isAdmin, getAdminList } from '../services/adminService'

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const { profile } = useUserStore()
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
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
    { to: '/', label: t('nav.dashboard'), icon: Home },
    { to: '/courses', label: t('nav.courses'), icon: BookOpen },
    { to: '/practice', label: t('nav.practice'), icon: Swords },
    { to: '/simulation', label: t('nav.simulation'), icon: ClipboardList },
    { to: '/stages', label: t('nav.stages'), icon: Map },
  ]

  return (
    <>
      {/* Top Navbar (Logo + Profile + Desktop Menu) */}
      <nav
        className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm border-b-2 border-indigo-900 shadow-md"
      >
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl md:text-3xl font-zen font-bold text-indigo-900 truncate">
                Nipponverb
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-semibold transition-colors ${location.pathname === link.to ? 'text-red-600 border-b-2 border-red-600' : 'text-indigo-900/90 hover:text-indigo-900'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/profile" className="flex items-center space-x-2">
                {currentUser?.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt="Profile"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-indigo-900"
                  />
                ) : (
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-100 border-2 border-indigo-900 flex items-center justify-center text-indigo-900 font-bold text-sm md:text-base">
                    {(profile?.displayName || currentUser?.displayName)?.[0] || 'U'}
                  </div>
                )}
              </Link>

              {/* 管理員後台連結 */}
              {isUserAdmin && (
                <Link
                  to="/admin"
                  className="hidden md:flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors"
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
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
        <div className="flex justify-around items-center px-2 py-3 border-t-2 border-indigo-900 bg-[#FDFBF7] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${location.pathname === link.to
                ? 'text-red-600 scale-110'
                : 'text-indigo-900/80 hover:text-indigo-900'
                }`}
            >
              <link.icon size={24} strokeWidth={location.pathname === link.to ? 2.5 : 2} />
              <span className="text-[10px] mt-1 font-bold">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar
