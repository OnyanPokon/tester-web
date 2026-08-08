import { useState, useEffect } from 'react';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import { portfolioData } from './data/portfolioData';
import { useAudio } from './hooks/useAudio';
import { Volume2, VolumeX, Sparkles, Terminal, CheckCircle, AlertTriangle } from 'lucide-react';

export default function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [lastSoundPlayed, setLastSoundPlayed] = useState('NONE');
  const {
    isMuted,
    toggleMute,
    playClick,
    playKeypress,
    playModalOpen,
    playModalClose,
    playSuccess,
    playHover,
    playError,
  } = useAudio();

  // Global Ctrl+K listener for CLI terminal (Slice 07 integration ready)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        playModalOpen();
        setIsTerminalOpen((prev) => !prev);
        setLastSoundPlayed('MODAL_OPEN (Ctrl+K)');
      } else if (e.key === 'Escape' && isTerminalOpen) {
        playModalClose();
        setIsTerminalOpen(false);
        setLastSoundPlayed('MODAL_CLOSE (ESC)');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen, playModalOpen, playModalClose]);

  const triggerSound = (name, fn) => {
    fn();
    setLastSoundPlayed(name);
  };

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
              <div className="section-tag">[ SYSTEM_INITIALIZED // SLICE_02 ]</div>
              <h1 className="font-title text-cyan-glow" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                {portfolioData.personal.name}
              </h1>
              <p className="font-mono" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '24px' }}>
                {portfolioData.personal.title}
              </p>
              <div className="cyber-badge cyber-badge-green" style={{ display: 'inline-flex', margin: '0 auto' }}>
                <span className="status-dot" />
                <span>AUDIO_SYNTHESIZER // ACTIVE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Synthetic Audio Engine Diagnostics & System Specs */}
        <section id="about" className="cyber-section">
          <div className="cyber-container">
            <div className="section-header">
              <span className="section-tag">02 // SYNTHETIC AUDIO ENGINE</span>
              <h2 className="section-title">WEB AUDIO SFX SYNTHESIZER</h2>
            </div>

            {/* Audio Engine Interactive Test Panel */}
            <div className="cyber-card" style={{ padding: '32px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px dashed var(--border-cyber)' }}>
                <div>
                  <h3 className="font-title text-cyan-glow" style={{ margin: 0, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={18} /> SYNTHETIC_SFX_TESTER
                  </h3>
                  <p className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Zero-dependency browser Web Audio API oscillator synthesizer. Click buttons to test audio triggers.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className={`cyber-badge ${isMuted ? 'cyber-badge-pink' : 'cyber-badge-green'}`}>
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    <span>{isMuted ? 'AUDIO_MUTED' : 'AUDIO_ONLINE'}</span>
                  </div>
                  <button
                    type="button"
                    onClick={toggleMute}
                    onMouseEnter={playHover}
                    className="cyber-btn"
                    style={{ fontSize: '0.8rem', padding: '6px 14px' }}
                  >
                    {isMuted ? 'UNMUTE AUDIO' : 'MUTE AUDIO'}
                  </button>
                </div>
              </div>

              {/* Sound Effect Test Triggers Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => triggerSound('CLICK_BEEP', playClick)}
                  onMouseEnter={playHover}
                  className="cyber-btn"
                  style={{ justifyContent: 'center' }}
                >
                  PLAY CLICK SFX
                </button>
                <button
                  type="button"
                  onClick={() => triggerSound('KEYPRESS_BLIP', playKeypress)}
                  onMouseEnter={playHover}
                  className="cyber-btn"
                  style={{ justifyContent: 'center' }}
                >
                  PLAY KEYPRESS SFX
                </button>
                <button
                  type="button"
                  onClick={() => triggerSound('MODAL_OPEN_SWEEP', playModalOpen)}
                  onMouseEnter={playHover}
                  className="cyber-btn"
                  style={{ justifyContent: 'center' }}
                >
                  PLAY MODAL OPEN
                </button>
                <button
                  type="button"
                  onClick={() => triggerSound('MODAL_CLOSE_SWEEP', playModalClose)}
                  onMouseEnter={playHover}
                  className="cyber-btn"
                  style={{ justifyContent: 'center' }}
                >
                  PLAY MODAL CLOSE
                </button>
                <button
                  type="button"
                  onClick={() => triggerSound('SUCCESS_POWERUP', playSuccess)}
                  onMouseEnter={playHover}
                  className="cyber-btn"
                  style={{ justifyContent: 'center' }}
                >
                  <CheckCircle size={14} /> PLAY SUCCESS
                </button>
                <button
                  type="button"
                  onClick={() => triggerSound('GLITCH_ERROR', playError)}
                  onMouseEnter={playHover}
                  className="cyber-btn"
                  style={{ justifyContent: 'center', borderColor: 'rgba(255, 0, 85, 0.4)', color: 'var(--status-alert)' }}
                >
                  <AlertTriangle size={14} /> PLAY ERROR
                </button>
              </div>

              {/* Status Output Line */}
              <div style={{ marginTop: '20px', background: 'rgba(6, 8, 14, 0.8)', padding: '10px 16px', borderRadius: '4px', border: '1px solid rgba(0, 240, 255, 0.15)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--neon-green)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>LAST_TRIGGERED_SFX: <strong style={{ color: 'var(--neon-cyan)' }}>{lastSoundPlayed}</strong></span>
                <span>STATUS: {isMuted ? 'SILENT' : 'EMITTING'}</span>
              </div>
            </div>

            {/* Diagnostic Bio Card */}
            <div className="cyber-card" style={{ padding: '32px' }}>
              <h3 className="font-title text-cyan-glow" style={{ marginTop: 0, marginBottom: '12px' }}>SYSTEM DIAGNOSTICS</h3>
              <p className="font-mono" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {portfolioData.personal.bio}
              </p>
            </div>
          </div>
        </section>

        {/* Section 03: Skills Placeholder */}
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

        {/* Section 04: Projects Placeholder */}
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

        {/* Section 05: Timeline Placeholder */}
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

        {/* Section 06: Contact Placeholder */}
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
          <Terminal size={16} />
          <span>CLI_TERMINAL_DRAWER // ACTIVE (Press ESC / Ctrl+K to close)</span>
          <button
            type="button"
            onClick={() => {
              playModalClose();
              setIsTerminalOpen(false);
            }}
            onMouseEnter={playHover}
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
