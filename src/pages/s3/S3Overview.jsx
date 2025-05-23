import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const S3Gradient = ({children}) => (
  <span className="font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent">{children || 'S³'}</span>
);

const englishText = (
  <>
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
      <ul className="text-xl md:text-2xl text-white mb-8 text-center font-light list-disc list-inside space-y-2">
        <li>It extracts and visualizes the building blocks of sound — partials — in high-resolution time and frequency.</li>
        <li>It sees beyond notes. It shows harmonic fingerprints, energy flows, and spectral landscapes.</li>
        <li>Every sound becomes a visual field: a map of where resonance lives and how it moves.</li>
      </ul>
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
  </>
);

const turkishText = (
  <>
    <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 text-center tracking-wide drop-shadow-2xl">
      <S3Gradient>S³</S3Gradient> Nedir?
    </h1>
    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center drop-shadow-lg">
      <S3Gradient>S³</S3Gradient> – Spektral Ses Uzayı, sesin yapıya dönüştüğü yerdir.
    </h2>
    <div className="backdrop-blur-sm bg-black/30 rounded-xl p-6">
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        Geleneksel müzik analiz araçları notalarla başlar.<br/>
        <S3Gradient>S³</S3Gradient> ise sesin kendisiyle başlar — ham, titreşen akustik enerjiyle.<br/>
        Her anı kare kare dinler ve o anın gizli mimarisini ortaya çıkarır: temel frekanslar, üst armonikler, genlikler ve mikrotonal renkler.
      </p>
      <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Ne yapar?</h3>
      <ul className="text-xl md:text-2xl text-white mb-8 text-center font-light list-disc list-inside space-y-2">
        <li>Sesi oluşturan yapı taşlarını — parçacıkları (partials) — yüksek çözünürlüklü zaman ve frekans düzleminde çıkarır ve görselleştirir.</li>
        <li>Notaların ötesini görür. Harmonik izleri, enerji akışlarını ve spektral manzaraları gösterir.</li>
        <li>Her ses bir görsel alana dönüşür: rezonansın nerede yaşadığını ve nasıl hareket ettiğini gösteren bir haritaya.</li>
      </ul>
      <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Neden önemlidir?</h3>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        Çünkü kulağınız "Do Majör" duymaz.<br/>
        Basınç dalgaları, armonikler, vibrato ve birleşen titreşimler duyar.<br/>
        <S3Gradient>S³</S3Gradient> bunları yakalar — ve onları anlama, renge ve forma dönüştürür.
      </p>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        Klasik yaylı dörtlülerden spektral drone'lara, alan kayıtlarından yapay zekâ üretimli seslere kadar,<br/>
        <S3Gradient>S³</S3Gradient> size sesi görme gücü verir — sembollerle değil, onun fiziksel ve canlı haliyle.
      </p>
      <div className="mt-12 text-2xl md:text-3xl font-extrabold text-white text-center tracking-wide">
        SRC⁹ sisteminin ilk katmanına hoş geldiniz.<br/>
        <S3Gradient>Spektral Ses Uzayı</S3Gradient>'na hoş geldiniz.
      </div>
    </div>
  </>
);

const S3Overview = () => {
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
            src="/SRC9/assets/ss.mp4"
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
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default S3Overview; 