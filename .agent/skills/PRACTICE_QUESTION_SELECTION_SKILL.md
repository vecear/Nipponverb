# 練習頁面出題規則 (Practice Question Selection Rules)

## 概述
本技能定義了練習頁面的題目選擇邏輯，確保使用者能有效學習並複習錯誤題目。

## 題目分類

題目依據使用者作答紀錄分為三類：
1. **未作答題目** - 使用者從未回答過的題目
2. **答錯題目** - 使用者曾經回答錯誤的題目
3. **答對題目** - 使用者曾經回答正確的題目

## 開始練習 - 選題規則

當使用者按下「開始練習」按鈕時，依照以下優先順序選題：

### 選題邏輯

1. **答錯題目優先納入**
   - 目標：答錯題目應佔總題數的一半
   - 若答錯題目數量 >= 總題數的一半：隨機選取「總題數/2」題答錯題目
   - 若答錯題目數量 < 總題數的一半：將所有答錯題目全部納入

2. **未作答題目填補**
   - 剩餘題數由未作答題目填補
   - 從未作答題目中隨機選取所需數量

3. **答對題目補足**
   - 若未作答題目 + 答錯題目仍不足總題數
   - 從答對題目中隨機選取來補足剩餘題數

### 選題公式

```
設：
- total = 總題數
- wrong = 答錯題目集合
- unanswered = 未作答題目集合
- correct = 答對題目集合

選題步驟：
1. wrongCount = min(wrong.length, floor(total / 2))
2. selectedWrong = random(wrong, wrongCount)
3. remaining = total - wrongCount
4. unansweredCount = min(unanswered.length, remaining)
5. selectedUnanswered = random(unanswered, unansweredCount)
6. remaining = remaining - unansweredCount
7. correctCount = min(correct.length, remaining)
8. selectedCorrect = random(correct, correctCount)
9. finalQuestions = selectedWrong + selectedUnanswered + selectedCorrect
```

## 複習錯題功能

### UI 配置
- 在「開始練習」按鈕右邊新增「複習錯題」按鈕
- 按鈕樣式應與「開始練習」一致但可用不同顏色區分

### 選題規則
- 只從答錯題目集合中選題
- 若答錯題目數量 >= 設定的練習題數：隨機選取設定的題數
- 若答錯題目數量 < 設定的練習題數：使用所有答錯題目

### 作答結果處理
- 若使用者在複習模式下答對某題：
  - 將該題從「答錯題目」集合移除
  - 將該題加入「答對題目」集合
- 若使用者再次答錯：
  - 該題保持在「答錯題目」集合中

## 實作注意事項

1. **隨機選取**：所有隨機選取應使用洗牌算法（Fisher-Yates）確保公平性
2. **題目順序**：選完題目後應再次打亂順序，避免答錯題目集中在前半段
3. **狀態管理**：使用 store 追蹤每題的作答狀態（未作答/答錯/答對）
4. **持久化**：作答紀錄應存入 localStorage 或後端資料庫
5. **按鈕狀態**：若沒有答錯題目，「複習錯題」按鈕應顯示為禁用狀態

## 相關檔案

- `src/pages/Practice.tsx` - 練習頁面組件
- `src/store/usePracticeStore.ts` - 練習狀態管理
- `src/data/questions/` - 題庫資料
