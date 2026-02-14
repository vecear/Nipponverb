import type { CourseDefinition, UnitDefinition } from '../../../types/course'
import {
  u1Lessons, u2Lessons, u3Lessons, u4Lessons,
  u5Lessons, u6Lessons, u7Lessons, u8Lessons,
  u9Lessons, u10Lessons, u11Lessons, u12Lessons,
} from './lessons'

const units: UnitDefinition[] = [
  {
    id: 'n4_u1',
    order: 1,
    titleJp: '挨拶と人間関係',
    titleZh: '問候與人際',
    description: '學習授受表現、家族稱呼和日常人際關係詞彙',
    lessons: u1Lessons,
  },
  {
    id: 'n4_u2',
    order: 2,
    titleJp: '気持ちと健康',
    titleZh: '心情與健康',
    description: '學習情感表達、身體部位和健康相關詞彙',
    lessons: u2Lessons,
  },
  {
    id: 'n4_u3',
    order: 3,
    titleJp: '学校と教育',
    titleZh: '學校與教育',
    description: '學習條件句型、學校生活和教育相關詞彙',
    lessons: u3Lessons,
  },
  {
    id: 'n4_u4',
    order: 4,
    titleJp: '職場と社会',
    titleZh: '職場與社會',
    description: '學習義務許可句型、職場用語和社會制度詞彙',
    lessons: u4Lessons,
  },
  {
    id: 'n4_u5',
    order: 5,
    titleJp: '場所と交通',
    titleZh: '場所與交通',
    description: '學習變化表現、場所名稱和交通工具詞彙',
    lessons: u5Lessons,
  },
  {
    id: 'n4_u6',
    order: 6,
    titleJp: '住居と科学技術',
    titleZh: '住居與科技',
    description: '學習時間句型、住居設備和科技產品詞彙',
    lessons: u6Lessons,
  },
  {
    id: 'n4_u7',
    order: 7,
    titleJp: '食事と買い物',
    titleZh: '飲食與購物',
    description: '學習原因目的句型、飲食烹飪和購物詞彙',
    lessons: u7Lessons,
  },
  {
    id: 'n4_u8',
    order: 8,
    titleJp: '自然とレジャー',
    titleZh: '自然與休閒',
    description: '學習程度表現、自然天氣和休閒娛樂詞彙',
    lessons: u8Lessons,
  },
  {
    id: 'n4_u9',
    order: 9,
    titleJp: '動作と表現',
    titleZh: '動作與表達',
    description: '學習使役受身、動作動詞和表達方式',
    lessons: u9Lessons,
  },
  {
    id: 'n4_u10',
    order: 10,
    titleJp: '概念と副詞',
    titleZh: '概念與副詞',
    description: '學習助詞用法、傳聞表現和抽象概念副詞',
    lessons: u10Lessons,
  },
  {
    id: 'n4_u11',
    order: 11,
    titleJp: '敬語と感覚',
    titleZh: '敬語與感知',
    description: '學習敬語表現、感知動詞和正式場合用語',
    lessons: u11Lessons,
  },
  {
    id: 'n4_u12',
    order: 12,
    titleJp: '時間と総復習',
    titleZh: '時間與總複習',
    description: '學習時間表現、接續詞和綜合複習全課程',
    lessons: u12Lessons,
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
