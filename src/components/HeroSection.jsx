import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import {
  Code2,
  Code,
  Package,
  Award,
  Download,
  ArrowUpRight,
} from 'lucide-react';

const HeroSection = () => {
  const scrollTextRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  useEffect(() => {  
    // Magnetic Effect Function
    const makeMagnetic = el => {
      if (!el) return;

      const move = e => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        gsap.to(el, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const reset = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.3)',
        });
      };

      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', reset);
    };

    // 
    makeMagnetic(btn1Ref.current);
    makeMagnetic(btn2Ref.current);
  }, []);

  const floatingAnim = (delay = 0) => ({
    animate: {
      y: [0, -20, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: delay,
    },
  });

  return (
    <section className="relative bg-[#050505] flex flex-col justify-center md:w-[70%] w-[98%] mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="grid lg:grid-cols-3 pt-40 items-center lg:px-0 px-10 gap-10 z-10">
        {/* Left Side */}
        <div className="flex flex-col col-span-2">
          <motion.div {...floatingAnim(0)}>
            <span className="bg-[#6366F1]/10 text-[#6366F1] px-4 py-1.5 rounded-full text-[10px] font-bold mb-6 inline-block uppercase tracking-widest border border-[#6366F1]/20">
              ● Available for Work
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-4 text-white leading-[0.9] tracking-tighter italic">
              HI, I'M <br />
              <span className="text-[#6366F1]">HABIBA</span>
            </h1>
          </motion.div>

          <motion.h2
            {...floatingAnim(0.3)}
            className="text-2xl md:text-4xl font-medium text-gray-500 mb-8 italic"
          >
            Web Developer
          </motion.h2>

          <div className="mt-2">
            <p className="text-gray-500 max-w-md mb-10 leading-relaxed text-sm md:text-base">
              I craft beautiful, responsive, and user-friendly web experiences.
              Specializing in modern frontend technologies.
            </p>

            {/* Magnetic Buttons (Using Refs) */}
            <div className="flex gap-5 mb-16 relative">
              <button
                ref={btn1Ref}
                className="bg-[#6366F1] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-shadow"
              >
                View My Work <ArrowUpRight size={16} />
              </button>
              <button
                ref={btn2Ref}
                className="border border-white/10 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Let's Talk
              </button>
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap gap-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg text-[#6366F1]">
                  <Code size={20} />
                </div>
                <div>
                  <p className="text-white font-black text-xl leading-none">
                    2+
                  </p>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                    Years Exp.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg text-[#6366F1]">
                  <Package size={20} />
                </div>
                <div>
                  <p className="text-white font-black text-xl leading-none">
                    20+
                  </p>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                    Projects Done
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg text-[#6366F1]">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-white font-black text-xl leading-none">
                    3+
                  </p>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                    Certificates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Photo */}
        <div className="relative flex justify-center items-center col-span-1">
          <motion.div
            {...floatingAnim(0.2)}
            className="relative "
          >
            <div className="absolute inset-0 bg-[#6366F1]/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 w-full h-full border border-white/10 rounded-2xl overflow-hidden bg-[#111] group">
              <img
                src="https://i.ibb.co.com/3mkqNStF/person-front-computer-working-html.jpg"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                alt="Habiba"
              />
            </div>

            {/* Top Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 -right-6 z-20 bg-[#0D0D0F] p-5 rounded-[24px] border border-white/10 text-[#6366F1] shadow-2xl"
            >
              <Code2 size={28} />
            </motion.div>

            {/* Bottom Icon */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-6 -left-6 z-20 bg-[#0D0D0F] p-5 rounded-[24px] border border-white/10 text-[#6366F1] shadow-2xl cursor-pointer"
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
