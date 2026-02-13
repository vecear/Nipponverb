import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Sparkles } from 'lucide-react'

interface GrammarPassModalProps {
  isOpen: boolean
  onClose: () => void
  expGained: number
  grammarPattern: string
}

const GrammarPassModal = ({
  isOpen,
  onClose,
  expGained,
  grammarPattern,
}: GrammarPassModalProps) => {
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
            transition={{ type: 'spring', duration: 0.125 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass rounded-3xl p-8 max-w-sm w-full text-center relative overflow-hidden">
              {/* 背景粒子效果 */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400/40 rounded-full"
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
                      duration: 0.5 + Math.random() * 0.5,
                      repeat: Infinity,
                      delay: Math.random() * 0.5,
                    }}
                  />
                ))}
              </div>

              {/* 成功圖示 */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', delay: 0.05 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg"
              >
                <CheckCircle size={40} className="text-white" />
              </motion.div>

              {/* 標題 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.075 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="text-yellow-400" size={24} />
                  <h2 className="text-2xl font-zen font-bold text-gradient">
                    通過！
                  </h2>
                  <Sparkles className="text-yellow-400" size={24} />
                </div>

                {/* 文法名稱 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="my-4"
                >
                  <p className="text-indigo-900/60 text-sm mb-1">完成課程</p>
                  <p className="text-xl font-bold text-indigo-900">
                    {grammarPattern}
                  </p>
                </motion.div>

                {/* 獲得經驗值 */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.125, type: 'spring' }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6"
                >
                  <span className="text-green-500 font-bold text-lg">
                    +{expGained} EXP
                  </span>
                </motion.div>
              </motion.div>

              {/* 按鈕 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <button
                  onClick={onClose}
                  className="btn-primary w-full py-3"
                >
                  確認
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default GrammarPassModal
