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
import onmyojiMaleImg from '../assets/characters/jobs/onmyoji_male.png'
import mikoFemaleImg from '../assets/characters/jobs/miko_female.png'
import ryorininMaleImg from '../assets/characters/jobs/ryorinin_male.png'
import ryorininFemaleImg from '../assets/characters/jobs/ryorinin_female.png'
import hokanMaleImg from '../assets/characters/jobs/hokan_male.png'
import geigiFemaleImg from '../assets/characters/jobs/geigi_female.png'

// 職業階段角色 (Stage 1)
import doshinStage1MaleImg from '../assets/characters/stages/doshin_stage1_male.png'
import doshinStage1FemaleImg from '../assets/characters/stages/doshin_stage1_female.png'
import yakushaStage1MaleImg from '../assets/characters/stages/yakusha_stage1_male.png'
import yakushaStage1FemaleImg from '../assets/characters/stages/yakusha_stage1_female.png'
import ukiyoeshiStage1MaleImg from '../assets/characters/stages/ukiyoeshi_stage1_male.png'
import ukiyoeshiStage1FemaleImg from '../assets/characters/stages/ukiyoeshi_stage1_female.png'
import shoninStage1MaleImg from '../assets/characters/stages/shonin_stage1_male.png'
import shoninStage1FemaleImg from '../assets/characters/stages/shonin_stage1_female.png'
import gakushaStage1MaleImg from '../assets/characters/stages/gakusha_stage1_male.png'
import gakushaStage1FemaleImg from '../assets/characters/stages/gakusha_stage1_female.png'
import onmyojiStage1MaleImg from '../assets/characters/stages/onmyoji_stage1_male.png'
import mikoStage1FemaleImg from '../assets/characters/stages/miko_stage1_female.png'
import ryorininStage1MaleImg from '../assets/characters/stages/ryorinin_stage1_male.png'
import ryorininStage1FemaleImg from '../assets/characters/stages/ryorinin_stage1_female.png'
import hokanStage1MaleImg from '../assets/characters/stages/hokan_stage1_male.png'
import geigiStage1FemaleImg from '../assets/characters/stages/geigi_stage1_female.png'

// 職業階段角色 (Stage 2)
import doshinStage2MaleImg from '../assets/characters/stages/doshin_stage2_male.png'
import doshinStage2FemaleImg from '../assets/characters/stages/doshin_stage2_female.png'
import yakushaStage2MaleImg from '../assets/characters/stages/yakusha_stage2_male.png'
import yakushaStage2FemaleImg from '../assets/characters/stages/yakusha_stage2_female.png'
import ukiyoeshiStage2MaleImg from '../assets/characters/stages/ukiyoeshi_stage2_male.png'
import ukiyoeshiStage2FemaleImg from '../assets/characters/stages/ukiyoeshi_stage2_female.png'
import shoninStage2MaleImg from '../assets/characters/stages/shonin_stage2_male.png'
import shoninStage2FemaleImg from '../assets/characters/stages/shonin_stage2_female.png'
import gakushaStage2MaleImg from '../assets/characters/stages/gakusha_stage2_male.png'
import gakushaStage2FemaleImg from '../assets/characters/stages/gakusha_stage2_female.png'
import onmyojiStage2MaleImg from '../assets/characters/stages/onmyoji_stage2_male.png'
import mikoStage2FemaleImg from '../assets/characters/stages/miko_stage2_female.png'
import ryorininStage2MaleImg from '../assets/characters/stages/ryorinin_stage2_male.png'
import ryorininStage2FemaleImg from '../assets/characters/stages/ryorinin_stage2_female.png'
import hokanStage2MaleImg from '../assets/characters/stages/hokan_stage2_male.png'
import geigiStage2FemaleImg from '../assets/characters/stages/geigi_stage2_female.png'
import practiceVocabularyImg from '../assets/icons/practice/practice-vocabulary.png'
import practiceDatesImg from '../assets/icons/practice/practice-dates.png'

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
  vocabulary: practiceVocabularyImg,
  dates: practiceDatesImg,
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
  onmyoji: {
    male: onmyojiMaleImg,
    female: mikoFemaleImg, // 女性版本使用巫女
  },
  ryorinin: {
    male: ryorininMaleImg,
    female: ryorininFemaleImg,
  },
  hokan: {
    male: hokanMaleImg,
    female: geigiFemaleImg, // 女性版本使用芸妓
  },
}

// ============================================
// 職業階段角色圖片
// 命名規則: {jobId}_stage{1-10}_{gender}.png
// ============================================
type StageImages = {
  [stage: number]: {
    male?: string
    female?: string
  }
}

export const JOB_STAGE_CHARACTERS: Record<string, StageImages> = {
  doshin: {
    1: { male: doshinStage1MaleImg, female: doshinStage1FemaleImg },
    2: { male: doshinStage2MaleImg, female: doshinStage2FemaleImg },
  },
  yakusha: {
    1: { male: yakushaStage1MaleImg, female: yakushaStage1FemaleImg },
    2: { male: yakushaStage2MaleImg, female: yakushaStage2FemaleImg },
  },
  ukiyoeshi: {
    1: { male: ukiyoeshiStage1MaleImg, female: ukiyoeshiStage1FemaleImg },
    2: { male: ukiyoeshiStage2MaleImg, female: ukiyoeshiStage2FemaleImg },
  },
  shonin: {
    1: { male: shoninStage1MaleImg, female: shoninStage1FemaleImg },
    2: { male: shoninStage2MaleImg, female: shoninStage2FemaleImg },
  },
  gakusha: {
    1: { male: gakushaStage1MaleImg, female: gakushaStage1FemaleImg },
    2: { male: gakushaStage2MaleImg, female: gakushaStage2FemaleImg },
  },
  onmyoji: {
    1: { male: onmyojiStage1MaleImg, female: mikoStage1FemaleImg },
    2: { male: onmyojiStage2MaleImg, female: mikoStage2FemaleImg },
  },
  ryorinin: {
    1: { male: ryorininStage1MaleImg, female: ryorininStage1FemaleImg },
    2: { male: ryorininStage2MaleImg, female: ryorininStage2FemaleImg },
  },
  hokan: {
    1: { male: hokanStage1MaleImg, female: geigiStage1FemaleImg },
    2: { male: hokanStage2MaleImg, female: geigiStage2FemaleImg },
  },
}

// 取得職業階段角色圖片
export const getJobStageCharacter = (
  jobId: string,
  stage: number,
  gender: 'male' | 'female'
): string | null => {
  const jobStages = JOB_STAGE_CHARACTERS[jobId]
  if (!jobStages) return null

  const stageImages = jobStages[stage]
  if (!stageImages) return null

  return stageImages[gender] || null
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
// 輔助函數：根據等級取得階段編號
// ============================================
const getStageFromLevel = (level: number): number => {
  if (level < 5) return 0
  if (level < 15) return 1
  if (level < 25) return 2
  if (level < 35) return 3
  if (level < 45) return 4
  if (level < 55) return 5
  if (level < 65) return 6
  if (level < 75) return 7
  if (level < 85) return 8
  if (level < 95) return 9
  return 10
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

  // 計算當前階段
  const stage = getStageFromLevel(level)

  // 嘗試取得階段圖片
  const stageImage = getJobStageCharacter(jobId, stage, gender)
  if (stageImage) {
    return stageImage
  }

  // 後備：使用職業基礎圖片
  const jobCharacters = JOB_CHARACTERS[jobId]
  if (jobCharacters) {
    return jobCharacters[gender]
  }

  // 最終後備：使用初心者圖片
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
    dates: PRACTICE_ICONS.dates,
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
