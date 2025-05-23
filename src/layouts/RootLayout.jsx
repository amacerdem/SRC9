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

  // Add custom keyframes for animated border around navbar
  const navBarBorder = `
  @keyframes borderMove {
    0% { box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff inset; }
    25% { box-shadow: 0 0 0 4px #fff, 0 0 0 0 #fff inset; }
    50% { box-shadow: 0 0 0 0 #fff, 0 0 0 4px #fff inset; }
    75% { box-shadow: 0 0 0 4px #fff, 0 0 0 0 #fff inset; }
    100% { box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff inset; }
  }
  `;

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{navBarBorder}</style>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black" style={{ animation: 'borderMove 2.5s linear infinite', boxShadow: '0 0 0 0 #fff' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <Link
            to="/"
            className="text-white rounded-lg px-5 py-2 font-bold text-lg cursor-pointer"
          >
            SRC9 Home
          </Link>
          <div className="flex gap-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200 mx-2 relative"
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