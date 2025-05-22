import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const RootLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/architecture', label: 'Architecture' },
    { path: '/library', label: 'Library' },
    { path: '/ebook', label: 'Ebook' },
    { path: '/modules', label: 'Modules' },
    { path: '/about', label: 'About' },
  ]

  // Add custom keyframes for border pulse
  const borderPulse = `
  @keyframes borderPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); border-color: #222; }
    50% { box-shadow: 0 0 0 4px rgba(255,255,255,0.5); border-color: #fff; }
  }
  `;

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{borderPulse}</style>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <Link
            to="/"
            className="bg-black text-white rounded-lg px-5 py-2 font-bold shadow-lg border border-white hover:bg-neutral-900 hover:brightness-125 transition-all duration-200 cursor-pointer text-lg"
            style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.25)' }}
          >
            SRC9 Home
          </Link>
          <div className="flex gap-6">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="bg-black text-white rounded-lg px-5 py-2 font-semibold border-2 border-[#222] transition-all duration-200 mx-2 relative"
                style={{
                  animation: 'borderPulse 2s infinite',
                }}
                onMouseEnter={e => e.currentTarget.style.animation = 'borderPulse 1s infinite'}
                onMouseLeave={e => e.currentTarget.style.animation = 'borderPulse 2s infinite'}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <div className="w-full px-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg mt-auto">
        <div className="w-full px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-base text-gray-400">
              © 2024 SRC⁹. All rights reserved.
            </div>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default RootLayout 