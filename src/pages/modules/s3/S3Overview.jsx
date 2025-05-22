import React from 'react';

const S3Gradient = () => (
  <span className="font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent">S³</span>
);

const S3Overview = () => {
  return (
    <div className="animate-fadein min-h-screen flex flex-col items-center justify-start bg-black pt-8">
      {/* Video with Overlay */}
      <div className="relative w-full flex flex-col items-center">
        <video
          src={'/assets/ss.mp4'}
          autoPlay
          muted
          loop
          playsInline
          className="rounded-xl shadow-2xl bg-black"
          style={{
            width: '90vw',
            height: '90vw',
            maxWidth: '1440px',
            maxHeight: '1440px',
            objectFit: 'cover'
          }}
        />
        {/* Overlay and Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start bg-black/40 rounded-xl">
          <div className="w-full max-w-4xl px-4 md:px-8 pt-[32%]">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 text-center tracking-wide drop-shadow-2xl">
              What Is <S3Gradient />?
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center drop-shadow-lg">
              <S3Gradient /> – Spectral Sound Space is where sound becomes structure.
            </h2>
            <div className="backdrop-blur-sm bg-black/30 rounded-xl p-6">
              <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
                Unlike traditional music analysis tools that begin with notation, S³ starts with sound itself — the raw, vibrating energy of audio. It listens deeply, frame by frame, and reveals the hidden architecture of every moment: fundamental frequencies, overtones, amplitudes, and microtonal colors.
              </p>
              <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">What does it do?</h3>
              <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
                It extracts and visualizes the building blocks of sound — partials — in high-resolution time and frequency.<br/>
                It sees beyond notes. It shows harmonic fingerprints, energy flows, and spectral landscapes.<br/>
                Every sound becomes a visual field: a map of where resonance lives and how it moves.
              </p>
              <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Why does it matter?</h3>
              <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
                Because your ear doesn't hear "C major." It hears pressure waves, harmonics, vibrato, fusion.<br/>
                S³ captures those — and turns them into meaning, color, and form.
              </p>
              <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
                From classical string quartets to spectral drones, from field recordings to AI-generated audio, S³ gives you the power to see sound — not as symbols, but as the physical, vibrant thing it truly is.
              </p>
              <div className="mt-12 text-2xl md:text-3xl font-extrabold text-white text-center tracking-wide">
                Welcome to the first layer of the SRC⁹ system.<br/>
                Welcome to the <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent font-extrabold">Spectral Sound Space</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S3Overview; 