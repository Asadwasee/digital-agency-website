import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm mb-8 backdrop-blur-sm"
        >
          <Sparkles size={16} />
          <span>Leading Digital Agency in 2026</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
        >
          We Design <br /> 
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Digital Experiences
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Turning complex ideas into seamless digital realities. We specialize in <span className="text-white">Next-Gen Web</span>, AI, and intuitive UI/UX.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="group bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-primary/50">
            Start a Project 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 rounded-2xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all">
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;