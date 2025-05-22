import React from 'react';

const R3Gradient = () => (
  <span className="font-extrabold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">R³</span>
);

const R3Overview = () => {
  return (
    <div className="animate-fadein min-h-screen flex flex-col items-center justify-start bg-black pt-8">
      {/* Video with Overlay */}
      <div className="relative w-full flex flex-col items-center">
        <video
          src={'/assets/rr2K.mp4'}
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
              What Is <R3Gradient />?
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center drop-shadow-lg">
              <R3Gradient /> – Resonance-Based Relational Reasoning is where sound becomes meaning.
            </h2>
            <div className="backdrop-blur-sm bg-black/30 rounded-xl p-6">
              <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
                After S³ extracts the building blocks of sound, R³ listens between the lines — it asks:<br/>
                What do these sounds mean in relation to each other? Where is the pull? The center? The tension?
              </p>
              <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
                R³ is the intelligence layer.<br/>
                It analyzes the flow of harmonics, identifies hidden tonal centers, and maps the invisible forces of resonance that shape how we perceive structure.
              </p>
              <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">What does it do?</h3>
              <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
                It detects phantom roots — fundamental tones that aren't even there, but are felt.<br/>
                It calculates resonance potential, showing how tightly the partials bind together.<br/>
                It builds dynamic resonance fields — tonal topographies where pitch and energy interact in motion.
              </p>
              <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Why does it matter?</h3>
              <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
                Because music isn't static. It moves. It breathes. It resonates.<br/>
                R³ helps us understand how harmony lives in space, not just on paper.
              </p>
              <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
                With R³, we don't just hear a chord — we feel its gravity.<br/>
                We don't just identify a pitch — we see how it pulls, blends, or conflicts with others.
              </p>
              <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
                From algorithmic composition to perception-aware design, R³ brings music theory into motion — adaptive, flowing, and alive.
              </p>
              <div className="mt-12 text-2xl md:text-3xl font-extrabold text-white text-center tracking-wide">
                Welcome to the middle layer of the SRC⁹ system.<br/>
                Welcome to <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent font-extrabold">Resonance-Based Relational Reasoning</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default R3Overview; 