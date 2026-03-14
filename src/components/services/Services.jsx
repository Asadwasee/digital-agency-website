import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  Brush,
  Code2,
  Megaphone,
  Smartphone,
} from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description:
      'Fast, conversion-focused websites and web apps built for performance, scalability, and modern brand presence.',
    icon: Code2,
    accent: 'from-sky-500 to-cyan-400',
    glow: 'bg-sky-500/20',
  },
  {
    title: 'Mobile App Development',
    description:
      'Polished iOS and Android experiences designed to keep your users engaged across every screen size.',
    icon: Smartphone,
    accent: 'from-violet-500 to-fuchsia-500',
    glow: 'bg-violet-500/20',
  },
  {
    title: 'AI & Automation',
    description:
      'Intelligent workflows, AI assistants, and automation systems that reduce manual work and unlock growth.',
    icon: Bot,
    accent: 'from-emerald-400 to-teal-400',
    glow: 'bg-emerald-500/20',
  },
  {
    title: 'UI/UX Design',
    description:
      'Human-centered interfaces shaped around usability, storytelling, and visual systems that feel premium.',
    icon: Brush,
    accent: 'from-amber-400 to-orange-500',
    glow: 'bg-orange-500/20',
  },
  {
    title: 'Digital Marketing',
    description:
      'Campaigns, content, and growth strategy built to amplify reach, generate leads, and improve ROI.',
    icon: Megaphone,
    accent: 'from-rose-500 to-pink-500',
    glow: 'bg-rose-500/20',
  },
]

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-dark py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_32%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm tracking-[0.24em] text-primary uppercase backdrop-blur-sm">
            Services
          </span>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Modern digital solutions built to move your business forward
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            From product design to AI-powered automation, we help ambitious brands launch faster,
            scale smarter, and stand out with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.01 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div
                  className={`absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${service.glow} opacity-60`}
                />
                <div className="absolute inset-0 bg-linear-to-br from-white/8 via-white/0 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                    className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${service.accent} text-white shadow-lg shadow-black/20`}
                  >
                    <Icon size={28} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
                      Explore service
                    </span>
                    <motion.div
                      whileHover={{ x: 4, y: -4 }}
                      transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                      className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10"
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
