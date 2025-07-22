# Replit Version Control 操作指南

## 找到 Version Control 面板

### 步驟 1：定位 Version Control 圖示
在 Replit 的**左側工具列**中找到以下圖示：
- 看起來像**分叉**或**樹枝分岔**的符號
- 通常在檔案管理器下方
- 可能標示為 "Git" 或 "Version Control"

### 步驟 2：打開 Version Control 面板
點擊該圖示後，右側會出現 Version Control 面板

## 在 Version Control 面板中的操作

### 查看變更的檔案
您會看到一個檔案列表，顯示：
- 新增的檔案（標示為 "A" 或綠色）
- 修改的檔案（標示為 "M" 或黃色）
- 刪除的檔案（標示為 "D" 或紅色）

### 添加檔案到 staging（準備提交）
有兩種方式：

#### 方式 1：添加所有檔案
- 尋找 **"Stage all changes"** 按鈕
- 或者 **"Add all"** 按鈕
- 或者一個 **"+"** 符號旁邊寫著 "all"

#### 方式 2：逐個添加檔案
- 在每個檔案旁邊會有一個 **"+"** 按鈕
- 點擊個別檔案的 "+" 來添加

### 提交變更
1. 在底部會有一個 **commit message** 輸入框
2. 輸入提交訊息，例如：`Add professional portfolio website`
3. 點擊 **"Commit"** 按鈕

### 推送到 GitHub
1. 提交完成後，會出現 **"Push"** 按鈕
2. 點擊 Push 將檔案上傳到 GitHub

## 如果找不到 Version Control

### 替代方案 1：使用頂部選單
- 點擊頂部的 "Tools" 或"工具"
- 尋找 "Git" 或 "Version Control" 選項

### 替代方案 2：鍵盤快捷鍵
- 嘗試按 `Ctrl + Shift + G`（Windows/Linux）
- 或 `Cmd + Shift + G`（Mac）

## 重要檔案確認
確保以下檔案被包含在提交中：
- ✅ `.github/workflows/deploy.yml`
- ✅ `client/` 目錄及所有子檔案
- ✅ `package.json`
- ✅ `vite.config.ts`
- ✅ `replit.md`
- ✅ 所有組件檔案

## 故障排除

### 如果看不到變更
- 確認檔案已經保存
- 刷新 Replit 頁面
- 重新打開 Version Control 面板

### 如果連接失敗
- 確認已正確連接到 AlanChen75/alan-replit
- 檢查 GitHub 授權是否正確
- 嘗試重新連接 repository