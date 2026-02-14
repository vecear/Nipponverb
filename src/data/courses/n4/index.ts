import type { CourseDefinition, UnitDefinition } from '../../../types/course'
import { u1Lessons, u2Lessons, u3Lessons, u4Lessons, u5Lessons, u6Lessons } from './lessons'

const units: UnitDefinition[] = [
  {
    id: 'n4_u1',
    order: 1,
    titleJp: '日常と人間関係',
    titleZh: '日常生活與人際關係',
    description: '學習授受表現、家族稱呼、情感表達和健康相關詞彙',
    lessons: u1Lessons,
  },
  {
    id: 'n4_u2',
    order: 2,
    titleJp: '学校と職場',
    titleZh: '學校與職場',
    description: '學習條件句型、學校生活、職場用語和社會制度詞彙',
    lessons: u2Lessons,
  },
  {
    id: 'n4_u3',
    order: 3,
    titleJp: '場所と交通',
    titleZh: '場所與交通',
    description: '學習變化表現、場所名稱、交通工具和住居設備詞彙',
    lessons: u3Lessons,
  },
  {
    id: 'n4_u4',
    order: 4,
    titleJp: '食事と自然',
    titleZh: '飲食購物與自然',
    description: '學習原因目的句型、飲食烹飪、購物和自然天氣詞彙',
    lessons: u4Lessons,
  },
  {
    id: 'n4_u5',
    order: 5,
    titleJp: '動作と表現',
    titleZh: '動作與表達',
    description: '學習使役受身、動作動詞、抽象概念和副詞表達',
    lessons: u5Lessons,
  },
  {
    id: 'n4_u6',
    order: 6,
    titleJp: '敬語と総復習',
    titleZh: '敬語與總複習',
    description: '學習敬語表現、感知動詞和綜合複習全課程',
    lessons: u6Lessons,
  },
]

const totalLessons = units.reduce((sum, u) => sum + u.lessons.length, 0)
const totalVocab = units.reduce((sum, u) => sum + u.lessons.reduce((s, l) => s + l.vocabulary.length, 0), 0)
const totalGrammar = units.reduce((sum, u) => sum + u.lessons.reduce((s, l) => s + l.grammarSummaries.length, 0), 0)

export const n4Course: CourseDefinition = {
  id: 'jlpt_n4',
  level: 'N4',
  titleJp: 'JLPT N4 コース',
  titleZh: 'JLPT N4 課程',
  description: '進階日語學習。涵蓋 N4 全部單字與文法，透過主題式課堂循序漸進提升能力。',
  units,
  totalVocab,
  totalGrammar,
  totalLessons,
}
