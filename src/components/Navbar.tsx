import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass sticky top-0 z-50 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-zen font-bold text-gradient">
              Nipponverb
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white/80 hover:text-white transition-colors"
            >
              {t('nav.dashboard')}
            </Link>
            <Link
              to="/practice/verbs"
              className="text-white/80 hover:text-white transition-colors"
            >
              {t('nav.practice')}
            </Link>
            <Link
              to="/simulation"
              className="text-white/80 hover:text-white transition-colors"
            >
              {t('nav.simulation')}
            </Link>
            <Link
              to="/stages"
              className="text-white/80 hover:text-white transition-colors"
            >
              {t('nav.stages')}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/profile" className="flex items-center space-x-2">
              {currentUser?.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-sakura-pink"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sakura-pink to-electric-cyan flex items-center justify-center text-white font-bold">
                  {currentUser?.displayName?.[0] || 'U'}
                </div>
              )}
            </Link>
            <button
              onClick={handleLogout}
              className="btn-secondary text-sm px-4 py-2"
            >
              {t('nav.logout')}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
