# Claude Agent 工作交接文件

> 最後更新：2026-02-14
> 用途：讓新的 Claude Agent 讀取後能接續工作

---

## 一、專案概述

**Nipponverb** 是一個日語學習平台，技術棧：
- React 18 + TypeScript + Vite 5 + Tailwind CSS 3
- Firebase (Firestore) + Zustand 狀態管理
- 部署：Firebase Hosting

核心功能是**練習題系統**，包含以下類別：
- Gojuon（五十音）
- Kanji（漢字讀音）
- Grammar（文法填空）
- Vocab（詞彙）
- Verbs（動詞變化）
- Dates（日期/數字/時間/量詞）

---

## 二、已完成的工作（練習題標準化）

### Phase 1：題幹振假名去除（適配器層）

**已完成。** 所有題目在 runtime 會自動去除漢字振假名，符合 JLPT 風格。

- **新建**：`src/utils/furiganaUtils.ts`
  - `stripStemFurigana(text)`: 去除 `漢字{かんじ}` → `漢字`
  - 支援 `{!reading}` 強制保留語法（目前未使用）
- **已套用於**：
  - `src/utils/questionAdapters.ts` — 三個適配器 `unifiedToQuestion()`, `staticToQuestion()`, `datesToQuestion()` 的 `stem` 欄位
  - `src/data/gojuon.ts` — `generateGojuonForChar()` 的 stem
  - `src/data/kanji.ts` — `generateKanjiReadingForEntry()` 的 stem

### Phase 2：日期類詳解清理（16 檔，~800 題）

**已完成。** 三個階段的批量清理 + LLM 逐題審查。

問題描述：datesPractice/ 的詳解是中文文字但被加上錯誤的日文振假名（如 `正確{せいかく}`、`使用{しよう}`），部分混入日文助詞。

清理過程：
1. `scripts/cleanDatesExplanations.mjs` — 13,109 次替換（第一輪）
2. `scripts/cleanDatesPass2.mjs` — 2,762 次替換（第二輪）
3. `scripts/cleanDatesPass3.mjs` — 593 次替換（第三輪）
4. **LLM 逐題審查**（12 個並行子代理）— 逐題檢查所有 16 個資料檔
5. **最終修補** — 修正 longObjects.ts 中的中文量詞（支→本、根→本、條→本）、中文物品名的片假名翻譯標註、中文動詞的錯誤振假名

### Phase 3：五十音、漢字 explanation 欄位修正

**已完成。**

- `src/data/gojuon.ts` — explanation 從日文改為中文（如 `「あ」的讀音是「a」。`）
- `src/data/kanji.ts` — explanation 從日文改為中文（如 `「学校」的讀法是「がっこう」。`）

### Phase 4：日期發音題幹語言修正

**已完成。** 約 476 題。

- `scripts/fixPronunciationStems.mjs` — 將中文題幹改為日文
- Before: `stem: '「一」的正確讀音是？'`
- After: `stem: '「一」の正{ただ}しい読{よ}み方{かた}はどれですか。'`
- `stem_zh` 保留中文版本

### Phase 5：驗證

**已通過。**
- `npx tsc --noEmit` 無錯誤
- `npx vite build` 成功

---

## 三、振假名規則（當前生效）

### 題幹（stem）
- **不顯示**漢字振假名（由 `stripStemFurigana()` 在 runtime 去除）
- 資料檔保留原始振假名（可用於其他用途）
- 若需強制保留，使用 `{!reading}` 語法

### 詳解（explanation fields）
嚴格規則：**除非跟題目的理解有直接關係，否則不標示平假名。**

保留的情況：
- 被測試的日文詞彙讀音（如 `一{いち}`、`百{ひゃく}`、`一日{ついたち}`）
- 被對比的替代讀音（如 `一{ひと}つ` vs `一{いち}`）
- 選項中的正確/錯誤讀音解說

移除的情況：
- 中文語境詞的日文振假名（如 `正確{せいかく}` → `正確`）
- 中文物品名的片假名翻譯（如 `球棒{バット}` → `球棒`）
- 中文動詞的日文振假名（如 `打了{うちました}` → `打了`）
- 中文量詞的日文讀音（如 `七支{ななほん}` → 改為 `七本{ななほん}`）

---

## 四、關鍵檔案路徑

### 核心程式
| 檔案 | 說明 |
|------|------|
| `src/utils/furiganaUtils.ts` | `stripStemFurigana()` 工具函數 |
| `src/utils/questionAdapters.ts` | 三個適配器：`staticToQuestion`, `datesToQuestion`, `unifiedToQuestion` |
| `src/data/gojuon.ts` | 五十音題目生成器 `generateGojuonForChar()` |
| `src/data/kanji.ts` | 漢字讀音題目生成器 `generateKanjiReadingForEntry()` |
| `src/components/ExplanationPanel.tsx` | 詳解顯示面板（使用 FuriganaText 渲染）|
| `src/components/FuriganaText.tsx` | 振假名渲染組件（解析 `漢字{かんじ}` 格式）|
| `src/pages/Practice.tsx` | 練習頁面主組件 |
| `src/store/usePracticeStore.ts` | Zustand 練習狀態管理 |

### 資料檔（datesPractice，共 16 個）
| 目錄 | 檔案 |
|------|------|
| `src/data/questions/datesPractice/numbers/` | basic.ts, tens.ts, hundreds.ts, thousands.ts |
| `src/data/questions/datesPractice/timeDate/` | days.ts, hours.ts, minutes.ts, months.ts, weekdays.ts |
| `src/data/questions/datesPractice/counters/` | people.ts, longObjects.ts, flatObjects.ts, books.ts, smallAnimals.ts, generalObjects.ts, questionCounters.ts |

### 類型定義
| 檔案 | 說明 |
|------|------|
| `src/types/index.ts` | runtime `Question` 介面 |
| `src/data/questions/types.ts` | `StaticQuestion`, `UnifiedQuestion`, `StructuredExplanation` |
| `src/data/questions/datesPractice/types.ts` | `DatesPracticeQuestion` |

### 清理腳本（已執行，僅供參考）
| 檔案 | 說明 |
|------|------|
| `scripts/cleanDatesExplanations.mjs` | 第一輪清理（13,109 次替換）|
| `scripts/cleanDatesPass2.mjs` | 第二輪清理（2,762 次替換）|
| `scripts/cleanDatesPass3.mjs` | 第三輪清理（593 次替換）|
| `scripts/fixPronunciationStems.mjs` | 發音題幹中文→日文（476 題）|

---

## 五、DatesPracticeQuestion 資料結構

```typescript
interface DatesPracticeQuestion {
  id: string
  category: 'timeDate' | 'numbers' | 'counters'
  subcategory: string
  type: 'pronunciation' | 'sentence' | 'dialogue'
  isTrap: boolean
  stem: string           // 日文題幹（振假名會在 runtime 被去除）
  stem_zh: string        // 中文翻譯
  dialogue?: { speakerA: string; speakerB: string }
  options: Array<{
    text: string         // 選項文字（平假名）
    isCorrect: boolean
    reason: string       // 中文解說（可含日文詞彙振假名）
  }>
  correctIndex: number
  explanation: {
    correctRule: string          // 中文正解規則
    trapExplanation?: string     // 中文陷阱說明
    relatedRules?: string[]      // 相關規則
    furiganaNote?: string        // 振假名備註
  }
  sourceItem: {
    value: number
    kanji: string
    reading: string
  }
}
```

---

## 六、文法題庫擴充（已完成）

### 目標
將文法題庫從原本 15 題擴充到每個 JLPT 階段 505 題（N5-N1 共 2,525 題）。

### 題目來源
- 文法模式清單：`src/data/grammarList.ts`（1,167 個文法模式：N5:86, N4:213, N3:232, N2:271, N1:365）
- 題目設計遵照 JLPT 題型，大部分稍難於 JLPT 實際考題
- 難度分布：20% 基礎、60% 進階、20% 挑戰

### 最終結果（截至 2026-02-13）

| 階段 | 題數 | ID 範圍 | 狀態 |
|------|------|---------|------|
| N5 | 505 | g_n5_006 ~ g_n5_510 | 已完成 |
| N4 | 505 | g_n4_001 ~ g_n4_505 | 已完成 |
| N3 | 505 | g_n3_001 ~ g_n3_505 | 已完成 |
| N2 | 505 | g_n2_001 ~ g_n2_505 | 已完成 |
| N1 | 505 | g_n1_001 ~ g_n1_505 | 已完成 |

**合計：2,525 題**

### 檔案位置
| 檔案 | 說明 |
|------|------|
| `src/data/questions/grammar/n5.ts` | N5 文法題（export `grammarN5`） |
| `src/data/questions/grammar/n4.ts` | N4 文法題（export `grammarN4`） |
| `src/data/questions/grammar/n3.ts` | N3 文法題（export `grammarN3`） |
| `src/data/questions/grammar/n2.ts` | N2 文法題（export `grammarN2`） |
| `src/data/questions/grammar/n1.ts` | N1 文法題（export `grammarN1`） |
| `src/data/questions/grammar/index.ts` | Barrel export + `allGrammarQuestions` 合併陣列 |

### 整合方式
- `src/data/grammar.ts` 已移除原有 15 題內嵌題目
- 改為從 `./questions/grammar` 匯入 `allGrammarQuestions`
- 保留原有 Public API：`grammarQuestions`, `generateGrammarQuestion()`, `getGrammarQuestionBank()`, `getGrammarQuestionCount()`
- 所有 consumer（`questionBanks.ts`, `questionLookup.ts`, `jlpt-exams.ts`, `PracticeCategorySetup.tsx`）無需修改

### 題目格式
使用 `UnifiedQuestion` 介面（定義於 `src/data/questions/types.ts`），包含：
- `id`: `g_{level}_{三位數字}` 如 `g_n5_006`
- `category: 'grammar'`, `level: 'N5'|'N4'|'N3'|'N2'|'N1'`
- `tags`: 如 `['particle', 'topic']`
- `stem`: 日文題幹（含振假名 `漢字{かんじ}`），用 `___` 標示填空
- `stemZh`: 中文翻譯
- `options`: 4 個選項，每個含 `text` 和 `reason`（中文）
- `correctIndex`: 正確選項索引（0-based）
- `explanation`: 結構化詳解（`keyPoint`, `analysis`, `comparisons`, `commonMistakes`）

### 驗證結果
- `npx tsc --noEmit`：通過，無錯誤
- ID 唯一性檢查：無重複
- `npx vite build`：構建成功

---

## 七、單字題庫擴充（已完成）

### 目標
將單字題庫從 N5 ~1,200 題（舊 StaticQuestion 格式）+ N4/N3/N2 各 3 題佔位，擴充為每個單字 3 題（對應 JLPT 題型），全面使用 UnifiedQuestion 格式。

### 題目來源
- 原始單字檔案：`src/data/raw/n{x}_vocab*.ts`（VocabularyData 介面：word, reading, meaning, meaning_zh, level）
- 單字數：N5: 644, N4: 571, N3: 192, N2: 99（共 1,506 個單字）

### 三種 JLPT 題型（每個單字各一題）

| 類型 | 標籤 | 說明 | 難度 |
|------|------|------|------|
| 漢字読み / 表記 | `vocab_reading` | 給漢字問讀音；無漢字則問正確寫法 | 簡單 |
| 文脈規定 | `vocab_context` | 句子填空，選填正確詞彙 | 中等 |
| 用法・言い換え | `vocab_usage` | 測試正確含義理解 | 困難 |

ID 格式：`v_{level}_{三位數字}_{type}`（如 `v_n5_001_r`, `v_n5_001_c`, `v_n5_001_u`）

### 最終結果（截至 2026-02-14）

| 階段 | 單字數 | 題數 | 檔案 |
|------|--------|------|------|
| N5 | 643 | 1,929 | n5_part1.ts (675), n5_part2.ts (516), n5_part3.ts (738) |
| N4 | 567 | 1,701 | n4_part1.ts (579), n4_part2.ts (549), n4_part3.ts (573) |
| N3 | 191 | 573 | n3.ts |
| N2 | 99 | 297 | n2.ts |
| **合計** | **1,500** | **4,500** | 8 個資料檔 + index.ts |

### 生成方式
使用程式化生成腳本 `scripts/generateVocabQuestions.mjs`：
- 從原始單字檔案（`.ts`）以正則解析 VocabularyData
- 對每個單字自動判斷是否含漢字 / 片假名 / 純平假名，選擇對應題型模板
- 同級單字中智慧選取干擾項（distractors）
- 使用 seeded PRNG 確保可重現性
- 一次執行即生成所有 8 個資料檔 + barrel export

### 檔案位置
| 檔案 | 說明 |
|------|------|
| `src/data/questions/vocabulary/index.ts` | Barrel export + `allVocabQuestions` + `getVocabUnifiedBank()` |
| `src/data/questions/vocabulary/n5_part1.ts` | N5 單字 1-225（675 題） |
| `src/data/questions/vocabulary/n5_part2.ts` | N5 單字 226-397（516 題） |
| `src/data/questions/vocabulary/n5_part3.ts` | N5 單字 398-643（738 題） |
| `src/data/questions/vocabulary/n4_part1.ts` | N4 單字 1-193（579 題） |
| `src/data/questions/vocabulary/n4_part2.ts` | N4 單字 194-376（549 題） |
| `src/data/questions/vocabulary/n4_part3.ts` | N4 單字 377-567（573 題） |
| `src/data/questions/vocabulary/n3.ts` | N3 全部 191 字（573 題） |
| `src/data/questions/vocabulary/n2.ts` | N2 全部 99 字（297 題） |
| `scripts/generateVocabQuestions.mjs` | 生成腳本（可重新執行） |

### 整合方式
- `src/utils/questionBanks.ts`：新增 `getVocabUnifiedBank()` 函數
- `src/pages/Practice.tsx`：`generateQuestions()`, `startReview()`, `startSrsReview()` 三處均已修改
  - 優先使用 UnifiedQuestion 題庫（同 grammar 處理方式）
  - 若 unified bank 為空，fallback 至舊 StaticQuestion 題庫（`src/data/questions/vocab.ts`）
- 舊題庫 `src/data/questions/vocab.ts` 保留不刪除，作為 N1 或其他 fallback

### 驗證結果
- `npx tsc --noEmit`：通過，無錯誤
- `npx vite build`：構建成功

---

## 八、JLPT 結構化課程系統（已完成）

### 目標
建立引導式學習路徑，將現有單字與文法組織為有教學順序的課堂。目前完成 N5 課程（6 單元 25 堂課）。

### 架構
```
Course (JLPT N5)
├── Unit 1: 入門・自我介紹 (4 lessons)
├── Unit 2: 日常生活 (4 lessons)
├── Unit 3: 描述事物 (5 lessons)
├── Unit 4: 動作與順序 (4 lessons)
├── Unit 5: 許可・義務・理由 (5 lessons)
└── Unit 6: 溝通與複習 (3 lessons)
```

每堂課包含：~26 個單字、3-4 個文法摘要（連結到文法詳解頁）、5-7 行情境對話、10 題綜合測驗。

### 路由
| 路由 | 頁面 | 說明 |
|------|------|------|
| `/course` | CourseSelection | JLPT 等級選擇（N5 可用，N4-N1 Coming Soon） |
| `/course/:level` | CourseOverview | 單元與課堂列表 |
| `/course/:level/lesson/:lessonId` | LessonPage | 課堂頁面（學習→測驗→結果三階段） |

### 檔案結構
| 檔案 | 說明 |
|------|------|
| `src/types/course.ts` | CourseDefinition, UnitDefinition, LessonDefinition 等型別 |
| `src/data/courses/index.ts` | Barrel export + `getCourseByLevel()`, `getAvailableLevels()` |
| `src/data/courses/n5/index.ts` | N5 課程定義（動態計算 totalVocab/totalGrammar/totalLessons） |
| `src/data/courses/n5/lessons/index.ts` | 課堂 barrel export |
| `src/data/courses/n5/lessons/u1.ts` ~ `u6.ts` | 各單元課堂資料（含 vocab, grammar, dialogue, quiz） |
| `src/store/useCourseProgressStore.ts` | Zustand 課程進度 store（含 Firebase sync） |
| `src/pages/course/CourseSelection.tsx` | JLPT 等級選擇頁 |
| `src/pages/course/CourseOverview.tsx` | 課程總覽頁 |
| `src/pages/course/LessonPage.tsx` | 課堂頁（三階段：learning → quiz → results） |

### 測驗整合
- 測驗使用 `UnifiedQuestion` 格式，透過 `unifiedToQuestion()` 轉為 runtime `Question`
- 重用 `PracticeSession` 組件進行一題一答
- 測驗 ID 格式：`cq_n5_uX_lY_NNN`（共 250 題，無重複）
- 完成測驗後獎勵 80 EXP（透過 `handleCourseLessonComplete()`）
- 進度儲存至 `useCourseProgressStore`（Zustand persist + Firebase）

### 資料統計
| 項目 | 數量 |
|------|------|
| 課堂總數 | 25 |
| 單字總數 | 650 |
| 文法引用 | 80（對應 grammarList 中 85 個 N5 文法的 80 個） |
| 測驗題數 | 250 |
| 對話行數 | 168 |

### 首頁整合
- `src/data/courses.ts`：新增「JLPT 結構課程」卡片（排在第一位），導向 `/course`
- `src/i18n/locales/zh-TW.json`：新增 `courses.jlptCourse.title` / `description` 翻譯
- `src/types/progression.ts`：新增 `course_lesson_complete`（+80 EXP）、`course_unit_complete`（+200 EXP）、`course_complete`（+1000 EXP）事件
- `src/services/progressionService.ts`：新增 `handleCourseLessonComplete()`

### 擴展方式
新增其他 JLPT 等級只需在 `src/data/courses/` 下建立 `n4/`, `n3/` 等資料夾，結構與 `n5/` 完全一致。型別、store、組件、路由全部複用。

---

## 九、當前狀態

- **Git 分支**：main
- **文法題庫擴充及整合已完成**
- **單字題庫擴充及整合已完成**
- **JLPT N5 結構化課程已完成**
- **TypeScript 編譯**：通過
- **Vite 構建**：通過

---

## 十、已知問題 / 可能的後續工作

1. **Vite build 警告**：主 chunk 超過 500KB（~9,900KB），建議做 code-splitting
2. **practiceService.ts 動態導入警告**：同時被靜態和動態導入
3. **清理腳本**：`scripts/` 下的 .mjs 腳本已執行完畢，可以刪除
4. **Gojuon/Kanji explanation 中的 `explanation` 欄位**：已改為中文，但 `detailedExplanation.structured` 本就是中文，兩者一致
5. **N1 單字題庫**：尚未建立（目前無 N1 原始單字資料）
6. **JLPT N4-N1 課程**：課程基礎設施已就緒，只需建立各等級課堂資料
7. **5 個 N5 文法未納入課程**：`n5_no_desu`, `n5_no_ga_heta`, `n5_o_kudasai`, `n5_soshite`, `n5_wa_dou_desu_ka`（與其他文法功能重疊，可在未來課堂中補充）

---

## 十一、使用者偏好

- 語言：使用者以繁體中文溝通
- 工作風格：一次交代多個任務，不希望中途被打斷詢問，完成後再驗收
- 程式碼品質：重視語言正確性（中文/日文不混用）、振假名標註要有教學意義
- 不喜歡過度使用正則/腳本做批量替換，偏好 LLM 理解語境後逐題修正
