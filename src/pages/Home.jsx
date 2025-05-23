import { Link } from 'react-router-dom'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import ModuleCarousel from '../components/ModuleCarousel'

const modules = [
  {
    src: '/src/assets/ss.png',
    alt: 'S³ Module',
    link: '/modules/s3',
    label: 'S³',
    labelClass: 'bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent',
    anim: 'floatXY1',
  },
  {
    src: '/src/assets/rr.jpg',
    alt: 'R³ Module',
    link: '/modules/r3',
    label: 'R³',
    labelClass: 'bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent',
    anim: 'floatXY2',
  },
  {
    src: '/src/assets/cc.jpg',
    alt: 'C³ Module',
    link: '/modules/c3',
    label: 'C³',
    labelClass: 'bg-gradient-to-r from-yellow-300 via-lime-400 to-green-500 bg-clip-text text-transparent',
    anim: 'floatXY3',
  },
];

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

const Home = () => (
  <div className="min-h-screen bg-black flex flex-col items-center justify-center pt-16 relative">
    <style>{floatStyle}</style>
    <div className="absolute top-[33vh] left-1/2 z-30 -translate-x-1/2 pointer-events-none select-none">
      <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-2xl tracking-wide text-center">SRC⁹</h1>
      <div className="text-2xl md:text-3xl text-white font-light tracking-wide text-center">Spectral. Resonant. Cognitive.</div>
    </div>
    <div className="flex flex-row flex-wrap justify-center items-center gap-32 w-full max-w-7xl z-10">
      {modules.map(({ src, alt, link, label, labelClass, anim }) => (
        <Link
          to={link}
          key={alt}
          className="group bg-black/60 rounded-3xl flex flex-col items-center justify-between w-[80vw] sm:w-[40vw] md:w-[28vw] lg:w-[18vw] h-[80vw] sm:h-[40vw] md:h-[28vw] lg:h-[18vw] max-w-[400px] max-h-[400px] aspect-square p-6 transition-transform duration-300 hover:scale-105 shadow-2xl cursor-pointer"
        >
          <div
            className="flex flex-col items-center"
            style={{ animation: `${anim} 10s ease-in-out infinite`, willChange: 'transform' }}
          >
            <img
              src={src}
              alt={alt}
              className="object-contain w-full h-full rounded-2xl mb-4"
              width={2000}
              height={2000}
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

export default Home 