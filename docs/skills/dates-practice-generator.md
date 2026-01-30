# 日期及數量詞練習題建立計畫

---

# SKILL：日期及數量詞練習題生成器

## Skill 概述

此 Skill 用於指導 Agent 依據 `src/data/dates_and_counters_data.ts` 的資料來源，為 `src/pages/DatesPractice.tsx` 生成完整的練習題目。

## 核心規則

### 1. 題目生成原則

- **每個條目必須生成3題**：發音題、單句敘述題、多人對話題
- **至少1題為陷阱題**：利用常見錯誤來設計誘導選項
- **平假名標註規則**：
  - ⚠️ **題目（stem）中的漢字不可標註平假名** - 保持題目的挑戰性
  - ✅ **解說（explanation）中的漢字必須標註平假名** - 使用 `{ふりがな}` 格式，如 `漢字{かんじ}`
  - 例如：
    - 題目：`stem: "私は本を三冊買いました。"` ✅ 正確
    - 題目：`stem: "私{わたし}は本{ほん}を三{さん}冊{さつ}買{か}いました。"` ❌ 錯誤
    - 解說：`correctRule: "私{わたし}は本{ほん}を三{さん}冊{さつ}買{か}いました。"` ✅ 正確
- **選項設計必須具有誘惑性**：根據真實學習者的錯誤模式設計
- **選項不可重複**：同一題的四個選項必須各不相同，避免出現相同答案

### 2. 陷阱題設計策略

#### 音變陷阱

```text
正確：さんぼん（三本）
陷阱：さんほん ← 忽略濁音化
陷阱：みっぽん ← 混用訓讀+音讀
```

#### 讀音混淆陷阱

```text
正確：しがつ（四月）
陷阱：よんがつ ← 使用基數詞讀法
陷阱：よがつ ← 不完整的變化
```

#### 特殊讀法陷阱

```text
正確：ついたち（一日）
陷阱：いちにち ← 使用音讀
陷阱：ひとひ ← 錯誤的訓讀組合
```

### 3. 詳解撰寫要求

每題詳解必須包含：

- ✅ 正確答案的規則說明
- ❌ 每個錯誤選項的具體錯誤原因
- 📚 相關的音變規則引用
- 💡 若為陷阱題，說明陷阱設計邏輯

### 4. 資料來源映射

| 練習子類別 | 資料來源 |
|-----------|---------|
| 基本數字 | `numbers[0].items` (basic) |
| 十位數 | `numbers[1].items` (tens) |
| 百位數 | `numbers[2].items` (hundreds) |
| 千位數 | `numbers[3].items` (thousands) |
| 月份 | `months` |
| 星期 | `weekDays` |
| 日期 | `daysOfMonth` |
| 時 | `counters[11].items` (hours) |
| 分鐘 | `counters[12].items` (minutes) |
| 人數 | `counters[0].items` (people) |
| 細長物 | `counters[1].items` (long_objects) |
| 扁平物 | `counters[2].items` (flat_objects) |
| 書籍 | `counters[3].items` (books) |
| 小動物 | `counters[4].items` (small_animals) |
| 年齡 | `counters[6].items` (age) |
| 杯子 | `counters[8].items` (cups) |
| 樓層 | `counters[9].items` (floors) |
| 鞋襪 | `counters[10].items` (shoes) |
| 疑問詞量詞 | `questionCounters` |

### 5. 題型模板

#### 模板A：發音題

⚠️ **重要**：發音題的題幹中，被詢問的字**不可標註平假名**，否則失去出題意義。

```typescript
{
    type: 'pronunciation',
    stem: '「一」的正確讀音是？',  // ✅ 正確：不標註平假名
    stem_zh: '「一」的正確讀音是？',

    // ❌ 錯誤示範：stem: '「一{いち}」的正確讀音是？'

    // 正確選項：標準讀音
    // 錯誤選項（必須各不相同）：
    //   - 音讀/訓讀混淆
    //   - 相似發音的其他數字
    //   - 音變錯誤

    // 四個選項必須完全不同，不可重複
}
```

#### 模板B：單句敘述題

```typescript
{
    type: 'sentence',
    stem: '{情境句子}＿＿{後文}。',
    stem_zh: '{中文翻譯}',
    // 填空位置放入待測量詞/數字讀音
    // 選項全為平假名
}
```

#### 模板C：對話題

```typescript
{
    type: 'dialogue',
    dialogue: {
        speakerA: '{提問句，如詢問數量/時間}',
        speakerB: '＿＿{回答結構}。'
    },
    // B的回答需要填入正確的數量表達
}
```

### 6. 錯誤選項生成規則

根據資料中的 `special: true` 和 `note` 欄位，識別易錯點：

| 易錯類型 | 生成策略 |
|---------|---------|
| 促音化 (っ) | 提供未促音化版本作為陷阱 |
| 半濁音化 (ぱ行) | 提供未半濁音化版本 (は行) |
| 濁音化 (ば行) | 提供未濁音化版本 (は行) |
| 特殊讀法 | 提供「規則」但錯誤的讀法 |
| 音訓混用 | 提供音讀/訓讀的錯誤組合 |

### 7. 平假名標記規範

**題目（stem）不可標註平假名，解說（explanation）必須標註平假名：**

```text
題目示例：私は本を三冊買いました。（❌ 不可標註平假名）
解說示例：私{わたし}は本{ほん}を三{さん}冊{さつ}買{か}いました。（✅ 必須標註平假名）
```

組件會自動渲染為 ruby 標記顯示。

### 8. FuriganaText 組件使用規範 ⚠️ 重要

**所有包含平假名標記的文字都必須使用 `<FuriganaText>` 組件包裹才能正確渲染：**

#### 問題說明

- 如果直接輸出包含 `漢字{かんじ}` 格式的文字，會顯示為原始文字（如：`漢字{かんじ}`）
- 必須使用 `<FuriganaText text={...} />` 包裹，才能將平假名渲染為 ruby 標記顯示在漢字上方

#### DatesPractice.tsx 中必須使用 FuriganaText 的位置

```typescript
// ✅ 正確：題目內容
<FuriganaText text={currentQuestion.stem} />

// ✅ 正確：對話內容
<FuriganaText text={currentQuestion.dialogue.speakerA} />
<FuriganaText text={currentQuestion.dialogue.speakerB} />

// ✅ 正確：正確規則說明
<FuriganaText text={currentQuestion.explanation.correctRule} />

// ✅ 正確：陷阱說明
<FuriganaText text={currentQuestion.explanation.trapExplanation} />

// ✅ 正確：選項原因說明
<FuriganaText text={option.reason} />
```

#### 錯誤示例

```typescript
// ❌ 錯誤：直接顯示原始文字，不會渲染 ruby 標記
<p>{currentQuestion.explanation.correctRule}</p>
// 顯示結果：數字{すうじ}「一{いち}」的標準{ひょうじゅん}音讀{おんどく}...

// ✅ 正確：使用 FuriganaText 組件
<p><FuriganaText text={currentQuestion.explanation.correctRule} /></p>
// 顯示結果：數字（すうじ）「一（いち）」的標準（ひょうじゅん）音讀（おんどく）...
// （平假名會顯示在漢字上方）
```

#### 檢查清單

在 DatesPractice.tsx 或其他練習頁面中，確認以下所有位置都使用了 FuriganaText：

- [ ] 題目 stem
- [ ] 對話 dialogue.speakerA 和 dialogue.speakerB
- [ ] 解說 explanation.correctRule
- [ ] 陷阱說明 explanation.trapExplanation
- [ ] 選項原因 option.reason
- [ ] 任何其他包含 `{ふりがな}` 格式的文字

---

# 實作計畫

## 目標

建立完整的練習題系統於 `src/pages/DatesPractice.tsx`，包含四大類別的互動式測驗。

---

## 一、題目結構概述

### 四大類別按鈕

1. **數字** - 基本數字100題、十位數100題、百位數100題、千位數100題、綜合練習500題
2. **時間日期** - 月份100題、星期100題、日期100題、時100題、分鐘100題、綜合練習500題
3. **數量詞** - 人數100題、細長物100題、扁平物100題、書籍100題、小動物100題、年齡100題、杯子100題、樓層100題、鞋襪100題、綜合練習500題
4. **疑問詞量詞** - 綜合練習100題

### 每個類別按鈕下方

- 「前往教學頁面複習」連結按鈕，導向 `DatesAndCounters.tsx` 對應區塊

---

## 二、題目生成規則

### 每個條目出三題

例如數字「1」出三題、「2」出三題...以此類推

#### 題型一：發音題（考平假名）

```text
題目：「一」的正確讀音是？
選項：
A. いち ✓
B. ひとつ
C. いつ
D. ひと
```

#### 題型二：單句敘述題

```text
題目：私は本を＿＿読みました。（我讀了三本書）
選項：
A. さんぼん
B. さんほん
C. みっぽん
D. みほん ✓ 錯誤示範
實際正確：さんさつ
```

#### 題型三：多人對話題

```text
題目：
A：すみません、りんごは何個ありますか？
B：＿＿あります。（有五個）
選項：
A. ごこ
B. いつつ ✓
C. ごつ
D. いつこ
```

### 陷阱題規則

- 每個條目三題中至少一題為陷阱題
- 陷阱方式：
  - 音變陷阱（促音化、濁音化、半濁音化）
  - 讀音混淆（音讀 vs 訓讀）
  - 特殊讀法陷阱（如4月讀しがつ不是よんがつ）

### 詳解要求

每題必須包含：

- 正確答案說明
- 每個錯誤選項的錯誤原因
- 相關音變規則解說
- 漢字部分需標示平假名

---

## 三、檔案架構

### 需要建立的檔案

```text
src/data/questions/
├── datesPractice/
│   ├── types.ts                    # 練習題型別定義
│   ├── numbers/
│   │   ├── basic.ts                # 基本數字 0-10 (33條目×3題=99題+1綜合=100題)
│   │   ├── tens.ts                 # 十位數 (100題)
│   │   ├── hundreds.ts             # 百位數 (100題)
│   │   ├── thousands.ts            # 千位數 (100題)
│   │   └── index.ts                # 匯出整合
│   ├── timeDate/
│   │   ├── months.ts               # 月份 12條目×3題 + 補充 = 100題
│   │   ├── weekdays.ts             # 星期 7條目×3題 + 補充 = 100題
│   │   ├── days.ts                 # 日期 31條目×3題 + 補充 = 100題
│   │   ├── hours.ts                # 時 12條目×3題 + 補充 = 100題
│   │   ├── minutes.ts              # 分鐘 10條目×3題 + 補充 = 100題
│   │   └── index.ts
│   ├── counters/
│   │   ├── people.ts               # 人數 (人)
│   │   ├── longObjects.ts          # 細長物 (本)
│   │   ├── flatObjects.ts          # 扁平物 (枚)
│   │   ├── books.ts                # 書籍 (冊)
│   │   ├── smallAnimals.ts         # 小動物 (匹)
│   │   ├── age.ts                  # 年齡 (歳)
│   │   ├── cups.ts                 # 杯子 (杯)
│   │   ├── floors.ts               # 樓層 (階)
│   │   ├── shoes.ts                # 鞋襪 (足)
│   │   └── index.ts
│   ├── questionCounters/
│   │   └── index.ts                # 疑問詞量詞 100題
│   └── index.ts                    # 總匯出
```

### 頁面檔案

```text
src/pages/DatesPractice.tsx         # 主練習頁面
```

---

## 四、介面型別定義

```typescript
// src/data/questions/datesPractice/types.ts

export interface DatesPracticeQuestion {
    id: string;
    category: 'numbers' | 'timeDate' | 'counters' | 'questionCounters';
    subcategory: string;
    type: 'pronunciation' | 'sentence' | 'dialogue';
    isTrap: boolean;                      // 是否為陷阱題

    // 題目
    stem: string;                         // 日文題幹（含振假名標記）
    stem_zh: string;                      // 中文翻譯

    // 對話題額外欄位
    dialogue?: {
        speakerA: string;
        speakerB: string;
    };

    // 選項
    options: {
        text: string;                     // 選項文字（平假名）
        isCorrect: boolean;
        reason: string;                   // 詳細解說
    }[];

    correctIndex: number;

    // 詳解
    explanation: {
        correctRule: string;              // 正確答案的規則說明
        trapExplanation?: string;         // 陷阱說明（若為陷阱題）
        relatedRules: string[];           // 相關音變規則
        furiganaNote?: string;            // 漢字讀音標註
    };

    // 參考資料
    sourceItem: {
        value: string | number;
        kanji: string;
        reading: string;
    };
}

export interface PracticeCategory {
    id: string;
    title: string;
    titleZh: string;
    description: string;
    subcategories: PracticeSubcategory[];
    teachingLink: string;                 // 對應教學頁面錨點
}

export interface PracticeSubcategory {
    id: string;
    title: string;
    questionCount: number;
    questions: DatesPracticeQuestion[];
}
```

---

## 五、頁面 UI 結構

### DatesPractice.tsx 頁面狀態

```typescript
type PageState =
    | 'category-select'      // 選擇大類別
    | 'subcategory-select'   // 選擇子類別
    | 'practice'             // 練習中
    | 'results';             // 結果頁

interface PracticeState {
    category: string | null;
    subcategory: string | null;
    currentQuestionIndex: number;
    answers: { questionId: string; selectedIndex: number; isCorrect: boolean }[];
    showExplanation: boolean;
}
```

### UI 佈局

```text
┌─────────────────────────────────────────────────────────┐
│  ← 返回          日期及數量詞練習                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────┐  ┌─────────────┐                      │
│  │   1️⃣ 數字   │  │ 2️⃣ 時間日期 │                      │
│  │  (500題)    │  │  (500題)    │                      │
│  └─────────────┘  └─────────────┘                      │
│  📚 前往複習數字    📚 前往複習時間日期                    │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐                      │
│  │ 3️⃣ 數量詞   │  │ 4️⃣ 疑問詞   │                      │
│  │  (900題)    │  │  (100題)    │                      │
│  └─────────────┘  └─────────────┘                      │
│  📚 前往複習數量詞   📚 前往複習疑問詞                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 子類別選擇畫面（以數字為例）

```text
┌─────────────────────────────────────────────────────────┐
│  ← 返回          數字練習                               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐            │
│  │ 基本數字  │ │  十位數   │ │  百位數   │            │
│  │  100題   │ │  100題   │ │  100題   │            │
│  └───────────┘ └───────────┘ └───────────┘            │
│                                                         │
│  ┌───────────┐ ┌───────────┐                          │
│  │  千位數   │ │ 綜合練習  │                          │
│  │  100題   │ │  500題   │                          │
│  └───────────┘ └───────────┘                          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 六、題目範例模板

### 發音題範例

```typescript
{
    id: 'num_basic_1_pron',
    category: 'numbers',
    subcategory: 'basic',
    type: 'pronunciation',
    isTrap: false,
    stem: '「一」的正確讀音是？',  // ✅ 題目不標註平假名
    stem_zh: '「一」的正確讀音是？',
    options: [
        { text: 'いち', isCorrect: true, reason: '正確{せいかい}！「一{いち}」的音讀{おんどく}是「いち」。' },
        { text: 'ひとつ', isCorrect: false, reason: '這是「一{ひと}つ」的讀法{よみかた}，用於計數{けいすう}一般{いっぱん}物品{ぶっぴん}。' },
        { text: 'いつ', isCorrect: false, reason: '這是「五{ご}」在「五{いつ}つ」中{なか}的讀法{よみかた}。' },
        { text: 'ひと', isCorrect: false, reason: '這是「一人{ひとり}」中{なか}「一{ひと}」的訓讀{くんどく}部分{ぶぶん}。' }
    ],
    correctIndex: 0,
    explanation: {
        correctRule: '數字{すうじ}「一{いち}」的標準{ひょうじゅん}音讀{おんどく}是「いち」，源自{げんじ}古代{こだい}中國{ちゅうごく}的讀音{どくおん}。',  // ✅ 解說標註平假名
        relatedRules: ['音讀與訓讀的區別', '1-10的基本發音']
    },
    sourceItem: { value: 1, kanji: '一', reading: 'いち' }
}
```

### 單句敘述題範例（陷阱題）

```typescript
{
    id: 'counter_hon_3_sent',
    category: 'counters',
    subcategory: 'longObjects',
    type: 'sentence',
    isTrap: true,
    stem: '私は鉛筆を三＿＿持っています。',  // ✅ 題目不標註平假名
    stem_zh: '我有三支鉛筆。',
    options: [
        { text: 'さんほん', isCorrect: false, reason: '陷阱{かんけい}！「三{さん}」後面{うしろ}接{せつ}「本{ほん}」時{とき}會發生{はっせい}濁音化{だくおんか}。' },
        { text: 'さんぼん', isCorrect: true, reason: '正確{せいかい}！撥音{はつおん}「ん」後面{うしろ}的「ほ」要變成{へんせい}濁音{だくおん}「ぼ」。' },
        { text: 'みっぽん', isCorrect: false, reason: '這混合{こんごう}了訓讀{くんどく}數字{すうじ}和音讀{おんどく}量詞{りょうし}，不正確{ふせいかく}。' },
        { text: 'みほん', isCorrect: false, reason: '「みほん」是「見本{みほん}（樣本{さんぽん}）」的意思{いみ}，不是數量詞{すうりょうし}。' }
    ],
    correctIndex: 1,
    explanation: {
        correctRule: '「本{ほん}」量詞{りょうし}在「三{さん}」後面{うしろ}會濁音化{だくおんか}：さん＋ほん→さんぼん',  // ✅ 解說標註平假名
        trapExplanation: '這是一道{いちどう}陷阱題{かんけいだい}，利用{りよう}學習者{がくしゅうしゃ}容易{ようい}忽略{こりゃく}「ん」後面{うしろ}濁音化{だくおんか}的規則{きそく}。',
        relatedRules: ['h-p轉換規律', '撥音後的濁音化', '「本」的音變規則']
    },
    sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
}
```

### 對話題範例

```typescript
{
    id: 'time_hour_4_dial',
    category: 'timeDate',
    subcategory: 'hours',
    type: 'dialogue',
    isTrap: true,
    stem: '今、何時ですか？',  // ✅ 題目不標註平假名
    stem_zh: '現在幾點？',
    dialogue: {
        speakerA: 'すみません、今、何時ですか？',  // ✅ 對話內容不標註平假名
        speakerB: '＿＿です。（四點）'
    },
    options: [
        { text: 'よんじ', isCorrect: false, reason: '陷阱{かんけい}！「四時{よじ}」不能{ふのう}讀作{どくさく}「よんじ」。' },
        { text: 'しじ', isCorrect: false, reason: '陷阱{かんけい}！雖然{すいぜん}接近{せっきん}，但正確{せいかく}讀音{どくおん}是「よじ」。' },
        { text: 'よじ', isCorrect: true, reason: '正確{せいかく}！「四時{よじ}」的固定{こてい}讀法{どくほう}是「よじ」。' },
        { text: 'よっじ', isCorrect: false, reason: '促音{そくおん}「っ」不出現{ふしゅつげん}在「四時{よじ}」中{なか}。' }
    ],
    correctIndex: 2,
    explanation: {
        correctRule: '「四時{よじ}」是時間{じかん}表達{ひょうたつ}中{なか}的特殊{とくしゅ}讀法{どくほう}，必須{ひっす}讀作{どくさく}「よじ」，不可{ふか}讀{どく}「しじ」或「よんじ」。',  // ✅ 解說標註平假名
        trapExplanation: '這是雙重{そうじゅう}陷阱題{かんけいだい}：「よんじ」和「しじ」都是常見{じょうけん}錯誤{さくご}。',
        relatedRules: ['4時、7時、9時的特殊讀法', '時間表達的避諱讀音']
    },
    sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
}
```

---

## 七、實作步驟

### 步驟 1：建立型別定義

- 建立 `src/data/questions/datesPractice/types.ts`
- 定義所有練習題相關的介面

### 步驟 2：建立題目資料檔案

依序建立各類別的題目檔案，遵循以下原則：

- 每個條目產出3題（發音、單句、對話）
- 至少1題為陷阱題
- 所有漢字標註平假名
- 詳細的錯誤選項解說

### 步驟 3：更新 DatesPractice.tsx

- 移除目前的建設中佔位符
- 實作完整的練習頁面 UI
- 整合現有的 QuestionCard 組件
- 加入導航到教學頁面的連結

### 步驟 4：驗證測試

- 確認所有題目顯示正確
- 確認平假名標註正確渲染
- 確認答案判定正確
- 確認詳解顯示完整

---

## 八、教學頁面連結對應

| 練習類別 | 教學頁面錨點 |
|---------|-------------|
| 數字 | `/courses/dates-counters#numbers` |
| 月份 | `/courses/dates-counters#months` |
| 星期 | `/courses/dates-counters#weekdays` |
| 日期 | `/courses/dates-counters#days` |
| 時 | `/courses/dates-counters#hours` |
| 分鐘 | `/courses/dates-counters#minutes` |
| 人數 | `/courses/dates-counters#counter-people` |
| 細長物 | `/courses/dates-counters#counter-long` |
| 扁平物 | `/courses/dates-counters#counter-flat` |
| 書籍 | `/courses/dates-counters#counter-books` |
| 小動物 | `/courses/dates-counters#counter-animals` |
| 年齡 | `/courses/dates-counters#counter-age` |
| 杯子 | `/courses/dates-counters#counter-cups` |
| 樓層 | `/courses/dates-counters#counter-floors` |
| 鞋襪 | `/courses/dates-counters#counter-shoes` |
| 疑問詞量詞 | `/courses/dates-counters#question-counters` |

---

## 九、關鍵檔案清單

### 需修改的檔案

- `src/pages/DatesPractice.tsx` - 主要練習頁面

### 需新增的檔案

- `src/data/questions/datesPractice/types.ts`
- `src/data/questions/datesPractice/numbers/*.ts`
- `src/data/questions/datesPractice/timeDate/*.ts`
- `src/data/questions/datesPractice/counters/*.ts`
- `src/data/questions/datesPractice/questionCounters/index.ts`
- `src/data/questions/datesPractice/index.ts`

### 參考的資料來源

- `src/data/dates_and_counters_data.ts` - 所有題目的資料來源

---

## 十、驗證方式

1. **建置測試**：`npm run build` 確認無錯誤
2. **開發預覽**：`npm run dev` 檢視頁面
3. **功能測試**：
   - 點擊各類別按鈕確認導航正確
   - 作答題目確認答案判定正確
   - 確認詳解顯示完整
   - 確認平假名正確顯示
   - 確認「前往複習」連結正確跳轉

---

## 十一、預計題目總數

| 類別 | 子類別 | 題數 |
|-----|-------|-----|
| 數字 | 基本數字 | 100 |
| 數字 | 十位數 | 100 |
| 數字 | 百位數 | 100 |
| 數字 | 千位數 | 100 |
| 數字 | 綜合 | 500 |
| 時間日期 | 月份 | 100 |
| 時間日期 | 星期 | 100 |
| 時間日期 | 日期 | 100 |
| 時間日期 | 時 | 100 |
| 時間日期 | 分鐘 | 100 |
| 時間日期 | 綜合 | 500 |
| 數量詞 | 人數 | 100 |
| 數量詞 | 細長物 | 100 |
| 數量詞 | 扁平物 | 100 |
| 數量詞 | 書籍 | 100 |
| 數量詞 | 小動物 | 100 |
| 數量詞 | 年齡 | 100 |
| 數量詞 | 杯子 | 100 |
| 數量詞 | 樓層 | 100 |
| 數量詞 | 鞋襪 | 100 |
| 數量詞 | 綜合 | 500 |
| 疑問詞量詞 | 綜合 | 100 |
| **總計** | | **3000+** |
