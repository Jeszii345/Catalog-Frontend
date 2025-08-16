import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiHome, FiUser, FiMail } from 'react-icons/fi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'หน้าแรก', icon: FiHome },
    { path: '/about', label: 'เกี่ยวกับ', icon: FiUser },
    { path: '/contact', label: 'ติดต่อ', icon: FiMail },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-gradient flex items-center space-x-2 text-xl font-bold"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-primary-500 to-accent-500">
              <span className="text-sm font-bold text-white">R</span>
            </div>
            <span>React Template</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map(item => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link
              to="/login"
              className="btn btn-outline btn-sm"
              onClick={() => {
                console.log('Login button clicked!')

              }}

            >

              เข้าสู่ระบบ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden"
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="animate-fade-in border-t border-gray-200 py-4 md:hidden">
            <nav className="flex flex-col space-y-2">
              {navItems.map(item => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              <div className="mt-4 space-y-2 border-t border-gray-200 pt-4">
                <button
                  className="btn btn-outline btn-md w-full"
                  onClick={() => {
                    setIsMenuOpen(false)
                    console.log('Mobile login button clicked!')
                    alert('ระบบเข้าสู่ระบบกำลังพัฒนา')
                  }}
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
