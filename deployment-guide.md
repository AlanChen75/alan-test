# 專案下載與 GitHub Pages 部署指南

## 方法一：使用 Git 克隆專案

如果您的電腦有安裝 Git，可以在終端機執行：

```bash
# 在 Replit 中，點擊左側的 Shell 按鈕，然後執行：
git remote add origin https://github.com/您的用戶名/您的repository名稱.git
git push -u origin main
```

## 方法二：手動複製檔案

1. 在 Replit 中選擇所有檔案
2. 複製所有程式碼
3. 在本地建立相同的檔案結構

## 方法三：使用 Replit 的 Git 功能

1. 在 Replit 中點擊左側的 "Version Control" (版本控制) 圖示
2. 連接到您的 GitHub 帳戶
3. 推送到新的 repository

## GitHub Pages 部署設定

### 1. 修改 package.json

在 `package.json` 中添加以下內容：

```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist/public"
  },
  "homepage": "https://您的用戶名.github.io/repository名稱"
}
```

### 2. 安裝 gh-pages

```bash
npm install --save-dev gh-pages
```

### 3. 建立 GitHub Actions 工作流程

在專案根目錄建立 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
```

### 4. 在 GitHub 中啟用 Pages

1. 前往您的 repository 設定頁面
2. 點擊左側的 "Pages"
3. 在 "Source" 中選擇 "GitHub Actions"
4. 推送代碼後，GitHub Actions 會自動部署

### 5. 修改基礎路徑（如果需要）

如果您的網站不在根目錄，需要修改 `vite.config.ts`：

```typescript
export default defineConfig({
  base: '/您的repository名稱/',
  // ... 其他設定
});
```

## 注意事項

- GitHub Pages 只能託管靜態網站，後端 API 功能需要另外部署
- 聯絡表單需要使用第三方服務（如 Formspree、Netlify Forms）
- 確保所有圖片和資源使用相對路徑