import { motion } from 'framer-motion';
import { User, Coffee, Globe, Heart } from 'lucide-react';

const AboutSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="about"
      className="py-32 px-6 relative overflow-hidden bg-[#050505]"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 right-0 w-100 h-100 bg-[#6366F1]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* ---  --- */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/*  */}
              <div className="bg-[#0D0D0F] aspect-4/5 rounded-[48px] border border-white/5 overflow-hidden relative z-10">
                <img
                  src="https://i.ibb.co.com/jkfRPrDT/programmer.gif"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                  alt="About Habiba"
                />
              </div>

              {/*  */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-6 top-10 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#6366F1]/20 rounded-lg text-[#6366F1]">
                    <Globe size={18} />
                  </div>
                  <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Based in <br />
                    Bangladesh
                  </p>
                </div>
              </motion.div>

              {/*  */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -left-6 bottom-20 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#6366F1]/20 rounded-lg text-[#6366F1]">
                    <Coffee size={18} />
                  </div>
                  <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Fuelled by <br />
                    Coding & Tea
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* --- --- */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-10 lg:pt-0">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-2 mb-6 text-[#6366F1] font-bold text-xs uppercase tracking-[0.3em]">
                <User size={14} /> <span>Introduction</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-white leading-tight">
                Crafting Digital <br />
                <span className="text-[#6366F1]">Experiences.</span>
              </h2>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
                I am a passionate{' '}
                <span className="text-white font-medium italic">
                  MERN Stack Developer
                </span>{' '}
                with a deep love for creating clean, high-performance web
                applications. My journey started with curiosity and evolved into
                a career of building scalable digital solutions.
              </p>

              {/*  */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-[#0D0D0F] border border-white/5 rounded-3xl hover:border-[#6366F1]/30 transition-colors group">
                  <Heart
                    className="text-[#6366F1] mb-3 group-hover:scale-110 transition-transform"
                    size={24}
                  />
                  <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">
                    Passionate
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Dedicated to writing clean, maintainable, and efficient
                    code.
                  </p>
                </div>
                <div className="p-6 bg-[#0D0D0F] border border-white/5 rounded-3xl hover:border-[#6366F1]/30 transition-colors group">
                  <Globe
                    className="text-[#6366F1] mb-3 group-hover:scale-110 transition-transform"
                    size={24}
                  />
                  <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">
                    Minimalist
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Focusing on modern designs with great user experiences.
                  </p>
                </div>
              </div>

              <p className="text-gray-500 italic border-l-2 border-[#6366F1] pl-6 py-2 text-sm md:text-base">
                "I enjoy coding, traveling, and exploring minimalist designs.
                Every project I build is a blend of logic and creativity."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
