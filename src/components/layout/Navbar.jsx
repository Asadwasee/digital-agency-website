import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home',      path: '/' },
  { name: 'About',     path: '/about' },
  { name: 'Services',  path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact',   path: '/contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredPath, setHoveredPath] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleMouseMove = (e) => {
    const rect = navRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <nav
      ref={navRef}
      onMouseMove={handleMouseMove}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 overflow-hidden ${
        scrolled
          ? 'bg-dark/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      {/* Mouse follow glow */}
      <motion.div
        className="pointer-events-none absolute w-48 h-48 rounded-full bg-primary/10 blur-[60px]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/">
            <motion.span
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="text-xl font-black tracking-tighter text-white inline-block"
            >
              Digital
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                {' '}Agency
              </span>
            </motion.span>
          </Link>

          {/* Desktop Links */}
          <div
            className="hidden md:flex items-center gap-2"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navLinks.map((link) => {
              const isActive  = location.pathname === link.path
              const isHovered = hoveredPath === link.path

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 group"
                >
                  <AnimatePresence>
                    {(isHovered || isActive) && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-xl ${
                          isActive
                            ? 'bg-primary/15 border border-primary/30'
                            : 'bg-white/8 border border-white/10'
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <motion.span
                      layoutId="nav-glow"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-px bg-linear-to-r from-transparent via-primary to-transparent"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <span className={`relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                  }`}>
                    {link.name}
                  </span>
                </Link>
              )
            })}

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="ml-2"
            >
              <Link
                to="/contact"
                className="relative px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold overflow-hidden group block shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-shadow duration-300"
              >
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                <span className="relative z-10">Get Started</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} className="block">
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} className="block">
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-dark/95 backdrop-blur-2xl border-b border-white/10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="container mx-auto px-6 py-4 flex flex-col gap-1"
            >
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div key={link.path} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-primary/15 border border-primary/30'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navLinks.length * 0.05 }}>
                <Link to="/contact" className="mt-3 py-3 px-4 rounded-xl bg-primary hover:bg-blue-600 text-white text-sm font-bold text-center transition-all duration-200 block">
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
