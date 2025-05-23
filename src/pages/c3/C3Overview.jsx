import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const C3Gradient = ({children}) => (
  <span className="font-extrabold bg-gradient-to-r from-yellow-300 via-lime-400 to-green-500 bg-clip-text text-transparent">{children || 'C³'}</span>
);
const C3TitleGradient = ({children}) => (
  <span className="font-extrabold bg-gradient-to-r from-yellow-300 via-lime-400 to-green-500 bg-clip-text text-transparent">{children}</span>
);

const englishText = (
  <>
    <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 text-center tracking-wide drop-shadow-2xl">
      What Is <C3Gradient />?
    </h1>
    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center drop-shadow-lg">
    C³ – Cognitive Consonance Circuit is where sound becomes experience.
    </h2>
    <div className="backdrop-blur-sm bg-black/30 rounded-xl p-6">
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        Music isn't just a structure we analyze — it's something we feel, remember, and resonate with.C³ is the layer of SRC⁹ that understands that. It takes the harmonic energy from sound and models how it might be perceived by a listener's mind.
      </p>
      <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">What does it do?</h3>
      <ul className="text-xl md:text-2xl text-white mb-8 text-center font-light list-disc list-inside space-y-2">
        <li>It captures the emotional and cognitive impact of music — from tension and immersion to memory and attention.</li>
        <li>It translates spectral signals into neural signatures, aligned with real brain activity like stability, fusion, and memory trace.</li>
        <li>It builds a perceptual map of music: not just what it is, but how it feels.</li>
      </ul>
      <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Why does it matter?</h3>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        Because we don't just listen to music — we internalize it.<br/>
        We follow its tension, feel its resolution, remember its peaks.
      </p>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        C³ listens like a brain.<br/>
        It takes resonance and returns a cognitive fingerprint — a trace of what sound might mean for the mind, moment by moment.
      </p>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        From deep compositions to brain-aligned music design,<br/>
        C³ brings music and mind together — elegantly, intuitively, and scientifically.
      </p>
      <div className="mt-12 text-2xl md:text-3xl font-extrabold text-white text-center tracking-wide">
        Welcome to the final layer of the SRC⁹ system.<br/>
        Welcome to the <C3TitleGradient>Cognitive Consonance Circuit</C3TitleGradient>.
      </div>
    </div>
  </>
);

const turkishText = (
  <>
    <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 text-center tracking-wide drop-shadow-2xl">
      <C3Gradient>C³</C3Gradient> Nedir?
    </h1>
    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center drop-shadow-lg">
      C³ – Bilişsel Uyum Devresi, sesin deneyime dönüştüğü yerdir.
    </h2>
    <div className="backdrop-blur-sm bg-black/30 rounded-xl p-6">
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        Müzik sadece analiz ettiğimiz bir yapı değildir — hissettiğimiz, hatırladığımız ve rezonansa girdiğimiz bir şeydir.<br/>
        C³, SRC⁹ sisteminin bunu anlayan katmanıdır.<br/>
        Sesten gelen armonik enerjiyi alır ve bir dinleyicinin zihninde nasıl algılanabileceğini modelleyerek geri sunar.
      </p>
      <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Ne yapar?</h3>
      <ul className="text-xl md:text-2xl text-white mb-8 text-center font-light list-disc list-inside space-y-2">
        <li>Müziğin duygusal ve bilişsel etkisini yakalar — gerilimden immersiyona, hafızadan dikkate kadar.</li>
        <li>Spektral sinyalleri, gerçek beyin aktivitesiyle uyumlu nöral imzalara dönüştürür: kararlılık, birleşme (fusion), hafıza izi.</li>
        <li>Müziğin algısal bir haritasını çıkarır: ne olduğu değil, nasıl hissettirdiği üzerine kurulu.</li>
      </ul>
      <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Neden önemlidir?</h3>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        Çünkü biz müziği sadece dinlemeyiz — onu içselleştiririz.<br/>
        Onun gerilimini takip ederiz, çözülmesini hissederiz, zirvelerini hatırlarız.
      </p>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        C³bir beyin gibi dinler.<br/>
        Rezonansı alır, karşılığında bilişsel bir parmak izi sunar — sesin zihin için ne anlama gelebileceğini anbean yakalayan bir iz.
      </p>
      <p className="text-xl md:text-2xl text-white mb-8 text-center font-light">
        Derinlemesine bestelerden, beyinle uyumlu müzik tasarımlarına kadar,<br/>
        C³ müziği zihinle buluşturur — zarif, sezgisel ve bilimsel bir şekilde.
      </p>
      <div className="mt-12 text-2xl md:text-3xl font-extrabold text-white text-center tracking-wide">
        SRC⁹ sisteminin son katmanına hoş geldiniz.<br/>
        <C3TitleGradient>Bilişsel Uyum Devresi</C3TitleGradient>'ne hoş geldiniz.
      </div>
    </div>
  </>
);

const C3Overview = () => {
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
          src="/SRC9/assets/cc.mp4"
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
        {/* Black Rectangular Overlay - Right */}
        <div 
          className="absolute"
          style={{
            width: '200px',
            height: '1080px',
            top: '50%',
            left: '55%',
            transform: 'translate(-50%, -50%) translateX(400px)',
            zIndex: 20,
            background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
          }}
        />
        {/* Black Rectangular Overlay - Left (Mirrored) */}
        <div 
          className="absolute"
          style={{
            width: '200px',
            height: '1080px',
            top: '50%',
            left: '45%',
            transform: 'translate(-50%, -50%) translateX(-400px)',
            zIndex: 20,
            background: 'linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
          }}
        />
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-start bg-black/40 rounded-xl">
          <div className="w-full max-w-4xl px-4 md:px-8 pt-[32%]">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default C3Overview; 