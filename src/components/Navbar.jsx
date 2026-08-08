import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Menu, X, Cpu } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME', code: '01' },
  { id: 'about', label: 'SPECS', code: '02' },
  { id: 'skills', label: 'SKILLS', code: '03' },
  { id: 'projects', label: 'PROJECTS', code: '04' },
  { id: 'experience', label: 'TIMELINE', code: '05' },
  { id: 'contact', label: 'CONTACT', code: '06' },
];

export default function Navbar({ onToggleTerminal }) {
  const { isMuted, toggleMute, playClick, playHover, playModalOpen } = useAudio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scrollSpy
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    toggleMute();
  };

  const handleNavClick = (id) => {
    playClick();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        background: scrolled ? 'rgba(6, 7, 10, 0.92)' : 'rgba(8, 10, 15, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 240, 255, 0.12)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="cyber-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo & System Status */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '4px',
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid var(--neon-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)',
            }}
          >
            <Cpu size={20} color="var(--neon-cyan)" />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'var(--neon-cyan)',
                lineHeight: 1.1,
              }}
            >
              VEX<span style={{ color: 'var(--text-primary)' }}>//SYS</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--neon-green)',
                letterSpacing: '0.05em',
              }}
            >
              <span className="status-dot" />
              <span>SYS_ONLINE // 100%</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.06em',
                  color: isActive ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '6px 4px',
                  transition: 'color 0.2s ease',
                  textShadow: isActive ? '0 0 8px rgba(0, 240, 255, 0.5)' : 'none',
                }}
              >
                <span style={{ color: 'rgba(0, 240, 255, 0.4)', marginRight: '4px' }}>
                  {item.code}.
                </span>
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'var(--neon-cyan)',
                      boxShadow: '0 0 8px var(--neon-cyan)',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Audio & Terminal & Mobile Toggle) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* CLI Terminal Button */}
          <button
            type="button"
            onClick={() => {
              playModalOpen();
              if (onToggleTerminal) onToggleTerminal();
            }}
            onMouseEnter={playHover}
            className="cyber-btn"
            style={{
              padding: '6px 12px',
              fontSize: '0.75rem',
            }}
            title="Open CLI Terminal (Ctrl+K)"
          >
            <Terminal size={14} />
            <span className="terminal-btn-text" style={{ display: 'inline-block' }}>
              CLI <span style={{ opacity: 0.6, fontSize: '0.65rem' }}>[Ctrl+K]</span>
            </span>
          </button>

          {/* Mute / Audio Toggle Button */}
          <button
            type="button"
            onClick={handleAudioToggle}
            style={{
              background: isMuted ? 'rgba(255, 0, 85, 0.1)' : 'rgba(0, 240, 255, 0.1)',
              border: `1px solid ${isMuted ? 'rgba(255, 0, 85, 0.4)' : 'var(--border-cyber)'}`,
              color: isMuted ? 'var(--status-alert)' : 'var(--neon-cyan)',
              width: '36px',
              height: '36px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            title={isMuted ? 'Enable Audio SFX' : 'Mute Audio SFX'}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-cyber)',
              color: 'var(--neon-cyan)',
              width: '36px',
              height: '36px',
              borderRadius: '4px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(6, 7, 10, 0.98)',
            borderBottom: '1px solid var(--border-cyber-glow)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: activeSection === item.id ? 'var(--neon-cyan)' : 'var(--text-primary)',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px dashed rgba(0, 240, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: 'var(--neon-cyan)', opacity: 0.6 }}>[{item.code}]</span>
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
          .terminal-btn-text span {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
