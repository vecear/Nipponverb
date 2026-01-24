# Nipponverb

一個遊戲化的日語學習平台，透過 RPG 進度系統讓學習更有趣。

## 功能特色

### 學習模組
- **五十音練習** - 平假名與片假名的認讀練習
- **動詞變化** - JLPT N5-N1 動詞變化練習（ます形、て形、た形、ない形等）
- **文法練習** - JLPT 各級文法模式學習
- **漢字讀音** - 漢字讀音與意義練習
- **單字練習** - N5-N1 詞彙量擴充

### 測驗系統
- **JLPT 模擬考試** - 真實的 JLPT 模擬測驗（N5-N1）
- **情境關卡** - 透過真實對話情境學習

### RPG 進度系統
- **等級系統** - 0-99 等級，透過學習獲得經驗值
- **職業系統** - 8 種江戶時代風格職業，各有 10 個階段稱號
- **性別差異** - 男/女角色有不同的職業名稱和稱號

### 職業列表
| 職業 | 日文 | 描述 |
|------|------|------|
| 同心 | どうしん | 維護秩序的執法者 |
| 役者 | やくしゃ | 舞台上的表演者 |
| 浮世繪師 | うきよえし | 捕捉浮世風情的藝術家 |
| 商人 | しょうにん | 精於商道的經營者 |
| 學者 | がくしゃ | 追求知識的求道者 |
| 陰陽師 | おんみょうじ | 掌握陰陽之術的行者 |
| 料理人 | りょうりにん | 以料理傳遞心意的職人 |
| 幇間 | ほうかん | 娛樂賓客的藝人 |

### 其他功能
- **多語言支援** - 繁體中文 / English
- **後台管理** - 遊戲配置、使用者管理、統計資料
- **個人檔案** - 學習進度追蹤、帳號管理

## 技術架構

### 前端
- **React 18** - UI 框架
- **TypeScript** - 型別安全
- **Vite** - 建置工具
- **Tailwind CSS** - 樣式框架
- **Framer Motion** - 動畫效果
- **Zustand** - 狀態管理
- **React Router** - 路由管理
- **i18next** - 國際化

### 後端
- **Firebase Authentication** - 使用者驗證（Email/Password、Google OAuth）
- **Firebase Firestore** - 資料庫

### 日文處理
- **Kuroshiro** - 日文轉換（振り仮名）
- **Kuromoji** - 日文分詞器

## 快速開始

### 環境需求
- Node.js 18+
- npm 或 yarn

### 安裝步驟

1. 複製專案
```bash
git clone https://github.com/your-username/nipponverb.git
cd nipponverb
```

2. 安裝依賴
```bash
npm install
```

3. 設定 Firebase
   - 在 Firebase Console 建立專案
   - 啟用 Authentication（Email/Password、Google）
   - 啟用 Firestore Database
   - 複製 Firebase 配置到 `src/config/firebase.ts`

4. 啟動開發伺服器
```bash
npm run dev
```

5. 開啟瀏覽器訪問 `http://localhost:5173`

## 指令

| 指令 | 說明 |
|------|------|
| `npm run dev` | 啟動開發伺服器 |
| `npm run build` | 建置生產版本 |
| `npm run preview` | 預覽生產版本 |
| `npm run lint` | 執行 ESLint 檢查 |

## 專案結構

```
src/
├── components/          # 共用元件
│   ├── AdminRoute.tsx   # 管理員路由守衛
│   ├── ExpBar.tsx       # 經驗值進度條
│   ├── FuriganaText.tsx # 振り仮名文字元件
│   ├── Layout.tsx       # 頁面佈局
│   ├── LevelUpModal.tsx # 升級彈窗
│   ├── Navbar.tsx       # 導航列
│   ├── ProtectedRoute.tsx # 路由守衛
│   ├── QuestionCard.tsx # 題目卡片
│   └── StatsCard.tsx    # 統計卡片
├── config/              # 配置檔案
│   └── firebase.ts      # Firebase 配置
├── contexts/            # React Context
│   └── AuthContext.tsx  # 認證 Context
├── data/                # 靜態資料
│   ├── jobs.ts          # 職業定義
│   ├── grammar.ts       # 文法資料
│   ├── kanji.ts         # 漢字資料
│   ├── stages.ts        # 關卡資料
│   └── questions/       # 題庫
├── i18n/                # 國際化
│   └── locales/         # 語言檔案
├── pages/               # 頁面元件
│   ├── Admin.tsx        # 後台管理
│   ├── Dashboard.tsx    # 儀表板
│   ├── JobSelection.tsx # 轉職選擇
│   ├── Login.tsx        # 登入/註冊
│   ├── Practice.tsx     # 練習頁面
│   ├── Profile.tsx      # 個人檔案
│   ├── Simulation.tsx   # 模擬考試
│   └── Stages.tsx       # 情境關卡
├── services/            # 服務層
│   ├── adminService.ts  # 管理員服務
│   ├── progressionService.ts # 進度系統服務
│   └── userService.ts   # 使用者服務
├── store/               # Zustand Store
│   ├── usePracticeStore.ts # 練習狀態
│   └── useUserStore.ts  # 使用者狀態
├── types/               # TypeScript 型別
│   ├── index.ts         # 共用型別
│   └── progression.ts   # 進度系統型別
├── App.tsx              # 主應用元件
└── main.tsx             # 入口檔案
```

## 經驗值系統

### 獲取方式
| 動作 | 經驗值 |
|------|--------|
| 答對練習題 | +10 EXP |
| 完成練習 | +50 EXP |
| 完成情境關卡 | +200 EXP |
| 模擬考試 | +100~500 EXP（依正確率） |

### 升級公式
```
升級所需經驗值 = 基礎值 × (1 + 成長係數 × 等級)²

預設參數：
- 基礎值: 100
- 成長係數: 0.15
```

## 授權

MIT License

## 貢獻

歡迎提交 Issue 和 Pull Request！
