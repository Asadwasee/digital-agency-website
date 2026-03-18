import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'CEO, Innovate Solutions',
    quote: 'The team delivered an exceptional web platform. Their expertise in AI automation is unmatched.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Rodriguez',
    title: 'Founder, Apex Dynamics',
    quote: 'Their UI/UX design transformed our user engagement metrics. Highly recommend their services.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Patel',
    title: 'Marketing Director, Quantum Leap',
    quote: 'A seamless collaboration from start to finish. The final product exceeded our expectations.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Testimonials
          </h2>
          <p className="text-4xl md:text-6xl font-black text-white leading-tight">
            Loved by <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-primary">Innovators</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/20 transition-all backdrop-blur-sm flex flex-col"
            >
              <div className="text-primary/40 mb-6 group-hover:scale-110 transition-transform">
                <Quote size={40} strokeWidth={1.5} />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed font-light grow mb-8 italic">
                “{item.quote}”
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border-2 border-primary/40"
                />
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;