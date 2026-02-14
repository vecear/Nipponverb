import type { CourseDefinition, UnitDefinition } from '../../../types/course'
import { u1Lessons, u2Lessons, u3Lessons, u4Lessons, u5Lessons, u6Lessons } from './lessons'

const units: UnitDefinition[] = [
  {
    id: 'n5_u1',
    order: 1,
    titleJp: '始めましょう',
    titleZh: '入門・自我介紹',
    description: '學習基本問候、自我介紹、指示代名詞和存在表達',
    lessons: u1Lessons,
  },
  {
    id: 'n5_u2',
    order: 2,
    titleJp: '毎日の暮らし',
    titleZh: '日常生活',
    description: '學習日常動作、時間表達、購物和週末計畫',
    lessons: u2Lessons,
  },
  {
    id: 'n5_u3',
    order: 3,
    titleJp: '物事を描写する',
    titleZh: '描述事物',
    description: '學習形容詞、天氣、比較和表達意見',
    lessons: u3Lessons,
  },
  {
    id: 'n5_u4',
    order: 4,
    titleJp: '動作と順序',
    titleZh: '動作與順序',
    description: '學習請求、進行式、交通和過去經驗',
    lessons: u4Lessons,
  },
  {
    id: 'n5_u5',
    order: 5,
    titleJp: '許可・義務・理由',
    titleZh: '許可・義務・理由',
    description: '學習許可、義務、原因和轉折表達',
    lessons: u5Lessons,
  },
  {
    id: 'n5_u6',
    order: 6,
    titleJp: 'コミュニケーション',
    titleZh: '溝通與複習',
    description: '學習問路、點餐和學習方法，總複習全課程',
    lessons: u6Lessons,
  },
]

const totalLessons = units.reduce((sum, u) => sum + u.lessons.length, 0)
const totalVocab = units.reduce((sum, u) => sum + u.lessons.reduce((s, l) => s + l.vocabulary.length, 0), 0)
const totalGrammar = units.reduce((sum, u) => sum + u.lessons.reduce((s, l) => s + l.grammarSummaries.length, 0), 0)

export const n5Course: CourseDefinition = {
  id: 'jlpt_n5',
  level: 'N5',
  titleJp: 'JLPT N5 コース',
  titleZh: 'JLPT N5 課程',
  description: '從零開始學日語。涵蓋 N5 全部單字與文法，透過主題式課堂循序漸進學習。',
  units,
  totalVocab,
  totalGrammar,
  totalLessons,
}
