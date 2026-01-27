/**
 * 圖片資源路徑配置
 * 基於浮世繪風格設計系統
 *
 * 圖片生成 Prompts 請參考: docs/image-prompts.md
 */

// ============================================
// UI 元素 imports (使用 Vite 的靜態資源處理)
// ============================================
import hankoStampImg from '../assets/ui/hanko-stamp.png'

// ============================================
// 角色圖片 imports
// ============================================
// 初心者
import noviceMaleImg from '../assets/characters/novice_male.png'
import noviceFemaleImg from '../assets/characters/novice_female.png'

// 職業角色
import doshinMaleImg from '../assets/characters/jobs/doshin_male.png'
import doshinFemaleImg from '../assets/characters/jobs/doshin_female.png'
import yakushaMaleImg from '../assets/characters/jobs/yakusha_male.png'
import yakushaFemaleImg from '../assets/characters/jobs/yakusha_female.png'
import ukiyoeshiMaleImg from '../assets/characters/jobs/ukiyoeshi_male.png'
import ukiyoeshiFemaleImg from '../assets/characters/jobs/ukiyoeshi_female.png'
import shoninMaleImg from '../assets/characters/jobs/shonin_male.png'
import shoninFemaleImg from '../assets/characters/jobs/shonin_female.png'
import gakushaMaleImg from '../assets/characters/jobs/gakusha_male.png'
import gakushaFemaleImg from '../assets/characters/jobs/gakusha_female.png'

// ============================================
// 品牌素材
// ============================================
export const BRAND = {
  logo: '/assets/brand/logo.png',
  logoSvg: '/assets/brand/logo.svg',
  favicon: '/favicon.ico',
  favicon32: '/favicon-32x32.png',
  favicon16: '/favicon-16x16.png',
  ogImage: '/og-image.png',
}

// ============================================
// 紋理與背景
// ============================================
export const TEXTURES = {
  washi: '/assets/textures/washi-texture.png',
  wavePattern: '/assets/textures/wave-pattern.png',
}

// ============================================
// 課程分類圖示
// ============================================
export const COURSE_ICONS = {
  n5: '/assets/icons/courses/course-n5.png',
  n4: '/assets/icons/courses/course-n4.png',
  n3: '/assets/icons/courses/course-n3.png',
  n2: '/assets/icons/courses/course-n2.png',
  n1: '/assets/icons/courses/course-n1.png',
}

// ============================================
// 練習類別圖示
// ============================================
export const PRACTICE_ICONS = {
  gojuon: '/assets/icons/practice/practice-gojuon.png',
  verbs: '/assets/icons/practice/practice-verbs.png',
  grammar: '/assets/icons/practice/practice-grammar.png',
  kanji: '/assets/icons/practice/practice-kanji.png',
  vocabulary: '/assets/icons/practice/practice-vocabulary.png',
}

// ============================================
// 課程列表圖示 (對應 courses.ts)
// ============================================
export const COURSE_LIST_ICONS = {
  verbs: '/assets/icons/practice/practice-verbs.png',
  vocabulary: '/assets/icons/practice/practice-vocabulary.png',
  grammar: '/assets/icons/practice/practice-grammar.png',
  idioms: '/assets/icons/courses/course-idioms.png',
  dateCounters: '/assets/icons/courses/course-date-counters.png',
}

// ============================================
// 初心者角色圖片
// ============================================
export const NOVICE_CHARACTERS = {
  male: noviceMaleImg,
  female: noviceFemaleImg,
}

// ============================================
// 職業角色圖片
// ============================================
export const JOB_CHARACTERS: Record<string, { male: string; female: string }> = {
  doshin: {
    male: doshinMaleImg,
    female: doshinFemaleImg,
  },
  yakusha: {
    male: yakushaMaleImg,
    female: yakushaFemaleImg,
  },
  ukiyoeshi: {
    male: ukiyoeshiMaleImg,
    female: ukiyoeshiFemaleImg,
  },
  shonin: {
    male: shoninMaleImg,
    female: shoninFemaleImg,
  },
  gakusha: {
    male: gakushaMaleImg,
    female: gakushaFemaleImg,
  },
  // 以下職業圖片尚未加入 src/assets，暫時使用初心者圖片作為 fallback
  onmyoji: {
    male: noviceMaleImg,
    female: noviceFemaleImg,
  },
  ryorinin: {
    male: noviceMaleImg,
    female: noviceFemaleImg,
  },
  hokan: {
    male: noviceMaleImg,
    female: noviceFemaleImg,
  },
}

// ============================================
// 職業階段角色圖片
// 命名規則: {jobId}_stage{1-10}_{gender}.png
// ============================================
export const getJobStageCharacter = (
  jobId: string,
  stage: number,
  gender: 'male' | 'female'
): string => {
  // 特殊處理幇間的女性版本
  let actualJobId = jobId
  if (gender === 'female' && jobId === 'hokan') {
    actualJobId = 'geigi'
  }

  return `/assets/characters/stages/${actualJobId}_stage${stage}_${gender}.png`
}

// ============================================
// UI 裝飾元素
// ============================================
export const UI_ELEMENTS = {
  hankoStamp: hankoStampImg,
  badgeFrame: '/assets/ui/badge-frame.png',
  levelUpEffect: '/assets/ui/level-up-effect.png',
  expBarDecoration: '/assets/ui/exp-bar-decoration.png',
}

// ============================================
// 情境插圖
// ============================================
export const ILLUSTRATIONS = {
  welcome: '/assets/illustrations/welcome-scene.png',
  studying: '/assets/illustrations/studying-scene.png',
  achievement: '/assets/illustrations/achievement-scene.png',
}

// ============================================
// 舊版圖示 (向後相容)
// ============================================
export const LEGACY_ICONS = {
  brush: '/assets/icons/brush_sumi_e.png',
  sword: '/assets/icons/sword_sumi_e.png',
  lantern: '/assets/icons/lantern_sumi_e.png',
  book: '/assets/icons/book_sumi_e.png',
  torii: '/assets/icons/torii_sumi_e.png',
  tea: '/assets/icons/tea_sumi_e.png',
  abacus: '/assets/icons/abacus_sumi_e.png',
}

// ============================================
// 輔助函數：取得角色圖片路徑
// ============================================
export const getCharacterImage = (
  level: number,
  jobId: string | null,
  gender: 'male' | 'female'
): string => {
  // 等級 0-4 或未選擇職業：使用初心者圖片
  if (level < 5 || !jobId) {
    return NOVICE_CHARACTERS[gender]
  }

  // 使用職業圖片
  const jobCharacters = JOB_CHARACTERS[jobId]
  if (jobCharacters) {
    return jobCharacters[gender]
  }

  // 後備：使用初心者圖片
  return NOVICE_CHARACTERS[gender]
}

// ============================================
// 輔助函數：取得職業基礎圖片路徑（不需要 level 參數）
// ============================================
export const getJobBaseImage = (
  jobId: string | null,
  gender: 'male' | 'female'
): string => {
  if (!jobId) {
    return NOVICE_CHARACTERS[gender]
  }

  const jobCharacters = JOB_CHARACTERS[jobId]
  if (jobCharacters) {
    return jobCharacters[gender]
  }

  return NOVICE_CHARACTERS[gender]
}

// ============================================
// 輔助函數：取得練習類別圖示
// ============================================
export const getPracticeIcon = (category: string): string | null => {
  const icons: Record<string, string> = {
    gojuon: PRACTICE_ICONS.gojuon,
    verbs: PRACTICE_ICONS.verbs,
    grammar: PRACTICE_ICONS.grammar,
    kanji: PRACTICE_ICONS.kanji,
    vocabulary: PRACTICE_ICONS.vocabulary,
  }
  return icons[category] || null
}

// ============================================
// 輔助函數：取得課程等級圖示
// ============================================
export const getCourseIcon = (level: string): string | null => {
  const icons: Record<string, string> = {
    N5: COURSE_ICONS.n5,
    N4: COURSE_ICONS.n4,
    N3: COURSE_ICONS.n3,
    N2: COURSE_ICONS.n2,
    N1: COURSE_ICONS.n1,
  }
  return icons[level] || null
}
