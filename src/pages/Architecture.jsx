import React from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Add custom keyframes for pulse animation
const pulseStyle = `
@keyframes nerdPulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(220,38,38,0.7); }
  50% { transform: scale(1.08); box-shadow: 0 0 32px 8px rgba(220,38,38,0.5); }
}
`;

const Architecture = () => {
  const handleDownload = () => {
    window.open('/full/ARC of SRC.pdf', '_blank');
  };

  return (
    <div className="animate-fadein min-h-screen bg-black text-white">
      {/* Inject custom style for pulse animation */}
      <style>{pulseStyle}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Architecture</h1>
        {/* Mathematical Foundations Section */}
        <div className="rounded-xl px-8 py-12 shadow-lg border-[1pt] border-gray-800 bg-black">
          <div className="w-full rounded-xl p-8 text-neutral-100 bg-black">
            <h2 className="text-orange-400 text-3xl font-bold mb-4">Mathematical Foundations</h2>
            <div className="flex justify-center mb-8">
              <BlockMath math={String.raw`\text{Spectral Analysis} \rightarrow \text{Resonance Fields} \rightarrow \text{Cognitive Mapping}`}/>
            </div>
            
            <div className="p-8 text-white bg-black min-h-screen">
              <h2 className="text-orange-400 text-2xl font-bold mb-4">What is SRC⁹?</h2>
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">1.1 Definition and Rationale</h3>
              <p>
                <b>SRC⁹</b>, or the <b>Spectral–Resonance–Cognitive</b> system, is an integrated, multi-layered computational framework
                that models how music transforms from raw sound into perceived structure and cognitive meaning.
              </p>
              <p>
                It is composed of three tightly coupled modules:
              </p>
              <ul className="list-disc ml-8 my-2">
                <li><b>S³ – Spectral Sound Space</b>: A high-resolution spectral analysis engine that extracts the fundamental acoustic content of music, including partials, harmonics, microtonal deviations, and time–frequency–amplitude relations.</li>
                <li><b>R³ – Resonance-Based Relational Reasoning</b>: A harmonic reasoning engine that interprets spectral data through scalar field theory, resonance topology, and psychoacoustic principles to model musical structure without symbolic assumptions.</li>
                <li><b>C³ – Cognitive Consonance Circuit</b>: A neurophysiologically grounded model of perceptual resonance and emotional impact, structured into nine cognitive units derived from EEG/fMRI literature and organized into measurable, time-varying neural signatures.</li>
              </ul>
              <p className="mt-2">
                The superscript 9 (⁹) denotes the system's expansion into <b>nine cognitive dimensions</b>, each modeled as a unique <i>Unit</i> in the C³ architecture,
                and accessible from the resonance outputs of R³ and the acoustic signals of S³.
              </p>
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">1.2 Motivation: Why SRC⁹?</h3>
              <p>
                Traditional music theory frameworks start from notation and seek meaning through pre-defined symbolic systems.
                Meanwhile, modern machine learning models such as Jukebox or Magenta generate musical output with no semantic or cognitive interpretability.
                Neuroscientific studies, though rich in EEG/fMRI data, lack a bridge to music-theoretical relevance.
              </p>
              <p className="mt-2">SRC⁹ was created to solve this cross-domain disconnect by:</p>
              <ol className="list-decimal ml-8 my-2">
                <li>Starting with physical audio (not symbolic input)</li>
                <li>Modeling resonance fields and energy topologies, not abstract pitch classes</li>
                <li>Mapping these fields into time-aligned neural signatures rooted in empirical neuroscience</li>
              </ol>
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">1.3 System Overview: A Perception-to-Structure Pipeline</h3>
              <p>
                <b>SRC⁹</b> operates as a real-time or batch-based pipeline:
              </p>
              <div className="my-4 flex justify-center">
                <BlockMath math={`\\text{Audio Signal (Waveform)} \\rightarrow \\mathbf{S}^3 \\rightarrow \\mathbf{R}^3 \\rightarrow \\mathbf{C}^3 \\rightarrow \\text{Feedback}`}/>
              </div>
              <ul className="list-disc ml-8 my-2">
                <li>
                  <b>S³</b> produces framewise spectral data:
                  <BlockMath math={`\\mathrm{partials}_t = \\{\\mathrm{freq},\\, \\mathrm{dB},\\, \\mathrm{symbol},\\, \\mathrm{harmonic\\ index}\\}`}/>
                </li>
                <li>
                  <b>R³</b> computes: Phantom Root (PR), Resonance Potential (Φ), Resonance Field Map (RFM), Cognitive Resonance Vector (CRV)
                </li>
                <li>
                  <b>C³</b> receives these values to drive:
                  <ul className="list-disc ml-8">
                    <li>Tension mapping (CTU)</li>
                    <li>Affective modeling (AOU)</li>
                    <li>Memory alignment (SAU)</li>
                    <li>Expectation violation (IEU)</li>
                    <li>Group synchrony and attention modeling (IRU, NSU)</li>
                  </ul>
                </li>
              </ul>
              <p>
                Each stage of SRC⁹ is aligned to a common temporal resolution (typically 0.1s), enabling multimodal synchronization with EEG, fMRI, audio playback, or Unity-based interactive scenes.
              </p>
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">1.4 Formal Notation</h3>
              <p>
                Let <b>x(t)</b> be the input waveform segmented into overlapping frames.
              </p>
              <div className="my-4">
                <b>From S³:</b>
                <div className="flex justify-center">
                  <BlockMath math={`\\mathrm{Frame}_i = \\{f_0, f_1, \\ldots, f_{16}\\},\\quad \\text{where each } f_n = \\mathrm{partial}_{i,n}`}/>
                </div>
                <b>From R³:</b>
                <div className="flex justify-center">
                  <BlockMath math={`\\mathrm{PR}_i,\\, \\Phi_i,\\, \\mathrm{RFM}_i(f),\\, \\mathrm{CRV}_i = \\langle \\mathrm{TPS}_i,\\, \\mathrm{TFI}_i,\\, \\mathrm{NSF}_i \\rangle`} />
                </div>
                <b>From C³:</b>
                <div className="flex justify-center">
                  <BlockMath math={`C^3(t) = \\sum_{i=1}^9 w_i\\, \\mathrm{Unit}_i(t),\\quad \\mathrm{Unit}_i(t) = \\sum_j w_{ij}\\, \\mathrm{Node}_j(t)`} />
                </div>
              </div>
              <p>
                Each <b>Node</b> is an EEG/fMRI-derived observable (e.g., β phase-locking, MMN, BOLD z-score),
                anchored anatomically using MNI coordinates in a 3D GlassBrainMap interface.
              </p>
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">1.5 Tools Used in S³</h3>
              <ul className="list-disc ml-8 my-2">
                <li><b>CREPE</b> – fundamental frequency (f₀) extraction</li>
                <li><b>librosa</b> – STFT, RMS, cent conversion, spectral filtering</li>
                <li><b>Custom Python Pipeline</b> – modular scripts for feature extraction, JSON output, and symbolic mapping</li>
              </ul>
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">1.6 Scientific Rationale</h3>
              <p>
                Inspired by <b>spectral music theory</b> (e.g., Grisey, Murail) and <b>auditory physiology</b> (e.g., tonotopic mapping),
                the S³ module treats the <b>frequency domain</b> as the true substrate of musical identity —
                discarding staff notation and tuning system assumptions entirely.
              </p>
              <p>
                Rather than interpreting pitch from pre-defined symbolic categories,
                S³ analyzes microtonal partial structures, harmonic energy topologies,
                and perceptual salience derived from real acoustic signals.
              </p>
              <p>
                This design allows S³ to generalize across styles, cultures, and tunings while maintaining neuroacoustic realism.
              </p>
            </div>
            {/* R³ Section */}
            <div className="p-8 text-white bg-black">
  <h2 className="text-orange-400 text-2xl font-bold mb-4">What is S³? — Spectral Sound Space</h2>

  <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">1.1 Function</h3>
  <p>
    The <b>Spectral Sound Space (S³)</b> module is the foundational layer of the SRC⁹ framework.
    It transforms raw audio signals into structured spectral data by extracting partials, harmonic components, microtonal deviations, and amplitude envelopes with high temporal precision.
  </p>
  <p>
    S³ does not rely on symbolic notation. Instead, it operates directly on the waveform,
    mirroring how the auditory cortex responds to real acoustic input. It forms the perceptual substrate
    for all higher-order resonance and cognitive processes.
  </p>
</div>
<div className="p-8 text-white bg-black">
  <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">1.2 Core Processes</h3>
  <ul className="list-disc ml-8 my-2">
    <li>
      <b>Fundamental Frequency Extraction (CREPE):</b> Framewise <code>f₀</code> estimation using a deep learning model, with sub-cent accuracy and robustness across styles.
    </li>
    <li>
      <b>Partial Tracking:</b> Identification of harmonic and inharmonic components per frame,
      enabling continuity over time and overtone series labeling.
    </li>
    <li>
      <b>Microtonal Notation Mapping:</b> Assignment of cent-based symbolic labels (e.g., <code>C4⁺¹</code>, <code>G2⁻¹</code>) to each detected partial, supporting 96-tone resolution per octave.
    </li>
    <li>
      <b>Amplitude and Energy Metrics:</b> Extraction of <code>dB</code> level, spectral centroid, and entropy per frame for further resonance modeling.
    </li>
    <li>
      <b>Canonical JSON Output:</b> Standardized frame structure including frequency, amplitude, symbol, harmonic index, and cognitive integration tags.
    </li>
  </ul>
</div>
<div className="p-8 text-white bg-black">
  <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">1.3 Spectral Field Representation</h3>
  <p>
    The output of S³ can be interpreted not just as a list of partials, but as a structured field of energy
    evolving over time and frequency. Each partial contributes a localized intensity to a continuous
    spectral surface.
  </p>
  <p>
    This surface is typically visualized as a log-frequency terrain, where peaks correspond to perceptually salient
    components. The result is a time–frequency–amplitude matrix that can be directly mapped onto perceptual or cognitive dimensions.
  </p>
  <div className="flex justify-center my-4">
    <code>
      RFM(f, t) = Σ A<sub>i</sub>(t) · exp( - (f - f<sub>i</sub>(t))² / 2σ² )
    </code>
  </div>
  <p>
    This Gaussian field formulation serves as the direct input to R³'s resonance topology analysis.
  </p>
</div>
<div className="p-8 text-white bg-black">
  <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">1.4 Scientific Basis</h3>
  <p>
    The theoretical foundations of S³ are drawn from multiple disciplines that converge on the idea of sound as a continuous,
    multi-dimensional physical phenomenon rather than a discrete symbolic construct.
  </p>
  <ul className="list-disc ml-8 my-2">
    <li>
      <b>Spectral Music Theory:</b> Inspired by composers such as Grisey and Murail, S³ treats frequency and timbre
      as the primary carriers of musical meaning, decoupled from tonality.
    </li>
    <li>
      <b>Auditory Neuroscience:</b> Based on findings in tonotopic mapping, phase-locking, and auditory cortex modeling,
      S³ aligns its data extraction with perceptual realities of the human hearing system.
    </li>
    <li>
      <b>Signal Processing & Deep Learning:</b> Tools like CREPE and librosa are used to extract detailed spectral profiles
      with machine-learned robustness and cross-style consistency.
    </li>
    <li>
      <b>Music Informatics & Symbolic Encoding:</b> S³ formalizes microtonal and harmonic structures through a cent-based symbolic system
      designed for generalization beyond 12-TET.
    </li>
  </ul>
</div>
<div className="p-8 text-white bg-black">
  <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">1.5 Cross-Style and Cross-Tuning Generalizability</h3>
  <p>
    Unlike systems constrained by Western notation or equal temperament, S³ is designed to generalize across musical
    cultures, styles, and tuning systems. Its analysis is based on physical sound, not symbolic assumptions.
  </p>
  <ul className="list-disc ml-8 my-2">
    <li>
      <b>Microtonal Compatibility:</b> S³ supports 96 steps per octave (≈12.5 cent resolution),
      enabling analysis of maqam, raga, gamelan, and spectral music.
    </li>
    <li>
      <b>Style-Agnostic Design:</b> Whether analyzing Baroque counterpoint, drone-based traditions, free improvisation,
      or electronic noise music, S³ operates identically.
    </li>
    <li>
      <b>Real-Time Adaptability:</b> S³ can be run in both offline batch mode and real-time streaming,
      making it compatible with live performance and interactive installations.
    </li>
    <li>
      <b>Foundation for R³ and C³:</b> By outputting clean, perceptually valid spectral data,
      S³ provides the structural substrate that supports higher-order reasoning and cognitive mapping in downstream modules.
    </li>
  </ul>
</div>

            <div className="p-8 text-white bg-black">
              <h2 className="text-orange-400 text-2xl font-bold mb-4">What is R³?</h2>
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">2.1 Function</h3>
              <p>
                The <b>R³</b> module processes the spectral outputs of S³ to identify and model harmonic structure.
                It does not rely on tonal syntax or music-theoretical conventions, but instead derives structure through energetic interactions between partials.
              </p>
              <p>
                R³ transforms raw spectral data into a meaningful set of resonance features, providing input to the higher-level C³ module.
              </p>
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">2.2 Core Units</h3>
              <ul className="list-disc ml-8 my-2">
                <li><b>PRU – Phantom Root Unit</b>: Detects implied fundamentals from overtone sets</li>
                <li><b>RPU – Resonance Potential Unit</b>: Computes scalar coherence Φ per frame</li>
                <li><b>RFMU – Resonance Field Modeling Unit</b>: Generates Gaussian field over frequency</li>
                <li><b>CRVU – Cognitive Resonance Vectoring Unit</b>: Extracts TPS, TFI, NSF metrics</li>
              </ul>
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">2.3 Field Representation</h3>
              <div className="flex justify-center my-4">
                <BlockMath math={`\\text{RFM}(f, t) = \\sum_i A_i(t) \\cdot e^{-\\frac{(f - f_i(t))^2}{2\\sigma^2}}`} />
              </div>
              <p>
                This formula defines a scalar resonance density field over log-frequency space,
                where each partial contributes a Gaussian kernel centered at its frequency with time-varying amplitude.
              </p>
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">2.4 Resonance Vector</h3>
              <div className="flex justify-center my-4">
                <BlockMath math={`\\vec{\\text{CRV}} = [\\text{TPS}, \\text{TFI}, \\text{NSF}] \\in [0,1]^3`} />
              </div>
              <p>
                This 3-dimensional vector summarizes resonance intensity (TPS), frequency integration (TFI),
                and neural salience factor (NSF), feeding directly into cognitive modeling in the C³ module.
              </p>
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">2.5 Scientific Basis</h3>
              <p>
                R³ builds upon:
              </p>
              <ul className="list-disc ml-8 my-2">
                <li><b>Psychoacoustic roughness theory</b> (Plomp & Levelt)</li>
                <li><b>Neural entrainment mechanisms</b> (Bidelman)</li>
                <li><b>Just intonation topology</b> (Sethares, Tymoczko)</li>
              </ul>
              <p>
                These foundations allow R³ to model musical structure as a resonance topology, rooted in physical and perceptual realities.
              </p>
            </div>
            <div className="p-8 text-white bg-black">
              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">3.1 PR Estimation (Phantom Root)</h3>
              <p>
                Let <i>{'{'}f₁, f₂, ..., fₙ{'}'}</i> be a group of detected pitch events. Then, the phantom root <b>r</b> is the frequency that minimizes mean harmonic error:
              </p>
              <div className="flex justify-center my-4">
                <BlockMath math={`r^* = \\arg\\min_r \\left( \\frac{1}{n} \\sum_i \\left| \\frac{f_i - r \\cdot h_i}{r \\cdot h_i} \\right| \\right)`} />
              </div>
              <p>
                Where <i>hᵢ</i> are harmonic template integers (e.g., [1, 2, 3, 4]).
              </p>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">3.2 Just Intonation Vector Representation</h3>
              <p>
                Each frequency can be projected into a prime-exponent vector space:
              </p>
              <div className="flex justify-center my-4">
                <BlockMath math={`\\vec{v}_i = (x_2, x_3, x_5, x_7, \\dots) \\quad \\text{where } f_i = 2^{x_2} \\cdot 3^{x_3} \\cdot 5^{x_5} \\cdots`} />
              </div>
              <p>The mean vector then becomes:</p>
              <div className="flex justify-center my-4">
                <BlockMath math={`\\vec{v}_{PR} = \\frac{1}{N} \\sum_i \\vec{v}_i`} />
              </div>
              <p>
                This average vector is mapped back to the frequency domain to compute the phantom root in symbolic–harmonic space.
              </p>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">3.3 Summary Table of Key Equations</h3>
              <div className="overflow-x-auto text-sm mt-4">
                <table className="table-auto border border-gray-600 w-full">
                  <thead>
                    <tr className="bg-gray-800 text-orange-300">
                      <th className="border px-4 py-2 text-left">Metric</th>
                      <th className="border px-4 py-2 text-left">Equation</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    <tr>
                      <td className="border px-4 py-2">Φ (Resonance Potential)</td>
                      <td className="border px-4 py-2"><BlockMath math={`\\Phi(t) = \\sum_{i<j} \\frac{A_i A_j}{|f_i - f_j| + \\epsilon}`} /></td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">RFM (Field)</td>
                      <td className="border px-4 py-2"><BlockMath math={`\\text{RFM}(f, t) = \\sum_i A_i e^{-(f - f_i)^2 / 2\\sigma^2}`} /></td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Gradient</td>
                      <td className="border px-4 py-2"><BlockMath math={`\\nabla \\text{RFM} = \\partial \\text{RFM} / \\partial f`} /></td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">CRV</td>
                      <td className="border px-4 py-2"><BlockMath math={`[\\text{TPS}, \\text{TFI}, \\text{NSF}]`} /></td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">PR Estimation</td>
                      <td className="border px-4 py-2"><BlockMath math={`r = \\arg\\min_r \\sum_i |f_i - r h_i| / r h_i`} /></td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">NSF</td>
                      <td className="border px-4 py-2"><BlockMath math={`\\sum_t \\Phi(t) e^{-\\alpha t}`} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-8 text-white bg-black">
              <h2 className="text-orange-400 text-2xl font-bold mb-4">4. Temporal Architecture and Synchronicity</h2>

              <p>
                All modules in SRC⁹ (S³, R³, C³) operate on a shared frame-based timeline, typically using a resolution of 0.1s per frame.
                This ensures time-aligned analysis, visualization, and cognitive mapping across spectral, resonance, and neural dimensions.
              </p>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">4.1 Features</h3>
              <ul className="list-disc ml-8 my-2">
                <li>Frame-synchronized overlays</li>
                <li>Independent vertical scaling per layer</li>
                <li>Interactive time cursor</li>
                <li>Toggleable visual layers (e.g., PR, Φ, CRV)</li>
              </ul>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">4.2 Cognitive Color Mapping</h3>
              <p>CRVU's outputs — TPS, TFI, NSF — are displayed using color-coded stacked bars:</p>
              <ul className="list-disc ml-8 my-2">
                <li><span className="text-red-400">Red:</span> TPS — tonal stability</li>
                <li><span className="text-green-400">Green:</span> TFI — frequency integration (fusion)</li>
                <li><span className="text-blue-400">Blue:</span> NSF — neural salience / memory encoding</li>
              </ul>
              <p>
                Bar heights correspond to value magnitudes normalized to the [0, 1] range.
              </p>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">4.3 RFM Surface Rendering in Unity</h3>
              <p>
                RFMU outputs scalar fields rendered as animated 3D terrains:
              </p>
              <ul className="list-disc ml-8 my-2">
                <li>X = Time (horizontal axis)</li>
                <li>Z = Frequency (logarithmic vertical axis)</li>
                <li>Y = Resonance field strength (terrain height)</li>
                <li>Emission Map = Normalized Φ values</li>
                <li>Overlays: PR curves, peak paths, curvature ridges</li>
              </ul>
              <p>
                Implemented using Unity's <code>MeshFilter</code>, <code>MaterialPropertyBlock</code>, and shader-based vertex displacement.
              </p>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">4.4 Animation and Playback Features</h3>
              <ul className="list-disc ml-8 my-2">
                <li>Timeline scrubbing (frame index-based)</li>
                <li>Real-time playback (10 FPS = 0.1s per frame)</li>
                <li>Sound-reactive visual elements (optional)</li>
                <li>Dynamic camera tracking (e.g., PR-follow mode)</li>
              </ul>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">4.5 Use Cases</h3>
              <ul className="list-disc ml-8 my-2">
                <li><b>Education:</b> visually explain harmonic fields, voice leading, polyphonic structures</li>
                <li><b>Analysis:</b> inspect resonance energy and cognitive metrics over time</li>
                <li><b>Immersive VR:</b> enable interactive walkthroughs of sonic structures</li>
              </ul>
            </div>
            <div className="p-8 text-white bg-black">
              <h2 className="text-orange-400 text-2xl font-bold mb-4">5. Data Format & Canonical JSON Frame</h2>

              <p>
                All processing in SRC⁹ is synchronized to time-based frames. Each frame captures spectral, resonance, and cognitive data in a standardized JSON format for interoperability and modular analysis.
              </p>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">5.1 Frame JSON Example</h3>

              <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 overflow-x-auto">
{`{
  "time": 3.2,
  "partials": [
    { "freq": 261.63, "amplitude": 0.84, "symbol": "C4⁰", "harmonic_index": 0, "isFundamental": true },
    { "freq": 523.25, "amplitude": 0.51, "symbol": "C5⁰", "harmonic_index": 1, "isFundamental": false }
  ],
  "phi": 2.83,
  "crv": { "TPS": 0.812, "TFI": 0.694, "NSF": 0.039 }
}`}
              </pre>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">5.2 Field Specifications</h3>
              <ul className="list-disc ml-8 my-2">
                <li><code>"time"</code>: Frame timestamp in seconds</li>
                <li><code>"partials"</code>: List of harmonic components with:
                  <ul className="ml-6 list-disc">
                    <li><code>freq</code>: frequency in Hz</li>
                    <li><code>amplitude</code>: normalized dB amplitude</li>
                    <li><code>symbol</code>: microtonal symbolic label (e.g., A4⁰, G♯5⁺¹)</li>
                    <li><code>harmonic_index</code>: index in overtone series</li>
                    <li><code>isFundamental</code>: boolean tag</li>
                  </ul>
                </li>
                <li><code>"phi"</code>: Frame-level Φ (resonance potential scalar)</li>
                <li><code>"crv"</code>: Cognitive Resonance Vector
                  <ul className="ml-6 list-disc">
                    <li><code>TPS</code>: tonal positional stability</li>
                    <li><code>TFI</code>: time–frequency integration</li>
                    <li><code>NSF</code>: neural salience factor</li>
                  </ul>
                </li>
              </ul>

              <p className="mt-4">
                This format enables seamless import/export across audio analysis pipelines, cognitive modeling tools, and interactive visualization environments like Unity or VR interfaces.
              </p>
            </div>
            <div className="p-8 text-white bg-black">
              <h2 className="text-orange-400 text-2xl font-bold mb-4">8. System Contributions & Theoretical Shift</h2>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">8.1 Motivation for Integration</h3>
              <ul className="list-disc ml-8 my-2">
                <li><b>Traditional Music Theory:</b> Symbolic, rule-based, culturally contingent</li>
                <li><b>Auditory Neuroscience:</b> Explains how sound is encoded neurally, but lacks a structural model of music capable of predicting EEG/fMRI response</li>
                <li><b>AI/ML Music Systems:</b> Can generate convincing audio, but are opaque, black-box, and lack interpretability or symbolic grounding</li>
              </ul>
              <p>
                <b>SRC⁹ bridges these silos</b> by combining spectral analysis, resonance modeling, and cognitive simulation into a unified, testable, and explainable framework.
              </p>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">8.2 Novel Contributions by Module</h3>
              <h4 className="text-indigo-300 font-semibold mt-2">S³ – Spectral Extraction</h4>
              <ul className="list-disc ml-8 my-2">
                <li>Sub-cent partial tracking with harmonic identification</li>
                <li>Microtonal symbolic pitch encoding (±25 cent resolution)</li>
                <li>4K-resolution time–frequency mapping</li>
              </ul>

              <h4 className="text-indigo-300 font-semibold mt-2">R³ – Resonance Modeling</h4>
              <ul className="list-disc ml-8 my-2">
                <li>Real-valued Φ coherence computation</li>
                <li>RFM field topology and attractor mapping</li>
                <li>Phantom root detection without symbolic grammar</li>
                <li>Resonance-based perceptual modeling (TPS, TFI, NSF)</li>
              </ul>

              <h4 className="text-indigo-300 font-semibold mt-2">C³ – Cognitive Circuitry</h4>
              <ul className="list-disc ml-8 my-2">
                <li>Unit–Node–Element hierarchy with EEG/fMRI anchors</li>
                <li>Integration with real-time neural interfaces (OpenBCI, Emotiv)</li>
                <li>Models for emotional salience, memory encoding, inter-brain synchrony</li>
              </ul>

              <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">8.3 Epistemological Reversal</h3>
              <p>Traditionally, the structure of music is analyzed in this direction:</p>
              <div className="flex justify-center my-2">
                <BlockMath math={`\\text{Notation} \\rightarrow \\text{Structure} \\rightarrow \\text{Sound}`} />
              </div>
              <p>
                <b>SRC⁹ reverses this process</b> to reflect perceptual and neuroscientific realism:
              </p>
              <div className="flex justify-center my-2">
                <BlockMath math={`\\text{Sound} \\rightarrow \\text{Resonance} \\rightarrow \\text{Cognition}`} />
              </div>
              <p>
                This inversion forms the theoretical backbone of the system: structure is not imposed, but emerges from acoustic and neurodynamic properties of the signal.
              </p>
              <div className="p-8 text-white bg-black">
  <h2 className="text-orange-400 text-2xl font-bold mb-4">What is C³? — Cognitive Consonance Circuit</h2>

  <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">2.1 Function</h3>
  <p>
    The <b>Cognitive Consonance Circuit (C³)</b> is the final and most interpretive layer of the SRC⁹ system.
    It transforms the output of R³ — including resonance fields, phantom root data, and scalar coherence vectors —
    into a temporally aligned map of perceptual and neural significance.
  </p>
  <p>
    C³ models the listener's inner response to sound: not just what is heard,
    but how it is cognitively evaluated, emotionally weighted, and neurally retained.
    It does this through a modular architecture of nine Units, each grounded in EEG/fMRI literature and mapped onto time-varying brain responses.
  </p>
</div>
<div className="p-8 text-white bg-black">
  <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">2.2 Core Units</h3>
  <p>
    C³ is organized into nine cognitive units, each corresponding to a distinct dimension of musical perception and brain response.
    These units are designed to interpret the output of R³ in ways that reflect known cognitive and neurophysiological mechanisms.
  </p>
  <ul className="list-disc ml-8 my-2">
    <li>
      <b>AOU – Affective Outcome Unit:</b> Models emotional valence, dopamine-related pleasure, and reward response.
    </li>
    <li>
      <b>IEU – Incongruity Evaluation Unit:</b> Tracks expectation violation and predictive error using MMN-aligned logic.
    </li>
    <li>
      <b>SRU – Somatic Resonance Unit:</b> Encodes motor entrainment and embodied rhythm synchronization.
    </li>
    <li>
      <b>SAU – Structural Alignment Unit:</b> Aligns resonance trajectories with phrase-level and syntactic patterns.
    </li>
    <li>
      <b>CTU – Consonance–Tension Unit:</b> Measures spectral–temporal tension via dynamic Φ-based weighting.
    </li>
    <li>
      <b>PIU – Phenomenological Immersion Unit:</b> Captures attentional focus and flow-state metrics.
    </li>
    <li>
      <b>IRU – Interpersonal Resonance Unit:</b> Maps joint listening coherence and inter-brain synchronization.
    </li>
    <li>
      <b>NSU – Neural Synchronization Unit:</b> Tracks phase-locking and neural entrainment to periodic structure.
    </li>
    <li>
      <b>RSU – Resonance Synthesis Unit:</b> Aggregates all unit outputs into a composite cognitive signature.
    </li>
  </ul>
</div>
<div className="p-8 text-white bg-black">
  <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">2.3 Output Structure</h3>
  <p>
    The output of C³ is a time-aligned matrix of cognitive resonance values.
    Each unit generates a continuous signal, indexed by analysis frame,
    representing its activation strength in response to the input audio.
  </p>
  <p>
    These signals are combined to form a dynamic cognitive profile for each moment in time, with applications in
    interactive music systems, emotional mapping, and cross-modal synchronization.
  </p>
  <div className="flex justify-center my-4">
    <code>
      C³(t) = Σᵢ wᵢ · Unitᵢ(t), Unitᵢ(t) = Σⱼ wᵢⱼ · Nodeⱼ(t)
    </code>
  </div>
  <p>
    Each <b>Node</b> represents an EEG/fMRI-derived feature (e.g., β phase-locking, mismatch negativity, BOLD response).
    Nodes are anatomically anchored using MNI coordinates and functionally grouped into Units.
  </p>
</div>
<div className="p-8 text-white bg-black">
  <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">2.4 Scientific Rationale</h3>
  <p>
    The design of the C³ module is grounded in cognitive neuroscience, affective science, and neuroaesthetics.
    It seeks to bridge the gap between acoustic resonance patterns and subjective musical experience by aligning
    spectral input with brain-derived response models.
  </p>
  <ul className="list-disc ml-8 my-2">
    <li>
      <b>Neurophysiological Evidence:</b> Each Unit is derived from replicable EEG/fMRI findings —
      including MMN (mismatch negativity), ERP markers for musical pleasure, phase-locking to rhythm, and BOLD activations
      during tonal and atonal listening.
    </li>
    <li>
      <b>Modular Cognitive Mapping:</b> The Unit–Node–Element hierarchy mirrors how complex cognition emerges
      from distributed, modular brain systems.
    </li>
    <li>
      <b>Consonance–Dissonance Dynamics:</b> Φ and CRV inputs from R³ are interpreted not symbolically,
      but perceptually — allowing C³ to model real-time resonance valuation rather than rule-based harmony.
    </li>
    <li>
      <b>Embodiment and Entrainment:</b> Units like SRU and PIU integrate rhythmic and attentional information to
      reflect somatic engagement and flow states.
    </li>
  </ul>
</div>
<div className="p-8 text-white bg-black">
  <h3 className="text-cyan-400 text-xl font-semibold mt-6 mb-2">2.5 Applications and Integration</h3>
  <p>
    C³ is designed not only as an analysis module but also as a cognitive engine that can inform real-time
    interaction, affective feedback, and cross-modal coordination.
  </p>
  <ul className="list-disc ml-8 my-2">
    <li>
      <b>Real-Time Feedback:</b> C³ signals (e.g., TFI, NSF) can be used to dynamically adjust sound, visuals, or haptic feedback in live performance or interactive installations.
    </li>
    <li>
      <b>Emotion Mapping:</b> AOU and PIU outputs can be mapped to spatial visualizations, game states, or VR/AR dynamics to reflect listener immersion and affect.
    </li>
    <li>
      <b>Neuroadaptive Systems:</b> EEG input can be aligned with C³ resonance profiles to calibrate or compare perceived vs. modeled cognition.
    </li>
    <li>
      <b>Unified Cognitive Architecture:</b> C³ integrates seamlessly with upstream S³ and R³ layers through temporally synchronized data frames, supporting closed-loop modulation and feedback.
    </li>
  </ul>
  <p>
    In sum, C³ operationalizes musical meaning as a measurable, dynamic, and neurologically anchored phenomenon —
    moving beyond static theory into embodied perception and adaptive intelligence.
  </p>
</div>

            </div>
          </div>
        </div>
      </div>
      {/* Download Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleDownload}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg text-xl animate-none"
          style={{
            animation: 'nerdPulse 1.6s infinite',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
        >
          I am Nerd!
        </button>
      </div>
    </div>
  );
};

export default Architecture; 