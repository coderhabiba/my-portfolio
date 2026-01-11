import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Code2,
  Code,
  Package,
  Award,
  Download,
  ArrowUpRight,
} from 'lucide-react';

// --- Magnetic Component (Conflict free) ---
const MagneticButton = ({ children, className, href }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring effect for smooth movement
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = e => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // 0.4 intensity magnetic pull
    x.set((clientX - centerX) * 0.4);
    y.set((clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

const HeroSection = () => {
  const textAnim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="home"
      className="relative bg-[#050505] flex flex-col justify-center max-w-6xl mx-auto min-h-screen overflow-hidden lg:overflow-visible pt-20"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-[#6366F1]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#6366F1]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 pt-32 lg:pt-0 items-center lg:px-0 px-6 gap-12 lg:gap-4 z-10">
        {/* --- Left Side: Content --- */}
        <div className="flex flex-col justify-center">
          <motion.div {...textAnim(0.1)}>
            <span className="bg-[#6366F1]/10 text-[#6366F1] px-4 py-2 rounded-full text-[10px] font-bold mb-8 inline-flex items-center gap-2 uppercase tracking-[0.2em] border border-[#6366F1]/20">
              <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full animate-pulse"></span>
              Available for Work
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-white leading-[0.9] tracking-tighter italic">
              HI, I'M <br />
              <span className="text-[#6366F1]">HABIBA</span>
            </h1>
          </motion.div>

          <motion.h2
            {...textAnim(0.3)}
            className="text-2xl md:text-4xl font-medium text-gray-400 mb-8 italic"
          >
            MERN Stack Developer
          </motion.h2>

          <motion.div {...textAnim(0.5)}>
            <p className="text-gray-500 max-w-md mb-12 leading-relaxed text-sm md:text-base">
              I craft beautiful, responsive, and user-friendly web experiences.
              Specializing in building high-performance digital solutions with
              modern technologies.
            </p>

            {/* --- MAGNETIC BUTTONS (Fixed) --- */}
            <div className="flex flex-wrap gap-5 mb-16 relative">
              <MagneticButton
                href="#projects"
                className="group bg-[#6366F1] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all active:scale-95 cursor-pointer"
              >
                View My Work
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="border border-white/10 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95 cursor-pointer flex items-center justify-center"
              >
                Let's Talk
              </MagneticButton>
            </div>

            {/* Stats Glass Tray */}
            <div className="flex flex-wrap gap-4 md:gap-8 bg-[#0D0D0F]/50 p-6 rounded-[32px] border border-white/10 backdrop-blur-md w-fit">
              {[
                { icon: <Code size={18} />, val: '2+', label: 'Years Exp.' },
                { icon: <Package size={18} />, val: '10+', label: 'Projects' },
                { icon: <Award size={18} />, val: '1+', label: 'Certificates' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 px-2"
                >
                  <div className="p-2.5 bg-[#6366F1]/10 rounded-xl text-[#6366F1]">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-white font-black text-xl leading-none">
                      {stat.val}
                    </p>
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-tighter">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- Right Side: Photo with Icons --- */}
        <div className="relative flex justify-center lg:justify-end items-center py-10 lg:py-0">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateX: [0, 10, 0],
              rotateY: [0, -5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ perspective: 1200 }}
            className="relative w-full max-w-[340px] md:max-w-[400px]"
          >
            <div className="absolute inset-0 bg-[#6366F1]/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 aspect-[4/5] border-2 border-white/10 rounded-[56px] overflow-hidden bg-[#0D0D0F] group shadow-2xl">
              <img
                src="https://i.ibb.co.com/3mkqNStF/person-front-computer-working-html.jpg"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                alt="Habiba"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <motion.div
              animate={{ rotate: 360, y: [0, -8, 0] }}
              transition={{
                rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20 bg-[#0D0D0F] p-4 md:p-5 rounded-3xl border border-white/10 text-[#6366F1] shadow-2xl"
            >
              <Code2 size={28} />
            </motion.div>

            <motion.div
              animate={{ rotate: -360, y: [0, 8, 0] }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 z-20 bg-[#0D0D0F] p-4 md:p-6 rounded-[30px] border border-white/10 text-[#6366F1] shadow-2xl cursor-pointer transition-colors"
            >
              <Download size={28} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
