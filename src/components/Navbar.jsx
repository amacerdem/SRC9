import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'SRC⁹ Home' },
  { to: '/modules/s3', label: 'S³' },
  { to: '/modules/r3', label: 'R³' },
  { to: '/modules/c3', label: 'C³' },
  { to: '/architecture', label: 'Architecture' },
];

const Navbar = () => (
  <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-1/3 z-50 bg-black flex flex-col items-center justify-center h-16 px-2 animate-fadein rounded-b-xl shadow-lg">
    <div className="flex flex-row items-center justify-between w-full px-4 h-full">
      {/* Left: SRC⁹ Home */}
      <NavLink
        to={navItems[0].to}
        className={({ isActive }) =>
          `px-4 py-2 text-base font-bold transition-all duration-200 rounded text-white ${isActive ? 'scale-105' : 'hover:bg-gray-800 hover:scale-105'}`
        }
      >
        {navItems[0].label}
      </NavLink>
      {/* Center: S³, R³, C³ */}
      <div className="flex flex-row items-center gap-6">
        {navItems.slice(1, 4).map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-4 py-2 text-base font-bold transition-all duration-200 rounded text-white ${
                isActive ? 'scale-105' : 
                label === 'S³' ? 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-105' :
                label === 'R³' ? 'hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:scale-105' :
                'hover:bg-gradient-to-r hover:from-yellow-500 hover:to-green-500 hover:scale-105'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
      {/* Right: Architecture */}
      <NavLink
        to={navItems[4].to}
        className={({ isActive }) =>
          `px-4 py-2 text-base font-bold transition-all duration-200 rounded text-white ${isActive ? 'scale-105' : 'hover:bg-gray-800 hover:scale-105'}`
        }
      >
        {navItems[4].label}
      </NavLink>
    </div>
    {/* Subtle white line under navbar */}
    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60 mt-0" />
  </nav>
);

export default Navbar; 