import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const magneticRef = useRef(null);

  useEffect(() => {
    const el = magneticRef.current;
    if (!el) return;

    const move = e => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);
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

    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', reset);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center p-6 pointer-events-none">
      <nav className="w-full max-w-6xl backdrop-blur-xl bg-black/30 border border-white/5 px-6 md:px-10 py-4 rounded-[30px] flex justify-between items-center shadow-2xl relative pointer-events-auto">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-tighter italic text-white uppercase cursor-pointer"
        >
          Habiba.<span className="text-[#6366F1]">Sultana</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          {navLinks.map(link => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-400 transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.2, color: '#6366F1' }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div ref={magneticRef} className="hidden sm:block">
            <a
              href="https://drive.google.com/file/d/1ZZi6I29XO5rKBLcb1BLX5Uok8s9b0u7-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6366F1] text-white px-7 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-[#6366F1]/20 cursor-pointer"
              >
                Resume
              </motion.button>
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-[110%] left-0 w-full bg-[#0D0D0F]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 lg:hidden shadow-2xl"
            >
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 font-bold uppercase text-[11px] tracking-[0.2em] hover:text-[#6366F1] py-3 border-b border-white/5 transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
