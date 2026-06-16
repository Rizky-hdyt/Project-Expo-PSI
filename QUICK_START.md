# Quick Start — Project Expo PSI

## ⚡ Start Development Server (2 seconds)

```bash
cd "C:\Project Expo PSI"
npm run dev
```

**Server will run on:** http://localhost:5177  
(If ports 5173-5176 are busy, it auto-increments)

---

## 🎯 What's Been Done

### ✅ Navigation System Completed (2026-06-16)
- **Header:** Logo, nav links, language toggle, dark mode toggle, mobile hamburger
- **Breadcrumb:** Route-based navigation indicator (shows on /quiz, /admin)
- **Dark Mode:** Light/dark theme with color variables, localStorage persistence
- **Responsive:** Mobile hamburger at < 768px, touch-friendly 44px buttons
- **Accessibility:** Semantic HTML, ARIA labels, proper color contrast

### ✅ Bugs Fixed
1. Breadcrumb separator logic — was missing for current page items
2. CSS orphaned variables — outside any selector (syntax error)
3. Unused CSS classes — cleaned up

---

## 📋 Test Checklist

After opening http://localhost:5177, verify:

- [ ] **Header renders** with logo "FCI", nav links (Beranda, Kuis, Admin), and controls
- [ ] **Dark mode toggle** works (click ☀️/🌙 button) — page colors change
- [ ] **Dark mode persists** — reload page, theme stays the same
- [ ] **Language toggle** works (click 🇮🇩/🇬🇧 flag) — nav text changes
- [ ] **Breadcrumb shows** — go to /quiz, should show "Beranda / Kuis"
- [ ] **Mobile menu works** — resize browser to < 768px, hamburger appears, click it
- [ ] **Mobile menu closes** — click a nav link, menu closes automatically
- [ ] **Overlay appears** — when mobile menu is open, see semi-transparent backdrop

---

## 🗂️ Important Files

### Components (UI)
- `src/components/Header.tsx` — Navigation header with toggles
- `src/components/Header.css` — Header styling & animations
- `src/components/Breadcrumb.tsx` — Breadcrumb component
- `src/components/Breadcrumb.css` — Breadcrumb styling

### App Structure
- `src/App.tsx` — Root layout, dark mode state management
- `src/index.css` — Design system (colors, spacing, typography)
- `src/pages/` — All pages (Landing, Quiz, Admin, etc.)

### Documentation
- `PROGRESS.md` — This session's progress summary
- `NAVIGATION_FEATURES.md` — Feature documentation
- `memory/MEMORY.md` — Memory file index
- `memory/SESSION-2026-06-16-SUMMARY.md` — Detailed session summary

---

## 🎨 Design System

**Colors:**
- Primary: #4f46e5 (Indigo)
- Light BG: #fafafa | Dark BG: #0f0f12
- Light Text: #18181f | Dark Text: #f0f0f0

**Spacing:** 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

**Font:** Plus Jakarta Sans (Google Fonts)

**Breakpoints:**
- Mobile: < 480px
- Tablet: < 768px
- Desktop: >= 768px

---

## 🛠️ Common Tasks

### Check TypeScript Errors
```bash
cd "C:\Project Expo PSI"
npx tsc --noEmit
```

### Inspect CSS in Browser
1. Open http://localhost:5177
2. Press F12 (DevTools)
3. Check:
   - Network tab → CSS files loading?
   - Elements tab → Classes applied correctly?
   - Console tab → Any JS errors?

### Restart Dev Server
```bash
# Press Ctrl+C in terminal, then:
npm run dev
```

### Check Dark Mode Persistence
1. Click dark mode toggle (🌙)
2. Check browser Console:
   ```javascript
   localStorage.getItem('darkMode')  // should be "true"
   ```
3. Reload page — theme should persist

---

## 📝 Next Steps (For Future Sessions)

1. **English Translation** — Expand translations to all page text
2. **Language Context** — Persist language preference, use across app
3. **Admin Dashboard** — Build admin feature dashboard
4. **Nomad Features** — Add visa info, co-working spaces, cost comparison

---

## ❓ Troubleshooting

**"CSS not loading / layout broken"**
- Check browser Console (F12) for errors
- Verify CSS file imports in components
- Run `npx tsc --noEmit` to check TypeScript errors

**"Dev server won't start"**
- Check if port 5177 is busy: `netstat -ano | findstr :5177`
- Kill process or use different port: `npm run dev -- --port 3000`

**"Dark mode not working"**
- Check localStorage in DevTools Console:
  ```javascript
  JSON.parse(localStorage.getItem('darkMode'))
  ```
- Check if `dark-mode` class is on `<html>` element

**"Language toggle not changing nav"**
- Currently only translates nav items (Header)
- Full app translation coming in next session

---

## 🚀 Running Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npx tsc --noEmit
```

---

## 📚 Quick Reference

| What | Where | Status |
|------|-------|--------|
| Header navigation | src/components/Header.tsx | ✅ Done |
| Breadcrumb | src/components/Breadcrumb.tsx | ✅ Done |
| Dark mode | src/App.tsx + index.css | ✅ Done |
| Language toggle | src/components/Header.tsx | ✅ Done |
| English translation | All pages | ⏳ Next |
| Language persistence | (Context) | ⏳ Next |
| Admin dashboard | src/pages/admin/ | ⏳ Next |

---

**Last Updated:** 2026-06-16  
**Dev Server:** http://localhost:5177  
**Status:** ✅ All navigation features working, UI displaying correctly
