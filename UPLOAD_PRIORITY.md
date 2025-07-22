# GitHub 手動上傳檔案優先順序

## 如果無法自動推送，請按此順序手動上傳檔案

### 1. 首先上傳部署配置（最重要）
檔案：`.github/workflows/deploy.yml`
路徑：在 repository 根目錄建立 `.github/workflows/` 資料夾，然後上傳

### 2. 上傳專案配置檔案
- `package.json`
- `vite.config.ts` 
- `components.json`
- `tailwind.config.ts`
- `tsconfig.json`
- `postcss.config.js`

### 3. 上傳程式碼目錄
建立以下資料夾並上傳檔案：
- `client/src/` - 所有前端檔案
- `shared/` - 共用檔案
- `server/` - 後端檔案（GitHub Pages 用不到，但保留）

### 4. 上傳完成後
1. 前往 Repository Settings → Pages
2. Source 選擇 "GitHub Actions"
3. 等待自動部署

您的網站網址將是：
https://alanchen75.github.io/[您的repository名稱]/