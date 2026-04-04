# MPC FRONTEND - HƯỚNG DẪN TỐI ƯU HÓA PROJECT

> 📅 **Được tạo:** April 4, 2026  
> 🎯 **Mục đích:** Tài liệu phân tích và roadmap tối ưu hóa toàn diện cho MPC Frontend Project  
> 👨‍💻 **Role:** Senior Frontend Developer Analysis

---

## 📋 MỤC LỤC

1. [Tổng Quan Project](#1-tổng-quan-project)
2. [Phân Tích Kỹ Thuật](#2-phân-tích-kỹ-thuật)
3. [Vấn Đề Đã Phát Hiện](#3-vấn-đề-đã-phát-hiện)
4. [Roadmap Tối Ưu Hóa](#4-roadmap-tối-ưu-hóa)
5. [Implementation Chi Tiết](#5-implementation-chi-tiết)
6. [Best Practices & Guidelines](#6-best-practices--guidelines)
7. [Checklist Hoàn Thành](#7-checklist-hoàn-thành)

---

## 1. TỔNG QUAN PROJECT

### 1.1 Thông Tin Cơ Bản

**Loại Project:** Website Công Ty / Corporate Landing Page  
**Tên Project:** MPC Frontend - Website Cảng MIPEC  
**Địa điểm:** Hải Phòng, Vietnam

**Mô tả:**  
Website giới thiệu và cung cấp dịch vụ cho Cảng Container MIPEC, bao gồm thông tin về công ty, cơ sở hạ tầng, dịch vụ cảng biển, tin tức, tuyển dụng và liên hệ.

**Người dùng chính:**
- Khách hàng doanh nghiệp (logistics, shipping companies)
- Đối tác kinh doanh
- Ứng viên tuyển dụng
- Công chúng quan tâm đến dịch vụ cảng biển

### 1.2 Cấu Trúc Trang

Project bao gồm **8 trang chính** với **3 trang có chi tiết**:

```
📄 Trang chính:
├─ 🏠 Trang chủ (home.html)
├─ ℹ️ Về MPC (about_mipec.html)
├─ 🏗️ Cơ sở hạ tầng (ha-tang.html) - có sidebar menu
├─ 🛠️ Dịch vụ (dich-vu.html) → chi-tiet-dich-vu.html
├─ 📰 Tin tức (tin-tuc.html) → chi-tiet-tin-tuc.html
├─ 💼 Tuyển dụng (tuyen-dung.html) → chi-tiet-tuyen-dung.html
├─ 📚 Thư viện (thu-vien.html)
└─ 📞 Liên hệ (lien-he.html)
```

### 1.3 Cấu Trúc Thư Mục

```
mpc_frontend/
├── README.md                     # Minimal content
├── components/                   # Reusable components
│   ├── Header.html              # Empty file
│   ├── Header.css               # Header styles
│   ├── Sidebar.html             # HTML version
│   ├── Sidebar.tsx              # React/Next.js version (chưa tích hợp)
│   ├── Sidebar.css
│   ├── Footer.css
│   └── (Footer.html không tồn tại)
├── pages/                        # All page folders
│   ├── Trang chủ/
│   │   ├── home.html
│   │   └── page.css
│   ├── About_mipec/
│   │   ├── about_mipec.html
│   │   └── about_mipec.css
│   ├── Cơ sở hạ tầng/
│   │   ├── ha-tang.html
│   │   └── ha-tang.css
│   ├── Dịch vụ/
│   │   ├── dich-vu.html
│   │   ├── dich-vu.css
│   │   ├── chi-tiet-dich-vu.html
│   │   └── chi-tiet-dich-vu.css
│   ├── Liên hệ/
│   │   ├── lien-he.html
│   │   └── lien-he.css
│   ├── Thư viện/
│   │   ├── thu-vien.html
│   │   └── thu-vien.css
│   ├── Tin tức/
│   │   ├── tin-tuc.html
│   │   ├── tin-tuc.css
│   │   ├── chi-tiet-tin-tuc.html
│   │   └── chi-tiet-tin-tuc.css
│   └── Tuyển dụng/
│       ├── tuyen-dung.html
│       ├── tuyen-dung.css
│       ├── chi-tiet-tuyen-dung.html
│       └── chi-tiet-tuyen-dung.css
└── assets/                       # Images organized by section
    ├── logo.png
    ├── about/
    ├── Dịch vụ/
    ├── Hạ tầng/
    ├── Liên hệ/
    ├── Thư viện/
    ├── Tin tức/
    ├── Trang chủ/
    └── Tuyển dụng/
```

---

## 2. PHÂN TÍCH KỸ THUẬT

### 2.1 Tech Stack

#### **Frontend Core**
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling (Flexbox, Grid, Custom Properties, Animations)
- **JavaScript** - Vanilla JS (minimal usage, chủ yếu event handlers)

#### **Framework & Libraries**
- **Bootstrap 5.3.0** - Grid system và components (via CDN)
- **Bootstrap Icons 1.11.0** - Icon set
- **Font Awesome 6.5.0** - Additional icons

#### **Typography**
- **Google Fonts:** 'Barlow' (weights: 400, 500, 600, 700)

#### **Hybrid Technology** (Chưa tích hợp hoàn toàn)
- **React + TypeScript** - Sidebar.tsx component
- **Next.js** - 'use client' directive trong Sidebar.tsx
- **Vite** - Build tool (có trong .gitignore, chưa thấy config)

#### **Bootstrap Integration**
- **CDN:** `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`
- **Không dùng npm package** - Tất cả qua CDN

### 2.2 Component Architecture

#### **Header Component** (`components/Header.css`)
```
Đặc điểm:
✓ Logo 59x61px
✓ Horizontal navigation menu (8 items)
✓ Dropdown submenu cho "Dịch vụ" (6 sub-items)
✓ Language selector (Vietnamese flag + dropdown icon)
✓ Mobile hamburger menu toggle
✓ Transparent background khi ở trên hero banner
✓ White text với hover effects
✓ Responsive với mobile menu
```

**Navigation Structure:**
```
TRANG CHỦ
VỀ MPC
CƠ SỞ HẠ TẦNG
DỊCH VỤ ▼
  ├─ DỊCH VỤ CẢNG QUẢN TRỊ E-PORT
  ├─ BẢNG GIÁ CHỨNG TỪ
  ├─ TRA CỨU VỊ TRÍ CONTAINER
  ├─ TRA CỨU HÓA ĐƠN ĐIỆN TỬ
  ├─ THÔNG TIN TÀU RA VÀO CẢNG
  └─ BẢNG THỦY TRIỀU
TIN TỨC
TUYỂN DỤNG
LIÊN HỆ
```

#### **Sidebar Component** (`components/Sidebar.css` & `Sidebar.tsx`)
```
Đặc điểm:
✓ Vertical navigation menu
✓ Title header (uppercase)
✓ Active state indicator (red left border)
✓ Hover effects
✓ Dùng trong Infrastructure và detail pages
✓ Có 2 versions: HTML tĩnh và React component
```

#### **Footer Component** (`components/Footer.css`)
```
Đặc điểm:
✓ Dark blue background (#2c3e7d)
✓ 4-column grid layout
✓ Company logo + description section
✓ Social media icons (circular white buttons với hover)
✓ Menu columns (Links, Support sections)
✓ Professional spacing và typography
```

### 2.3 Design System

#### **Color Palette**
```css
Primary Colors:
├─ Blue: #2c3e7d (header, footer, primary elements)
├─ Red: #e74c3c / #DF1F28 (accent, hover, active states)

Text Colors:
├─ Dark Gray: #333333 (main text)
├─ Medium Gray: #555555 (secondary text)
├─ Light Gray: #828282, #BDBDBD (muted text)

Background Colors:
├─ White: #FFFFFF
├─ Light Gray: #f9f9f9, #f5f5f5 (sections)
├─ Off-white: #FAFAFA
```

#### **Typography Scale**
```css
Font Family: 'Barlow', sans-serif

Font Weights:
├─ 400 (Regular) - body text
├─ 500 (Medium) - emphasized text
├─ 600 (Semi-bold) - subheadings
├─ 700 (Bold) - headings

Font Sizes: (không consistent)
├─ Headings: 24px - 48px
├─ Body: 14px - 18px
├─ Small: 12px - 14px
```

#### **Spacing System** (không standardized)
```
Container max-width: 1200px - 1400px (varies)
Horizontal padding: 30px - 40px
Vertical margin: 20px - 60px
Gap spacing: 15px - 30px
```

#### **Layout Patterns**
```css
✓ Max-width containers (1200px-1400px)
✓ CSS Grid cho multi-column layouts
✓ Flexbox cho navigation và component spacing
✓ Hero sections với overlay effect
✓ Card-based layouts (services, news, jobs)
```

### 2.4 Responsive Strategy

**Breakpoints** (không consistent giữa các files):
```css
Mobile: max-width: 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

**Current Approach:**
- ✅ Mobile hamburger menu có sẵn
- ✅ Bootstrap responsive grid
- ⚠️ Custom media queries không consistent
- ⚠️ Không rõ là mobile-first hay desktop-first

### 2.5 Navigation System

**Type:** Multi-page static site (không có SPA routing)

**Navigation Methods:**
```
1. Header Navigation
   ├─ Main menu links
   └─ Dropdown submenu

2. Sidebar Navigation (Infrastructure, Services)
   ├─ Section links
   └─ Active state highlighting

3. Card Links
   ├─ "Xem thêm" buttons
   └─ Clickable cards

4. Breadcrumb
   └─ Directory-based navigation (relative paths)
```

**Path Structure:**
```
Relative paths: ../Dịch vụ/dich-vu.html
Up directory: ../../assets/logo.png
```

---

## 3. VẤN ĐỀ ĐÃ PHÁT HIỆN

### 3.1 ⚠️ HIGH PRIORITY ISSUES

#### **Issue #1: CSS Code Duplication**
**Mức độ:** 🔴 Critical  
**Impact:** Maintenance nightmare, file size bloat

**Chi tiết:**
```
Duplicate Patterns:
├─ Hero banner styles: Lặp lại ở 5+ files
├─ Button styles: Mỗi page tự define lại
├─ Card components: Service cards, news cards, job cards có styles giống nhau
├─ Form inputs: Contact form, recruitment form lặp lại styles
├─ Container max-width: Mỗi file define lại
└─ Hover effects: Cùng 1 pattern nhưng copy-paste khắp nơi
```

**Consequences:**
- 🐛 Bug ở 1 nơi phải fix ở nhiều nơi
- ⏱️ Mất thời gian maintenance
- 📦 File size lớn không cần thiết
- 🎨 Inconsistent UI khi update chỉ 1 file

---

#### **Issue #2: Thiếu CSS Variables System**
**Mức độ:** 🔴 Critical  
**Impact:** Hard to maintain, inconsistent design

**Chi tiết:**
```
Hard-coded Values:
├─ Colors: #2c3e7d xuất hiện 20+ lần
├─ Font sizes: 16px, 18px, 20px random khắp nơi
├─ Spacing: margin: 30px; padding: 20px; không có quy chuẩn
├─ Border radius: 5px, 8px, 10px không consistent
├─ Breakpoints: 768px, 800px, 1024px khác nhau giữa files
└─ Shadows: box-shadow values copy-paste
```

**Example của bad practice:**
```css
/* In page.css */
.button {
  background-color: #2c3e7d;
  color: #ffffff;
  padding: 15px 30px;
}

/* In dich-vu.css - SAME but slightly different */
.service-button {
  background-color: #2c3e7d;
  color: white;
  padding: 12px 25px; /* Different!!! */
}
```

**Nên là:**
```css
/* variables.css */
:root {
  --color-primary: #2c3e7d;
  --color-white: #ffffff;
  --spacing-md: 15px;
  --spacing-lg: 30px;
}

/* All files */
.button {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-md) var(--spacing-lg);
}
```

---

#### **Issue #3: Hybrid Tech Stack Confusion**
**Mức độ:** 🟡 Medium-High  
**Impact:** Unclear development direction

**Chi tiết:**
```
Current State:
├─ Mostly: HTML + CSS tĩnh
├─ Has: Sidebar.tsx (React/Next.js component)
├─ But: Không được dùng, có Sidebar.html riêng
├─ Has: .gitignore references Vite
├─ But: Không có vite.config.js
└─ Result: Confusion về hướng phát triển
```

**Questions:**
- ❓ Project sẽ migrate sang React/Next.js?
- ❓ Hay giữ nguyên HTML tĩnh?
- ❓ Sidebar.tsx là thử nghiệm hay production code?
- ❓ Build tool nào sẽ dùng? (Vite? Webpack? None?)

---

#### **Issue #4: Inconsistent Responsive**
**Mức độ:** 🟡 Medium  
**Impact:** Poor mobile/tablet experience

**Chi tiết:**
```
Problems:
├─ Breakpoints khác nhau giữa các files
├─ Không có mobile-first hay desktop-first strategy rõ ràng
├─ Images không có responsive attributes (srcset, sizes)
├─ Font sizes không scale properly
├─ Mobile menu có nhưng chưa test kỹ
└─ Grid columns không responsive đồng nhất
```

**Example:**
```css
/* page.css */
@media (max-width: 768px) { ... }

/* dich-vu.css */
@media (max-width: 800px) { ... } /* WHY 800px??? */

/* ha-tang.css */
@media screen and (max-width: 1024px) { ... } /* Different syntax! */
```

---

### 3.2 🟡 MEDIUM PRIORITY ISSUES

#### **Issue #5: No Component Reusability**
```
Current: Mỗi page có HTML hoàn chỉnh với Header/Footer
Problem: Update header phải sửa tất cả 11 files HTML
Solution needed: Component include system hoặc template engine
```

#### **Issue #6: Performance Issues**
```
Observations:
├─ Large images không được optimize
├─ Không có lazy loading
├─ CSS không minified
├─ Multiple icon libraries (Bootstrap Icons + Font Awesome)
├─ Tất cả qua CDN → nhiều HTTP requests
└─ Không có caching strategy
```

#### **Issue #7: Accessibility Concerns**
```
Missing:
├─ Proper ARIA labels
├─ Keyboard navigation testing
├─ Alt texts cho images (cần verify)
├─ Focus states không rõ ràng
├─ Color contrast ratios chưa kiểm tra
└─ Screen reader compatibility
```

#### **Issue #8: No Build Process**
```
Current: Manual development
Missing:
├─ CSS preprocessing (SASS/LESS)
├─ Minification
├─ Autoprefixer
├─ Image optimization pipeline
├─ Development server with hot reload
└─ Production build process
```

---

### 3.3 🟢 LOW PRIORITY ISSUES

#### **Issue #9: Code Organization**
```
├─ No utilities/helpers folder
├─ No shared constants
├─ README.md is minimal
└─ No development documentation
```

#### **Issue #10: Version Control**
```
├─ No CHANGELOG.md
├─ No contribution guidelines
└─ Git workflow chưa rõ ràng
```

---

## 4. ROADMAP TỐI ƯU HÓA

### 📊 Overview

```
Timeline: 4-6 tuần (có thể chia nhỏ, làm dần)
Approach: Incremental improvement
Strategy: Foundation → Enhancement → Advanced
```

### 🎯 Phân Chia Giai Đoạn

```
PHASE 1: CSS Foundation (Tuần 1-2)
  ↓
PHASE 2: Responsive & UX (Tuần 2-3)
  ↓
PHASE 3: Performance (Tuần 3-4)
  ↓
PHASE 4: Backend Prep (Tuần 4+)
```

---

### 📅 PHASE 1: CSS FOUNDATION (Tuần 1-2)

**Mục tiêu:** Tạo foundation vững chắc cho toàn bộ styling system

#### **Task 1.1: Tạo CSS Variables System** ⏱️ 2-3 giờ

**File mới:** `assets/css/variables.css`

**Nội dung:**
```css
:root {
  /* ========================================
     COLORS
     ======================================== */
  
  /* Primary Colors */
  --color-primary: #2c3e7d;
  --color-primary-dark: #1f2d5c;
  --color-primary-light: #3d4f94;
  
  /* Accent Colors */
  --color-accent: #e74c3c;
  --color-accent-dark: #c03a2b;
  --color-accent-light: #ff6b5b;
  
  /* Neutral Colors */
  --color-white: #ffffff;
  --color-black: #000000;
  
  /* Text Colors */
  --color-text-primary: #333333;
  --color-text-secondary: #555555;
  --color-text-muted: #828282;
  --color-text-light: #BDBDBD;
  
  /* Background Colors */
  --color-bg-light: #f9f9f9;
  --color-bg-lighter: #fafafa;
  --color-bg-gray: #f5f5f5;
  
  /* Border Colors */
  --color-border: #e0e0e0;
  --color-border-light: #f0f0f0;
  
  /* ========================================
     TYPOGRAPHY
     ======================================== */
  
  /* Font Families */
  --font-primary: 'Barlow', sans-serif;
  
  /* Font Sizes */
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-md: 18px;
  --font-size-lg: 20px;
  --font-size-xl: 24px;
  --font-size-2xl: 32px;
  --font-size-3xl: 40px;
  --font-size-4xl: 48px;
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  --line-height-loose: 2;
  
  /* ========================================
     SPACING
     ======================================== */
  
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 40px;
  --spacing-3xl: 48px;
  --spacing-4xl: 64px;
  
  /* ========================================
     LAYOUT
     ======================================== */
  
  /* Container Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-max: 1400px;
  
  /* ========================================
     EFFECTS
     ======================================== */
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;
  
  /* Z-Index Scale */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-tooltip: 1060;
  
  /* ========================================
     BREAKPOINTS (for reference)
     ======================================== */
  
  /* Use in media queries:
     Mobile: max-width: 767px
     Tablet: 768px - 1023px
     Desktop: 1024px+
  */
}
```

**Kết quả:**
- ✅ Tất cả colors, sizes, spacing ở 1 nơi
- ✅ Dễ dàng theme switching sau này
- ✅ Consistency across toàn project

---

#### **Task 1.2: Tạo Common CSS** ⏱️ 4-6 giờ

**File mới:** `assets/css/common.css`

**Sections:**

**A. Reset & Base Styles**
```css
/* ========================================
   RESET & BASE
   ======================================== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  background-color: var(--color-white);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color var(--transition-base);
}

ul, ol {
  list-style: none;
}
```

**B. Container & Layout Utilities**
```css
/* ========================================
   CONTAINERS
   ======================================== */

.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.container-fluid {
  width: 100%;
  padding: 0 var(--spacing-md);
}

/* Section Spacing */
.section {
  padding: var(--spacing-4xl) 0;
}

.section-sm {
  padding: var(--spacing-3xl) 0;
}
```

**C. Hero Section Pattern** (dùng ở nhiều pages)
```css
/* ========================================
   HERO SECTIONS
   ======================================== */

.hero-section {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.hero-section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.5)
  );
  z-index: 1;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: var(--color-white);
}

.hero-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

/* Responsive Hero */
@media (max-width: 767px) {
  .hero-section {
    height: 250px;
  }
  
  .hero-title {
    font-size: var(--font-size-2xl);
  }
}
```

**D. Button Components**
```css
/* ========================================
   BUTTONS
   ======================================== */

.btn {
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  text-align: center;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-accent {
  background-color: var(--color-accent);
  color: var(--color-white);
}

.btn-accent:hover {
  background-color: var(--color-accent-dark);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

/* Size variants */
.btn-sm {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.btn-lg {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-lg);
}
```

**E. Card Components** (dùng cho services, news, jobs)
```css
/* ========================================
   CARDS
   ======================================== */

.card {
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: var(--spacing-lg);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.card-text {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.card-link {
  display: inline-flex;
  align-items: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
  transition: color var(--transition-base);
}

.card-link:hover {
  color: var(--color-accent-dark);
}

.card-link i {
  margin-left: var(--spacing-xs);
}

/* Card Grid Layouts */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

@media (max-width: 767px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
```

**F. Form Elements**
```css
/* ========================================
   FORMS
   ======================================== */

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-label {
  display: block;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.form-control {
  width: 100%;
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition: border-color var(--transition-base);
}

.form-control:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(44, 62, 125, 0.1);
}

textarea.form-control {
  min-height: 120px;
  resize: vertical;
}
```

**G. Utility Classes**
```css
/* ========================================
   UTILITY CLASSES
   ======================================== */

/* Text Alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

/* Text Colors */
.text-primary { color: var(--color-primary); }
.text-accent { color: var(--color-accent); }
.text-muted { color: var(--color-text-muted); }
.text-white { color: var(--color-white); }

/* Font Weights */
.font-normal { font-weight: var(--font-weight-normal); }
.font-medium { font-weight: var(--font-weight-medium); }
.font-semibold { font-weight: var(--font-weight-semibold); }
.font-bold { font-weight: var(--font-weight-bold); }

/* Spacing Utilities */
.mt-0 { margin-top: 0; }
.mt-1 { margin-top: var(--spacing-xs); }
.mt-2 { margin-top: var(--spacing-sm); }
.mt-3 { margin-top: var(--spacing-md); }
.mt-4 { margin-top: var(--spacing-lg); }

.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: var(--spacing-xs); }
.mb-2 { margin-bottom: var(--spacing-sm); }
.mb-3 { margin-bottom: var(--spacing-md); }
.mb-4 { margin-bottom: var(--spacing-lg); }

/* Display */
.d-none { display: none; }
.d-block { display: block; }
.d-inline-block { display: inline-block; }
.d-flex { display: flex; }
.d-grid { display: grid; }

/* Flexbox */
.flex-row { flex-direction: row; }
.flex-column { flex-direction: column; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.align-center { align-items: center; }
.gap-1 { gap: var(--spacing-sm); }
.gap-2 { gap: var(--spacing-md); }
.gap-3 { gap: var(--spacing-lg); }
```

---

#### **Task 1.3: Refactor Existing CSS Files** ⏱️ 6-8 giờ

**Chiến lược:**
1. Thêm imports cho variables.css và common.css vào mỗi file
2. Replace hard-coded values với CSS variables
3. Remove duplicate code đã có trong common.css
4. Giữ lại only page-specific styles

**Example: Refactor `page.css` (Home page)**

**Before:**
```css
body {
  font-family: 'Barlow', sans-serif;
  margin: 0;
  padding: 0;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 400px;
}

.button {
  background-color: #2c3e7d;
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 8px;
}
```

**After:**
```css
/* Import shared styles */
@import url('../../assets/css/variables.css');
@import url('../../assets/css/common.css');

/* Page-specific styles only */
.home-specific-feature {
  background-color: var(--color-bg-light);
  padding: var(--spacing-xl);
}

.home-special-section {
  /* Only unique home page styles here */
}
```

**Process cho tất cả pages:**
```
✓ pages/Trang chủ/page.css
✓ pages/About_mipec/about_mipec.css
✓ pages/Cơ sở hạ tầng/ha-tang.css
✓ pages/Dịch vụ/dich-vu.css
✓ pages/Dịch vụ/chi-tiet-dich-vu.css
✓ pages/Tin tức/tin-tuc.css
✓ pages/Tin tức/chi-tiet-tin-tuc.css
✓ pages/Tuyển dụng/tuyen-dung.css
✓ pages/Tuyển dụng/chi-tiet-tuyen-dung.css
✓ pages/Liên hệ/lien-he.css
✓ pages/Thư viện/thu-vien.css
```

---

### 📅 PHASE 2: RESPONSIVE & UX (Tuần 2-3)

#### **Task 2.1: Responsive Audit & Fix** ⏱️ 6-8 giờ

**Checklist:**

**A. Standardize Breakpoints**
```css
/* Create responsive.css */
:root {
  --breakpoint-mobile: 767px;
  --breakpoint-tablet: 1023px;
}

/* Mobile First Approach */
/* Base styles = mobile */

@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}
```

**B. Test Each Page**
```
Device Testing:
├─ iPhone SE (375px)
├─ iPhone 12 Pro (390px)
├─ iPad (768px)
├─ iPad Pro (1024px)
└─ Desktop (1440px+)

Pages to test:
✓ Trang chủ
✓ Về MPC
✓ Cơ sở hạ tầng
✓ Dịch vụ (list + detail)
✓ Tin tức (list + detail)
✓ Tuyển dụng (list + detail)
✓ Thư viện
✓ Liên hệ
```

**C. Common Responsive Fixes**
```css
/* Navigation */
.header-nav {
  /* Mobile: Hidden, show hamburger */
  /* Desktop: Show full menu */
}

/* Grid layouts */
.card-grid {
  /* Mobile: 1 column */
  /* Tablet: 2 columns */
  /* Desktop: 3-4 columns */
}

/* Typography */
.hero-title {
  /* Mobile: 24px */
  /* Tablet: 32px */
  /* Desktop: 48px */
}

/* Images */
img {
  /* Add responsive attributes */
  /* srcset, sizes */
}

/* Forms */
.form-control {
  /* Mobile: full width, larger touch targets */
}
```

---

#### **Task 2.2: UX Improvements** ⏱️ 4-6 giờ

**A. Smooth Scroll Behavior**
```css
html {
  scroll-behavior: smooth;
}

/* Scroll padding for fixed header */
html {
  scroll-padding-top: 80px;
}
```

**B. Loading States**
```css
.loading {
  opacity: 0.5;
  pointer-events: none;
}

.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**C. Hover & Focus States**
```css
/* Consistent hover effects */
.interactive-element {
  transition: all var(--transition-base);
}

.interactive-element:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Keyboard focus */
.interactive-element:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**D. Accessibility Enhancements**
```html
<!-- Add ARIA labels -->
<button aria-label="Toggle navigation menu">
  <span></span>
</button>

<!-- Add alt texts -->
<img src="..." alt="Descriptive text">

<!-- Add roles -->
<nav role="navigation">
  <ul role="menu">
    <li role="menuitem">...</li>
  </ul>
</nav>
```

**E. Micro-interactions**
```css
/* Button ripple effect */
.btn {
  position: relative;
  overflow: hidden;
}

.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:active::after {
  width: 300px;
  height: 300px;
}
```

---

### 📅 PHASE 3: PERFORMANCE (Tuần 3-4)

#### **Task 3.1: Image Optimization** ⏱️ 8-10 giờ

**A. Convert to WebP** (Modern format, 25-35% smaller)
```bash
# Tool: cwebp (WebP command-line tool)
# Convert all JPG/PNG to WebP

for file in assets/**/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

**B. Add Responsive Images**
```html
<!-- Old -->
<img src="hero.jpg" alt="Hero">

<!-- New -->
<picture>
  <source
    srcset="hero-400.webp 400w,
            hero-800.webp 800w,
            hero-1200.webp 1200w"
    sizes="(max-width: 768px) 100vw,
           (max-width: 1024px) 80vw,
           1200px"
    type="image/webp"
  >
  <img
    src="hero.jpg"
    alt="Hero"
    loading="lazy"
  >
</picture>
```

**C. Lazy Loading**
```html
<!-- Native lazy loading -->
<img src="..." alt="..." loading="lazy">

<!-- For older browsers, use Intersection Observer -->
<script>
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
</script>
```

**D. Image Optimization Checklist**
```
✓ Convert to WebP where supported
✓ Create multiple sizes (400w, 800w, 1200w, 1920w)
✓ Add srcset và sizes attributes
✓ Implement lazy loading
✓ Compress images (80-85% quality)
✓ Use appropriate image format:
  - Photos: WebP, JPG
  - Icons/logos: SVG, WebP with alpha
  - Simple graphics: SVG
```

---

#### **Task 3.2: CSS Optimization** ⏱️ 3-4 giờ

**A. Remove Unused CSS**
```bash
# Use PurgeCSS to remove unused styles
npx purgecss --css styles.css --content index.html --output clean.css
```

**B. Minify CSS**
```bash
# Use cssnano or clean-css
npx cssnano styles.css styles.min.css
```

**C. Critical CSS**
```html
<!-- Inline critical CSS in <head> -->
<style>
  /* Critical above-the-fold styles */
  .header { ... }
  .hero { ... }
</style>

<!-- Load full CSS async -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>
```

**D. CSS Loading Strategy**
```html
<!-- Priority order -->
1. Inline critical CSS
2. Preload fonts
3. Async load main CSS
4. Defer non-critical CSS
```

---

#### **Task 3.3: JavaScript Optimization** ⏱️ 2-3 giờ

**A. Defer Non-Critical JS**
```html
<!-- Old -->
<script src="script.js"></script>

<!-- New -->
<script src="script.js" defer></script>
<!-- Or async if order doesn't matter -->
<script src="script.js" async></script>
```

**B. Minimize Third-Party Scripts**
```html
<!-- Consider self-hosting instead of CDN -->
<!-- Or use CDN with better performance -->

<!-- Old: Multiple CDNs -->
<link href="bootstrap-cdn.com/...">
<link href="fontawesome-cdn.com/...">

<!-- Better: Combine or self-host -->
<!-- Or use jsDelivr with combine feature -->
```

---

#### **Task 3.4: Performance Monitoring** ⏱️ 1-2 giờ

**Tools to use:**
```
✓ Google PageSpeed Insights
✓ Lighthouse (Chrome DevTools)
✓ WebPageTest
✓ GTmetrix
```

**Target Metrics:**
```
Performance Score: > 90
First Contentful Paint: < 1.5s
Largest Contentful Paint: < 2.5s
Time to Interactive: < 3.5s
Cumulative Layout Shift: < 0.1
```

---

### 📅 PHASE 4: BACKEND PREP (Tuần 4+)

#### **Task 4.1: Component Extraction** ⏱️ 6-8 giờ

**Problem:** Header/Footer lặp lại ở tất cả 11 files HTML

**Solution Options:**

**Option A: PHP Includes** (Simplest)
```php
<!-- header.php -->
<header class="mpc-header">
  <!-- Full header code -->
</header>

<!-- footer.php -->
<footer class="mpc-footer">
  <!-- Full footer code -->
</footer>

<!-- pages/home.php -->
<?php include '../../components/header.php'; ?>
<main>
  <!-- Page content -->
</main>
<?php include '../../components/footer.php'; ?>
```

**Option B: Laravel Blade** (More powerful)
```blade
{{-- layouts/main.blade.php --}}
<!DOCTYPE html>
<html>
<head>
  @yield('head')
</head>
<body>
  @include('components.header')
  
  <main>
    @yield('content')
  </main>
  
  @include('components.footer')
</body>
</html>

{{-- pages/home.blade.php --}}
@extends('layouts.main')

@section('content')
  <!-- Page content -->
@endsection
```

**Option C: JavaScript SSR** (React/Next.js)
```tsx
// components/Layout.tsx
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

// pages/index.tsx
export default function Home() {
  return (
    <Layout>
      {/* Page content */}
    </Layout>
  );
}
```

**Recommendation:** Dựa trên việc bạn muốn tích hợp backend, **PHP Includes** hoặc **Laravel Blade** là phù hợp nhất.

---

#### **Task 4.2: Data Structure Planning** ⏱️ 4-6 giờ

**A. Define Content Types**
```
Content Types:
├─ Services (Dịch vụ)
├─ News (Tin tức)
├─ Jobs (Tuyển dụng)
├─ Infrastructure items (Hạ tầng)
└─ Library items (Thư viện)
```

**B. Database Schema Planning**

**Services Table:**
```sql
CREATE TABLE services (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url VARCHAR(500),
  icon VARCHAR(100),
  display_order INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

**News Table:**
```sql
CREATE TABLE news (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image VARCHAR(500),
  author VARCHAR(100),
  category VARCHAR(50),
  is_featured BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

**Jobs Table:**
```sql
CREATE TABLE jobs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  requirements TEXT,
  benefits TEXT,
  salary_range VARCHAR(100),
  location VARCHAR(100),
  job_type VARCHAR(50), -- Full-time, Part-time, Contract
  deadline DATE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

**C. API Endpoints Design**

```
GET  /api/services          - List all services
GET  /api/services/:slug    - Get service detail
POST /api/services          - Create service (admin)

GET  /api/news              - List news (with pagination)
GET  /api/news/:slug        - Get news detail
GET  /api/news/featured     - Get featured news
POST /api/news              - Create news (admin)

GET  /api/jobs              - List active jobs
GET  /api/jobs/:slug        - Get job detail
POST /api/jobs/apply        - Submit job application

POST /api/contact           - Submit contact form
```

---

#### **Task 4.3: Setup Development Environment** ⏱️ 2-4 giờ

**Option A: Simple PHP Setup**
```
Requirements:
├─ PHP 7.4+ atau 8.x
├─ MySQL 5.7+ hoặc MariaDB
├─ Apache hoặc Nginx
└─ Composer (PHP package manager)

Tools:
├─ XAMPP / MAMP (Local development)
├─ phpMyAdmin (Database management)
└─ VS Code + PHP extensions
```

**Option B: Laravel Setup**
```bash
# Install Laravel
composer create-project laravel/laravel mpc-backend

# Setup .env file
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mpc_db
DB_USERNAME=root
DB_PASSWORD=

# Run migrations
php artisan migrate

# Start dev server
php artisan serve
```

**Option C: Node.js + Express Setup**
```bash
# Initialize project
npm init -y

# Install dependencies
npm install express mysql2 dotenv cors

# Create server.js
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/api/services', (req, res) => {
  // Fetch from database
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

#### **Task 4.4: Migration Strategy** ⏱️ Varies

**Approach: Incremental Migration**

**Step 1: Keep HTML, Add PHP**
```php
<!-- Minimal change: Add PHP for includes only -->
<?php include 'header.php'; ?>
<!-- Keep all existing HTML -->
<?php include 'footer.php'; ?>
```

**Step 2: Add Dynamic Data (Gradual)**
```php
<!-- Start with News section -->
<?php
$news = getLatestNews(); // Function to fetch from DB
foreach ($news as $article) {
  echo renderNewsCard($article);
}
?>
```

**Step 3: Full Dynamic Pages**
```php
<!-- Eventually: All content from database -->
<?php
$services = getAllServices();
include 'views/services-list.php';
?>
```

**Step 4: Admin Panel**
```
Build simple admin to manage:
├─ Services CRUD
├─ News CRUD
├─ Jobs CRUD
├─ Settings
└─ Media library
```

---

## 5. IMPLEMENTATION CHI TIẾT

### 5.1 Quick Start Guide

**Bước 1: Setup CSS Foundation** (Làm ngay hôm nay!)

```bash
# 1. Tạo thư mục CSS mới
mkdir -p assets/css

# 2. Tạo và edit variables.css
# Copy nội dung từ Task 1.1

# 3. Tạo và edit common.css
# Copy nội dung từ Task 1.2

# 4. Test với 1 page trước (home.html)
```

**Bước 2: Refactor 1 Page Mẫu**

```html
<!-- pages/Trang chủ/home.html -->
<head>
  <!-- Thêm sau Bootstrap -->
  <link rel="stylesheet" href="../../assets/css/variables.css">
  <link rel="stylesheet" href="../../assets/css/common.css">
  
  <!-- Page-specific CSS (đã được refactor) -->
  <link rel="stylesheet" href="page.css">
</head>
```

```css
/* pages/Trang chủ/page.css - Refactored */
/* Chỉ giữ lại styles đặc thù cho home page */

/* Ví dụ: Nav bar đặc biệt chỉ có ở home */
.nav-bar {
  background-color: var(--color-white);
  padding: var(--spacing-lg);
  /* ... */
}
```

**Bước 3: Test & Validate**

```
Checklist:
✓ Page vẫn hiển thị đúng
✓ Colors match với original
✓ Spacing consistent
✓ Hover effects hoạt động
✓ Responsive vẫn OK
```

**Bước 4: Apply cho Remaining Pages**

```
Do từng page một:
1. Add CSS imports
2. Refactor CSS file
3. Test page
4. Commit changes
5. Move to next page

Thứ tự ưu tiên:
1. Trang chủ ✓ (Done)
2. Về MPC
3. Dịch vụ (quan trọng cho business)
4. Tin tức
5. Tuyển dụng
6. Remaining pages
```

---

### 5.2 Code Examples

#### Example 1: Refactoring Service Cards

**Before: dich-vu.css**
```css
.service-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.service-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.service-button {
  background-color: #e74c3c;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}
```

**After: dich-vu.css**
```css
/* Import shared */
@import url('../../assets/css/variables.css');
@import url('../../assets/css/common.css');

/* Use common .card class, just override specifics */
.service-card {
  /* .card already has basic styles */
  /* Just add service-specific overrides */
}

.service-card .card-title {
  color: var(--color-primary); /* Service-specific color */
}

/* Service grid specific */
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}

@media (max-width: 767px) {
  .service-grid {
    grid-template-columns: 1fr;
  }
}
```

**Result:**
- ✅ Reduced from ~50 lines to ~20 lines
- ✅ Uses common .card component
- ✅ Easier to maintain
- ✅ Consistent with other cards (news, jobs)

---

#### Example 2: Responsive Navigation

**Create: components/navigation.js**
```javascript
// Mobile menu toggle
class MobileNav {
  constructor() {
    this.toggle = document.querySelector('.mobile-menu-toggle');
    this.nav = document.querySelector('.header-nav');
    this.isOpen = false;
    
    this.init();
  }
  
  init() {
    if (!this.toggle || !this.nav) return;
    
    this.toggle.addEventListener('click', () => this.toggleMenu());
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.nav.contains(e.target) && !this.toggle.contains(e.target)) {
        this.closeMenu();
      }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });
  }
  
  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }
  
  openMenu() {
    this.nav.classList.add('active');
    this.toggle.classList.add('active');
    this.toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Prevent scroll
    this.isOpen = true;
  }
  
  closeMenu() {
    this.nav.classList.remove('active');
    this.toggle.classList.remove('active');
    this.toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    this.isOpen = false;
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new MobileNav());
} else {
  new MobileNav();
}
```

**CSS for mobile nav:**
```css
/* Header.css additions */
.header-nav {
  /* Desktop: visible */
  display: flex;
}

@media (max-width: 767px) {
  .header-nav {
    position: fixed;
    top: 0;
    left: -100%;
    width: 280px;
    height: 100vh;
    background-color: var(--color-white);
    flex-direction: column;
    padding: var(--spacing-2xl);
    box-shadow: var(--shadow-xl);
    transition: left var(--transition-base);
    z-index: var(--z-modal);
  }
  
  .header-nav.active {
    left: 0;
  }
  
  .mobile-menu-toggle {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-sm);
  }
  
  .mobile-menu-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--color-primary);
    margin: 5px 0;
    transition: all var(--transition-base);
  }
  
  .mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }
  
  .mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }
}
```

---

#### Example 3: Image Lazy Loading

**Create: assets/js/lazy-load.js**
```javascript
// Lazy load images using Intersection Observer
class LazyLoader {
  constructor() {
    this.images = document.querySelectorAll('img[data-src]');
    this.options = {
      root: null,
      rootMargin: '50px', // Load 50px before entering viewport
      threshold: 0.01
    };
    
    this.init();
  }
  
  init() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: load all images immediately
      this.loadAllImages();
      return;
    }
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
        }
      });
    }, this.options);
    
    this.images.forEach(img => this.observer.observe(img));
  }
  
  loadImage(img) {
    const src = img.dataset.src;
    const srcset = img.dataset.srcset;
    
    if (!src) return;
    
    // Create temporary image to test loading
    const tempImg = new Image();
    
    tempImg.onload = () => {
      img.src = src;
      if (srcset) img.srcset = srcset;
      img.classList.add('loaded');
      img.removeAttribute('data-src');
      img.removeAttribute('data-srcset');
      this.observer.unobserve(img);
    };
    
    tempImg.onerror = () => {
      console.error('Failed to load image:', src);
    };
    
    tempImg.src = src;
  }
  
  loadAllImages() {
    this.images.forEach(img => {
      img.src = img.dataset.src;
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => new LazyLoader());
```

**HTML usage:**
```html
<!-- Add data-src instead of src -->
<img
  data-src="../../assets/Dịch vụ/service-1.jpg"
  data-srcset="../../assets/Dịch vụ/service-1-400.jpg 400w,
               ../../assets/Dịch vụ/service-1-800.jpg 800w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Service 1"
  class="lazy"
>

<!-- Placeholder while loading -->
<style>
  img.lazy {
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  img.lazy.loaded {
    opacity: 1;
  }
</style>
```

---

## 6. BEST PRACTICES & GUIDELINES

### 6.1 CSS Best Practices

#### **Naming Conventions**
```css
/* BEM Methodology */
.block {}
.block__element {}
.block--modifier {}

/* Example */
.card {}              /* Block */
.card__title {}       /* Element */
.card__body {}        /* Element */
.card--featured {}    /* Modifier */
.card--large {}       /* Modifier */
```

#### **CSS Organization**
```
Structure mỗi CSS file:

/* ========================================
   1. IMPORTS
   ======================================== */
@import url('variables.css');

/* ========================================
   2. BASE STYLES
   ======================================== */
body {}

/* ========================================
   3. LAYOUT
   ======================================== */
.container {}

/* ========================================
   4. COMPONENTS
   ======================================== */
.card {}

/* ========================================
   5. UTILITIES
   ======================================== */
.text-center {}

/* ========================================
   6. RESPONSIVE
   ======================================== */
@media (max-width: 767px) {}
```

#### **Avoid Common Mistakes**
```css
/* ❌ BAD */
div {
  /* Too generic */
}

#header {
  /* Avoid IDs for styling */
}

.mt-20 {
  margin-top: 20px; /* Hard-coded value */
}

/* ✅ GOOD */
.header {
  /* Specific class */
}

.header__logo {
  /* Namespaced */
}

.mt-4 {
  margin-top: var(--spacing-lg); /* Use variable */
}
```

---

### 6.2 Performance Best Practices

#### **Critical Rendering Path**
```html
<!DOCTYPE html>
<html>
<head>
  <!-- 1. Critical CSS (inline) -->
  <style>
    /* Above-the-fold styles */
  </style>
  
  <!-- 2. Preload important fonts -->
  <link rel="preload" href="barlow.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- 3. Async load full CSS -->
  <link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
  
  <!-- 4. Preconnect to external domains -->
  <link rel="preconnect" href="https://cdn.jsdelivr.net">
</head>
<body>
  <!-- Content -->
  
  <!-- Scripts at end -->
  <script src="script.js" defer></script>
</body>
</html>
```

#### **Image Optimization Strategy**
```
1. Choose right format:
   ├─ Photos: WebP (fallback: JPEG)
   ├─ Icons/Logos: SVG
   ├─ Simple graphics: SVG or WebP
   └─ Transparency needed: WebP or PNG

2. Compress properly:
   ├─ JPEG: 80-85% quality
   ├─ WebP: 75-80% quality
   ├─ PNG: Use pngquant
   └─ SVG: Use SVGO

3. Responsive images:
   ├─ Create multiple sizes
   ├─ Use srcset and sizes
   ├─ Art direction with <picture>
   └─ Lazy load below-the-fold

4. Delivery:
   ├─ Use CDN if possible
   ├─ Set proper cache headers
   ├─ Consider image CDN (Cloudinary, imgix)
   └─ Progressive JPEG for large images
```

---

### 6.3 Accessibility Guidelines

#### **WCAG 2.1 Level AA Checklist**
```
✓ Color contrast ratio ≥ 4.5:1 for normal text
✓ Color contrast ratio ≥ 3:1 for large text
✓ Don't rely on color alone for information
✓ All images have descriptive alt text
✓ Form inputs have associated labels
✓ Keyboard navigation works throughout
✓ Focus indicators are visible
✓ Headings have proper hierarchy (h1 → h6)
✓ Links have descriptive text (not "click here")
✓ ARIA labels where needed
✓ Skip navigation link provided
✓ Proper semantic HTML (nav, main, aside, etc.)
```

#### **Keyboard Navigation**
```javascript
// Ensure all interactive elements are keyboard accessible
document.querySelectorAll('.interactive').forEach(el => {
  el.setAttribute('tabindex', '0');
  
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      el.click();
    }
  });
});
```

#### **Screen Reader Friendly**
```html
<!-- Use semantic HTML -->
<nav role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<!-- Descriptive labels -->
<button aria-label="Close dialog">
  <i class="icon-close"></i>
</button>

<!-- Live regions for dynamic content -->
<div role="alert" aria-live="polite">
  Form submitted successfully!
</div>

<!-- Skip navigation -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

---

### 6.4 Browser Compatibility

#### **Target Support**
```
Modern browsers:
✓ Chrome (last 2 versions)
✓ Firefox (last 2 versions)
✓ Safari (last 2 versions)
✓ Edge (last 2 versions)

Mobile:
✓ iOS Safari (last 2 versions)
✓ Chrome Android (last 2 versions)
```

#### **Progressive Enhancement**
```css
/* Base styles: work everywhere */
.card {
  background: white;
  padding: 20px;
}

/* Enhanced: modern browsers */
@supports (display: grid) {
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

/* Fallback for old browsers */
@supports not (display: grid) {
  .card-grid .card {
    float: left;
    width: 33.333%;
  }
}
```

#### **Vendor Prefixes**
```css
/* Use Autoprefixer in build process */
/* It will add these automatically: */

.element {
  display: flex; /* Standard */
  /* Autoprefixer adds: */
  /* display: -webkit-flex; */
  /* display: -ms-flexbox; */
}
```

---

### 6.5 SEO Best Practices

#### **On-Page SEO**
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <!-- Title (50-60 characters) -->
  <title>MPC - Cảng MIPEC | Dịch vụ Logistics & Cảng Biển Hải Phòng</title>
  
  <!-- Meta Description (150-160 characters) -->
  <meta name="description" content="Cảng MIPEC cung cấp dịch vụ cảng biển, logistics, và vận tải container chuyên nghiệp tại Hải Phòng. Liên hệ ngay!">
  
  <!-- Keywords (optional, low priority) -->
  <meta name="keywords" content="cảng mipec, cảng hải phòng, logistics, container">
  
  <!-- Open Graph (for social sharing) -->
  <meta property="og:title" content="MPC - Cảng MIPEC">
  <meta property="og:description" content="Dịch vụ cảng biển chuyên nghiệp">
  <meta property="og:image" content="https://mpc.com/og-image.jpg">
  <meta property="og:url" content="https://mpc.com">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://mpc.com/dich-vu">
  
  <!-- Robots -->
  <meta name="robots" content="index, follow">
</head>
<body>
  <!-- Semantic HTML structure -->
  <header>
    <nav>...</nav>
  </header>
  
  <main>
    <!-- Proper heading hierarchy -->
    <h1>Main page title (only one h1)</h1>
    <h2>Section title</h2>
    <h3>Subsection</h3>
    
    <!-- Descriptive alt texts -->
    <img src="..." alt="Cảng MIPEC Hải Phòng - Cảng container hiện đại">
    
    <!-- Internal linking -->
    <a href="/dich-vu" title="Xem các dịch vụ của chúng tôi">Dịch vụ</a>
  </main>
  
  <footer>...</footer>
  
  <!-- Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cảng MIPEC",
    "url": "https://mpc.com",
    "logo": "https://mpc.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-xxx-xxx-xxx",
      "contactType": "Customer Service"
    }
  }
  </script>
</body>
</html>
```

#### **Technical SEO**
```
✓ Sitemap.xml
✓ Robots.txt
✓ Fast loading speed (<3s)
✓ Mobile-friendly (responsive)
✓ HTTPS (SSL certificate)
✓ Clean URL structure (/dich-vu/container not /page?id=123)
✓ Proper redirects (301 for permanent)
✓ Fix broken links (404 errors)
✓ Optimize images (file size, alt text)
✓ Schema markup (structured data)
```

---

## 7. CHECKLIST HOÀN THÀNH

### Phase 1: CSS Foundation ✅

```
☐ Tạo variables.css với tất cả design tokens
☐ Tạo common.css với shared components
☐ Refactor page.css (Trang chủ)
☐ Refactor about_mipec.css
☐ Refactor ha-tang.css
☐ Refactor dich-vu.css + chi-tiet-dich-vu.css
☐ Refactor tin-tuc.css + chi-tiet-tin-tuc.css
☐ Refactor tuyen-dung.css + chi-tiet-tuyen-dung.css
☐ Refactor lien-he.css
☐ Refactor thu-vien.css
☐ Refactor Header.css
☐ Refactor Sidebar.css
☐ Refactor Footer.css
☐ Test tất cả pages xem còn hoạt động đúng không
☐ Commit changes to Git
```

### Phase 2: Responsive & UX 📱

```
☐ Tạo responsive.css với standardized breakpoints
☐ Test home.html trên all devices
☐ Test about_mipec.html trên all devices
☐ Test ha-tang.html trên all devices
☐ Test dich-vu.html trên all devices
☐ Test tin-tuc.html trên all devices
☐ Test tuyen-dung.html trên all devices
☐ Test lien-he.html trên all devices
☐ Test thu-vien.html trên all devices
☐ Fix mobile navigation issues
☐ Add smooth scroll behavior
☐ Implement focus states
☐ Add loading states
☐ Improve hover effects consistency
☐ Test keyboard navigation
☐ Add ARIA labels where needed
☐ Run accessibility audit (axe DevTools)
☐ Fix accessibility issues
☐ Commit changes
```

### Phase 3: Performance ⚡

```
☐ Audit current page load times (Lighthouse)
☐ Compress all images in assets/
☐ Convert images to WebP format
☐ Create responsive image sizes (400w, 800w, 1200w)
☐ Add srcset to all images
☐ Implement lazy loading
☐ Minify CSS files
☐ Remove unused CSS
☐ Inline critical CSS
☐ Defer non-critical CSS
☐ Defer JavaScript
☐ Optimize third-party scripts
☐ Add browser caching headers
☐ Test performance again
☐ Aim for 90+ Lighthouse score
☐ Document performance improvements
☐ Commit changes
```

### Phase 4: Backend Prep 🔧

```
☐ Decide on backend tech (PHP/Laravel/Node.js)
☐ Setup development environment
☐ Design database schema
☐ Create migrations
☐ Extract Header to component file
☐ Extract Footer to component file
☐ Convert home.html to template
☐ Convert remaining pages to templates
☐ Test component includes
☐ Plan API endpoints
☐ Document API structure
☐ Create project documentation
☐ Setup version control best practices
☐ Commit final structure
```

---

## 📚 ADDITIONAL RESOURCES

### Learning Resources

**CSS:**
- CSS Tricks: https://css-tricks.com
- MDN CSS Guide: https://developer.mozilla.org/en-US/docs/Web/CSS
- CSS Grid Garden: https://cssgridgarden.com
- Flexbox Froggy: https://flexboxfroggy.com

**Performance:**
- web.dev: https://web.dev
- Google PageSpeed Insights: https://pagespeed.web.dev
- WebPageTest: https://www.webpagetest.org

**Accessibility:**
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- axe DevTools: https://www.deque.com/axe/devtools/
- WAVE Tool: https://wave.webaim.org

**Tools:**
- Can I Use: https://caniuse.com
- Autoprefixer: https://autoprefixer.github.io
- PurgeCSS: https://purgecss.com
- ImageOptim: https://imageoptim.com

---

## 🎓 SKILL FILE TEMPLATE

Để tạo skill file cho GitHub Copilot, bạn có thể dùng template này:

**File: `.github/copilot-instructions/mpc-frontend.md`**

```markdown
# MPC Frontend Project Skill

## Context
This is the MPC (MIPEC Port) corporate website. It's a multi-page static site using Bootstrap 5.3, focusing on port services, news, recruitment, and company information.

## Tech Stack
- HTML5, CSS3, JavaScript (vanilla)
- Bootstrap 5.3 (CDN)
- Google Fonts (Barlow)
- Bootstrap Icons + Font Awesome

## Project Structure
- `/pages/[Page]/` - Each page has its own folder
- `/components/` - Header, Footer, Sidebar
- `/assets/` - Images organized by section
- `/assets/css/` - variables.css, common.css

## CSS Architecture
We use CSS custom properties (variables) for all design tokens:
- Colors: `var(--color-primary)`, `var(--color-accent)`
- Spacing: `var(--spacing-xs)` to `var(--spacing-4xl)`
- Typography: `var(--font-size-base)`, `var(--font-weight-medium)`

All pages import:
1. variables.css (design tokens)
2. common.css (shared components: .card, .btn, .hero-section)
3. page-specific.css (minimal, unique styles only)

## Coding Conventions

### CSS
- Use BEM naming: `.block__element--modifier`
- Always use CSS variables, never hard-code values
- Mobile-first responsive approach
- Organize CSS: imports → base → layout → components → utilities → responsive

### HTML
- Semantic HTML5 tags
- Proper heading hierarchy (one h1 per page)
- Alt text for all images
- ARIA labels where needed
- Relative paths: `../../assets/`

### Components
- Header: Top navigation with dropdown, mobile toggle
- Footer: 4-column layout with social links
- Sidebar: Vertical navigation for detail pages
- Cards: Used for services, news, jobs (use .card class)

## Common Tasks

### Adding a new page
1. Create folder in `/pages/[PageName]/`
2. Create HTML file with proper structure
3. Create CSS file, import variables.css and common.css
4. Add navigation link in Header
5. Add assets to `/assets/[PageName]/`

### Styling a component
1. Check if common class exists (.card, .btn, .hero-section)
2. If yes, use and extend with modifiers
3. If new, follow BEM naming
4. Use CSS variables for all values
5. Add responsive styles in media queries

### Optimizing images
1. Compress to 80-85% quality
2. Convert to WebP with fallback
3. Add srcset for responsive images
4. Use lazy loading: `loading="lazy"`
5. Descriptive alt text

## Performance Requirements
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Use lazy loading for images
- Defer non-critical CSS/JS
- Minify production files

## Accessibility Requirements
- WCAG 2.1 Level AA compliance  
- Keyboard navigation support
- Color contrast ratio ≥ 4.5:1
- Screen reader friendly markup
- Focus indicators visible

## When assisting:
1. Always use existing CSS variables/classes
2. Follow mobile-first responsive approach
3. Maintain consistency with existing patterns
4. Suggest performance optimizations
5. Ensure accessibility standards
6. Test on multiple devices/browsers
```

---

## 📞 SUPPORT & MAINTENANCE

### Getting Help

**Issue Tracking:**
```
1. Document the issue
   - What page/component?
   - What's the expected behavior?
   - What's actually happening?
   - Screenshots/screen recording

2. Check common issues first:
   - CSS not applying? Check import order
   - Responsive broken? Check media queries
   - Images not loading? Check file paths

3. Debug systematically:
   - Open DevTools
   - Check console for errors
   - Inspect element styles
   - Test in different browsers
```

### Maintenance Schedule

**Weekly:**
- Check for broken links
- Review error logs (once backend added)
- Test contact form

**Monthly:**
- Update dependencies (if using npm)
- Review performance metrics
- Check accessibility compliance
- Update content (news, jobs)

**Quarterly:**
- Full site audit (SEO, Performance, Accessibility)
- Browser compatibility testing
- Security updates
- Backup database (once backend added)

---

## ✅ READY TO START!

**Priority Order:**

1. **Today:** Setup CSS foundation (variables + common)
2. **This Week:** Refactor all CSS files
3. **Next Week:** Fix responsive issues
4. **Week 3:** Performance optimization
5. **Week 4+:** Backend preparation

**First Action Items:**
```bash
# 1. Create CSS folder
mkdir -p assets/css

# 2. Create variables.css (copy from Task 1.1)
touch assets/css/variables.css

# 3. Create common.css (copy from Task 1.2)
touch assets/css/common.css

# 4. Start with home page refactor
# Edit pages/Trang chủ/page.css
```

---

**Good luck with your optimization! 🚀**

**Questions? Refer back to this document or specific sections as needed.**
