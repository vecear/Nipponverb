# 🌍 多語言功能說明

Nipponverb 現在支援 7 種語言的完整介面翻譯！

## 📋 支援的語言

| 語言 | 代碼 | 旗幟 |
|------|------|------|
| English (英語) | `en` | 🇺🇸 |
| 繁體中文 | `zh-TW` | 🇹🇼 |
| 简体中文 | `zh-CN` | 🇨🇳 |
| 한국어 (韓語) | `ko` | 🇰🇷 |
| Español (西班牙語) | `es` | 🇪🇸 |
| Français (法語) | `fr` | 🇫🇷 |
| Deutsch (德語) | `de` | 🇩🇪 |

## ✨ 功能特點

### 1. 自動語言檢測
- 系統會自動檢測瀏覽器語言
- 首次訪問時自動設定為您的瀏覽器語言
- 語言選擇會儲存在本地儲存中

### 2. 語言切換器
- **登入頁面**：右上角有語言切換器
- **導航欄**：登入後在導航欄中可隨時切換語言
- 即時生效，無需重新載入頁面

### 3. 完整翻譯
所有介面文字都已翻譯，包括：
- 導航選單
- 登入/註冊表單
- 儀表板
- 練習模式
- 模擬考試
- 情境關卡
- 個人檔案
- 設定

## 🎯 如何使用

### 在登入頁面切換語言
1. 訪問登入頁面
2. 點擊右上角的語言切換器（顯示國旗和語言名稱）
3. 從下拉選單選擇您想要的語言
4. 介面立即更新為所選語言

### 登入後切換語言
1. 在導航欄中找到語言切換器（在個人頭像左側）
2. 點擊它開啟語言選單
3. 選擇您想要的語言
4. 整個應用程式立即切換語言

## 🛠️ 技術實作

### 使用的套件
- **i18next**: 核心國際化框架
- **react-i18next**: React 綁定
- **i18next-browser-languagedetector**: 自動檢測瀏覽器語言

### 檔案結構
```
src/
├── i18n/
│   ├── config.ts              # i18n 設定
│   └── locales/
│       ├── en.json            # 英語翻譯
│       ├── zh-TW.json         # 繁體中文翻譯
│       ├── zh-CN.json         # 簡體中文翻譯
│       ├── ko.json            # 韓語翻譯
│       ├── es.json            # 西班牙語翻譯
│       ├── fr.json            # 法語翻譯
│       └── de.json            # 德語翻譯
├── components/
│   └── LanguageSwitcher.tsx   # 語言切換器元件
```

### 如何在程式碼中使用

#### 1. 在元件中使用翻譯

```typescript
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('dashboard.welcome', { name: 'John' })}</h1>
      <p>{t('dashboard.continueJourney')}</p>
    </div>
  )
}
```

#### 2. 翻譯鍵的結構

翻譯檔案使用巢狀結構：

```json
{
  "dashboard": {
    "welcome": "Welcome back, {{name}}",
    "continueJourney": "Continue your Japanese learning journey"
  }
}
```

使用時：`t('dashboard.welcome', { name: 'John' })`

#### 3. 動態參數

使用雙大括號 `{{}}` 傳遞動態值：

```typescript
t('practice.question', { current: 1, total: 10 })
// 輸出: "Question 1 of 10"
```

## 📝 新增翻譯

### 步驟 1：編輯翻譯檔案

編輯 `src/i18n/locales/{language}.json`：

```json
{
  "newSection": {
    "newKey": "New translated text"
  }
}
```

### 步驟 2：在所有語言中添加相同的鍵

確保在所有 7 個語言檔案中都添加相同的鍵結構。

### 步驟 3：在元件中使用

```typescript
{t('newSection.newKey')}
```

## 🎨 語言切換器樣式

語言切換器使用 Glassmorphism 設計：
- 毛玻璃效果背景
- 流暢的動畫過渡
- 懸停效果
- 當前選擇的語言有勾選標記

## 🔧 進階設定

### 更改預設語言

編輯 `src/i18n/config.ts`：

```typescript
i18n.init({
  fallbackLng: 'en',  // 改為您想要的預設語言
  // ...
})
```

### 添加新語言

1. 在 `src/i18n/locales/` 中建立新的 JSON 檔案
2. 在 `src/i18n/config.ts` 中導入並註冊
3. 在 `src/components/LanguageSwitcher.tsx` 中添加語言選項

## 📊 翻譯覆蓋率

| 區域 | 覆蓋率 |
|------|--------|
| 導航 | 100% |
| 認證 | 100% |
| 儀表板 | 100% |
| 練習模式 | 100% |
| 模擬考試 | 100% |
| 情境關卡 | 100% |
| 個人檔案 | 100% |
| 設定 | 100% |
| 通用文字 | 100% |

## 🌟 未來改進

可能的增強功能：
- [ ] 添加更多語言（日語、義大利語等）
- [ ] 語言特定的日期/時間格式
- [ ] 語言特定的數字格式
- [ ] RTL（從右到左）語言支援
- [ ] 語音播放（Text-to-Speech）多語言支援

## 💡 提示

### 對於開發者
- 所有使用者可見的文字都應該使用 `t()` 函數
- 避免硬編碼任何文字
- 使用有意義的翻譯鍵名稱
- 保持所有語言檔案的結構一致

### 對於翻譯者
- 保持翻譯的長度與原文相近
- 考慮文化差異
- 使用適當的正式程度
- 測試翻譯在 UI 中的顯示效果

## 🐛 疑難排解

### 問題：翻譯沒有顯示

**解決方案**：
1. 檢查翻譯鍵是否正確
2. 確認翻譯檔案格式正確（有效的 JSON）
3. 重新啟動開發伺服器

### 問題：語言切換後部分文字沒有改變

**解決方案**：
1. 確認該文字使用了 `t()` 函數
2. 檢查所有語言檔案都包含該鍵

### 問題：語言選擇沒有保存

**解決方案**：
1. 檢查瀏覽器的 localStorage 是否啟用
2. 清除瀏覽器快取並重試

## 📚 參考資源

- [i18next 官方文檔](https://www.i18next.com/)
- [react-i18next 官方文檔](https://react.i18next.com/)
- [語言代碼標準 (ISO 639-1)](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

---

**多語言功能已完成！** 🎉

現在您的應用程式可以服務全球使用者！
