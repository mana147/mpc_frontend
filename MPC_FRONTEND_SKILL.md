---
name: mpc-frontend
description: |
  Senior Frontend Developer assistant for MPC (MIPEC Port) website project.
  
  **USE THIS SKILL FOR:**
  - Working with MPC Frontend codebase (HTML/CSS/Bootstrap project)
  - Creating/editing pages, components, or styles
  - Refactoring CSS with design system variables
  - Implementing responsive layouts and UX improvements
  - Optimizing performance and accessibility
  - Following established project conventions and patterns
  
  **DO NOT USE FOR:**
  - Backend development (unless preparing integration)
  - Unrelated frontend projects
  - General HTML/CSS questions without MPC context
  
  **INVOKES:**
  - File system tools (read/write HTML, CSS, JS files)
  - grep_search for finding patterns across codebase
  - replace_string_in_file for code refactoring
  - semantic_search for understanding component usage
  
  **EXPERTISE AREAS:**
  - Bootstrap 5.3 best practices
  - CSS custom properties and design systems
  - Vietnamese corporate website conventions
  - Multi-page static site architecture
  - Mobile-first responsive design
  - Web performance optimization

applyTo:
  - "pages/**/*.html"
  - "pages/**/*.css"
  - "components/*.html"
  - "components/*.css"
  - "assets/css/*.css"
  - "*.html"
  - "*.css"

priority: high
---

# MPC Frontend Development Skill

## 🏢 PROJECT CONTEXT

**Project Name:** MPC Frontend - Website Cảng MIPEC  
**Type:** Corporate Landing Page / Multi-page Static Website  
**Location:** Hải Phòng, Vietnam  
**Industry:** Port & Logistics Services

**Target Audience:**
- Business clients (logistics companies, shipping companies)
- Partners and stakeholders
- Job applicants
- General public interested in port services

**Business Goals:**
- Showcase port infrastructure and services
- Provide service information and online tools (E-PORT, container tracking)
- Share company news and updates
- Attract talent through recruitment section
- Enable customer contact and inquiries

---

## 🛠️ TECH STACK

### Frontend Core
```
HTML5          - Semantic markup, proper structure
CSS3           - Modern features (Grid, Flexbox, Custom Properties, Animations)
JavaScript     - Vanilla JS, minimal usage (event handlers, toggles)
```

### Framework & Libraries
```
Bootstrap 5.3.0        - Via CDN (grid system, utilities)
Bootstrap Icons 1.11.0 - Icon library
Font Awesome 6.5.0     - Additional icons
Google Fonts (Barlow)  - Typography (weights: 400, 500, 600, 700)
```

### Build & Tooling
```
Currently: None (manual development)
Future: Vite or similar (referenced in .gitignore)
```

### Hybrid Elements (Not fully integrated)
```
React + TypeScript - Sidebar.tsx component only
Next.js           - 'use client' directive present
Status: Experimental, not in production use
```

---

## 📁 PROJECT STRUCTURE

```
mpc_frontend/
├── README.md                          # Minimal documentation
├── PROJECT_OPTIMIZATION_GUIDE.md      # Full optimization roadmap
│
├── assets/
│   ├── css/
│   │   ├── variables.css              # 🎨 Design tokens (colors, spacing, typography)
│   │   ├── common.css                 # 🧩 Shared components (cards, buttons, hero)
│   │   └── responsive.css             # 📱 Global responsive utilities
│   │
│   ├── js/
│   │   ├── navigation.js              # Mobile menu toggle
│   │   └── lazy-load.js               # Image lazy loading
│   │
│   └── [section-folders]/             # Images organized by page
│       ├── Trang chủ/
│       ├── Dịch vụ/
│       ├── Tin tức/
│       └── ...
│
├── components/
│   ├── Header.html                    # Empty (needs extraction)
│   ├── Header.css                     # ⭐ Navigation, logo, mobile menu
│   ├── Sidebar.html                   # Vertical nav (HTML version)
│   ├── Sidebar.tsx                    # Vertical nav (React - not used)
│   ├── Sidebar.css                    # Sidebar styles
│   └── Footer.css                     # ⭐ Footer layout, social icons
│
└── pages/
    ├── Trang chủ/                     # Home
    │   ├── home.html
    │   └── page.css
    ├── About_mipec/                   # About
    │   ├── about_mipec.html
    │   └── about_mipec.css
    ├── Cơ sở hạ tầng/                 # Infrastructure
    │   ├── ha-tang.html
    │   └── ha-tang.css
    ├── Dịch vụ/                       # Services
    │   ├── dich-vu.html               # List page
    │   ├── dich-vu.css
    │   ├── chi-tiet-dich-vu.html      # Detail page
    │   └── chi-tiet-dich-vu.css
    ├── Tin tức/                       # News
    │   ├── tin-tuc.html
    │   ├── tin-tuc.css
    │   ├── chi-tiet-tin-tuc.html
    │   └── chi-tiet-tin-tuc.css
    ├── Tuyển dụng/                    # Recruitment
    │   ├── tuyen-dung.html
    │   ├── tuyen-dung.css
    │   ├── chi-tiet-tuyen-dung.html
    │   └── chi-tiet-tuyen-dung.css
    ├── Thư viện/                      # Library
    │   ├── thu-vien.html
    │   └── thu-vien.css
    └── Liên hệ/                       # Contact
        ├── lien-he.html
        └── lien-he.css
```

---

## 🎨 DESIGN SYSTEM

### CSS Architecture

**Import Order (Every CSS file):**
```css
/* 1. Design tokens */
@import url('../../assets/css/variables.css');

/* 2. Common components */
@import url('../../assets/css/common.css');

/* 3. Bootstrap (already in HTML) */

/* 4. Page-specific styles */
.page-unique-class {
  /* Only styles specific to this page */
}
```

### Design Tokens (CSS Custom Properties)

**Colors:**
```css
/* Primary */
--color-primary: #2c3e7d          /* Main blue - header, footer, primary buttons */
--color-primary-dark: #1f2d5c     /* Hover states */
--color-primary-light: #3d4f94    /* Lighter variant */

/* Accent */
--color-accent: #e74c3c           /* Red - CTAs, highlights, active states */
--color-accent-dark: #c03a2b      /* Hover */
--color-accent-light: #ff6b5b     /* Light variant */

/* Text */
--color-text-primary: #333333     /* Main body text */
--color-text-secondary: #555555   /* Secondary text */
--color-text-muted: #828282       /* Muted text */
--color-text-light: #BDBDBD       /* Very light text */

/* Background */
--color-bg-light: #f9f9f9         /* Light section backgrounds */
--color-bg-lighter: #fafafa       /* Even lighter */
--color-bg-gray: #f5f5f5          /* Gray sections */

/* Neutral */
--color-white: #ffffff
--color-black: #000000
--color-border: #e0e0e0
```

**Typography:**
```css
/* Font Family */
--font-primary: 'Barlow', sans-serif

/* Font Sizes */
--font-size-xs: 12px
--font-size-sm: 14px
--font-size-base: 16px
--font-size-md: 18px
--font-size-lg: 20px
--font-size-xl: 24px
--font-size-2xl: 32px
--font-size-3xl: 40px
--font-size-4xl: 48px

/* Font Weights */
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700

/* Line Heights */
--line-height-tight: 1.2
--line-height-normal: 1.5
--line-height-relaxed: 1.75
--line-height-loose: 2
```

**Spacing:**
```css
--spacing-xs: 8px
--spacing-sm: 12px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 40px
--spacing-3xl: 48px
--spacing-4xl: 64px
```

**Layout:**
```css
/* Container Widths */
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1280px
--container-max: 1400px
```

**Effects:**
```css
/* Border Radius */
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-full: 9999px

/* Shadows */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15)

/* Transitions */
--transition-fast: 150ms ease-in-out
--transition-base: 300ms ease-in-out
--transition-slow: 500ms ease-in-out

/* Z-Index Scale */
--z-dropdown: 1000
--z-sticky: 1020
--z-fixed: 1030
--z-modal-backdrop: 1040
--z-modal: 1050
--z-tooltip: 1060
```

---

## 🧩 COMPONENT LIBRARY

### Common Components (from common.css)

#### Containers
```css
.container           /* Max-width 1400px, centered, responsive padding */
.container-fluid     /* Full width with padding */
.section            /* Standard section spacing (64px vertical) */
.section-sm         /* Smaller section spacing (48px vertical) */
```

#### Hero Sections
```css
.hero-section       /* Full-width hero with image */
.hero-overlay       /* Gradient overlay on hero image */
.hero-content       /* Centered content with white text */
.hero-title         /* Large, bold title (responsive) */
```

**Usage:**
```html
<section class="hero-section">
  <div class="hero-overlay"></div>
  <img src="hero.jpg" alt="Hero">
  <div class="hero-content">
    <h1 class="hero-title">Title</h1>
  </div>
</section>
```

#### Buttons
```css
.btn               /* Base button */
.btn-primary       /* Primary blue button */
.btn-accent        /* Red accent button */
.btn-outline       /* Outline button */
.btn-sm            /* Small button */
.btn-lg            /* Large button */
```

**Usage:**
```html
<a href="#" class="btn btn-primary">Xem thêm</a>
<button class="btn btn-accent">Liên hệ ngay</button>
<a href="#" class="btn btn-outline btn-sm">Chi tiết</a>
```

#### Cards
```css
.card              /* Base card with shadow, rounded corners */
.card-image        /* Card image (200px height, cover) */
.card-body         /* Card content area */
.card-title        /* Card heading */
.card-text         /* Card description */
.card-link         /* Card CTA link */
.card-grid         /* Grid layout for cards (responsive) */
```

**Usage:**
```html
<div class="card-grid">
  <article class="card">
    <img src="service.jpg" alt="Service" class="card-image">
    <div class="card-body">
      <h3 class="card-title">Service Title</h3>
      <p class="card-text">Description...</p>
      <a href="#" class="card-link">
        Xem thêm <i class="bi bi-arrow-right"></i>
      </a>
    </div>
  </article>
  <!-- More cards... -->
</div>
```

#### Forms
```css
.form-group        /* Form field wrapper */
.form-label        /* Field label */
.form-control      /* Input, textarea, select */
```

**Usage:**
```html
<div class="form-group">
  <label class="form-label" for="name">Họ và tên</label>
  <input type="text" id="name" class="form-control" required>
</div>
```

---

## 📐 RESPONSIVE DESIGN

### Strategy: Mobile-First

**Breakpoints:**
```css
/* Base styles = Mobile (< 768px) */

@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}
```

### Common Responsive Patterns

**Navigation:**
```css
/* Mobile: Hamburger menu */
.header-nav { 
  position: fixed;
  left: -100%;
  /* ... */
}

.header-nav.active {
  left: 0;
}

/* Desktop: Horizontal menu */
@media (min-width: 768px) {
  .header-nav {
    position: static;
    display: flex;
  }
  
  .mobile-menu-toggle {
    display: none;
  }
}
```

**Grid Layouts:**
```css
/* Mobile: 1 column */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3-4 columns */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Typography:**
```css
/* Mobile */
.hero-title {
  font-size: var(--font-size-2xl); /* 32px */
}

/* Desktop */
@media (min-width: 1024px) {
  .hero-title {
    font-size: var(--font-size-4xl); /* 48px */
  }
}
```

---

## 📝 CODING CONVENTIONS

### HTML Best Practices

**Structure:**
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title - MPC Cảng MIPEC</title>
  
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
  
  <!-- Custom CSS -->
  <link rel="stylesheet" href="../../assets/css/variables.css">
  <link rel="stylesheet" href="../../assets/css/common.css">
  <link rel="stylesheet" href="page.css">
  <link rel="stylesheet" href="../../components/Header.css">
  <link rel="stylesheet" href="../../components/Footer.css">
</head>
<body>
  <!-- Header (copy from existing pages) -->
  <header class="mpc-header">...</header>
  
  <!-- Main Content -->
  <main>
    <section class="hero-section">...</section>
    <section class="section">...</section>
  </main>
  
  <!-- Footer (copy from existing pages) -->
  <footer class="mpc-footer">...</footer>
  
  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../../assets/js/navigation.js" defer></script>
</body>
</html>
```

**Semantic HTML:**
```html
✅ DO:
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
<h1> only once per page, proper heading hierarchy
<img src="..." alt="Descriptive text">
<button> for actions, <a> for links

❌ DON'T:
<div class="header"> - use semantic tags
Multiple <h1> on same page
<img> without alt attribute
<div onclick="..."> - use <button>
```

**Accessibility:**
```html
<!-- ARIA labels for icons/buttons without text -->
<button class="mobile-menu-toggle" aria-label="Toggle navigation menu">
  <span></span>
</button>

<!-- Descriptive alt text -->
<img src="service.jpg" alt="Container loading service at MPC Port">

<!-- Form labels -->
<label for="email">Email</label>
<input type="email" id="email" name="email">

<!-- Skip navigation -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### CSS Best Practices

**Naming Convention: BEM**
```css
/* Block */
.service-card { }

/* Element */
.service-card__title { }
.service-card__image { }
.service-card__body { }

/* Modifier */
.service-card--featured { }
.service-card--large { }

/* Example */
.card { }
.card__header { }
.card__body { }
.card__footer { }
.card--primary { }
.card--outline { }
```

**File Organization:**
```css
/* ========================================
   1. IMPORTS
   ======================================== */
@import url('../../assets/css/variables.css');
@import url('../../assets/css/common.css');

/* ========================================
   2. PAGE-SPECIFIC LAYOUT
   ======================================== */
.page-container { }

/* ========================================
   3. PAGE-SPECIFIC COMPONENTS
   ======================================== */
.unique-component { }

/* ========================================
   4. RESPONSIVE
   ======================================== */
@media (min-width: 768px) { }
```

**Always Use Variables:**
```css
❌ DON'T:
.button {
  background-color: #2c3e7d;
  padding: 15px 30px;
  border-radius: 8px;
  color: white;
}

✅ DO:
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-md);
  color: var(--color-white);
}
```

**DRY Principle:**
```css
❌ DON'T (Duplicate code):
.service-card {
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 20px;
}

.news-card {
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 20px;
}

✅ DO (Use common class):
/* In common.css */
.card {
  background: var(--color-white);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
}

/* In page CSS */
.service-card {
  /* Only service-specific overrides */
}
```

### JavaScript Conventions

**Modern, Clean Code:**
```javascript
// Use class-based approach
class ComponentName {
  constructor() {
    this.element = document.querySelector('.selector');
    this.init();
  }
  
  init() {
    if (!this.element) return;
    this.attachEvents();
  }
  
  attachEvents() {
    this.element.addEventListener('click', (e) => this.handleClick(e));
  }
  
  handleClick(e) {
    e.preventDefault();
    // Handle click
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new ComponentName();
});
```

**Prefer Modern APIs:**
```javascript
✅ DO:
document.querySelector('.class')
document.querySelectorAll('.class')
element.classList.add('active')
element.addEventListener('click', handler)

❌ AVOID (jQuery-style):
$('.class')
$(element).addClass('active')
```

---

## 🎯 COMMON TASKS & PATTERNS

### Task 1: Adding a New Page

**Steps:**
1. Create page folder: `pages/New Page/`
2. Create `new-page.html` with proper structure
3. Create `new-page.css` with imports
4. Add navigation link in Header
5. Add assets to `assets/New Page/`
6. Test responsive layout
7. Add to sitemap (future)

**Template:**
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Page - MPC Cảng MIPEC</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
  
  <link rel="stylesheet" href="../../assets/css/variables.css">
  <link rel="stylesheet" href="../../assets/css/common.css">
  <link rel="stylesheet" href="new-page.css">
  <link rel="stylesheet" href="../../components/Header.css">
  <link rel="stylesheet" href="../../components/Footer.css">
</head>
<body>
  <!-- Copy Header from home.html -->
  <header class="mpc-header">...</header>
  
  <main>
    <!-- Page content -->
  </main>
  
  <!-- Copy Footer from home.html -->
  <footer class="mpc-footer">...</footer>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

```css
/* new-page.css */
@import url('../../assets/css/variables.css');
@import url('../../assets/css/common.css');

/* Page-specific styles */
```

---

### Task 2: Refactoring Existing CSS

**Before Refactoring:**
```css
/* Old dich-vu.css - lots of duplicated code */
.service-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.service-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.service-button {
  background-color: #e74c3c;
  color: white;
  padding: 10px 20px;
}
```

**After Refactoring:**
```css
/* New dich-vu.css - uses common components */
@import url('../../assets/css/variables.css');
@import url('../../assets/css/common.css');

/* Service-specific overrides only */
.service-card {
  /* .card from common.css provides base styles */
  /* Add only service-specific customizations */
}

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

**Refactoring Checklist:**
```
✓ Add imports for variables.css and common.css
✓ Replace hard-coded colors with var(--color-*)
✓ Replace hard-coded spacing with var(--spacing-*)
✓ Replace hard-coded font sizes with var(--font-size-*)
✓ Remove duplicate code that exists in common.css
✓ Use .card, .btn, .hero-section where applicable
✓ Keep only page-specific styles
✓ Test page still looks identical
✓ Validate responsive behavior
```

---

### Task 3: Creating Responsive Layouts

**Grid Pattern:**
```css
/* Base mobile-first approach */
.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }
}

/* Desktop: 3-4 columns */
@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large desktop: up to 4 columns */
@media (min-width: 1280px) {
  .content-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

**Flexbox Pattern:**
```css
/* Stack on mobile, row on desktop */
.flex-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .flex-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
```

---

### Task 4: Optimizing Images

**HTML:**
```html
<!-- Responsive image with lazy loading -->
<picture>
  <source
    srcset="../../assets/Dịch vụ/service-400.webp 400w,
            ../../assets/Dịch vụ/service-800.webp 800w,
            ../../assets/Dịch vụ/service-1200.webp 1200w"
    sizes="(max-width: 768px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
    type="image/webp"
  >
  <img
    src="../../assets/Dịch vụ/service.jpg"
    alt="Container loading service at MPC Port"
    loading="lazy"
    class="img-fluid"
  >
</picture>
```

**CSS:**
```css
/* Ensure images are responsive */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Lazy load transition */
img.lazy {
  opacity: 0;
  transition: opacity var(--transition-base);
}

img.lazy.loaded {
  opacity: 1;
}
```

---

## ⚠️ COMMON PITFALLS TO AVOID

### CSS Mistakes

```css
❌ 1. Hard-coding values
.element {
  color: #2c3e7d;        /* Use var(--color-primary) */
  padding: 20px;         /* Use var(--spacing-lg) */
  font-size: 18px;       /* Use var(--font-size-md) */
}

❌ 2. Not using common components
.my-card {
  background: white;     /* Use .card class instead */
  padding: 20px;
  border-radius: 8px;
  box-shadow: ...;
}

❌ 3. Desktop-first (wrong direction)
.nav {
  display: flex;         /* Desktop style */
}
@media (max-width: 768px) {
  .nav { display: none; } /* Then hide on mobile */
}

✅ Should be mobile-first:
.nav {
  display: none;         /* Mobile first */
}
@media (min-width: 768px) {
  .nav { display: flex; } /* Then show on desktop */
}

❌ 4. Overly specific selectors
#header .nav ul li a {   /* Too specific, hard to override */
  color: white;
}

✅ Use classes:
.nav-link {              /* Specific enough, reusable */
  color: var(--color-white);
}

❌ 5. !important abuse
.text {
  color: red !important; /* Avoid unless absolutely necessary */
}

❌ 6. Inline styles
<div style="color: red; padding: 20px;"> /* Never do this */

✅ Use classes:
<div class="alert alert-danger">
```

### HTML Mistakes

```html
❌ 1. Missing semantic HTML
<div class="header">...</div>
<div class="navigation">...</div>

✅ Use proper tags:
<header>...</header>
<nav>...</nav>

❌ 2. Empty alt attributes when image is meaningful
<img src="service.jpg" alt="">

✅ Descriptive alt:
<img src="service.jpg" alt="Container loading at MPC Port">

❌ 3. Divitis
<div class="wrapper">
  <div class="container">
    <div class="content">
      <div class="text">Hello</div>
    </div>
  </div>
</div>

✅ Keep it simple:
<div class="container">
  <p>Hello</p>
</div>

❌ 4. Wrong path structure
<link rel="stylesheet" href="../../assets/css/variables.css">
<!-- From wrong location -->

✅ Always verify relative paths based on file location
```

### Performance Mistakes

```html
❌ 1. Loading all images eagerly
<img src="large-image.jpg">

✅ Lazy load below-fold images:
<img src="large-image.jpg" loading="lazy">

❌ 2. Not using WebP
<img src="photo.jpg">

✅ Use modern formats:
<picture>
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg">
</picture>

❌ 3. Blocking scripts in <head>
<script src="large-script.js"></script>

✅ Defer non-critical JS:
<script src="large-script.js" defer></script>
```

---

## 🎓 WHEN ASSISTING WITH CODE

### Analysis Approach

**Step 1: Understand Context**
- Which page is being worked on?
- What's the goal (new feature, bug fix, refactor)?
- Are there existing patterns to follow?

**Step 2: Check Existing Code**
- Look for similar implementations in other pages
- Check if common components exist (card, button, hero)
- Verify current naming conventions

**Step 3: Propose Solution**
- Use existing design system variables
- Reuse common components where possible
- Follow established patterns
- Ensure responsive design
- Consider accessibility

**Step 4: Provide Complete Code**
- Ready to copy-paste
- Properly formatted
- Includes comments where helpful
- Follows conventions

### Code Review Checklist

When reviewing or writing code, check:

**HTML:**
```
✓ Proper semantic tags
✓ Accessible (alt, aria-label, labels)
✓ Correct relative paths
✓ Valid HTML5 structure
✓ Proper heading hierarchy
```

**CSS:**
```
✓ Imports variables.css and common.css
✓ Uses CSS custom properties (no hard-coded values)
✓ Uses common components (.card, .btn, etc.)
✓ BEM naming for new components
✓ Mobile-first responsive approach
✓ Proper organization (imports → base → components → responsive)
```

**Performance:**
```
✓ Images have loading="lazy"
✓ Proper image formats (WebP preferred)
✓ CSS/JS deferred when possible
✓ No unnecessary third-party libraries
```

**Accessibility:**
```
✓ Color contrast sufficient
✓ Keyboard navigation works
✓ Screen reader friendly
✓ Focus indicators visible
```

---

## 🚀 QUICK REFERENCE

### File Paths Cheat Sheet

```
From page HTML to:
├─ Variables CSS:    ../../assets/css/variables.css
├─ Common CSS:       ../../assets/css/common.css
├─ Header CSS:       ../../components/Header.css
├─ Footer CSS:       ../../components/Footer.css
├─ Images:           ../../assets/[PageName]/image.jpg
└─ Other page:       ../[OtherPage]/page.html

From component CSS to:
├─ Variables CSS:    ../assets/css/variables.css
└─ Common CSS:       ../assets/css/common.css
```

### Most Used Classes

```css
/* Layout */
.container, .container-fluid, .section

/* Components */
.card, .card-grid, .btn, .hero-section, .form-control

/* Utilities */
.text-center, .text-primary, .mt-3, .mb-4, .d-flex
```

### Common Color Uses

```css
--color-primary       /* Headers, footers, primary buttons, main branding */
--color-accent        /* CTAs, hover states, active items, highlights */
--color-text-primary  /* Body text, paragraphs */
--color-text-secondary /* Secondary information */
--color-bg-light      /* Section backgrounds, alternating sections */
```

### Responsive Breakpoints

```css
Mobile:  < 768px  (base styles, mobile-first)
Tablet:  ≥ 768px  @media (min-width: 768px)
Desktop: ≥ 1024px @media (min-width: 1024px)
```

---

## 📚 ADDITIONAL CONTEXT

### Project Status (April 2026)

**Current Phase:** CSS Foundation and Optimization
- ✅ Project analyzed and documented
- ✅ Optimization roadmap created
- 🔄 Implementing CSS variables system
- 🔄 Creating common component library
- ⏭️ Next: Refactor all page CSS files

**Future Plans:**
1. Complete CSS refactoring (Phase 1)
2. Fix responsive issues (Phase 2)
3. Performance optimization (Phase 3)
4. Backend integration preparation (Phase 4)
5. Migrate to PHP/Laravel for component reusability

### Known Issues

**High Priority:**
- CSS code duplication across pages
- No CSS variables system (being implemented)
- Inconsistent responsive breakpoints
- Hard-coded design values

**Medium Priority:**
- Header/Footer duplicated in all HTML files
- No image optimization
- Missing lazy loading
- Performance not optimized

**Low Priority:**
- React components not integrated
- Build process not setup
- Minimal documentation (being improved)

### Migration Notes

**From Static HTML to Backend:**
When ready to migrate, the plan is:
1. Extract Header/Footer into separate files
2. Use PHP includes or Laravel Blade
3. Keep all CSS/JS structure intact
4. Add dynamic data from database
5. Build admin panel for content management

**This skill file focuses on current static approach** while keeping future migration in mind.

---

## 💡 EXAMPLES

### Example 1: Adding New Service Card

**HTML:**
```html
<div class="card-grid">
  <article class="card">
    <img src="../../assets/Dịch vụ/service-new.jpg" 
         alt="New service description" 
         class="card-image"
         loading="lazy">
    <div class="card-body">
      <h3 class="card-title">Dịch Vụ Mới</h3>
      <p class="card-text">
        Mô tả ngắn gọn về dịch vụ, khoảng 2-3 câu để người đọc 
        hiểu nhanh nội dung chính.
      </p>
      <a href="chi-tiet-dich-vu.html?id=new" class="card-link">
        Xem thêm <i class="bi bi-arrow-right"></i>
      </a>
    </div>
  </article>
</div>
```

### Example 2: Creating Hero Section

**HTML:**
```html
<section class="hero-section">
  <div class="hero-overlay"></div>
  <img src="../../assets/Trang chủ/hero-banner.jpg" alt="MPC Port Overview">
  <div class="hero-content">
    <h1 class="hero-title">CẢNG MIPEC</h1>
    <p class="hero-subtitle">Giải pháp logistics toàn diện</p>
    <a href="#services" class="btn btn-accent btn-lg">
      Khám phá dịch vụ
    </a>
  </div>
</section>
```

**CSS (if customization needed):**
```css
/* Override hero for specific page */
.hero-section {
  height: 500px; /* Custom height for this page */
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-white);
  margin-bottom: var(--spacing-lg);
}
```

### Example 3: Responsive Navigation

**HTML:**
```html
<header class="mpc-header">
  <div class="header-container">
    <div class="header-logo">
      <img src="../../assets/logo.png" alt="MPC Logo">
    </div>
    
    <button class="mobile-menu-toggle" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    
    <nav class="header-nav">
      <ul class="nav-menu">
        <li><a href="home.html">TRANG CHỦ</a></li>
        <li><a href="../About_mipec/about_mipec.html">VỀ MPC</a></li>
        <!-- More items... -->
      </ul>
    </nav>
  </div>
</header>
```

---

## 🎯 SUCCESS CRITERIA

When providing solutions, ensure:

**✅ Code Quality:**
- Uses design system variables
- Follows BEM naming convention
- DRY principle applied
- Well-organized and commented

**✅ Functionality:**
- Works as expected
- No console errors
- Cross-browser compatible
- Responsive on all devices

**✅ Performance:**
- Optimized images
- Lazy loading where appropriate
- Minimal CSS/JS
- Fast load times

**✅ Accessibility:**
- WCAG 2.1 Level AA compliant
- Keyboard navigable
- Screen reader friendly
- Proper semantic HTML

**✅ Maintainability:**
- Easy to understand
- Follows project conventions
- Reusable components
- Well-documented

---

## 📞 GETTING HELP

If uncertain about implementation:

1. **Check existing pages** for similar patterns
2. **Review PROJECT_OPTIMIZATION_GUIDE.md** for detailed specifications
3. **Search codebase** for component usage examples
4. **Verify in design system** (variables.css, common.css)
5. **Test responsive** behavior on multiple devices

**Remember:** Consistency is key. Follow existing patterns unless there's a strong reason to deviate.

---

**Last Updated:** April 4, 2026  
**Version:** 1.0  
**Maintainer:** MPC Frontend Team
