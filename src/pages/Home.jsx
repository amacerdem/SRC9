import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import ModuleCarousel from '../components/ModuleCarousel'

const modulesEN = [
  {
    src: '/SRC9/assets/ss.png',
    alt: 'S³ Module',
    link: '/s3',
    label: 'S³',
    labelClass: 'bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent',
    anim: 'floatXY1',
  },
  {
    src: '/SRC9/assets/rr.jpg',
    alt: 'R³ Module',
    link: '/r3',
    label: 'R³',
    labelClass: 'bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent',
    anim: 'floatXY2',
  },
  {
    src: '/SRC9/assets/cc.jpg',
    alt: 'C³ Module',
    link: '/c3',
    label: 'C³',
    labelClass: 'bg-gradient-to-r from-yellow-300 via-lime-400 to-green-500 bg-clip-text text-transparent',
    anim: 'floatXY3',
  },
];

const modulesTR = [
  {
    src: '/SRC9/assets/ss.png',
    alt: 'S³ Modülü',
    link: '/s3',
    label: 'S³',
    labelClass: 'bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent',
    anim: 'floatXY1',
  },
  {
    src: '/SRC9/assets/rr.jpg',
    alt: 'R³ Modülü',
    link: '/r3',
    label: 'R³',
    labelClass: 'bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent',
    anim: 'floatXY2',
  },
  {
    src: '/SRC9/assets/cc.jpg',
    alt: 'C³ Modülü',
    link: '/c3',
    label: 'C³',
    labelClass: 'bg-gradient-to-r from-yellow-300 via-lime-400 to-green-500 bg-clip-text text-transparent',
    anim: 'floatXY3',
  },
];

const subtitleEN = 'Spectral. Resonant. Cognitive.';
const subtitleTR = 'Spektral. Rezonant. Bilişsel.';

// Custom keyframes for independent floating animations (very subtle vibration)
const floatStyle = `
@keyframes floatXY1 {
  0%   { transform: scale(1.5) translate(0px, 0px); }
  20%  { transform: scale(1.5) translate(-1.5px, 1px); }
  40%  { transform: scale(1.5) translate(2px, -2px); }
  60%  { transform: scale(1.5) translate(-2.5px, 1.5px); }
  80%  { transform: scale(1.5) translate(1.5px, 2.5px); }
  100% { transform: scale(1.5) translate(0px, 0px); }
}
@keyframes floatXY2 {
  0%   { transform: scale(1.5) translate(0px, 0px); }
  20%  { transform: scale(1.5) translate(2px, -1.5px); }
  40%  { transform: scale(1.5) translate(-2.5px, 2px); }
  60%  { transform: scale(1.5) translate(3px, -2.5px); }
  80%  { transform: scale(1.5) translate(-2px, 3px); }
  100% { transform: scale(1.5) translate(0px, 0px); }
}
@keyframes floatXY3 {
  0%   { transform: scale(1.5) translate(0px, 0px); }
  20%  { transform: scale(1.5) translate(-2.5px, 2px); }
  40%  { transform: scale(1.5) translate(3px, -3px); }
  60%  { transform: scale(1.5) translate(-3.5px, 2.5px); }
  80%  { transform: scale(1.5) translate(2.5px, 3.5px); }
  100% { transform: scale(1.5) translate(0px, 0px); }
}
`;

export default function Home() {
  const { lang, setLang } = useLanguage();
  const modules = lang === 'en' ? modulesEN : modulesTR;
  const subtitle = lang === 'en' ? subtitleEN : subtitleTR;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black pt-24">
      <style>{floatStyle}</style>
      {/* Language Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
          className="px-3 py-1 rounded-md text-xs font-bold bg-gray-800 text-white hover:bg-gray-600 transition-all shadow-md border border-gray-700"
        >
          {lang === 'en' ? 'TR' : 'EN'}
        </button>
      </div>
      {/* Overlapping subtitle */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="absolute top-[24vh] left-1/2 -translate-x-1/2 z-30 pointer-events-none select-none">
          <div className="text-xl md:text-2xl text-white font-thin tracking-wide text-center" style={{letterSpacing: '0.08em'}}>
            {subtitle}
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-nowrap justify-center items-center gap-[5vw] w-full max-w-7xl z-10">
        {modules.map(({ src, alt, link, label, labelClass, anim }) => (
          <Link
            to={link}
            key={alt}
            className="group bg-black/60 rounded-3xl flex flex-col items-center justify-between aspect-square p-6 transition-transform duration-300 hover:scale-105 shadow-2xl cursor-pointer"
            style={{
              width: '18vw',
              height: '18vw',
              minWidth: 180,
              minHeight: 180,
              maxWidth: 400,
              maxHeight: 400,
            }}
          >
            <div
              className="flex flex-col items-center"
              style={{ animation: `${anim} 10s ease-in-out infinite`, willChange: 'transform' }}
            >
              <img
                src={src}
                alt={alt}
                className="object-contain w-full h-full rounded-2xl mb-4"
                width={600}
                height={600}
                loading="lazy"
              />
              <div className={`text-3xl font-bold mb-2 drop-shadow-lg ${labelClass}`}>{label}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="fixed left-4 bottom-2 z-50 text-white text-xs opacity-80 select-none pointer-events-none">
        © 2025 All rights reserved.
      </div>
    </div>
  );
} 