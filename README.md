# 🚀 React + Vite + Tailwind Template

เทมเพลต React ที่ทันสมัยและพร้อมใช้งาน มาพร้อมกับ Vite, TypeScript, Tailwind CSS และเครื่องมือที่ดีที่สุดสำหรับการพัฒนาเว็บแอปพลิเคชัน

## ✨ ฟีเจอร์เด่น

- ⚡ **เร็วแสง** - Vite HMR สำหรับการพัฒนาที่รวดเร็ว
- 🔷 **TypeScript** - Type safety และ IntelliSense ที่สมบูรณ์
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive** - ใช้งานได้ดีบนทุกอุปกรณ์
- 🧩 **Component-Based** - โครงสร้าง components ที่เป็นระเบียบ
- 🛠️ **Best Practices** - ESLint, Prettier, และมาตรฐานการเขียนโค้ด
- 🌙 **Dark Mode** - รองรับ dark mode (พร้อมใช้งาน)
- 📦 **Path Mapping** - Import paths ที่สะดวก (`@components`, `@utils`, etc.)

## 📦 เทคโนโลยีที่ใช้

- **Frontend Framework:** React 18
- **Build Tool:** Vite 4
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Routing:** React Router 6
- **Icons:** React Icons
- **Code Quality:** ESLint + Prettier
- **Package Manager:** npm/yarn/pnpm

## 🚀 การเริ่มต้นใช้งาน

### ข้อกำหนดเบื้องต้น

- Node.js >= 16.0.0
- npm >= 7.0.0

### การติดตั้ง

1. **Clone โปรเจกต์**

   ```bash
   git clone https://github.com/your-username/react-vite-template.git
   cd react-vite-template
   ```

2. **ติดตั้ง dependencies**

   ```bash
   npm install
   # หรือ
   yarn install
   # หรือ
   pnpm install
   ```

3. **รันโปรเจกต์**

   ```bash
   npm run dev
   # หรือ
   yarn dev
   # หรือ
   pnpm dev
   ```

4. **เปิดเบราว์เซอร์**
   ```
   http://localhost:3000
   ```

## 📂 โครงสร้างโฟลเดอร์

```
src/
├── components/          # React components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── sections/       # Section components (Hero, Features, etc.)
│   └── ui/             # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles และ CSS files
└── assets/             # Static assets (images, fonts, etc.)
```

## 🛠️ สคริปต์ที่มีให้ใช้

```bash
# Development
npm run dev          # รัน development server
npm run build        # Build สำหรับ production
npm run preview      # Preview production build

# Code Quality
npm run lint         # รัน ESLint
npm run format       # รัน Prettier
npm run type-check   # ตรวจสอบ TypeScript types
```

## 🎨 การปรับแต่ง Tailwind CSS

### สี (Colors)

แก้ไขใน `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      },
      // เพิ่มสีของคุณที่นี่
    }
  }
}
```

### Fonts

แก้ไขใน `src/styles/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}
```

## 🧩 Components ที่มีให้ใช้

### Layout Components

- `Header` - Navigation header พร้อม responsive menu
- `Footer` - Footer พร้อมลิงก์และข้อมูลติดต่อ
- `Layout` - Main layout wrapper

### Section Components

- `Hero` - Hero section สำหรับหน้าแรก
- `Features` - แสดงฟีเจอร์ต่างๆ
- `CTA` - Call-to-action section

### UI Components

- `Button` - ปุ่มหลากหลายรูปแบบ
- `Card` - การ์ดสำหรับแสดงเนื้อหา
- `Form` - ฟอร์มและ input components

## 🪝 Custom Hooks

- `useLocalStorage` - จัดการ localStorage
- `useDebounce` - Debounce values
- `useClickOutside` - ตรวจจับการคลิกนอก element
- `useWindowSize` - ขนาดหน้าต่าง
- `useMediaQuery` - Media queries
- `useAsync` - จัดการ async operations
- `useForm` - จัดการ form state
- `useToggle` - Toggle state
- `useCopyToClipboard` - Copy ข้อความ

## 🔧 การตั้งค่า Path Mapping

โปรเจกต์นี้ใช้ path mapping สำหรับ import ที่สะดวก:

```typescript
import Header from '@components/layout/Header'
import { formatDate } from '@utils/index'
import { User } from '@types/index'
```

Path mappings ที่มีให้ใช้:

- `@/*` → `./src/*`
- `@components/*` → `./src/components/*`
- `@pages/*` → `./src/pages/*`
- `@hooks/*` → `./src/hooks/*`
- `@utils/*` → `./src/utils/*`
- `@types/*` → `./src/types/*`
- `@assets/*` → `./src/assets/*`
- `@styles/*` → `./src/styles/*`

## 📝 Code Style

โปรเจกต์นี้ใช้:

- **ESLint** สำหรับ code linting
- **Prettier** สำหรับ code formatting
- **EditorConfig** สำหรับ editor settings

### การตั้งค่า VS Code

สร้างไฟล์ `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 🌙 Dark Mode

โปรเจกต์รองรับ dark mode ผ่าน Tailwind CSS:

```jsx
// ใช้ dark: prefix
<div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
  Content
</div>
```

## 📦 การเพิ่ม Dependencies ใหม่

```bash
# UI Libraries
npm install @headlessui/react @heroicons/react

# State Management
npm install zustand

# HTTP Client
npm install axios

# Form Handling
npm install react-hook-form @hookform/resolvers yup

# Animation
npm install framer-motion
```

## 🚀 Deployment

### Vercel

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
# แล้ว drag & drop โฟลเดอร์ dist ใน Netlify
```

### GitHub Pages

```bash
npm run build
# ใช้ GitHub Actions หรือ push โฟลเดอร์ dist ไป gh-pages branch
```

## 🤝 การมีส่วนร่วม

1. Fork โปรเจกต์
2. สร้าง feature branch (`git checkout -b feature/amazing-feature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add amazing feature'`)
4. Push ไป branch (`git push origin feature/amazing-feature`)
5. สร้าง Pull Request

## 📄 License

โปรเจกต์นี้ใช้ [MIT License](LICENSE)

## 🙏 ขอบคุณ

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**สร้างด้วย ❤️ โดย [Your Name](https://github.com/your-username)**
