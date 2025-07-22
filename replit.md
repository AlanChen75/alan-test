# Professional Portfolio Application - Replit.md

## Overview

This is a full-stack professional portfolio application built for 陳重光 (Chen Chung-Kuang), showcasing 25+ years of technology leadership experience. The application features a modern React frontend with a Node.js/Express backend, designed to highlight professional achievements, certifications, and contact capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: Radix UI primitives with custom theming
- **Animation**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the application
- **API Design**: RESTful endpoints with JSON responses
- **Request Handling**: Express middleware for logging, error handling, and request parsing
- **Development**: Vite for hot reloading and development server integration

### Database & Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for production with Neon Database)
- **Development Storage**: In-memory storage implementation for development
- **Migrations**: Drizzle Kit for schema management and migrations

## Key Components

### Frontend Components
1. **Navigation**: Fixed navigation with smooth scrolling between sections
2. **Hero Section**: Professional introduction with call-to-action buttons
3. **Experience Timeline**: Chronological display of professional achievements
4. **Certifications Section**: Professional certifications and teaching experience
5. **Education Timeline**: Academic background presentation
6. **Contact Section**: Interactive contact form with backend integration

### Backend Components
1. **Route Registration**: Centralized API route management
2. **Storage Layer**: Abstracted storage interface with multiple implementations
3. **Contact Message System**: Form submission handling and storage
4. **Error Handling**: Comprehensive error middleware with proper HTTP status codes
5. **Development Tools**: Vite integration for seamless development experience

### Shared Components
1. **Schema Definitions**: Drizzle ORM schemas with Zod validation
2. **Type Safety**: Shared TypeScript types between frontend and backend
3. **Validation**: Input validation using Zod schemas

## Data Flow

### Contact Form Submission
1. User fills out contact form in React component
2. Form data validated using Zod schema on frontend
3. TanStack React Query sends POST request to `/api/contact`
4. Backend validates data again using shared schema
5. Contact message stored in database/memory storage
6. Success/error response sent back to frontend
7. User feedback provided via toast notifications

### Development vs Production
- **Development**: Uses in-memory storage for quick iteration
- **Production**: PostgreSQL database with Drizzle ORM
- **Environment Detection**: Automatic switching based on NODE_ENV

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **UI Library**: Comprehensive Radix UI component collection
- **Validation**: Zod for runtime type validation
- **Query Management**: TanStack React Query for API state management
- **Styling**: Tailwind CSS with class-variance-authority for component variants

### Development Dependencies
- **Build Tools**: Vite for frontend builds, esbuild for backend compilation
- **TypeScript**: Full TypeScript support with strict configuration
- **Database Tools**: Drizzle Kit for migrations and schema management

### Replit Integration
- **Error Overlay**: @replit/vite-plugin-runtime-error-modal for development
- **Cartographer**: @replit/vite-plugin-cartographer for code navigation (development only)

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles Node.js server code
3. **Output Structure**: Frontend assets in `dist/public`, server code in `dist/index.js`

### Environment Configuration
- **Development**: `npm run dev` - Hot reloading with Vite integration
- **Production**: `npm run build && npm start` - Optimized builds with static file serving
- **Database**: Environment variable `DATABASE_URL` for database connectivity

### File Structure
- **Client**: React application in `client/` directory
- **Server**: Express backend in `server/` directory  
- **Shared**: Common schemas and types in `shared/` directory
- **Configuration**: Build tools and TypeScript config in root

### Production Considerations
- Static file serving handled by Express in production
- Database migrations managed through Drizzle Kit
- Error handling provides appropriate HTTP status codes
- CORS and security considerations built into Express setup

The architecture prioritizes type safety, developer experience, and scalability while maintaining clean separation between frontend, backend, and shared concerns. The use of modern tooling like Drizzle ORM and TanStack React Query ensures robust data handling and optimal user experience.

## GitHub Pages 部署

### 專案下載方法
由於 Replit 介面沒有直接下載選項，推薦使用以下方法：

1. **使用 Replit Git 功能**：
   - 點擊左側 "Version Control" 圖示
   - 連接 GitHub 帳戶並建立新 repository
   - 推送所有檔案到 GitHub

2. **手動複製檔案**：
   - 選擇並複製所有專案檔案
   - 在本地重建檔案結構

### GitHub Pages 自動部署
專案已配置 GitHub Actions 工作流程（.github/workflows/deploy.yml），會自動：
- 在推送到 main 分支時觸發
- 安裝依賴並建置專案
- 部署到 GitHub Pages

### 靜態部署注意事項
- GitHub Pages 僅支援靜態檔案，後端 API 功能需要第三方服務
- 聯絡表單需要整合 Formspree 或 Netlify Forms
- 所有資源使用相對路徑確保正確載入

### 最新專案狀態
- ✅ 完成專業個人網站建置
- ✅ 實作響應式設計
- ✅ 配置 GitHub Actions 部署流程
- ⚠️ GitHub Repository 設定問題：顯示 alan-test 而非 alan-replit
- ⚠️ 需要重新連接正確的 repository 或建立新的
- ⚠️ 需要整合第三方聯絡表單服務用於 GitHub Pages