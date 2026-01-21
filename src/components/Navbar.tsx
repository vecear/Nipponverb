import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { useUserStore } from '../store/useUserStore'

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const { profile } = useUserStore()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    { to: '/practice/verbs', label: t('nav.practice') },
    { to: '/simulation', label: t('nav.simulation') },
    { to: '/stages', label: t('nav.stages') },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
      className="glass sticky top-0 z-50 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-zen font-bold text-gradient truncate">
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
