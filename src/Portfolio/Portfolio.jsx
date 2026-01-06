import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Download,
  X,
  ArrowUpRight,
  Send,
  MapPin,
  Layers,
  Cpu,
  Layout,
  Database,
  Code2,
  GraduationCap,
  Briefcase,
  Code,
  Package,
  UserCheck,
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const FinalPortfolioWithInfinityHero = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const scrollTextRef1 = useRef(null);
  const scrollTextRef2 = useRef(null);

  // Accent Color: Indigo (#6366F1)
  const accentColor = '#6366F1';

  useEffect(() => {
    // Smooth Scroll Initialization
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Custom Cursor Movement
    const moveCursor = e => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };
    window.addEventListener('mousemove', moveCursor);

    // Infinity Scroll Animation for Hero Section
    gsap.to(scrollTextRef1.current, {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: 'linear',
    });
    gsap.to(scrollTextRef2.current, {
      xPercent: 100, // Opposite direction
      repeat: -1,
      duration: 20,
      ease: 'linear',
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#6366F1]/30 cursor-none overflow-x-hidden font-sans">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-[#6366F1] rounded-full pointer-events-none z-[9999]"
      ></div>
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border border-[#6366F1]/50 rounded-full pointer-events-none z-[9998] -translate-x-3 -translate-y-3"
      ></div>

      {/* 1. Navbar */}
      <Navbar/>

      {/* 2. Hero Section (Updated with Infinity Animation) */}
      <HeroSection />

      {/* 3. About Section */}
      <section id="about" className="py-32 px-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="bg-[#0D0D0F] aspect-[4/5] rounded-[40px] border border-white/5 overflow-hidden">
            <img
              src="https://via.placeholder.com/500x700"
              className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-all duration-700"
              alt="About"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 italic">
              About <span className="text-[#6366F1]">Me</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a passionate MERN Stack Developer with a deep love for
              creating clean, high-performance web applications. My journey
              started with curiosity and evolved into a career of building
              scalable digital solutions.
            </p>
            <p className="text-gray-500 italic">
              I enjoy coding, traveling, and exploring minimalist designs.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="py-32 px-10 bg-[#080808]">
        <h2 className="text-center text-3xl font-bold mb-16 italic uppercase tracking-widest text-[#6366F1]">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            'React.js',
            'Next.js',
            'Node.js',
            'Express',
            'MongoDB',
            'PostgreSQL',
            'Tailwind',
            'GSAP',
            'Framer Motion',
            'Git',
          ].map(s => (
            <span
              key={s}
              className="px-6 py-3 bg-[#0D0D0F] border border-white/5 rounded-xl text-xs font-bold hover:border-[#6366F1] transition-all cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* 5. Education Section */}
      <section id="edu" className="py-32 px-10 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 italic text-center">
          Education
        </h2>
        <div className="bg-[#0D0D0F] p-10 rounded-[40px] border border-white/5 flex gap-8 items-center">
          <div className="p-5 bg-[#6366F1]/10 rounded-2xl text-[#6366F1]">
            <GraduationCap size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold">B.Sc in Computer Science</h3>
            <p className="text-gray-500">
              Major in Software Engineering • 2020 - 2024
            </p>
          </div>
        </div>
      </section>

      {/* 6. Experience Section */}
      <section id="exp" className="py-32 px-10 bg-[#080808]">
        <h2 className="text-4xl font-bold mb-16 italic text-center text-[#6366F1]">
          Experience
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-[#0D0D0F] p-10 rounded-[40px] border border-white/5 flex justify-between items-center group hover:bg-[#6366F1]/5 transition-all">
            <div className="flex gap-6 items-center">
              <div className="p-4 bg-white/5 rounded-xl text-white">
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold">Frontend Intern</h4>
                <p className="text-sm text-gray-500 italic">
                  Tech Solutions Inc.
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
              2023 - Present
            </span>
          </div>
        </div>
      </section>

      {/* 7. Work/Projects Section (5 Projects) */}
      <section id="work" className="py-32 px-10 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black italic mb-20 tracking-tighter">
          SELECTED WORKS<span className="text-[#6366F1]">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5].map(id => (
            <div
              key={id}
              className="bg-[#0D0D0F] border border-white/5 p-8 rounded-[40px] group hover:border-[#6366F1]/30 transition-all cursor-pointer"
            >
              <div className="aspect-video bg-[#151518] rounded-[25px] mb-6 overflow-hidden relative">
                <img
                  src={`https://via.placeholder.com/500?text=Project+${id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                  alt="P"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 italic">Project Title</h3>
              <div className="flex justify-between items-center text-[10px] font-bold text-gray-600 uppercase tracking-widest pt-4 border-t border-white/5">
                <span>MERN Stack</span>
                <ArrowUpRight
                  size={18}
                  className="text-[#6366F1] opacity-0 group-hover:opacity-100 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Modern Contact Section */}
      <section id="contact" className="py-32 px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-10">
              GET IN <br /> <span className="text-[#6366F1]">TOUCH.</span>
            </h2>
            <p className="text-gray-500 mb-12 text-lg">
              Have a project in mind? Let's build something amazing together.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-center p-6 bg-[#0D0D0F] rounded-3xl border border-white/5 hover:border-[#6366F1]/30 transition-all">
                <div className="text-[#6366F1]">
                  <Mail size={24} />
                </div>
                <p className="text-lg font-medium">anikahabiba50@gmail.com</p>
              </div>
              <div className="flex gap-4 items-center p-6 bg-[#0D0D0F] rounded-3xl border border-white/5">
                <div className="text-[#6366F1]">
                  <Phone size={24} />
                </div>
                <p className="text-lg font-medium">01720331344</p>
              </div>
            </div>
            <div className="flex gap-6 mt-12 text-gray-500">
              <Github className="hover:text-white cursor-pointer" />
              <Linkedin className="hover:text-white cursor-pointer" />
            </div>
          </div>
          <div className="bg-[#0D0D0F] p-10 rounded-[50px] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#6366F1]/10 blur-[80px] group-hover:bg-[#6366F1]/20 transition-all"></div>
            <div className="space-y-8 relative z-10">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#6366F1] transition-all text-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#6366F1] transition-all text-sm"
              />
              <textarea
                placeholder="Tell me about your project..."
                rows="4"
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#6366F1] transition-all text-sm"
              ></textarea>
              <button className="w-full bg-[#6366F1] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex justify-center items-center gap-3 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all">
                Send Message <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-center border-t border-white/5">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-600 italic">
          © 2026 Anika Habiba — Professional Portfolio
        </p>
      </footer>
    </div>
  );
};

export default FinalPortfolioWithInfinityHero;
