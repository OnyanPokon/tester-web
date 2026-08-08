import { execSync } from 'child_process';

const repo = "OnyanPokon/tester-web";
const ghPath = `"C:\\Program Files\\GitHub CLI\\gh.exe"`;

const tickets = [
  {
    title: "[Slice 01] Core Cyber Design System & Shell Layout",
    label: "enhancement,design-system,P0",
    body: `## 🎯 Slice Objective
Establish the foundational visual aesthetic and core shell layout for the Cyberpunk Tech Portfolio.

## 📋 Key Deliverables
- [ ] Refactor \`src/index.css\` with CSS custom properties (glows, glassmorphism, neo-tokyo dark background).
- [ ] Create CRT Scanline effect overlay.
- [ ] Build \`src/components/MatrixBackground.jsx\` (canvas matrix rain animation).
- [ ] Build \`src/components/Navbar.jsx\` (cyber header with logo, section links, and status indicator).
- [ ] Update \`src/App.jsx\` to render shell background and header layout.

## 🧪 Acceptance Criteria
- Matrix rain canvas animates smoothly in dark void background.
- Navbar sticky at top with glassmorphic filter and working scroll anchors (\`#hero\`, \`#about\`, \`#skills\`, \`#projects\`, \`#experience\`, \`#contact\`).
- Zero layout shift across screen sizes.`
  },
  {
    title: "[Slice 02] Synthetic Audio Engine Integration",
    label: "enhancement,audio,P1",
    body: `## 🎯 Slice Objective
Connect zero-dependency Web Audio API synthesizer (\`src/utils/audio.js\`) to global UI interactions.

## 📋 Key Deliverables
- [ ] Integrate sound triggers into Navbar mute toggle button.
- [ ] Add \`playClick()\` to button & tab clicks.
- [ ] Add \`playKeypress()\` to interactive inputs & terminal typing.
- [ ] Add \`playModalOpen()\` to popup triggers.
- [ ] Add \`playSuccess()\` to copy / form submit actions.

## 🧪 Acceptance Criteria
- Mute toggle in Navbar correctly silences/enables sound engine.
- Web Audio context initializes seamlessly on first user interaction without browser warnings.`
  },
  {
    title: "[Slice 03] Hero Section & System Specs (About)",
    label: "feature,hero-about,P1",
    body: `## 🎯 Slice Objective
Create the Hero section with dynamic role auto-typer and hardware diagnostic specs bio card.

## 📋 Key Deliverables
- [ ] Build \`src/components/Hero.jsx\` (Avatar frame, status glow ring, dynamic title typewriter effect, CTAs).
- [ ] Build \`src/components/About.jsx\` (Diagnostic bio text card, quick stats breakdown grid).
- [ ] Bind data from \`src/data/portfolioData.js\` (\`personal\` & \`specs\`).

## 🧪 Acceptance Criteria
- Dynamic typewriter loops through roles (e.g. Full-Stack Architect, Cyber Developer).
- CTA buttons trigger smooth scrolling and audio feedback.
- System specs cards render cleanly with cyber border styling.`
  },
  {
    title: "[Slice 04] Interactive Skills Grid & Progress Bars",
    label: "feature,skills,P1",
    body: `## 🎯 Slice Objective
Render tech skill breakdown categorized by Frontend, Backend, and DevOps/Security with animated progress bars.

## 📋 Key Deliverables
- [ ] Build \`src/components/Skills.jsx\`.
- [ ] Render Lucide icons for skill items.
- [ ] Add keyframe progress bar animations on scroll into view.
- [ ] Bind data from \`src/data/portfolioData.js\` (\`skills\`).

## 🧪 Acceptance Criteria
- Tech skills grouped into 3 distinct cyber cards.
- Glowing progress bar fills smoothly up to target percentage when visible.`
  },
  {
    title: "[Slice 05] Filterable Projects Showcase & Cyber Modal",
    label: "feature,projects,P1",
    body: `## 🎯 Slice Objective
Interactive showcase of portfolio projects with live category filtering and detailed holographic viewer modal.

## 📋 Key Deliverables
- [ ] Build \`src/components/Projects.jsx\` (Category filter tabs: ALL, FULLSTACK, FRONTEND, BACKEND, AI_CYBER).
- [ ] Build \`src/components/ProjectCard.jsx\` (Hover glow, tag pills, quick link buttons).
- [ ] Build \`src/components/ProjectModal.jsx\` (Long description, feature highlights, live demo & repo links).
- [ ] Bind data from \`src/data/portfolioData.js\` (\`projects\`).

## 🧪 Acceptance Criteria
- Category tabs filter displayed cards without full page refresh.
- Clicking card opens modal popup with audio effect and trap focus; ESC or click backdrop closes modal.`
  },
  {
    title: "[Slice 06] Experience Timeline Logs & Contact Form",
    label: "feature,experience-contact,P1",
    body: `## 🎯 Slice Objective
System log timeline of work history and cyber contact form with quick handle copying and uptime clock.

## 📋 Key Deliverables
- [ ] Build \`src/components/Experience.jsx\` (Timeline node architecture with dates, roles, and tech stack tags).
- [ ] Build \`src/components/Contact.jsx\` (Form fields with validation, quick email/social handle copy buttons with notification feedback).
- [ ] Build \`src/components/Footer.jsx\` (Live ticking uptime counter, copyright note).
- [ ] Bind data from \`src/data/portfolioData.js\` (\`experience\`, \`socials\`).

## 🧪 Acceptance Criteria
- Contact form handles submit state with audio & success toast.
- Clicking copy button copies text to clipboard and shows "COPIED" badge.
- Uptime counter updates live every second in footer.`
  },
  {
    title: "[Slice 07] Interactive CLI Terminal Overlay",
    label: "feature,cli-terminal,P2",
    body: `## 🎯 Slice Objective
Add an interactive command-line overlay accessible via keyboard shortcut (\`Ctrl+K\`) or Navbar terminal icon.

## 📋 Key Deliverables
- [ ] Build \`src/components/CLITerminal.jsx\`.
- [ ] Implement command parser: \`help\`, \`bio\`, \`skills\`, \`projects\`, \`contact\`, \`clear\`, \`exit\`.
- [ ] Add keypress audio synthesis to terminal typing.
- [ ] Support command history navigation (Up/Down arrow keys).

## 🧪 Acceptance Criteria
- \`Ctrl + K\` or Navbar button toggles terminal drawer.
- Typing \`help\` lists available commands.
- Typing \`clear\` wipes terminal buffer.`
  },
  {
    title: "[Slice 08] E2E Integration & Production Build",
    label: "qa,build,P0",
    body: `## 🎯 Slice Objective
Assemble all components into \`src/App.jsx\`, perform zero-error audit, and verify clean production Vite build.

## 📋 Key Deliverables
- [ ] Assemble shell layout and sections in \`src/App.jsx\`.
- [ ] Verify static data mapping from \`portfolioData.js\`.
- [ ] Run \`npm run lint\` (\`oxlint\`) to ensure zero errors/warnings.
- [ ] Execute \`npm run build\` and test \`npm run preview\`.

## 🧪 Acceptance Criteria
- Production build succeeds cleanly without bundle errors.
- Web app loads rapidly with zero console errors or warnings.`
  }
];

console.log(`🚀 Starting GitHub Issue Creation for ${repo}...`);

for (const t of tickets) {
  console.log(`Creating: ${t.title}...`);
  try {
    const cmd = `${ghPath} issue create --repo ${repo} --title "${t.title}" --body "${t.body.replace(/"/g, '\\"')}"`;
    const output = execSync(cmd, { encoding: 'utf-8' });
    console.log(`✅ Success: ${output.trim()}`);
  } catch (err) {
    console.error(`❌ Failed: ${err.message}`);
  }
}
