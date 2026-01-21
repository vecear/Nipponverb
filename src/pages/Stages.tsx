import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Stages = () => {
  const { t } = useTranslation()
  const stages = [
    {
      id: '1',
      title: t('stages.stage1.title'),
      description: t('stages.stage1.description'),
      difficulty: t('stages.difficulty.beginner'),
      locked: false,
      completed: true,
    },
    {
      id: '2',
      title: t('stages.stage2.title'),
      description: t('stages.stage2.description'),
      difficulty: t('stages.difficulty.beginner'),
      locked: false,
      completed: true,
    },
    {
      id: '3',
      title: t('stages.stage3.title'),
      description: t('stages.stage3.description'),
      difficulty: t('stages.difficulty.intermediate'),
      locked: false,
      completed: false,
    },
    {
      id: '4',
      title: t('stages.stage4.title'),
      description: t('stages.stage4.description'),
      difficulty: t('stages.difficulty.advanced'),
      locked: true,
      completed: false,
    },
    {
      id: '5',
      title: t('stages.stage5.title'),
      description: t('stages.stage5.description'),
      difficulty: t('stages.difficulty.intermediate'),
      locked: true,
      completed: false,
    },
    {
      id: '6',
      title: t('stages.stage6.title'),
      description: t('stages.stage6.description'),
      difficulty: t('stages.difficulty.beginner'),
      locked: true,
      completed: false,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    const beginner = t('stages.difficulty.beginner')
    const intermediate = t('stages.difficulty.intermediate')
    const advanced = t('stages.difficulty.advanced')

    switch (difficulty) {
      case beginner:
        return 'text-green-400'
      case intermediate:
        return 'text-yellow-400'
      case advanced:
        return 'text-red-400'
      default:
        return 'text-white'
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-zen font-bold mb-4 text-gradient">
          {t('stages.title')}
        </h1>
        <p className="text-xl text-white/60">
          {t('stages.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`card-interactive relative overflow-hidden ${
              stage.locked ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {stage.locked && (
              <div className="absolute top-4 right-4 text-3xl">🔒</div>
            )}
            {stage.completed && (
              <div className="absolute top-4 right-4 text-3xl">✅</div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-zen font-bold mb-2">
                  {stage.title}
                </h3>
                <p className={`text-sm font-semibold ${getDifficultyColor(stage.difficulty)}`}>
                  {stage.difficulty}
                </p>
              </div>

              <p className="text-white/60">{stage.description}</p>

              <button
                disabled={stage.locked}
                className={`w-full ${
                  stage.locked
                    ? 'btn-secondary opacity-50 cursor-not-allowed'
                    : stage.completed
                    ? 'btn-secondary'
                    : 'btn-primary'
                }`}
              >
                {stage.locked
                  ? t('stages.locked')
                  : stage.completed
                  ? t('stages.playAgain')
                  : t('stages.startStage')}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="card mt-12"
      >
        <h3 className="text-2xl font-zen font-bold mb-4">{t('stages.howItWorks.title')}</h3>
        <div className="space-y-4 text-white/80">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">🎬</div>
            <div>
              <h4 className="font-semibold mb-1">{t('stages.howItWorks.step1Title')}</h4>
              <p className="text-white/60">
                {t('stages.howItWorks.step1Description')}
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-3xl">❓</div>
            <div>
              <h4 className="font-semibold mb-1">{t('stages.howItWorks.step2Title')}</h4>
              <p className="text-white/60">
                {t('stages.howItWorks.step2Description')}
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-3xl">🏆</div>
            <div>
              <h4 className="font-semibold mb-1">{t('stages.howItWorks.step3Title')}</h4>
              <p className="text-white/60">
                {t('stages.howItWorks.step3Description')}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Stages
