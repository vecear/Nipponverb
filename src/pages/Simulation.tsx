import { useState } from 'react'
import { motion } from 'framer-motion'

const Simulation = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const levels = [
    {
      level: 'N5',
      description: 'Basic Understanding',
      timeLimit: 105,
      sections: ['Vocabulary', 'Grammar', 'Reading'],
    },
    {
      level: 'N4',
      description: 'Elementary Understanding',
      timeLimit: 125,
      sections: ['Vocabulary', 'Grammar', 'Reading'],
    },
    {
      level: 'N3',
      description: 'Intermediate Understanding',
      timeLimit: 140,
      sections: ['Vocabulary', 'Grammar', 'Reading'],
    },
    {
      level: 'N2',
      description: 'Advanced Understanding',
      timeLimit: 155,
      sections: ['Vocabulary', 'Grammar', 'Reading'],
    },
    {
      level: 'N1',
      description: 'Expert Understanding',
      timeLimit: 170,
      sections: ['Vocabulary', 'Grammar', 'Reading'],
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
          JLPT Simulation
        </h1>
        <p className="text-xl text-white/60">
          Take a realistic mock exam to assess your Japanese proficiency
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
                <p className="text-sm font-semibold text-white/80">Sections:</p>
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
                Start Exam
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
        <h3 className="text-2xl font-zen font-bold mb-4">Exam Guidelines</h3>
        <ul className="space-y-3 text-white/80">
          <li className="flex items-start space-x-3">
            <span className="text-sakura-pink mt-1">•</span>
            <span>No feedback during the exam - results shown at the end</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-sakura-pink mt-1">•</span>
            <span>Strict time limit based on official JLPT standards</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-sakura-pink mt-1">•</span>
            <span>Questions pulled from authentic corpus data</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-sakura-pink mt-1">•</span>
            <span>Detailed performance analysis after completion</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Simulation
