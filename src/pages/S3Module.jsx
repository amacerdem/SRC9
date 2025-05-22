import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const S3Module = () => {
  return (
    <div className="animate-fadein min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">S³ Module</h1>
        
        {/* Video Section */}
        <div className="relative w-full aspect-square max-w-2xl mx-auto mb-12">
          <video
            src="/ss.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Introduction */}
          <section className="rounded-xl p-8 shadow-lg border-[1pt] border-gray-800">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              Introduction
            </h2>
            <p className="mb-4">
              The S³ (Spectral Sound Space) module is a high-resolution spectral analysis engine that extracts the fundamental acoustic content of music. It processes raw audio signals to identify partials, harmonics, microtonal deviations, and time–frequency–amplitude relations.
            </p>
            <p className="mb-4">
              This module serves as the foundation of the SRC⁹ system, providing the raw spectral data that feeds into the R³ (Resonance) module for harmonic analysis and the C³ (Cognitive) module for perceptual processing.
            </p>
          </section>

          {/* Theory */}
          <section className="rounded-xl p-8 shadow-lg border-[1pt] border-gray-800">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              Theoretical Framework
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Spectral Analysis</h3>
                <p className="mb-4">
                  The S³ module employs advanced spectral analysis techniques to decompose audio signals into their constituent frequencies. This process involves:
                </p>
                <ul className="list-disc pl-8 mb-4">
                  <li>High-resolution FFT (Fast Fourier Transform)</li>
                  <li>Partial tracking and harmonic analysis</li>
                  <li>Microtonal deviation detection</li>
                  <li>Time-frequency-amplitude mapping</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Mathematical Foundation</h3>
                <div className="mb-4">
                  <BlockMath math={String.raw`X(k) = \sum_{n=0}^{N-1} x(n) e^{-j2\pi kn/N}`}/>
                </div>
                <p className="mb-4">
                  Where:
                </p>
                <ul className="list-disc pl-8 mb-4">
                  <li><InlineMath math={String.raw`X(k)`}/> is the complex spectrum at frequency bin k</li>
                  <li><InlineMath math={String.raw`x(n)`}/> is the input signal</li>
                  <li><InlineMath math={String.raw`N`}/> is the FFT size</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Spectral Decomposition</h3>
                <p className="mb-4">
                  The spectral decomposition process involves:
                </p>
                <ul className="list-disc pl-8 mb-4">
                  <li>Window function application for time-frequency analysis</li>
                  <li>FFT computation for frequency domain representation</li>
                  <li>Partial tracking for harmonic component identification</li>
                  <li>Microtonal deviation calculation for precise pitch analysis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pipeline */}
          <section className="rounded-xl p-8 shadow-lg border-[1pt] border-gray-800">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              Processing Pipeline
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Signal Processing Steps</h3>
                <ol className="list-decimal pl-8 mb-4">
                  <li>Pre-processing and normalization</li>
                  <li>Window function application</li>
                  <li>FFT computation</li>
                  <li>Partial tracking</li>
                  <li>Harmonic analysis</li>
                  <li>Microtonal deviation calculation</li>
                  <li>Time-frequency-amplitude mapping</li>
                </ol>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Data Flow</h3>
                <p className="mb-4">
                  The processed data flows through the following stages:
                </p>
                <ul className="list-disc pl-8 mb-4">
                  <li>Raw audio input</li>
                  <li>Spectral analysis</li>
                  <li>Feature extraction</li>
                  <li>Data normalization</li>
                  <li>Output to R³ module</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Optimization</h3>
                <p className="mb-4">
                  The S³ module employs several optimization techniques:
                </p>
                <ul className="list-disc pl-8 mb-4">
                  <li>Parallel processing for FFT computation</li>
                  <li>Efficient memory management for large audio files</li>
                  <li>Real-time processing capabilities</li>
                  <li>Adaptive window sizing based on signal characteristics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Integration */}
          <section className="rounded-xl p-8 shadow-lg border-[1pt] border-gray-800">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              Integration with R³ and C³
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Data Exchange</h3>
                <p className="mb-4">
                  The S³ module provides the fundamental spectral data that feeds into:
                </p>
                <ul className="list-disc pl-8 mb-4">
                  <li>R³ module for harmonic analysis and resonance field computation</li>
                  <li>C³ module for perceptual processing and cognitive mapping</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">System Architecture</h3>
                <p className="mb-4">
                  The integration ensures a complete pipeline from raw audio to cognitive understanding:
                </p>
                <ul className="list-disc pl-8 mb-4">
                  <li>S³: Spectral analysis and feature extraction</li>
                  <li>R³: Harmonic analysis and resonance field computation</li>
                  <li>C³: Perceptual processing and cognitive mapping</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Visualization */}
          <section className="rounded-xl p-8 shadow-lg border-[1pt] border-gray-800">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              Visualization
            </h2>
            <p className="mb-4">
              The S³ module includes advanced visualization capabilities:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li>Real-time spectrogram display</li>
              <li>Harmonic component visualization</li>
              <li>Microtonal deviation mapping</li>
              <li>Time-frequency-amplitude 3D plots</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default S3Module; 