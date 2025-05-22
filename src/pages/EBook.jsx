// Bu dosya artık kullanılmıyor. Tüm e-kitap fonksiyonları Architecture.jsx'e taşındı. 

import React, { useState, useCallback, useEffect } from 'react';

const pages = [
  {
    title: "SRC⁹ Architecture",
    body: `SRC⁹ is a modular system designed to analyze, interpret, and generate music-theoretical structures using a combination of spectral, resonance-based, and cognitive modules. The architecture is inspired by both traditional music theory and modern computational neuroscience.`
  },
  {
    title: "What is SRC⁹?",
    body: `SRC⁹ = Spectral–Resonance–Cognitive system.\n\nIt consists of three main modules:\n- S³: Spectral Sound Space\n- R³: Resonance-Based Relational Reasoning\n- C³: Cognitive Consonance Circuit.`
  },
  {
    title: "Module S³",
    body: `Spectral analysis, harmonics, partials, and time–frequency representations.\n\nMathematical models and psychoacoustic features are extracted from the input waveform.`
  },
  {
    title: "Module R³",
    body: `Resonance-based reasoning, scalar fields, and relational logic.\n\nThis module interprets spectral data in a music-theoretical context.`
  },
  {
    title: "Module C³",
    body: `Cognitive Consonance Circuit: links to EEG/fMRI data, semantic memory, and perceptual feedback.\n\nImplements multimodal feedback and real-time adaptation.`
  },
  {
    title: "Multimodal Feedback",
    body: `The architecture supports bidirectional modulation between modules.\n\n- High CTU (tension) modulates harmonic weights in R³\n- Strong PIU (immersion) suppresses noisy partials in S³\n- SAU (semantic memory) triggers real-time annotations or dynamic re-sequencing.`
  },
  {
    title: "Implementation Philosophy",
    body: `Scientific: Grounded in psychoacoustics, computational neuroscience, and acoustic theory.\n\nModular: Built with independently executable, API-controlled units.\n\nInteractive: Supports live EEG, Unity scenes, or perceptual feedback loops.`
  },
  {
    title: "Thank You",
    body: `You have reached the end of the demo.\n\nFeel free to extend this e-book with your own modules, math, and interactive content!`
  }
];

function Page({ content }) {
  if (!content) return <div className="w-[350px] h-[500px] bg-black rounded-xl mx-2 border border-gray-700" />;
  return (
    <div className="w-[350px] h-[500px] bg-black text-white p-6 shadow-xl rounded-xl overflow-auto flex flex-col mx-2 border border-gray-700">
      <h2 className="text-xl font-bold mb-2 text-white">{content.title}</h2>
      <div className="text-sm whitespace-pre-wrap flex-1 text-gray-200">{content.body}</div>
    </div>
  );
}

export default function EBook() {
  return (
    <div style={{ background: 'white', minHeight: '100vh', width: '100%' }} />
  );
} 