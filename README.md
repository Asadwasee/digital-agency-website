# Digital Agency Website

A modern, fully responsive, and animated business website built for a fictional digital agency. Developed as a team internship project at **Codecelix**, showcasing frontend development skills, UI implementation, and smooth animations.

---

## 🚀 Live Preview

> Deployment link will be added after final submission.

---

## 📸 Screenshots

> Screenshots will be added after final build.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI Framework |
| [Vite 6](https://vitejs.dev/) | Build Tool & Dev Server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-First Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & Transitions |
| [React Router DOM](https://reactrouter.com/) | Client-Side Routing |
| [Lucide React](https://lucide.dev/) | Icon Library |

---

## ✨ Features

- ⚡ Lightning-fast Vite build setup
- 🎨 Dark/Sleek professional theme with Electric Blue & Violet accents
- 🧊 Glassmorphism UI cards and components
- 🖱️ Mouse-follow glow effect on Navbar
- 📱 Fully responsive — mobile, tablet, and desktop
- 🔀 Smooth client-side routing with React Router
- 🎞️ Scroll-triggered animations using Framer Motion
- 🍔 Animated hamburger mobile menu
- 🌊 Smooth scrolling across all pages
- ✅ Active link highlighting in Navbar
- 🦋 Hover animations on all interactive elements

---

## 📁 Project Structure

```
digital-agency-website/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        # Global navigation (Integration & QA)
│   │   │   └── Footer.jsx        # Global footer (Integration & QA)
│   │   ├── home/
│   │   │   ├── Hero.jsx          # Hero section (Team Lead)
│   │   │   └── Stats.jsx         # Statistics section (Team Lead)
│   │   ├── services/
│   │   │   └── Services.jsx      # Services section (Shoaib)
│   │   ├── about/                # About components (Fasiullah)
│   │   ├── portfolio/            # Portfolio components (Ahmad)
│   │   └── contact/              # Contact components (Abdullah)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── App.jsx                   # Root layout + routing (Integration & QA)
│   ├── index.css                 # Global styles & Tailwind theme
│   └── main.jsx                  # React entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📄 Pages

| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Complete |
| About | `/about` | 🔄 In Progress |
| Services | `/services` | ✅ Complete |
| Portfolio | `/portfolio` | 🔄 In Progress |
| Contact | `/contact` | 🔄 In Progress |

---

## 🎨 Design System

```css
/* Colors */
--color-primary:   #3B82F6   /* Electric Blue */
--color-secondary: #8B5CF6   /* Violet */
--color-dark:      #0F172A   /* Deep Slate Background */
--color-card:      #1E293B   /* Card Background */

/* Typography */
Font: Inter, Poppins (system fallback)

/* Style */
Theme: Dark + Glassmorphism
Animations: Framer Motion + CSS transitions
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Asadwasee/digital-agency-website.git
cd digital-agency-website
```

**2. Install dependencies**
```bash
npm install
```

**3. Start development server**
```bash
npm run dev
```

**4. Open in browser**
```
http://localhost:5173
```

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🌿 Git Workflow

```
main              ← Final production branch
├── Junaid        ← Integration & QA (Navbar, Footer, Routing)
├── Fasiullah     ← About Page
├── Shoaib        ← Services Page
├── Ahmad         ← Portfolio Page
└── Abdullah      ← Contact Page
```

**Branch naming convention:**
```bash
git checkout -b feat/your-section
```

**Commit message format:**
```bash
git commit -m "feat: add navbar with mobile responsive menu"
git commit -m "fix: resolve footer link routing issue"
git commit -m "style: improve hero section spacing on mobile"
```

---

## 👥 Team

| Role | Responsibility |
|---|---|
| **Asad** — Team Lead | Project setup, Hero section, Stats section |
| **Junaid** — Integration & QA | Navbar, Footer, Routing, Cross-browser testing, Bug fixes |
| **Fasiullah** — About Page | About Us, Mission & Vision, Team section |
| **Shoaib** — Services Page | Services listing, hover animations |
| **Ahmad** — Portfolio Page | Projects grid, hover effects |
| **Abdullah** — Contact Page | Contact form, Google Maps, Social links |

---

## 🧪 QA Checklist

- [ ] All navigation links working correctly
- [ ] Active link highlighting on each page
- [ ] Responsive on 320px, 375px, 768px, 1024px, 1440px
- [ ] Tested on Chrome, Firefox, Edge, Opera, Safari
- [ ] No console errors on any page
- [ ] Animations smooth, no layout shift
- [ ] Contact form validation working
- [ ] Lighthouse score: Performance 80+, Accessibility 85+

---

## 📝 License

This project is built for educational purposes as part of the **Codecelix Internship Program**.

---

<p align="center">Built with ❤️ by the Codecelix Intern Team — 2026</p>