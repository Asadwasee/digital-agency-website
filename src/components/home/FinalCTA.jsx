import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-primary/20 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-12 md:p-20 text-center"
        >
          {/* Decorative Icon */}
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8"
          >
            <Sparkles size={32} />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-400">scale your business?</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Let’s build something extraordinary together. Our team is ready to turn your vision 
            into a high-performance digital reality.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            {/* Link to Abdullah's Contact Page */}
            <Link
              to="/contact"
              className="group relative flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]"
            >
              <span className="relative z-10 text-xl">Start Your Project</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </motion.div>

          {/* Background Subtle Text */}
          <div className="absolute -bottom-10 -right-10 text-white/5 font-black text-9xl pointer-events-none select-none">
            CODECELIX
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;