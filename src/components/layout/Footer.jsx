import { Link } from 'react-router-dom'
import { Github, Linkedin, Instagram, Twitter, ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { name: 'Home',      path: '/' },
  { name: 'About',     path: '/about' },
  { name: 'Services',  path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact',   path: '/contact' },
]

const services = [
  'Web Development',
  'Mobile App Development',
  'AI & Automation',
  'UI/UX Design',
  'Digital Marketing',
]

const socialLinks = [
  { icon: Github,    href: '#', label: 'GitHub' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Twitter,   href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const Footer = () => {
  return (
    <footer className="relative bg-dark border-t border-white/10 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black tracking-tighter text-white">
                Digital
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Agency
                </span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building next-generation digital experiences for forward-thinking businesses worldwide.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1 text-slate-400 hover:text-white text-sm group transition-colors duration-200"
                  >
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-200 cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Digital Agency. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with React · Tailwind v4 · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
