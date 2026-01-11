import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Contact from '../components/Contact';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Hobbies from './../components/Hobbies';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const moveCursor = e => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to(followerRef.current, {
        scale: 1.4,
        backgroundColor: 'rgba(99, 102, 241, 0.08)',
        borderColor: 'rgba(99, 102, 241, 0.6)',
        duration: 0.3,
      });
      gsap.to(cursorRef.current, { scale: 1.2, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(followerRef.current, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(99, 102, 241, 0.5)',
        duration: 0.3,
      });
      gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    const clickables = document.querySelectorAll(
      'a, button, .cursor-pointer, input, textarea'
    );
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#050505] text-white selection:bg-[#6366F1]/30 cursor-none overflow-x-hidden font-sans">
      {/* Center aligned small Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[7px] h-[7px] bg-[#6366F1] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* Refined Follower Ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#6366F1]/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      ></div>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Hobbies />
        <Contact />
      </main>

      <footer className="py-12 bg-black text-center border-t border-white/5">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-600 italic">
          © 2026 Habiba Sultana — Professional Portfolio
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
