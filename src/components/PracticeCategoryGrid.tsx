import { useTranslation } from 'react-i18next'
import { PRACTICE_ICONS, ILLUSTRATIONS } from '../config/assets'

interface CategoryMode {
  id: string
  title: string
  description: string
  icon: string
  color: string
  image?: string
}

interface PracticeCategoryGridProps {
  onSelectCategory: (categoryId: string) => void
}

const PracticeCategoryGrid = ({ onSelectCategory }: PracticeCategoryGridProps) => {
  const { t } = useTranslation()

  const modes: CategoryMode[] = [
    {
      id: 'gojuon',
      title: t('practice.categories.gojuon.title'),
      description: t('practice.categories.gojuon.description'),
      icon: 'あア',
      color: 'from-green-500 to-teal-500',
      image: PRACTICE_ICONS.gojuon,
    },
    {
      id: 'verbs',
      title: t('practice.categories.verbs.title'),
      description: t('practice.categories.verbs.description'),
      icon: '✍️',
      color: 'from-blue-500 to-cyan-500',
      image: PRACTICE_ICONS.verbs,
    },
    {
      id: 'grammar',
      title: t('practice.categories.grammar.title'),
      description: t('practice.categories.grammar.description'),
      icon: '📖',
      color: 'from-purple-500 to-pink-500',
      image: PRACTICE_ICONS.grammar,
    },
    {
      id: 'kanji',
      title: t('practice.categories.kanji.title'),
      description: t('practice.categories.kanji.description'),
      icon: '漢',
      color: 'from-orange-500 to-red-500',
      image: PRACTICE_ICONS.kanji,
    },
    {
      id: 'vocabulary',
      title: t('practice.categories.vocabulary.title'),
      description: t('practice.categories.vocabulary.description'),
      icon: '🔤',
      color: 'from-yellow-400 to-orange-500',
      image: PRACTICE_ICONS.vocabulary,
    },
    {
      id: 'dates',
      title: t('practice.categories.dates.title'),
      description: t('practice.categories.dates.description'),
      icon: '📅',
      color: 'from-emerald-500 to-cyan-500',
      image: PRACTICE_ICONS.dates,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Studying Scene Header */}
      <div className="relative overflow-hidden rounded-lg mb-6">
        <div className="absolute inset-0 z-0">
          <img
            src={ILLUSTRATIONS.studying}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-washi via-washi/80 to-transparent" />
        </div>
        <div className="relative z-10 py-8 px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-zen font-bold text-wave-deep mb-4">{t('practice.title')}</h1>
          <p className="text-sumi-faded">{t('practice.selectCategory')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {modes.map((mode) => (
          <div
            key={mode.id}
            onClick={() => onSelectCategory(mode.id)}
            className="card-interactive p-4 group"
          >
            <div className="flex items-center md:block md:text-center space-x-4 md:space-x-0 cursor-pointer">
              <div className={`w-16 h-16 md:w-16 md:h-16 bg-gradient-to-br ${mode.color} flex items-center justify-center text-3xl shadow-ukiyo group-hover:scale-110 transition-transform md:mx-auto md:mb-3 overflow-hidden`}>
                {mode.image ? (
                  <img
                    src={mode.image}
                    alt={mode.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-3xl">${mode.icon}</span>`
                    }}
                  />
                ) : (
                  <span>{mode.icon}</span>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-wave-deep group-hover:text-vermilion transition-colors">{mode.title}</h3>
                <p className="text-sumi-faded text-sm line-clamp-2 md:line-clamp-none">{mode.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PracticeCategoryGrid
