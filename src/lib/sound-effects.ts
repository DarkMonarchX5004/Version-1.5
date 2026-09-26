// Web Audio API Synthesizer for tactile luxury micro-acoustics
// Zero external file dependencies - pure organic synthesis

let audioCtx: AudioContext | null = null;
let ambientGain: GainNode | null = null;
let isAmbientPlaying = false;
let isSoundEnabled = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function toggleAudioMaster(enable?: boolean): boolean {
  if (typeof enable === "boolean") {
    isSoundEnabled = enable;
  } else {
    isSoundEnabled = !isSoundEnabled;
  }

  if (!isSoundEnabled && isAmbientPlaying) {
    stopAmbientEmberSound();
  } else if (isSoundEnabled && !isAmbientPlaying) {
    startAmbientEmberSound();
  }

  try {
    localStorage.setItem("canevia_audio_enabled", isSoundEnabled ? "true" : "false");
  } catch {
    // ignore
  }

  return isSoundEnabled;
}

export function getAudioState(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem("canevia_audio_enabled") === "true";
  } catch {
    return isSoundEnabled;
  }
}

/**
 * Play a delicate tactile clink (e.g. ceramic/amber jaggery cube click)
 */
export function playTactileClick() {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    // Warm chime frequency
    osc.frequency.setValueAtTime(1480, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch {
    // silent fallback
  }
}

/**
 * Play a gold foil glint / bag addition resonance
 */
export function playGoldResonance() {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.5]; // C Major triad harmonic chord

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);

      gain.gain.setValueAtTime(0.025, now + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5 + idx * 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.04);
      osc.stop(now + 0.55 + idx * 0.04);
    });
  } catch {
    // silent fallback
  }
}

/**
 * Start gentle woodfired ember ambient atmosphere (very low volume, soothing hearth tone)
 */
export function startAmbientEmberSound() {
  if (!isSoundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx || isAmbientPlaying) return;

  try {
    // Pink/Brown noise buffer for gentle crackle
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0,
      b1 = 0,
      b2 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.969 * b2 + white * 0.153852;
      output[i] = (b0 + b1 + b2) * 0.04;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to warm woodfire low rumble
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(320, ctx.currentTime);

    ambientGain = ctx.createGain();
    ambientGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    ambientGain.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 3); // gentle fade in

    whiteNoise.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(ctx.destination);

    whiteNoise.start();
    isAmbientPlaying = true;
  } catch {
    // silent fallback
  }
}

export function stopAmbientEmberSound() {
  if (!isAmbientPlaying || !ambientGain || !audioCtx) return;
  try {
    ambientGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
    setTimeout(() => {
      isAmbientPlaying = false;
    }, 1000);
  } catch {
    isAmbientPlaying = false;
  }
}
