# GitHub Pages 部署指南 - AlanChen75/alan-replit

## 第一步：推送檔案到 GitHub

### 使用 Replit Version Control

1. **在左側工具列找到 Version Control 圖示**（分叉形狀的圖標）
2. **點擊後應該會看到您的 repository：AlanChen75/alan-replit**
3. **添加所有檔案**：
   - 點擊 "Stage all changes" 或 "+" 按鈕
   - 確保以下重要檔案都被包含：
     - `.github/workflows/deploy.yml` (GitHub Actions 配置)
     - `client/` 目錄 (前端程式碼)
     - `package.json` (依賴配置)
     - `deployment-guide.md` (部署說明)

4. **提交變更**：
   - 在 commit message 輸入：`feat: Add professional portfolio website with GitHub Pages support`
   - 點擊 "Commit" 按鈕

5. **推送到 GitHub**：
   - 點擊 "Push" 按鈕
   - 等待上傳完成

## 第二步：在 GitHub 中設定 Pages

### 前往您的 Repository
1. 打開瀏覽器前往：https://github.com/AlanChen75/alan-replit
2. 確認所有檔案都已經上傳成功

### 啟用 GitHub Pages
1. 點擊 repository 頂部的 **"Settings"** 標籤
2. 在左側選單中找到 **"Pages"**
3. 在 "Source" 部分：
   - 選擇 **"GitHub Actions"**（而不是 Deploy from a branch）
4. 點擊 **"Save"**

## 第三步：等待自動部署

### GitHub Actions 會自動執行：
- ✅ 安裝 Node.js 20
- ✅ 安裝專案依賴
- ✅ 建置前端靜態檔案
- ✅ 部署到 GitHub Pages

### 監控部署狀態：
1. 在 repository 主頁點擊 **"Actions"** 標籤
2. 您會看到 "Deploy to GitHub Pages" 工作流程
3. 點擊最新的執行來查看進度
4. 等待所有步驟顯示綠色勾號

## 第四步：訪問您的網站

部署完成後（通常 2-5 分鐘）：
1. 前往 Settings → Pages
2. 您會看到網站 URL：**https://alanchen75.github.io/alan-replit/**
3. 點擊連結訪問您的專業個人網站

## 專案特色

您的網站將包含：
- 🎯 專業英雄區塊展示核心定位
- 📈 25年+ 經歷時間軸
- 🏆 專業認證和教學經歷
- 📚 教育背景展示
- 📱 完全響應式設計
- 🎨 深藍/綠色科技主題
- ⚡ 微動畫效果

## 注意事項

### 聯絡表單
由於 GitHub Pages 只支援靜態檔案，聯絡表單將需要第三方服務：
- **推薦：Formspree** (免費 50 次/月)
- 或者 **EmailJS** (瀏覽器直接發送)

### 自定義網域（可選）
如果您有自己的網域，可以在 Pages 設定中添加 Custom domain。

## 故障排除

如果部署失敗：
1. 檢查 Actions 標籤中的錯誤訊息
2. 確認所有必要檔案都已推送
3. 檢查 package.json 和依賴是否正確

需要幫助請參考 deployment-guide.md 或聯繫支援。