# MPC Frontend - Workspace Instructions

## Project Overview

**MPC Frontend** is a corporate website for MIPEC Port (Cảng MIPEC) in Hải Phòng, Vietnam. This is a multi-page static HTML/CSS site showcasing port services, infrastructure, news, recruitment, and company information.

**Target audience:** Business clients (logistics/shipping companies), partners, job applicants, and general public interested in port services.

## Tech Stack

- **HTML5 + CSS3**: Core markup and styling (Flexbox, CSS Grid, custom properties)
- **Bootstrap 5.3.0**: Icons and utility classes (loaded via CDN, minimal usage)
- **JavaScript**: Vanilla JS only (mobile menu toggles, event handlers)
- **Typography**: Barlow font family from Google Fonts
- **Icons**: Bootstrap Icons 1.11.0 + Font Awesome 6.5.0

**No build tools** - This is manual development with direct file editing. All dependencies via CDN.

## Code Style

### HTML Conventions
- Language: `<html lang="vi">` (Vietnamese content)
- Standard meta tags: UTF-8 charset, viewport for mobile
- CDN dependencies loaded in `<head>` before local CSS
- Component structure: Header → Sidebar (optional) → Main content → Footer

**Example page structure:**
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/...">
    <link rel="stylesheet" href="../../components/Header.css">
    <link rel="stylesheet" href="dich-vu.css">
</head>
```

### CSS Patterns
- **Organization**: Component-based files (`Header.css`, `Footer.css`, `Sidebar.css`) + page-specific CSS
- **Naming**: Semantic classes (`.service-card`, `.hero-section`, `.footer-column`) - *not BEM methodology*
- **Layout**: CSS Grid and Flexbox (Bootstrap grid not used despite CDN link)
- **Responsive**: 6 breakpoints with mobile-first approach (key breakpoint: 959px for desktop/tablet)

**Color Scheme:**
```css
Primary Blue: #2c3e7d (header, footer backgrounds)
Accent Red:   #e74c3c, #DF1F28 (hover states, active indicators)
Text:         #333333, #555, #828282 (body text variations) 
Light Gray:   #BDBDBD, #f9f9f9 (borders, backgrounds)
```

**Key dimensions:**
- Max container width: 1200px - 1400px
- Horizontal padding: 30-40px

### JavaScript Usage
- Minimal vanilla JS at end of `<body>` tags
- Mobile menu toggle: `document.querySelector()` + event listeners
- No frameworks or libraries (React component exists but not integrated)

## Architecture

### Directory Structure
```
pages/
  ├── Trang chủ/           (Home)
  ├── About_mipec/         (About)
  ├── Cơ sở hạ tầng/       (Infrastructure - has sidebar)
  ├── Dịch vụ/             (Services + detail page)
  ├── Tin tức/             (News + detail page)
  ├── Tuyển dụng/          (Recruitment + detail page)
  ├── Thư viện/            (Library)
  └── Liên hệ/             (Contact)

components/
  ├── Header.css
  ├── Footer.css
  ├── Sidebar.css
  └── *.html (mostly empty - components duplicated in pages)
  
assets/
  └── [section folders]/ (organized by page)
```

### Navigation Patterns
- **Relative paths**: Use `../` to navigate between nested folders
- **From nested page to home**: `../Trang chủ/home.html`
- **From detail to list**: `tin-tuc.html` (same folder)
- **Assets from nested pages**: `../../assets/section/image.jpg`

⚠️ **Critical gotcha**: Vietnamese characters in folder names (like `Cơ sở hạ tầng/`) can cause encoding issues. Always use exact folder names and test paths carefully.

### Component Reuse Strategy
**Headers and Footers are manually duplicated** across all pages - there's no templating system or server-side includes. When updating Header or Footer:
1. Make changes in one file first
2. Copy the updated HTML block to all other pages
3. Verify navigation links are correct for each page's location

See [MPC_FRONTEND_SKILL.md](MPC_FRONTEND_SKILL.md) for detailed component specifications.

## Build and Development

**No build commands** - This is a static site:
```bash
# Development workflow
# 1. Edit HTML/CSS files directly
# 2. Open pages in browser (File → Open or use local server)
# 3. Refresh browser to see changes

# Optional: Simple local server
python3 -m http.server 8000
# Then visit: http://localhost:8000/pages/Trang%20chủ/home.html
```

**No testing framework** - Manual QA in browser across devices/screen sizes.

## Conventions

### File Organization
- Each page has its own folder with `[page-name].html` and `[page-name].css`
- Detail pages live in same folder as their list pages (e.g., `Tin tức/tin-tuc.html` and `Tin tức/chi-tiet-tin-tuc.html`)
- Component CSS lives in `components/` folder and is shared across pages
- Images organized in `assets/` by section name

### Path Conventions
When creating links from **detail pages** (3 levels deep):
```html
<!-- Back to home -->
<a href="../../Trang chủ/home.html">Trang chủ</a>

<!-- To sibling page in same folder -->
<a href="tin-tuc.html">Tin tức</a>

<!-- Assets -->
<img src="../../../assets/logo.png">
```

### Responsive Design Approach
- Mobile-first CSS with progressive enhancement
- Hamburger menu appears at `max-width: 959px`
- Key breakpoints: 639px (mobile), 959px (tablet), 1368px (desktop), 1720px+ (wide)
- Test all changes at these breakpoints

### Adding New Pages
1. Create folder in `pages/` with Vietnamese name
2. Create `[name].html` and `[name].css` files
3. Copy Header/Footer structure from existing page (e.g., `home.html`)
4. Update relative paths for CSS and images based on nesting level
5. Add navigation link to Header in **all existing pages**
6. Create corresponding asset folder if needed

## Documentation

- **[MPC_FRONTEND_SKILL.md](MPC_FRONTEND_SKILL.md)** - Comprehensive skill file with full tech stack details and component specs
- **[PROJECT_OPTIMIZATION_GUIDE.md](PROJECT_OPTIMIZATION_GUIDE.md)** - Analysis and roadmap for CSS consolidation and optimization
- **Repository memory** - Architecture notes and CSS analysis findings

## Common Pitfalls

1. **Breaking relative paths**: Moving files without updating all `../` references
2. **Forgetting to update all pages**: Header/Footer changes must be copied to every HTML file
3. **Image paths**: Detail pages need `../../../assets/` not `../../assets/`
4. **Vietnamese folder names**: Always URL-encode in links (`Trang%20chủ`) or use exact names
5. **CDN dependency**: Site requires internet to load Bootstrap/icons
6. **No optimization**: Every page loads full Bootstrap + all icon libraries (performance consideration)

---

*For detailed component patterns, color specifications, and optimization strategies, see [MPC_FRONTEND_SKILL.md](MPC_FRONTEND_SKILL.md).*
