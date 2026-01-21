# GitHub 與 Firebase 串接指南

完整的 GitHub 倉庫設定與 Firebase 自動部署配置。

---

## 第一部分：建立 GitHub 倉庫（5 分鐘）

### 1. 在 GitHub 上建立新倉庫

1. 前往 [GitHub](https://github.com)
2. 點擊右上角的 **+** → **New repository**
3. 填寫資訊：
   - **Repository name**: `nipponverb`
   - **Description**: `Premium Japanese Learning Platform`
   - **Visibility**: Public 或 Private（您的選擇）
   - ⚠️ **不要**勾選 "Initialize this repository with a README"
   - ⚠️ **不要**選擇 .gitignore 或 license（我們已經有了）
4. 點擊 **Create repository**

### 2. 連接本地專案到 GitHub

在您的專案目錄中執行：

```bash
# 如果還沒初始化 git（應該已經有了）
git status

# 添加所有檔案
git add .

# 建立第一個 commit
git commit -m "Initial commit: Complete Nipponverb Japanese learning platform"

# 連接到 GitHub 遠端倉庫（替換成您的 GitHub 使用者名稱）
git remote add origin https://github.com/YOUR_USERNAME/nipponverb.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

**範例**（假設您的使用者名稱是 `johndoe`）：
```bash
git remote add origin https://github.com/johndoe/nipponverb.git
git branch -M main
git push -u origin main
```

✅ 現在您的程式碼已經在 GitHub 上了！

---

## 第二部分：設定 Firebase Hosting（5 分鐘）

### 1. 初始化 Firebase Hosting

```bash
firebase init hosting
```

回答問題：

```
? What do you want to use as your public directory?
  → 輸入: dist

? Configure as a single-page app (rewrite all urls to /index.html)?
  → 輸入: y (Yes)

? Set up automatic builds and deploys with GitHub?
  → 輸入: y (Yes) ⭐ 這是關鍵！

? For which GitHub repository would you like to set up a GitHub workflow?
  → 輸入: YOUR_USERNAME/nipponverb
  → 例如: johndoe/nipponverb

? Set up the workflow to run a build script before every deploy?
  → 輸入: y (Yes)

? What script should be run before every deploy?
  → 輸入: npm ci && npm run build

? Set up automatic deployment to your site's live channel when a PR is merged?
  → 輸入: y (Yes)

? What is the name of the GitHub branch associated with your site's live channel?
  → 輸入: main
```

### 2. Firebase CLI 會自動執行

Firebase CLI 會：
1. 開啟瀏覽器
2. 要求您授權 Firebase 訪問您的 GitHub
3. 自動建立 GitHub Actions workflow 檔案

✅ 授權完成後，Firebase 會建立 `.github/workflows/` 資料夾！

---

## 第三部分：設定 GitHub Secrets（3 分鐘）

### 1. 取得 Firebase Service Account

這步驟應該已經由 Firebase CLI 自動完成。驗證方式：

1. 前往您的 GitHub 倉庫
2. 點擊 **Settings** → **Secrets and variables** → **Actions**
3. 檢查是否有以下 secrets：
   - `FIREBASE_SERVICE_ACCOUNT_NIPPONVERB`（名稱可能略有不同）

### 2. 添加環境變數 Secrets（重要！）

您需要手動添加 Firebase 配置作為 secrets：

在 GitHub 倉庫的 **Settings** → **Secrets and variables** → **Actions** 中，點擊 **New repository secret**，依序添加：

1. **VITE_FIREBASE_API_KEY**
   - Value: `AIzaSyDBTIw9S2uyTagQd3j47rQh9L-ArAEsOL0`

2. **VITE_FIREBASE_AUTH_DOMAIN**
   - Value: `nipponverb.firebaseapp.com`

3. **VITE_FIREBASE_PROJECT_ID**
   - Value: `nipponverb`

4. **VITE_FIREBASE_STORAGE_BUCKET**
   - Value: `nipponverb.firebasestorage.app`

5. **VITE_FIREBASE_MESSAGING_SENDER_ID**
   - Value: `772711630703`

6. **VITE_FIREBASE_APP_ID**
   - Value: `1:772711630703:web:d16c474fa195af4e16ca9a`

✅ 所有 secrets 都設定完成！

---

## 第四部分：建立/更新 GitHub Actions Workflow（5 分鐘）

### 1. 檢查自動生成的檔案

Firebase CLI 應該已經建立了：
- `.github/workflows/firebase-hosting-merge.yml`
- `.github/workflows/firebase-hosting-pull-request.yml`

### 2. 優化 Workflow 檔案

我們需要確保 workflow 使用我們的環境變數。

**檔案 1**: `.github/workflows/firebase-hosting-merge.yml`

這個檔案應該已存在，確認它包含環境變數：

```yaml
name: Deploy to Firebase Hosting on merge
on:
  push:
    branches:
      - main
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
          VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
          VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
          VITE_FIREBASE_STORAGE_BUCKET: ${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
          VITE_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
          VITE_FIREBASE_APP_ID: ${{ secrets.VITE_FIREBASE_APP_ID }}

      - name: Deploy to Firebase Hosting
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT_NIPPONVERB }}
          channelId: live
          projectId: nipponverb
```

**檔案 2**: `.github/workflows/firebase-hosting-pull-request.yml`

這個用於預覽 Pull Request：

```yaml
name: Deploy to Firebase Hosting on PR
on: pull_request
jobs:
  build_and_preview:
    if: ${{ github.event.pull_request.head.repo.full_name == github.repository }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
          VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
          VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
          VITE_FIREBASE_STORAGE_BUCKET: ${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
          VITE_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
          VITE_FIREBASE_APP_ID: ${{ secrets.VITE_FIREBASE_APP_ID }}

      - name: Deploy to Firebase Hosting Preview Channel
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT_NIPPONVERB }}
          projectId: nipponverb
```

---

## 第五部分：測試自動部署（5 分鐘）

### 1. 提交並推送 workflow 檔案

如果您修改了 workflow 檔案：

```bash
git add .github/workflows/
git commit -m "Add GitHub Actions workflow for Firebase deployment"
git push origin main
```

### 2. 觀察部署過程

1. 前往您的 GitHub 倉庫
2. 點擊 **Actions** 分頁
3. 您應該會看到一個正在執行的 workflow
4. 點擊它查看詳細的部署過程

### 3. 查看部署結果

部署成功後：
1. 前往 [Firebase Console](https://console.firebase.google.com/)
2. 選擇您的專案 → **Hosting**
3. 您會看到部署的網址，例如：`https://nipponverb.web.app`

✅ 自動部署設定完成！

---

## 第六部分：日常使用流程

### 開發流程

```bash
# 1. 建立新功能分支
git checkout -b feature/new-feature

# 2. 進行開發
# ... 編輯檔案 ...

# 3. 測試本地
npm run dev

# 4. 提交變更
git add .
git commit -m "feat: add new feature"

# 5. 推送到 GitHub
git push origin feature/new-feature

# 6. 在 GitHub 上建立 Pull Request
# 這會自動建立預覽部署！

# 7. 合併 PR 到 main
# 這會自動部署到正式環境！
```

### 快速部署到正式環境

```bash
# 修改程式碼
git add .
git commit -m "fix: update styles"
git push origin main
```

推送到 `main` 分支後，GitHub Actions 會：
1. ✅ 自動安裝依賴
2. ✅ 自動建置專案
3. ✅ 自動部署到 Firebase Hosting
4. ✅ 約 2-3 分鐘後網站更新完成

---

## 第七部分：設定自訂網域（選用）

### 1. 在 Firebase Console 中添加網域

1. 前往 Firebase Console → **Hosting**
2. 點擊 **Add custom domain**
3. 輸入您的網域（例如：`nipponverb.com`）
4. 按照指示設定 DNS 記錄

### 2. DNS 設定範例

在您的網域註冊商（如 Cloudflare、GoDaddy）添加：

```
Type: A
Name: @
Value: 151.101.1.195

Type: A
Name: @
Value: 151.101.65.195
```

對於 `www` 子網域：
```
Type: CNAME
Name: www
Value: nipponverb.web.app
```

✅ 等待 DNS 傳播（通常 10 分鐘到 24 小時）

---

## 🎯 完整部署檢查清單

- [ ] GitHub 倉庫已建立
- [ ] 本地專案已推送到 GitHub
- [ ] Firebase Hosting 已初始化
- [ ] GitHub Actions workflow 已建立
- [ ] GitHub Secrets 已設定（6 個環境變數）
- [ ] 自動部署已測試成功
- [ ] 網站可在 `https://nipponverb.web.app` 訪問
- [ ] （選用）自訂網域已設定

---

## 🔍 疑難排解

### 問題 1：GitHub Actions 失敗

**檢查**：
1. 確認所有 6 個環境變數都在 GitHub Secrets 中
2. 檢查 workflow 檔案中的 `env:` 部分是否正確
3. 查看 Actions 分頁的錯誤訊息

### 問題 2：部署成功但網站無法訪問

**解決**：
1. 確認 Firebase Hosting 已啟用
2. 檢查 `firebase.json` 中的 `public: "dist"` 設定
3. 本地執行 `npm run build` 確認可以建置

### 問題 3：環境變數未生效

**解決**：
1. 確認 secret 名稱與 workflow 中的 `${{ secrets.XXX }}` 完全一致
2. 重新觸發部署：推送一個小的更改

### 問題 4：Firebase Service Account 錯誤

**解決**：
```bash
# 重新初始化 hosting
firebase init hosting
# 選擇 Yes 設定 GitHub Actions
```

---

## 📊 部署狀態徽章

在您的 `README.md` 中添加狀態徽章：

```markdown
![Deploy Status](https://github.com/YOUR_USERNAME/nipponverb/actions/workflows/firebase-hosting-merge.yml/badge.svg)
```

這會顯示您的部署狀態！

---

## 🎉 完成！

現在您擁有：

✅ **完整的 CI/CD 流程**
- 推送程式碼 → 自動測試 → 自動建置 → 自動部署

✅ **預覽部署**
- 每個 Pull Request 都有獨立的預覽網址

✅ **正式環境自動更新**
- 合併到 main 分支自動部署

✅ **版本控制**
- 所有變更都有記錄，可隨時回溯

---

## 📚 相關資源

- [GitHub Actions 文件](https://docs.github.com/en/actions)
- [Firebase Hosting 文件](https://firebase.google.com/docs/hosting)
- [Firebase GitHub Actions](https://github.com/FirebaseExtended/action-hosting-deploy)

---

**總設定時間**：約 20-30 分鐘

**現在每次推送程式碼，都會自動部署！** 🚀
