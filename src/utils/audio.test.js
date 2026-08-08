import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { soundFX, SoundEngine } from './audio.js';

describe('SoundEngine Web Audio Synthesizer', () => {
  let engine;

  beforeEach(() => {
    engine = new SoundEngine();
  });

  it('should export soundFX singleton instance', () => {
    assert.ok(soundFX instanceof SoundEngine);
  });

  it('should initialize with default unmuted state', () => {
    assert.strictEqual(engine.isMuted, false);
    assert.strictEqual(engine.getIsMuted(), false);
  });

  it('should toggle mute state correctly', () => {
    const newMuteState = engine.toggleMute();
    assert.strictEqual(newMuteState, true);
    assert.strictEqual(engine.isMuted, true);

    const unmutedState = engine.toggleMute();
    assert.strictEqual(unmutedState, false);
    assert.strictEqual(engine.isMuted, false);
  });

  it('should notify subscribers when mute state changes', () => {
    let notifiedValue = null;
    const unsubscribe = engine.subscribe((muted) => {
      notifiedValue = muted;
    });

    engine.toggleMute();
    assert.strictEqual(notifiedValue, true);

    engine.setMuted(false);
    assert.strictEqual(notifiedValue, false);

    unsubscribe();
    engine.toggleMute();
    // After unsubscribe, notifiedValue remains false
    assert.strictEqual(notifiedValue, false);
  });

  it('should execute play functions safely without throwing when unmuted or muted', () => {
    assert.doesNotThrow(() => {
      engine.playClick();
      engine.playKeypress();
      engine.playModalOpen();
      engine.playModalClose();
      engine.playSuccess();
      engine.playHover();
      engine.playError();
    });

    engine.setMuted(true);

    assert.doesNotThrow(() => {
      engine.playClick();
      engine.playKeypress();
      engine.playModalOpen();
      engine.playModalClose();
      engine.playSuccess();
      engine.playHover();
      engine.playError();
    });
  });

  it('should play sound using Web Audio API nodes when AudioContext is mocked', () => {
    let oscCreated = false;
    let gainCreated = false;
    let oscStarted = false;
    let oscStopped = false;

    class MockOscillator {
      constructor() {
        this.type = 'sine';
        this.frequency = {
          setValueAtTime: () => {},
          exponentialRampToValueAtTime: () => {},
          linearRampToValueAtTime: () => {},
        };
      }
      connect() {}
      start() {
        oscStarted = true;
      }
      stop() {
        oscStopped = true;
      }
    }

    class MockGain {
      constructor() {
        this.gain = {
          setValueAtTime: () => {},
          exponentialRampToValueAtTime: () => {},
          linearRampToValueAtTime: () => {},
        };
      }
      connect() {}
    }

    class MockAudioContext {
      constructor() {
        this.state = 'running';
        this.currentTime = 0;
        this.destination = {};
      }
      createOscillator() {
        oscCreated = true;
        return new MockOscillator();
      }
      createGain() {
        gainCreated = true;
        return new MockGain();
      }
      resume() {}
    }

    // Set mock AudioCtx
    engine.audioCtx = new MockAudioContext();
    engine.setMuted(false);

    engine.playClick();
    assert.strictEqual(oscCreated, true);
    assert.strictEqual(gainCreated, true);
    assert.strictEqual(oscStarted, true);
    assert.strictEqual(oscStopped, true);

    engine.playModalOpen();
    engine.playModalClose();
    engine.playSuccess();
    engine.playKeypress();
    engine.playHover();
    engine.playError();
  });
});
