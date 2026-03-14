import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: '150+', color: 'from-blue-500 to-cyan-400' },
  { label: 'Global Clients', value: '80+', color: 'from-purple-500 to-pink-500' },
  { label: 'Team Experts', value: '25+', color: 'from-orange-500 to-red-500' },
];

const Stats = () => {
  return (
    <section className="relative py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all backdrop-blur-xl"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500" />
              
              <h3 className={`text-6xl font-black mb-3 bg-clip-text text-transparent bg-linear-to-r ${stat.color}`}>
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium tracking-widest uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;