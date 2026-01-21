import { motion } from 'framer-motion'

const Stages = () => {
  const stages = [
    {
      id: '1',
      title: 'At the Station',
      description: 'Learn how to buy tickets and navigate transportation',
      difficulty: 'Beginner',
      locked: false,
      completed: true,
    },
    {
      id: '2',
      title: 'At a Restaurant',
      description: 'Order food and interact with staff politely',
      difficulty: 'Beginner',
      locked: false,
      completed: true,
    },
    {
      id: '3',
      title: 'Shopping for Clothes',
      description: 'Ask about sizes, colors, and prices',
      difficulty: 'Intermediate',
      locked: false,
      completed: false,
    },
    {
      id: '4',
      title: 'Job Interview',
      description: 'Master formal business Japanese',
      difficulty: 'Advanced',
      locked: true,
      completed: false,
    },
    {
      id: '5',
      title: 'Visiting a Doctor',
      description: 'Describe symptoms and understand medical advice',
      difficulty: 'Intermediate',
      locked: true,
      completed: false,
    },
    {
      id: '6',
      title: 'Making Friends',
      description: 'Casual conversation and social interactions',
      difficulty: 'Beginner',
      locked: true,
      completed: false,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-400'
      case 'Intermediate':
        return 'text-yellow-400'
      case 'Advanced':
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
          Scenario Stages
        </h1>
        <p className="text-xl text-white/60">
          Learn Japanese through real-world conversations and situations
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
                  ? 'Locked'
                  : stage.completed
                  ? 'Play Again'
                  : 'Start Stage'}
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
        <h3 className="text-2xl font-zen font-bold mb-4">How Stages Work</h3>
        <div className="space-y-4 text-white/80">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">🎬</div>
            <div>
              <h4 className="font-semibold mb-1">Watch & Listen</h4>
              <p className="text-white/60">
                Experience authentic conversations from real Japanese corpus data
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-3xl">❓</div>
            <div>
              <h4 className="font-semibold mb-1">Answer Questions</h4>
              <p className="text-white/60">
                Test your understanding of context, nuance, and vocabulary
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-3xl">🏆</div>
            <div>
              <h4 className="font-semibold mb-1">Unlock New Stages</h4>
              <p className="text-white/60">
                Complete stages to unlock more challenging scenarios
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Stages
