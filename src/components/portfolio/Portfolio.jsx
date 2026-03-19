import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'EcoSmart Dashboard',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/eco/800/600',
    description: 'A real-time energy monitoring dashboard for smart homes.',
  },
  {
    title: 'Aura Mobile App',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/aura/800/600',
    description: 'A wellness and meditation app with personalized AI recommendations.',
  },
  {
    title: 'Zenith Brand Identity',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/zenith/800/600',
    description: 'Complete visual identity and design system for a fintech startup.',
  },
  {
    title: 'HyperLoop Logistic',
    category: 'AI & Automation',
    image: 'https://picsum.photos/seed/hyper/800/600',
    description: 'AI-driven supply chain optimization platform.',
  },
  {
    title: 'Nexus NFT Marketplace',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/nexus/800/600',
    description: 'A premium NFT marketplace for digital artists.',
  },
  {
    title: 'Pulse Fitness Wearable',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/pulse/800/600',
    description: 'Interface design for a next-gen fitness tracking wearable.',
  },
]

const PortfolioSection = () => {
  return (
    <section className="relative bg-dark py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_40%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16"
        >
          <div className="space-y-4 max-w-xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm tracking-[0.24em] text-primary uppercase backdrop-blur-sm">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Selected projects that{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                showcase our expertise.
              </span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 max-w-sm leading-relaxed"
          >
            We take pride in delivering exceptional results for our clients,
            combining technical excellence with creative vision.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg"
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg"
                  >
                    <Github size={18} />
                  </motion.button>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow text-sm">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-white group/btn transition-colors duration-200 w-fit">
                  View Case Study
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection