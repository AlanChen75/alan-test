# 手動推送檔案到 GitHub Repository

## 情況說明
Repository 已建立但檔案未自動推送，需要手動操作。

## 方法 1：使用 Replit Git 面板（推薦）

### 步驟 1：找到 Git 操作面板
1. 點擊頂部的 **"Git"** 標籤（不是 Settings）
2. 或在左側工具列找到 Git 圖示（分叉符號）

### 步驟 2：檢查 Remote 連接
- 確認已連接到正確的 repository
- 如果顯示 "No remote"，需要重新連接

### 步驟 3：推送檔案
1. 在 Git 面板中看到所有檔案變更
2. 點擊 **"Stage all"** 或 **"Add all"**
3. 輸入 commit 訊息：`Initial commit: Professional portfolio`
4. 點擊 **"Commit"**
5. 點擊 **"Push"**

## 方法 2：手動上傳檔案到 GitHub

### 如果 Git 推送仍然失敗：

#### 在 GitHub 網站操作：
1. 前往 https://github.com/AlanChen75/[您的repo名稱]
2. 點擊 **"uploading an existing file"**
3. 將以下重要檔案逐一上傳：

**必須上傳的檔案**：
- `.github/workflows/deploy.yml`
- `package.json`
- `vite.config.ts`
- `client/` 整個目錄
- `shared/` 整個目錄
- `components.json`
- `tailwind.config.ts`
- `tsconfig.json`
- `postcss.config.js`

#### 上傳順序：
1. 先上傳 `.github/workflows/deploy.yml`（GitHub Actions 配置）
2. 然後上傳 `package.json` 和其他配置檔案
3. 最後上傳 `client/` 目錄的所有檔案

## 方法 3：重新連接 Repository

### 如果連接有問題：
1. 在 Git Settings 中點擊 **"Disconnect"**
2. 重新點擊 **"Connect to GitHub"**
3. 選擇正確的 repository
4. 重試推送操作

## 驗證步驟

### 推送成功後檢查：
1. 前往 GitHub repository
2. 確認檔案已出現
3. 特別檢查 `.github/workflows/deploy.yml` 是否存在

### 設定 GitHub Pages：
1. Repository Settings → Pages
2. Source 選擇 **"GitHub Actions"**
3. 等待自動部署（2-5分鐘）

## 部署網址
完成後您的網站將在：
- `https://alanchen75.github.io/[repository-name]/`