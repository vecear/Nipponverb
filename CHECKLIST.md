# 🎯 Nipponverb 設定檢查清單

按照順序完成以下步驟，每完成一項就打勾 ✅

## ✅ 第 1 步：安裝依賴（已完成）

- [x] 執行 `npm install`
- [x] 確認沒有錯誤訊息

**狀態**：✅ 已完成！依賴已安裝。

---

## 📋 第 2 步：Firebase 設定（待完成）

### 2.1 建立 Firebase 專案

- [ ] 前往 [Firebase Console](https://console.firebase.google.com/)
- [ ] 點擊「新增專案」
- [ ] 輸入專案名稱：`nipponverb`
- [ ] 完成專案建立

### 2.2 啟用 Authentication

- [ ] 進入 Authentication → 開始使用
- [ ] 啟用「Google」登入方式
- [ ] 啟用「電子郵件/密碼」登入方式

### 2.3 建立 Firestore Database

- [ ] 進入 Firestore Database
- [ ] 點擊「建立資料庫」
- [ ] 選擇「以正式版模式啟動」
- [ ] 選擇資料庫位置（建議：asia-east1 或 asia-northeast1）

### 2.4 取得 Firebase 設定

- [ ] 回到專案總覽
- [ ] 點擊網頁圖示 `</>`
- [ ] 註冊應用程式：`Nipponverb Web`
- [ ] 複製 `firebaseConfig` 的值

### 2.5 設定環境變數

- [ ] 開啟專案根目錄的 `.env` 檔案
- [ ] 將 Firebase 設定值貼上（替換 `your_xxx_here` 部分）
- [ ] 儲存檔案

**範例**：
```env
VITE_FIREBASE_API_KEY=AIzaSyAbc123...
VITE_FIREBASE_AUTH_DOMAIN=nipponverb-12345.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=nipponverb-12345
...
```

---

## 🔒 第 3 步：部署 Firestore 安全規則

### 3.1 安裝 Firebase CLI

```bash
npm install -g firebase-tools
```

- [ ] 執行上述命令
- [ ] 確認安裝成功

### 3.2 登入 Firebase

```bash
firebase login
```

- [ ] 執行命令
- [ ] 在瀏覽器中完成 Google 登入
- [ ] 看到「Success! Logged in as...」訊息

### 3.3 初始化 Firestore

```bash
firebase init firestore
```

回答問題時：
- [ ] 選擇您的專案
- [ ] Rules 檔案：按 Enter（使用預設）
- [ ] Indexes 檔案：按 Enter（使用預設）
- [ ] 覆寫檔案？選擇 **No**

### 3.4 部署規則

```bash
firebase deploy --only firestore:rules
```

- [ ] 執行命令
- [ ] 看到「Deploy complete!」訊息

---

## 🚀 第 4 步：啟動開發伺服器

```bash
npm run dev
```

- [ ] 執行命令
- [ ] 看到「Local: http://localhost:5173/」
- [ ] 開啟瀏覽器前往該網址
- [ ] 看到登入畫面

---

## 🧪 第 5 步：測試應用程式

### 5.1 測試登入

- [ ] 點擊「Continue with Google」
- [ ] 選擇 Google 帳號
- [ ] 成功登入並進入儀表板

### 5.2 檢查功能

- [ ] 看到您的個人資料照片在右上角
- [ ] 看到統計卡片（Verbs, Kanji, Grammar）
- [ ] 看到三個模式卡片（Basic Training, Simulation, Stages）
- [ ] 點擊「Profile」查看個人檔案頁面

---

## 📊 第 6 步：（選用）上傳樣本資料

### 6.1 安裝 Python

- [ ] 檢查是否已安裝 Python：`python --version` 或 `python3 --version`
- [ ] 如果沒有，從 [python.org](https://www.python.org/downloads/) 下載並安裝

### 6.2 下載 Service Account Key

- [ ] Firebase Console → 齒輪圖示 → 專案設定
- [ ] 點擊「服務帳戶」分頁
- [ ] 點擊「產生新的私密金鑰」
- [ ] 下載 JSON 檔案
- [ ] 重新命名為 `serviceAccountKey.json`
- [ ] 移動到 `scripts/` 資料夾

### 6.3 執行資料上傳

```bash
cd scripts
pip install -r requirements.txt
python seed_data.py
cd ..
```

- [ ] 執行上述命令
- [ ] 看到成功訊息
- [ ] 重新整理瀏覽器

### 6.4 測試問題

- [ ] 點擊「Basic Training」
- [ ] 點擊任一類別（Verbs/Kanji/Grammar）
- [ ] 看到問題卡片
- [ ] 選擇答案並看到回饋

---

## 🎨 第 7 步：（選用）自訂設定

### 修改顏色

編輯 `tailwind.config.js`：

```javascript
colors: {
  'nihon-indigo': '#003366',  // 修改成您喜歡的顏色
  'sakura-pink': '#FFB7C5',   // 修改成您喜歡的顏色
  'electric-cyan': '#00D9FF', // 修改成您喜歡的顏色
}
```

- [ ] 修改顏色（如果需要）
- [ ] 重新整理瀏覽器查看變化

---

## 🌐 第 8 步：部署到網路（選用）

詳細步驟請參考 [DEPLOYMENT.md](DEPLOYMENT.md)

### 基本部署

```bash
npm run build
firebase init hosting
firebase deploy
```

- [ ] 建立 production build
- [ ] 初始化 Firebase Hosting
- [ ] 部署到網路
- [ ] 取得正式網址（https://your-project.web.app）

---

## ✅ 完成檢查

全部完成後，您應該能夠：

- ✅ 在本地開啟應用程式（http://localhost:5173）
- ✅ 使用 Google 帳號登入
- ✅ 查看儀表板和統計資料
- ✅ 進入練習模式並回答問題
- ✅ 查看個人檔案頁面

---

## 🆘 需要協助？

如果遇到問題：

1. **查看詳細指南**：[SETUP_GUIDE.md](SETUP_GUIDE.md)
2. **查看疑難排解**：[SETUP_GUIDE.md](SETUP_GUIDE.md) 的疑難排解章節
3. **檢查 Console**：按 F12 查看瀏覽器 Console 的錯誤訊息

---

## 📚 下一步學習資源

- [README.md](README.md) - 完整專案文件
- [QUICKSTART.md](QUICKSTART.md) - 快速開始指南
- [DEPLOYMENT.md](DEPLOYMENT.md) - 部署指南
- [CONTRIBUTING.md](CONTRIBUTING.md) - 貢獻指南
- [implementation_plan.md](implementation_plan.md) - 原始實作計劃

---

**目前進度**：1/8 步驟完成 ⬜⬜⬜⬜⬜⬜⬜⬜

**預計完成時間**：15-20 分鐘

加油！🎌
