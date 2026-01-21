# 🌐 您的網站資訊

## 📍 網站網址

### 🎯 正式網站
**https://nipponverb.web.app**

這是您的主要網站網址，每次推送程式碼到 `main` 分支後會自動更新。

### 🔗 備用網址
**https://nipponverb.firebaseapp.com**

這是 Firebase 提供的備用網址，指向同一個網站。

---

## 🚀 如何部署

### 自動部署（推薦）

只需推送程式碼到 GitHub：

```bash
git add .
git commit -m "你的更新訊息"
git push origin main
```

2-3 分鐘後，您的網站就會自動更新！

### 手動部署

如果需要手動部署：

```bash
npm run build
firebase deploy --only hosting
```

---

## 📊 監控和管理

### GitHub Actions（查看部署狀態）
https://github.com/vecear/Nipponverb/actions

### Firebase Console（管理您的專案）
https://console.firebase.google.com/project/nipponverb

### Firebase Hosting（查看部署歷史）
https://console.firebase.google.com/project/nipponverb/hosting

---

## 🔐 需要設定的 GitHub Secrets

在自動部署生效前，請設定這些 secrets：

👉 前往：https://github.com/vecear/Nipponverb/settings/secrets/actions

### 必需的 Secrets（7 個）

1. **VITE_FIREBASE_API_KEY**
   - `AIzaSyDBTIw9S2uyTagQd3j47rQh9L-ArAEsOL0`

2. **VITE_FIREBASE_AUTH_DOMAIN**
   - `nipponverb.firebaseapp.com`

3. **VITE_FIREBASE_PROJECT_ID**
   - `nipponverb`

4. **VITE_FIREBASE_STORAGE_BUCKET**
   - `nipponverb.firebasestorage.app`

5. **VITE_FIREBASE_MESSAGING_SENDER_ID**
   - `772711630703`

6. **VITE_FIREBASE_APP_ID**
   - `1:772711630703:web:d16c474fa195af4e16ca9a`

7. **FIREBASE_SERVICE_ACCOUNT_NIPPONVERB**
   - 這個會在您執行 `firebase init hosting` 時自動設定

---

## ✅ 設定檢查清單

### 已完成 ✓
- [x] Firebase 專案建立（nipponverb）
- [x] Firebase Hosting 啟用
- [x] GitHub 倉庫建立（vecear/Nipponverb）
- [x] GitHub Actions workflow 檔案建立
- [x] 專案推送到 GitHub

### 待完成
- [ ] 在 GitHub 設定 6 個環境變數 secrets
- [ ] 在 GitHub 設定 Firebase Service Account secret
- [ ] 測試自動部署
- [ ] 確認網站可訪問

---

## 🎯 完成設定的步驟

### 步驟 1：設定 GitHub Secrets（5 分鐘）

1. 前往：https://github.com/vecear/Nipponverb/settings/secrets/actions
2. 點擊「New repository secret」
3. 依序添加上面列出的 6 個環境變數

### 步驟 2：設定 Firebase Service Account

方法 A - 讓 GitHub 自動設定（推薦）：
```bash
# Firebase CLI 會要求授權 GitHub 並自動設定
firebase init hosting

# 選擇時：
# - Setup GitHub Actions? → Yes
# - Repository: vecear/Nipponverb
```

方法 B - 手動設定：
1. 前往 Firebase Console → 專案設定 → 服務帳戶
2. 產生新的私密金鑰
3. 將整個 JSON 內容複製到 GitHub Secret `FIREBASE_SERVICE_ACCOUNT_NIPPONVERB`

### 步驟 3：測試部署

```bash
# 觸發自動部署
git commit --allow-empty -m "test: trigger deployment"
git push origin main

# 查看部署進度
# https://github.com/vecear/Nipponverb/actions
```

---

## 🌟 網站功能

部署成功後，您的網站將包含：

- ✨ 美麗的 Glassmorphism 登入頁面
- 🔐 Google 和 Email/Password 登入
- 📊 學習進度儀表板
- 📚 三種學習模式（Practice, Simulation, Stages）
- 👤 個人檔案管理
- 🎨 完整響應式設計
- 🎌 日式主題設計

---

## 📱 分享您的網站

網站網址：**https://nipponverb.web.app**

您可以分享這個網址給任何人！

---

## 🔧 自訂網域（選用）

如果您想使用自己的網域（例如：www.yoursite.com）：

1. 前往 Firebase Console → Hosting
2. 點擊「Add custom domain」
3. 按照指示設定 DNS 記錄

---

**您的網站已準備就緒！** 🎉

只需完成 GitHub Secrets 設定，就能啟用全自動部署！
