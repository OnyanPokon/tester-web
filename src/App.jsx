import { useState, useEffect } from 'react';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import { portfolioData } from './data/portfolioData';
import { soundFX } from './utils/audio';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global Ctrl+K listener for CLI terminal (Slice 07 integration ready)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundFX.playClick();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Matrix Canvas Digital Rain Background */}
      <MatrixBackground />

      {/* CRT Scanline Visual Effect Overlay */}
      <div className="crt-overlay" />

      {/* Header Navigation Shell */}
      <Navbar onToggleTerminal={() => setIsTerminalOpen((prev) => !prev)} />

      {/* Main Content Sections Shell */}
      <main style={{ flex: 1 }}>
        {/* Section 01: Hero */}
        <section id="hero" className="cyber-section" style={{ paddingTop: '120px' }}>
          <div className="cyber-container">
            <div className="cyber-card" style={{ padding: '48px 32px', textAlign: 'center' }}>
              <div className="section-tag">[ SYSTEM_INITIALIZED // SLICE_01 ]</div>
              <h1 className="font-title text-cyan-glow" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                {portfolioData.personal.name}
              </h1>
              <p className="font-mono" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '24px' }}>
                {portfolioData.personal.title}
              </p>
              <div className="cyber-badge cyber-badge-green" style={{ display: 'inline-flex', margin: '0 auto' }}>
                <span className="status-dot" />
                <span>{portfolioData.personal.status}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: About / System Specs */}
        <section id="about" className="cyber-section">
          <div className="cyber-container">
            <div className="section-header">
              <span className="section-tag">02 // DIAGNOSTICS</span>
              <h2 className="section-title">SYSTEM SPECS & BIO</h2>
            </div>
            <div className="cyber-card" style={{ padding: '32px' }}>
              <p className="font-mono" style={{ color: 'var(--text-secondary)' }}>
                {portfolioData.personal.bio}
              </p>
            </div>
          </div>
        </section>

        {/* Section 03: Skills */}
        <section id="skills" className="cyber-section">
          <div className="cyber-container">
            <div className="section-header">
              <span className="section-tag">03 // CAPABILITIES</span>
              <h2 className="section-title">TECH MATRIX & SKILLS</h2>
            </div>
            <div className="cyber-card" style={{ padding: '32px' }}>
              <p className="font-mono" style={{ color: 'var(--text-muted)' }}>
                [ TECH SKILLS MODULE READY FOR SLICE 04 ]
              </p>
            </div>
          </div>
        </section>

        {/* Section 04: Projects */}
        <section id="projects" className="cyber-section">
          <div className="cyber-container">
            <div className="section-header">
              <span className="section-tag">04 // ARCHIVES</span>
              <h2 className="section-title">PROJECT SHOWCASE</h2>
            </div>
            <div className="cyber-card" style={{ padding: '32px' }}>
              <p className="font-mono" style={{ color: 'var(--text-muted)' }}>
                [ PROJECT SHOWCASE MODULE READY FOR SLICE 05 ]
              </p>
            </div>
          </div>
        </section>

        {/* Section 05: Timeline / Experience */}
        <section id="experience" className="cyber-section">
          <div className="cyber-container">
            <div className="section-header">
              <span className="section-tag">05 // LOGS</span>
              <h2 className="section-title">SYSTEM TIMELINE</h2>
            </div>
            <div className="cyber-card" style={{ padding: '32px' }}>
              <p className="font-mono" style={{ color: 'var(--text-muted)' }}>
                [ EXPERIENCE LOGS MODULE READY FOR SLICE 06 ]
              </p>
            </div>
          </div>
        </section>

        {/* Section 06: Contact */}
        <section id="contact" className="cyber-section">
          <div className="cyber-container">
            <div className="section-header">
              <span className="section-tag">06 // TRANSMISSION</span>
              <h2 className="section-title">ESTABLISH COMMS</h2>
            </div>
            <div className="cyber-card" style={{ padding: '32px' }}>
              <p className="font-mono" style={{ color: 'var(--text-muted)' }}>
                [ CONTACT TRANSMISSION MODULE READY FOR SLICE 06 ]
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(0, 240, 255, 0.2)',
          padding: '24px 0',
          background: 'rgba(6, 7, 10, 0.95)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          textAlign: 'center',
        }}
      >
        <div className="cyber-container">
          <p>© 2026 {portfolioData.personal.name} // CYBER_CORE_OS. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* Terminal Overlay State Indicator Placeholder */}
      {isTerminalOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 2000,
            background: 'rgba(12, 16, 28, 0.95)',
            border: '1px solid var(--neon-cyan)',
            padding: '12px 20px',
            borderRadius: '4px',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--neon-cyan)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span>CLI_TERMINAL_DRAWER // ACTIVE (Press ESC / Ctrl+K to close)</span>
          <button
            type="button"
            onClick={() => setIsTerminalOpen(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--neon-cyan)',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            [X]
          </button>
        </div>
      )}
    </div>
  );
}
