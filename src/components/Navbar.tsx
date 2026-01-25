import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useNav } from '../contexts/NavContext'
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
import { BRAND } from '../config/assets'

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const { profile } = useUserStore()
  const { customNavItems, activeSection } = useNav()
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const [isUserAdmin, setIsUserAdmin] = useState(false)

  // Check if we're on a grammar detail page
  const isGrammarDetailPage = location.pathname.startsWith('/grammar/') && customNavItems

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
      {/* Top Navbar (Logo + Profile + Desktop Menu) - 浮世繪風格 */}
      <nav
        className="sticky top-0 z-50 bg-washi-light/95 backdrop-blur-sm border-b-2 border-wave-deep shadow-ukiyo"
      >
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src={BRAND.logo}
                alt="Nipponverb"
                className="h-8 md:h-10 w-auto"
                onError={(e) => {
                  // Logo 載入失敗時隱藏圖片，只顯示文字
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="text-2xl md:text-3xl font-zen font-bold text-wave-deep truncate group-hover:text-vermilion transition-colors">
                Nipponverb
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {isGrammarDetailPage && customNavItems ? (
                // Grammar detail page custom navigation
                customNavItems.map((item) => {
                  const isActive = !item.isLink && activeSection === item.id
                  if (item.isLink && item.to) {
                    return (
                      <Link
                        key={item.id}
                        to={item.to}
                        className="font-zen font-semibold transition-colors text-wave-deep/90 hover:text-vermilion flex items-center gap-2"
                      >
                        <item.icon size={18} />
                        {item.label}
                      </Link>
                    )
                  }
                  return (
                    <button
                      key={item.id}
                      onClick={item.onClick}
                      className={`font-zen font-semibold transition-colors flex items-center gap-2 ${isActive ? 'text-vermilion border-b-2 border-vermilion' : 'text-wave-deep/90 hover:text-vermilion'}`}
                    >
                      <item.icon size={18} />
                      {item.label}
                    </button>
                  )
                })
              ) : (
                // Default navigation
                navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`font-zen font-semibold transition-colors ${location.pathname === link.to ? 'text-vermilion border-b-2 border-vermilion' : 'text-wave-deep/90 hover:text-vermilion'}`}
                  >
                    {link.label}
                  </Link>
                ))
              )}
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/profile" className="flex items-center space-x-2">
                {currentUser?.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt="Profile"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-wave-deep hover:border-vermilion transition-colors"
                  />
                ) : (
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-foam border-2 border-wave-deep hover:border-vermilion flex items-center justify-center text-wave-deep font-zen font-bold text-sm md:text-base transition-colors">
                    {(profile?.displayName || currentUser?.displayName)?.[0] || 'U'}
                  </div>
                )}
              </Link>

              {/* 管理員後台連結 - 朱印風格 */}
              {isUserAdmin && (
                <Link
                  to="/admin"
                  className="hidden md:flex items-center gap-1 text-vermilion hover:text-vermilion-dark transition-colors"
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

      {/* Mobile Bottom Navigation Bar - 浮世繪風格 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
        <div className="flex justify-around items-center px-2 py-3 border-t-2 border-wave-deep bg-washi-light shadow-[0_-4px_6px_-1px_rgba(26,58,92,0.15)]">
          {isGrammarDetailPage && customNavItems ? (
            // Grammar detail page custom navigation
            customNavItems.map((item) => {
              const isActive = !item.isLink && activeSection === item.id
              if (item.isLink && item.to) {
                return (
                  <Link
                    key={item.id}
                    to={item.to}
                    className="flex flex-col items-center justify-center p-2 rounded-lg transition-all text-wave-deep/80 hover:text-wave-deep"
                  >
                    <item.icon size={24} />
                    <span className="text-[10px] mt-1 font-zen font-bold">{item.label}</span>
                  </Link>
                )
              }
              return (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${isActive
                    ? 'text-vermilion scale-110'
                    : 'text-wave-deep/80 hover:text-wave-deep'
                  }`}
                >
                  <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[10px] mt-1 font-zen font-bold">{item.label}</span>
                </button>
              )
            })
          ) : (
            // Default navigation
            navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${location.pathname === link.to
                  ? 'text-vermilion scale-110'
                  : 'text-wave-deep/80 hover:text-wave-deep'
                }`}
              >
                <link.icon size={24} strokeWidth={location.pathname === link.to ? 2.5 : 2} />
                <span className="text-[10px] mt-1 font-zen font-bold">{link.label}</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
