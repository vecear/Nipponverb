# Nipponverb 專案指引

## 語言規範

本專案的目標使用者是**台灣使用者**，所有面向使用者的文字必須使用**繁體中文**。

### 規則
1. **UI 文字**：按鈕、標籤、提示、說明等一律使用繁體中文，不使用英文或日文
2. **題目解說**（explanation, reason, keyPoint, analysis 等）：一律使用繁體中文
3. **題目題幹**（stem）：因為是日語學習，題幹可以是日文；但 `stemZh` / `stem_zh` 必須提供中文翻譯
4. **資料欄位**：所有 `meaning`、`meaning_zh` 等意義欄位使用繁體中文，不使用英文
5. **日文振假名標記**：使用 `漢字{かんじ}` 格式，僅在與題目理解直接相關時標示

### 反例（不可出現）
- `meaning: 'friend'` → 應為 `meaning: '朋友'`
- `マッチング` → 應為 `配對`
- `"Match the pairs"` → 應為 `'請配對假名與讀音'`
- `正解！` / `不正解` → 應為 `正確！` / `答錯了`

## 技術備忘

- 模組路徑：`import from '../../data/courses'` 會解析到 `courses.ts` 而非 `courses/index.ts`，需使用明確路徑 `'../../data/courses/index'`
- AuthContext 提供 `currentUser`（非 `user`）
- 五十音（gojuon）中 じ/ぢ 和 ず/づ 共享相同 romaji（ji/zu），問題 ID 需包含 row 以避免衝突
