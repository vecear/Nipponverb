# Claude Agent 工作交接文件

> 最後更新：2026-02-12
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

## 六、當前狀態

- **Git 分支**：main
- **所有變更未 commit**（等待使用者確認後 commit）
- **TypeScript 編譯**：通過
- **Vite 構建**：通過
- **剩餘振假名**：~3,251 個，全部為合法的日文詞彙教學振假名

---

## 七、已知問題 / 可能的後續工作

1. **Vite build 警告**：主 chunk 超過 500KB（6,494KB），建議做 code-splitting
2. **practiceService.ts 動態導入警告**：同時被靜態和動態導入
3. **清理腳本**：`scripts/` 下的 4 個 .mjs 腳本已執行完畢，可以刪除
4. **Gojuon/Kanji explanation 中的 `explanation` 欄位**：已改為中文，但 `detailedExplanation.structured` 本就是中文，兩者一致

---

## 八、使用者偏好

- 語言：使用者以繁體中文溝通
- 工作風格：一次交代多個任務，不希望中途被打斷詢問，完成後再驗收
- 程式碼品質：重視語言正確性（中文/日文不混用）、振假名標註要有教學意義
- 不喜歡過度使用正則/腳本做批量替換，偏好 LLM 理解語境後逐題修正
