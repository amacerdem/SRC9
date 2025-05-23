import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const R3Gradient = ({children}) => (
  <span className="font-extrabold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">{children || 'R³'}</span>
);
const R3TitleGradient = ({children}) => (
  <span className="font-extrabold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">{children}</span>
);

const englishText = (
  <>
    <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 text-center tracking-wide drop-shadow-2xl">
      What Is <R3Gradient />?
    </h1>
    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center drop-shadow-lg">
    R³ – Resonance-Based Relational Reasoning is where sound becomes meaning.
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
      <ul className="text-xl md:text-2xl text-white mb-8 text-center font-light list-disc list-inside space-y-2">
        <li>It detects phantom roots — fundamental tones that aren't even there, but are felt.</li>
        <li>It calculates resonance potential, showing how tightly the partials bind together.</li>
        <li>It builds dynamic resonance fields — tonal topographies where pitch and energy interact in motion.</li>
      </ul>
      <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Why does it matter?</h3>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        Because music isn't static. It moves. It breathes. It resonates.<br/>
        R³ helps us understand how harmony lives not just on paper, but in space.
      </p>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        With R³, you don't just hear a chord — you feel its pull.<br/>
        You don't just recognize a sound — you see how it attracts, blends, or clashes.
      </p>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        From algorithmic composition to perception-aware design,<br/>
        R³ sets music theory in motion — adaptive, fluid, and alive.
      </p>
      <div className="mt-12 text-2xl md:text-3xl font-extrabold text-white text-center tracking-wide">
        Welcome to the middle layer of the SRC⁹ system.<br/>
        Welcome to <R3TitleGradient>Resonance-Based Relational Reasoning</R3TitleGradient>.
      </div>
    </div>
  </>
);

const turkishText = (
  <>
    <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 text-center tracking-wide drop-shadow-2xl">
      <R3Gradient>R³</R3Gradient> Nedir?
    </h1>
    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center drop-shadow-lg">
      R³– Rezonans Temelli İlişkisel Akıl Yürütme, sesin anlama dönüştüğü yerdir.
    </h2>
    <div className="backdrop-blur-sm bg-black/30 rounded-xl p-6">
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        S³ sesi yapı taşlarına ayırdıktan sonra, R³ satır aralarını dinler — ve sorar:<br/>
        Bu sesler birbirleriyle nasıl ilişkileniyor? Çekim nerede? Merkez nerede? Gerilim nerede?
      </p>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        R³zekâ katmanıdır.<br/>
        Armonik akışı analiz eder, gizli tonal merkezleri tanımlar ve yapıyı algılamamızı sağlayan görünmeyen rezonans kuvvetlerini haritalar.
      </p>
      <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Ne yapar?</h3>
      <ul className="text-xl md:text-2xl text-white mb-8 text-center font-light list-disc list-inside space-y-2">
        <li>Hayalet kökleri (phantom root) tespit eder — akustik olarak orada olmayan ama hissedilen temel tonları.</li>
        <li>Rezonans potansiyelini hesaplar — parçacıkların (partials) ne kadar sıkı bağlandığını gösterir.</li>
        <li>Dinamik rezonans alanları oluşturur — perde (pitch) ve enerjinin hareket halinde etkileşime girdiği tonal topoğrafyalar.</li>
      </ul>
      <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Neden önemlidir?</h3>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        Çünkü müzik statik değildir. Hareket eder. Nefes alır. Rezonansa girer.<br/>
        R³, armoninin sadece kâğıtta değil, uzayda nasıl yaşadığını anlamamıza yardımcı olur.
      </p>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        R³ ile, bir akoru sadece duymazsınız — onun çekimini hissedersiniz.<br/>
        Bir sesi sadece tanımazsınız — onun nasıl çektiğini, karıştığını ya da çatıştığını görürsünüz.
      </p>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        Algoritmik besteden, algı farkındalıklı tasarıma kadar,<br/>
        R³müzik kuramını harekete geçirir — uyarlanabilir, akışkan ve canlı.
      </p>
      <div className="mt-12 text-2xl md:text-3xl font-extrabold text-white text-center tracking-wide">
        SRC⁹ sisteminin orta katmanına hoş geldiniz.<br/>
        <R3TitleGradient>Rezonans Temelli İlişkisel Akıl Yürütme</R3TitleGradient>'ye hoş geldiniz
      </div>
    </div>
  </>
);

const R3Overview = () => {
  const { lang, setLang } = useLanguage();
  const content = lang === 'en' ? englishText : turkishText;

  return (
    <div className="animate-fadein min-h-screen flex flex-col items-center justify-start bg-black pt-8">
      {/* Language Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
          className="px-3 py-1 rounded-md text-xs font-bold bg-gray-800 text-white hover:bg-gray-600 transition-all shadow-md border border-gray-700"
        >
          {lang === 'en' ? 'TR' : 'EN'}
        </button>
      </div>
      {/* Video with Overlay */}
      <div className="relative w-full flex flex-col items-center">
        <video
          src="/SRC9/assets/rr.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="rounded-xl shadow-2xl bg-black"
          style={{
            width: '112.5vw',
            height: '112.5vw',
            maxWidth: '1080px',
            maxHeight: '1080px',
            objectFit: 'cover'
          }}
        />
        {/* Overlay and Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start bg-black/40 rounded-xl">
          <div className="w-full max-w-4xl px-4 md:px-8 pt-[32%]">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default R3Overview; 