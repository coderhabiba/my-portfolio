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
    // Smooth scroll (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Custom cursor movement
    const moveCursor = e => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });

      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    // Hover Interaction Logic
    const handleMouseEnter = () => {
      gsap.to(followerRef.current, {
        scale: 2.5,
        backgroundColor: "rgba(99, 102, 241, 0.15)",
        borderColor: "rgba(99, 102, 241, 1)",
        duration: 0.3
      });
      gsap.to(cursorRef.current, { scale: 0.5, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(followerRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(99, 102, 241, 0.5)",
        duration: 0.3
      });
      gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
    };

    // Text Input Hover (Jate typing cursor disturb na kore)
    const handleInputEnter = () => {
        gsap.to([cursorRef.current, followerRef.current], { opacity: 0, duration: 0.2 });
    };
    const handleInputLeave = () => {
        gsap.to([cursorRef.current, followerRef.current], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', moveCursor);

    // Clickable elements e event listener add kora
    const clickables = document.querySelectorAll('a, button, .cursor-pointer');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Inputs/Textarea te cursor hide kora
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(el => {
        el.addEventListener('mouseenter', handleInputEnter);
        el.addEventListener('mouseleave', handleInputLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      lenis.destroy();
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      inputs.forEach(el => {
        el.removeEventListener('mouseenter', handleInputEnter);
        el.removeEventListener('mouseleave', handleInputLeave);
      });
    };
  }, []);

  return (
    <div className="bg-[#050505] text-white selection:bg-[#6366F1]/30 cursor-none overflow-x-hidden font-sans">
      {/* Custom Cursor Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#6366F1] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      ></div>
      
      {/* Custom Cursor Follower/Ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#6366F1]/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform duration-100"
      ></div>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <Skills />
        <Projects/>
        <Experience/>
        <Education/>
        <Hobbies/>
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