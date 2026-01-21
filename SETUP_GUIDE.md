# 完整設定指南

## 第一部分：建立 Firebase 專案（約 5 分鐘）

### 1. 前往 Firebase Console

1. 開啟瀏覽器，前往 [Firebase Console](https://console.firebase.google.com/)
2. 使用您的 Google 帳號登入

### 2. 建立新專案

1. 點擊「**新增專案**」（Add project）
2. 輸入專案名稱：`nipponverb`（或您喜歡的名稱）
3. 點擊「**繼續**」
4. （選用）關閉 Google Analytics（開發階段可以先關閉）
5. 點擊「**建立專案**」
6. 等待專案建立完成（約 30 秒）
7. 點擊「**繼續**」進入專案控制台

---

## 第二部分：啟用 Authentication（約 3 分鐘）

### 1. 進入 Authentication

1. 在左側選單中，點擊「**Authentication**」
2. 點擊「**開始使用**」（Get started）

### 2. 啟用 Google 登入

1. 點擊「**Sign-in method**」分頁
2. 找到「**Google**」，點擊它
3. 開啟「**啟用**」開關
4. 在「專案公開名稱」選擇您的專案
5. 選擇「專案支援電子郵件」（使用您的 Google 帳號）
6. 點擊「**儲存**」

### 3. 啟用電子郵件/密碼登入

1. 同樣在「**Sign-in method**」分頁
2. 找到「**電子郵件/密碼**」（Email/Password），點擊它
3. 開啟「**啟用**」開關
4. 點擊「**儲存**」

✅ Authentication 設定完成！

---

## 第三部分：建立 Firestore 資料庫（約 2 分鐘）

### 1. 進入 Firestore Database

1. 在左側選單中，點擊「**Firestore Database**」
2. 點擊「**建立資料庫**」（Create database）

### 2. 設定安全性規則

1. 選擇「**以正式版模式啟動**」（Start in production mode）
2. 點擊「**下一步**」

### 3. 選擇位置

1. 選擇 Firestore 資料庫位置：
   - **asia-east1** (台灣)
   - **asia-northeast1** (東京)
   - **us-central1** (美國中部)
2. 點擊「**啟用**」
3. 等待資料庫建立完成（約 1 分鐘）

✅ Firestore 資料庫建立完成！

---

## 第四部分：取得 Firebase 設定（約 2 分鐘）

### 1. 註冊 Web 應用程式

1. 回到專案總覽頁面（點擊左上角的「專案總覽」）
2. 點擊「**網頁**」圖示（`</>`）
3. 輸入應用程式暱稱：`Nipponverb Web`
4. **不要**勾選「設定 Firebase Hosting」（稍後再設定）
5. 點擊「**註冊應用程式**」

### 2. 複製設定

您會看到類似這樣的程式碼：

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyA...",
  authDomain: "nipponverb-xxxxx.firebaseapp.com",
  projectId: "nipponverb-xxxxx",
  storageBucket: "nipponverb-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

### 3. 建立 .env 檔案

1. 在專案根目錄建立 `.env` 檔案
2. 複製以下內容並替換成您的值：

```env
VITE_FIREBASE_API_KEY=AIzaSyA...
VITE_FIREBASE_AUTH_DOMAIN=nipponverb-xxxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=nipponverb-xxxxx
VITE_FIREBASE_STORAGE_BUCKET=nipponverb-xxxxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
```

**重要**：每個值都要對應您的 Firebase 設定！

---

## 第五部分：部署 Firestore 安全規則（約 2 分鐘）

### 1. 安裝 Firebase CLI（如果還沒安裝）

```bash
npm install -g firebase-tools
```

### 2. 登入 Firebase

```bash
firebase login
```

這會開啟瀏覽器視窗，請登入您的 Google 帳號。

### 3. 初始化 Firebase

```bash
firebase init firestore
```

會出現一些問題，請這樣回答：

```
? Which project do you want to use?
  → 選擇您剛建立的專案（nipponverb-xxxxx）

? What file should be used for Firestore Rules?
  → 按 Enter（使用預設 firestore.rules）

? What file should be used for Firestore indexes?
  → 按 Enter（使用預設 firestore.indexes.json）

? File firestore.rules already exists. Do you want to overwrite it?
  → No（我們已經有設定好的規則）

? File firestore.indexes.json already exists. Do you want to overwrite it?
  → No
```

### 4. 部署安全規則

```bash
firebase deploy --only firestore:rules
```

成功後會看到：
```
✔  firestore: deployed
✔  Deploy complete!
```

✅ Firestore 安全規則部署完成！

---

## 第六部分：啟動開發伺服器（約 1 分鐘）

### 1. 啟動專案

```bash
npm run dev
```

您會看到：
```
  VITE v5.2.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 2. 開啟瀏覽器

1. 開啟瀏覽器
2. 前往 `http://localhost:5173`
3. 您應該會看到漂亮的登入畫面！

### 3. 測試登入

1. 點擊「**Continue with Google**」
2. 選擇您的 Google 帳號
3. 授權應用程式
4. 🎉 您應該會被導向到儀表板！

---

## 第七部分：（選用）上傳樣本資料（約 3 分鐘）

如果您想要測試問題功能：

### 1. 安裝 Python（如果還沒有）

下載並安裝 [Python 3.8+](https://www.python.org/downloads/)

### 2. 下載 Service Account Key

1. 回到 Firebase Console
2. 點擊左上角齒輪圖示 → 「**專案設定**」
3. 點擊「**服務帳戶**」分頁
4. 點擊「**產生新的私密金鑰**」
5. 點擊「**產生金鑰**」
6. 將下載的 JSON 檔案重新命名為 `serviceAccountKey.json`
7. 將它移動到 `scripts/` 資料夾

### 3. 安裝 Python 套件

```bash
cd scripts
pip install -r requirements.txt
```

### 4. 執行資料上傳腳本

```bash
python seed_data.py
```

您會看到：
```
============================================================
Firebase Firestore Data Seeding Script
============================================================

Uploading 4 questions to drills/verbs/n5/...
  [1/4] Uploaded question: 明日、学校へ___。...
  [2/4] Uploaded question: 昨日、友達に___。...
  ...
✅ Successfully uploaded 4 questions

✅ All data seeded successfully!
============================================================
```

### 5. 返回並重新整理頁面

```bash
cd ..
```

重新整理瀏覽器，現在點擊「**Basic Training**」→「**Verbs**」，您應該會看到問題了！

---

## 疑難排解

### 問題 1：npm install 失敗

**解決方案**：
```bash
# 清除快取
npm cache clean --force
# 刪除 node_modules
rm -rf node_modules package-lock.json
# 重新安裝
npm install
```

### 問題 2：Firebase 登入錯誤

**檢查清單**：
- ✅ `.env` 檔案是否在專案根目錄？
- ✅ 環境變數是否正確複製？（沒有多餘空格）
- ✅ Firebase Console 中是否啟用了 Google 登入？
- ✅ 是否使用正確的 Firebase 專案設定？

### 問題 3：Firestore 權限錯誤

**解決方案**：
```bash
# 重新部署安全規則
firebase deploy --only firestore:rules
```

檢查 Firebase Console → Firestore Database → Rules 是否已更新。

### 問題 4：頁面空白

**解決方案**：
1. 按 F12 開啟開發者工具
2. 查看 Console 分頁的錯誤訊息
3. 確認 `.env` 檔案設定正確
4. 確認 Firebase 專案已正確設定

### 問題 5：Port 5173 被佔用

**解決方案**：
```bash
# 使用不同的 port
npm run dev -- --port 3000
```

---

## 🎉 完成！

您現在應該有一個完全運作的日語學習平台！

### 下一步

- 📚 探索不同的學習模式
- 🎨 自訂顏色和樣式
- 📊 新增更多問題資料
- 🚀 部署到 Firebase Hosting（參考 DEPLOYMENT.md）

### 有問題嗎？

- 查看 [README.md](README.md) 了解更多功能
- 查看 [DEPLOYMENT.md](DEPLOYMENT.md) 了解如何部署
- 查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解如何貢獻

---

**設定總時間**：約 15-20 分鐘

**恭喜！您已經準備好開始開發了！** 🎌
