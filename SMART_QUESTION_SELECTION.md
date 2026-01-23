# 智能選題與涵蓋率追蹤功能

## 功能概述

實現了智能題目選擇系統，優先選擇使用者尚未做過或做過次數較少的題目，並在練習選擇畫面顯示題目涵蓋率。

## 新增功能

### 1. 題目完成統計追蹤

**實現位置**: `src/store/usePracticeStore.ts`

- 新增 `QuestionStats` 介面，追蹤每個題目的：
  - `attempts`: 嘗試次數
  - `correct`: 答對次數
  - `lastAttempt`: 最後嘗試時間

- 統計資料儲存在 localStorage (`nipponverb_question_stats`)
- 每次回答題目時自動更新統計

### 2. 智能選題系統

**實現位置**: `src/pages/Practice.tsx` - `generateQuestions()` 函數

選題邏輯：
1. 將題庫分為「未做過」和「已做過」兩類
2. 已做過的題目按嘗試次數升序排序（次數少的優先）
3. 組合選題池：優先選擇未做過的題目，其次是做過次數少的題目
4. 從組合後的選題池中隨機抽取

**支援的分類**:
- ✅ 動詞變化 (verbs)
- ✅ 詞彙 (vocabulary)

### 3. 涵蓋率顯示

**實現位置**: `src/pages/Practice.tsx` - 級別選擇按鈕

在每個 JLPT 級別按鈕下方顯示：
```
N5
150 題
已做 45/150
```

顯示資訊：
- 總題目數
- 已做過的題目數 / 總題目數
- 自動計算涵蓋率百分比

### 4. 新增 Store 方法

**`getAttemptedQuestions(category, level)`**
- 返回該分類和級別下所有已做過的題目 ID 集合
- 用於判斷哪些題目已經嘗試過

**`getCoverage(category, level, totalQuestions)`**
- 計算題目涵蓋率
- 返回: `{ attempted, total, percentage }`

**`getQuestionStats(questionId)`**
- 獲取特定題目的統計資料
- 返回: `{ attempts, correct, lastAttempt }`

## 使用者體驗改進

### 做題前
- 可以看到各級別的題目涵蓋情況
- 了解還有多少題目沒做過
- 幫助規劃學習進度

### 做題時
- 優先遇到新題目
- 減少重複做同樣的題目
- 提升學習效率

### 做題後
- 系統自動記錄完成狀態
- 統計資料持久化儲存
- 支援跨瀏覽器會話

## 技術實現

### 資料結構

```typescript
// 題目統計
interface QuestionStats {
  [questionId: string]: {
    attempts: number      // 嘗試次數
    correct: number       // 答對次數
    lastAttempt: string   // 最後嘗試時間
  }
}

// 涵蓋率資訊
interface Coverage {
  attempted: number    // 已做題數
  total: number       // 總題數
  percentage: number  // 百分比
}
```

### 儲存機制

- **localStorage keys**:
  - `nipponverb_practice_history`: 練習歷史記錄
  - `nipponverb_question_stats`: 題目統計資料

- **更新時機**:
  - 每次回答題目後立即更新統計
  - 完成練習後儲存練習記錄

### 效能考量

- 使用 Set 資料結構快速查詢已做過的題目
- 統計計算在前端進行，無需後端支援
- localStorage 提供持久化，無需資料庫

## 未來擴展

可能的改進方向：

1. **視覺化進度**
   - 添加進度條顯示涵蓋率
   - 用顏色標示完成度（如：綠色>80%，黃色50-80%，紅色<50%）

2. **統計儀表板**
   - 在個人頁面顯示整體學習統計
   - 顯示最常錯的題目
   - 顯示需要複習的題目

3. **間隔重複系統 (SRS)**
   - 根據答對率調整題目出現頻率
   - 答錯的題目更頻繁出現
   - 答對多次的題目降低頻率

4. **目標設定**
   - 讓使用者設定每日/每週做題目標
   - 追蹤目標完成進度
   - 提供獎勵機制

## 測試建議

1. **基本功能測試**
   - 首次做題，確認涵蓋率從 0/總數 開始
   - 完成 10 題後，檢查涵蓋率是否更新為 10/總數
   - 再次開始練習，驗證是否優先出現新題目

2. **跨會話測試**
   - 關閉瀏覽器後重新開啟
   - 確認統計資料仍然保留
   - 驗證涵蓋率顯示正確

3. **邊界測試**
   - 做完所有題目（涵蓋率 100%）
   - 確認系統仍然可以正常選題（循環使用題庫）

## 版本資訊

- **實現日期**: 2024-01-23
- **影響檔案**:
  - `src/store/usePracticeStore.ts` (新增統計功能)
  - `src/pages/Practice.tsx` (智能選題 + 涵蓋率顯示)

---

*功能已完成並通過編譯測試*
