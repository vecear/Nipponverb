# 🔐 GitHub Secrets 快速設定指南

在推送程式碼到 GitHub 後，您需要設定這些 secrets 才能讓自動部署正常運作。

---

## 📋 需要設定的 Secrets

前往您的 GitHub 倉庫：
👉 https://github.com/vecear/Nipponverb/settings/secrets/actions

點擊 **New repository secret** 按鈕，然後依序添加以下 secrets：

---

### 1️⃣ VITE_FIREBASE_API_KEY

- **Name**: `VITE_FIREBASE_API_KEY`
- **Value**: `AIzaSyDBTIw9S2uyTagQd3j47rQh9L-ArAEsOL0`

點擊 **Add secret**

---

### 2️⃣ VITE_FIREBASE_AUTH_DOMAIN

- **Name**: `VITE_FIREBASE_AUTH_DOMAIN`
- **Value**: `nipponverb.firebaseapp.com`

點擊 **Add secret**

---

### 3️⃣ VITE_FIREBASE_PROJECT_ID

- **Name**: `VITE_FIREBASE_PROJECT_ID`
- **Value**: `nipponverb`

點擊 **Add secret**

---

### 4️⃣ VITE_FIREBASE_STORAGE_BUCKET

- **Name**: `VITE_FIREBASE_STORAGE_BUCKET`
- **Value**: `nipponverb.firebasestorage.app`

點擊 **Add secret**

---

### 5️⃣ VITE_FIREBASE_MESSAGING_SENDER_ID

- **Name**: `VITE_FIREBASE_MESSAGING_SENDER_ID`
- **Value**: `772711630703`

點擊 **Add secret**

---

### 6️⃣ VITE_FIREBASE_APP_ID

- **Name**: `VITE_FIREBASE_APP_ID`
- **Value**: `1:772711630703:web:d16c474fa195af4e16ca9a`

點擊 **Add secret**

---

### 7️⃣ FIREBASE_SERVICE_ACCOUNT_NIPPONVERB

這個 secret 需要透過 Firebase CLI 設定。請執行：

```bash
firebase init hosting
```

選擇時：
- ✅ **Set up automatic builds and deploys with GitHub?** → **Yes**
- 輸入倉庫：`vecear/Nipponverb`

Firebase CLI 會自動：
1. 開啟瀏覽器授權 GitHub
2. 建立 Service Account
3. 自動添加 `FIREBASE_SERVICE_ACCOUNT_NIPPONVERB` secret 到您的 GitHub 倉庫

---

## ✅ 檢查清單

完成後，您的 GitHub Secrets 應該有這 7 個：

- [x] `VITE_FIREBASE_API_KEY`
- [x] `VITE_FIREBASE_AUTH_DOMAIN`
- [x] `VITE_FIREBASE_PROJECT_ID`
- [x] `VITE_FIREBASE_STORAGE_BUCKET`
- [x] `VITE_FIREBASE_MESSAGING_SENDER_ID`
- [x] `VITE_FIREBASE_APP_ID`
- [x] `FIREBASE_SERVICE_ACCOUNT_NIPPONVERB`

---

## 🚀 設定完成後

1. 推送任何程式碼到 `main` 分支
2. 前往 https://github.com/vecear/Nipponverb/actions
3. 查看自動部署進度
4. 部署完成後訪問 https://nipponverb.web.app

---

## 🔗 快速連結

- **GitHub Secrets 設定頁面**: https://github.com/vecear/Nipponverb/settings/secrets/actions
- **GitHub Actions 頁面**: https://github.com/vecear/Nipponverb/actions
- **Firebase Console**: https://console.firebase.google.com/project/nipponverb

---

**預計設定時間**: 5 分鐘

設定完成後，每次推送程式碼都會自動部署到 Firebase！🎉
