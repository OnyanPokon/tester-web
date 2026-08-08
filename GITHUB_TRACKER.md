# 🐙 GitHub Issue Tracker & Roadmap

**Repository**: [OnyanPokon/tester-web](https://github.com/OnyanPokon/tester-web)  
**Issues URL**: [https://github.com/OnyanPokon/tester-web/issues](https://github.com/OnyanPokon/tester-web/issues)  
**Projects URL**: [https://github.com/OnyanPokon/tester-web/projects](https://github.com/OnyanPokon/tester-web/projects)  

---

## ⚡ 8 Vertical-Slice Task Tracker

| # | Feature Title | Target Component(s) | Status | Priority | GitHub Issue Link |
| :---: | :--- | :--- | :---: | :---: | :---: |
| **01** | **Core Cyber Design System & Shell Layout** | `index.css`, `MatrixBackground`, `Navbar` | 🟡 READY | `P0` | [Issue #1](https://github.com/OnyanPokon/tester-web/issues) |
| **02** | **Synthetic Audio Engine Integration** | `src/utils/audio.js`, `Navbar` | ⏸️ BLOCKED | `P1` | [Issue #2](https://github.com/OnyanPokon/tester-web/issues) |
| **03** | **Hero Section & System Specs (About)** | `Hero.jsx`, `About.jsx` | ⏸️ BLOCKED | `P1` | [Issue #3](https://github.com/OnyanPokon/tester-web/issues) |
| **04** | **Interactive Skills Grid & Progress Bars** | `Skills.jsx` | ⏸️ BLOCKED | `P1` | [Issue #4](https://github.com/OnyanPokon/tester-web/issues) |
| **05** | **Filterable Projects Showcase & Cyber Modal** | `Projects.jsx`, `ProjectModal.jsx` | ⏸️ BLOCKED | `P1` | [Issue #5](https://github.com/OnyanPokon/tester-web/issues) |
| **06** | **Experience Timeline Logs & Contact Form** | `Experience.jsx`, `Contact.jsx`, `Footer.jsx` | ⏸️ BLOCKED | `P1` | [Issue #6](https://github.com/OnyanPokon/tester-web/issues) |
| **07** | **Interactive CLI Terminal Overlay** | `CLITerminal.jsx` | ⏸️ BLOCKED | `P2` | [Issue #7](https://github.com/OnyanPokon/tester-web/issues) |
| **08** | **E2E Integration & Production Build** | `App.jsx`, Vite build engine | ⏸️ BLOCKED | `P0` | [Issue #8](https://github.com/OnyanPokon/tester-web/issues) |

---

## 🛠️ Automated GitHub Issue Creation

Untuk membuat ke-8 issue di atas secara otomatis ke GitHub repository Anda, jalankan perintah berikut di terminal:

```bash
# 1. Login ke GitHub CLI (jika belum login)
& "C:\Program Files\GitHub CLI\gh.exe" auth login

# 2. Jalankan script pembuatan issue otomatis
node scripts/create-github-issues.mjs
```
