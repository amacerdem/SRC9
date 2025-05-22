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
  <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 bg-white shadow-lg rounded-t-xl flex items-center justify-center h-14 w-auto px-2 animate-fadein">
    <div className="flex flex-row items-center">
      {navItems.map(({ to, label }, index) => (
        <React.Fragment key={to}>
          <NavLink
            to={to}
            className={({ isActive }) => {
              let activeClass = '';
              if (isActive) {
                if (label === 'S³') {
                  activeClass = 'bg-gradient-to-r from-indigo-800 via-indigo-500 to-pink-600 text-white shadow-md scale-105';
                } else if (label === 'R³') {
                  activeClass = 'bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-white shadow-md scale-105';
                } else if (label === 'C³') {
                  activeClass = 'bg-gradient-to-r from-yellow-300 via-lime-400 to-green-500 text-white shadow-md scale-105';
                } else {
                  activeClass = 'bg-amber-100 text-black shadow-md scale-105';
                }
              } else {
                activeClass = 'text-black hover:bg-amber-50 hover:shadow-md hover:scale-102';
              }
              return `px-4 py-2 text-base font-bold transition-all duration-200 ${activeClass}`;
            }}
          >
            {label}
          </NavLink>
          {index < navItems.length - 1 && (
            <div className="h-6 w-[1px] bg-gray-200" />
          )}
        </React.Fragment>
      ))}
    </div>
  </nav>
);

export default Navbar; 