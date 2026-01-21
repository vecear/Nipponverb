import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Simulation = () => {
  const { t } = useTranslation()
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const levels = [
    {
      level: 'N5',
      description: t('simulation.levels.n5'),
      timeLimit: 105,
      sections: [t('simulation.sections.vocabulary'), t('simulation.sections.grammar'), t('simulation.sections.reading')],
    },
    {
      level: 'N4',
      description: t('simulation.levels.n4'),
      timeLimit: 125,
      sections: [t('simulation.sections.vocabulary'), t('simulation.sections.grammar'), t('simulation.sections.reading')],
    },
    {
      level: 'N3',
      description: t('simulation.levels.n3'),
      timeLimit: 140,
      sections: [t('simulation.sections.vocabulary'), t('simulation.sections.grammar'), t('simulation.sections.reading')],
    },
    {
      level: 'N2',
      description: t('simulation.levels.n2'),
      timeLimit: 155,
      sections: [t('simulation.sections.vocabulary'), t('simulation.sections.grammar'), t('simulation.sections.reading')],
    },
    {
      level: 'N1',
      description: t('simulation.levels.n1'),
      timeLimit: 170,
      sections: [t('simulation.sections.vocabulary'), t('simulation.sections.grammar'), t('simulation.sections.reading')],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-zen font-bold mb-4 text-gradient">
          {t('simulation.title')}
        </h1>
        <p className="text-xl text-white/60">
          {t('simulation.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((exam, index) => (
          <motion.div
            key={exam.level}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card-interactive"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">{exam.level}</h2>
                <div className="px-3 py-1 bg-sakura-pink/20 text-sakura-pink rounded-full text-sm">
                  {exam.timeLimit} min
                </div>
              </div>

              <p className="text-white/60">{exam.description}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-white/80">{t('simulation.sectionsLabel')}:</p>
                <div className="flex flex-wrap gap-2">
                  {exam.sections.map((section) => (
                    <span
                      key={section}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {section}
                    </span>
                  ))}
                </div>
              </div>

              <button className="btn-primary w-full mt-4">
                {t('simulation.startExam')}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="card mt-12"
      >
        <h3 className="text-2xl font-zen font-bold mb-4">{t('simulation.guidelinesTitle')}</h3>
        <ul className="space-y-3 text-white/80">
          <li className="flex items-start space-x-3">
            <span className="text-sakura-pink mt-1">•</span>
            <span>{t('simulation.guideline1')}</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-sakura-pink mt-1">•</span>
            <span>{t('simulation.guideline2')}</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-sakura-pink mt-1">•</span>
            <span>{t('simulation.guideline3')}</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-sakura-pink mt-1">•</span>
            <span>{t('simulation.guideline4')}</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Simulation
