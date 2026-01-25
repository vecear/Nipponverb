import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Sparkles } from 'lucide-react'
import { LevelUpInfo } from '../types/progression'
import { UI_ELEMENTS } from '../config/assets'

interface LevelUpModalProps {
  isOpen: boolean
  onClose: () => void
  levelUpInfo: LevelUpInfo | null
  onJobSelect?: () => void
}

const LevelUpModal = ({
  isOpen,
  onClose,
  levelUpInfo,
  onJobSelect,
}: LevelUpModalProps) => {
  const { t } = useTranslation()

  if (!levelUpInfo) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* 彈窗內容 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass rounded-3xl p-8 max-w-sm w-full text-center relative overflow-hidden">
              {/* 背景粒子效果 */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-sakura-pink/30 rounded-full"
                    initial={{
                      x: Math.random() * 100 - 50 + '%',
                      y: '100%',
                      opacity: 0,
                    }}
                    animate={{
                      y: '-100%',
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* 升級圖示 */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-vermilion to-ochre flex items-center justify-center shadow-ukiyo overflow-hidden"
              >
                <img
                  src={UI_ELEMENTS.levelUpEffect}
                  alt="Level Up"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`
                  }}
                />
              </motion.div>

              {/* 標題 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="text-yellow-400" size={24} />
                  <h2 className="text-2xl font-zen font-bold text-gradient">
                    {t('progression.levelUp.title', '升級！')}
                  </h2>
                  <Sparkles className="text-yellow-400" size={24} />
                </div>

                {/* 等級變化 */}
                <div className="flex items-center justify-center gap-4 my-6">
                  <span className="text-white/60 text-xl">
                    Lv.{levelUpInfo.previousLevel}
                  </span>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="text-sakura-pink text-2xl"
                  >
                    →
                  </motion.span>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    className="text-electric-cyan text-3xl font-bold"
                  >
                    Lv.{levelUpInfo.newLevel}
                  </motion.span>
                </div>

                {/* 新稱號 */}
                {levelUpInfo.newTitle && !levelUpInfo.isJobChangeTriggered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="glass rounded-xl p-4 mb-6"
                  >
                    <p className="text-white/50 text-sm mb-2">
                      {t('progression.levelUp.currentTitle', '當前稱號')}
                    </p>
                    <p className="text-xl font-bold text-white">
                      {levelUpInfo.newTitle.nameJp}
                    </p>
                    <p className="text-white/60 text-sm">
                      {levelUpInfo.newTitle.nameReading}
                    </p>
                    <p className="text-sakura-pink">
                      {levelUpInfo.newTitle.nameTw}
                    </p>
                  </motion.div>
                )}

                {/* 轉職提示 */}
                {levelUpInfo.isJobChangeTriggered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="glass rounded-xl p-4 mb-6 border border-sakura-pink/30"
                  >
                    <p className="text-sakura-pink font-bold mb-2">
                      {t('progression.levelUp.jobChangeUnlocked', '轉職之儀已解鎖！')}
                    </p>
                    <p className="text-white/60 text-sm">
                      {t(
                        'progression.levelUp.jobChangeHint',
                        '你已達到等級 5，可以選擇你的職業道路了'
                      )}
                    </p>
                  </motion.div>
                )}

                {/* 獲得經驗值 */}
                <p className="text-white/60 text-sm mb-6">
                  {t('progression.levelUp.expGained', '+{{exp}} EXP', {
                    exp: levelUpInfo.expGained,
                  })}
                </p>
              </motion.div>

              {/* 按鈕 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {levelUpInfo.isJobChangeTriggered && onJobSelect ? (
                  <button
                    onClick={onJobSelect}
                    className="btn-primary w-full py-3"
                  >
                    {t('progression.levelUp.selectJob', '前往選擇職業')}
                  </button>
                ) : (
                  <button onClick={onClose} className="btn-primary w-full py-3">
                    {t('common.confirm', '確認')}
                  </button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default LevelUpModal
