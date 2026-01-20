import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  X,
  CheckCircle2,
} from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: 'ZapShift',
      desc: 'An Employee Management System for seamless workflow.',
      longDesc:
        'ZapShift is a robust MERN stack application designed for modern businesses to manage their workforce. It includes secure authentication, payroll processing, and real-time task management features.',
      features: [
        'Secure HR Dashboard',
        'Employee Performance Tracking',
        'Automated Payroll System',
      ],
      tech: ['React', 'Express', 'MongoDB', 'TanStack Query'],
      img: 'https://i.ibb.co.com/v62k8nBN/Screenshot-2026-01-02-140805.png',
      link: 'https://zap-shift-curier.netlify.app',
      github: 'https://github.com/coderhabiba/ZapShift_client',
    },
    {
      name: 'PlateShare',
      desc: 'Community Food Sharing platform to reduce food waste.',
      longDesc:
        'PlateShare connects people who have surplus food with those who need it. It focuses on reducing community food waste through a simple, location-based sharing system.',
      features: [
        'Donation Posting',
        'Location-based Search',
        'Real-time Messaging',
      ],
      tech: ['React', 'Node.js', 'Firebase', 'Tailwind'],
      img: 'https://i.ibb.co.com/5gtV6Y02/Screenshot-2026-01-02-132302.png',
      link: 'https://plate-share-web.netlify.app',
      github: 'https://github.com/coderhabiba/Plate_Share_Client_Site',
    },
    {
      name: 'Asset Verse',
      desc: 'Powerful Asset Management system for businesses.',
      longDesc:
        'Asset Verse is a premium solution for tracking company assets. It integrates Stripe for subscription-based access and provides detailed analytics on asset usage and history.',
      features: [
        'Stripe Payment Integration',
        'Asset Lifecycle Tracking',
        'Advanced Analytics',
      ],
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Framer Motion'],
      img: 'https://i.ibb.co.com/Lzz7qJ04/Screenshot-2026-01-02-125200.png',
      link: 'https://asset-verse.netlify.app',
      github: 'https://github.com/coderhabiba/Asset_Verse-Client',
    },
    {
      name: 'Hero App',
      desc: 'Learning platform dashboard with modern UI.',
      longDesc:
        'A sleek education management dashboard that allows students to track their courses and progress. Built with Redux for state management and JWT for secure login.',
      features: [
        'Course Management',
        'User Progress Tracking',
        'Responsive Dashboard UI',
      ],
      tech: ['React', 'Redux', 'DaisyUI', 'JWT'],
      img: 'https://i.ibb.co.com/whL2fmyd/Screenshot-2026-01-02-142322.png',
      link: 'https://a-08-hero-app.netlify.app',
      github: 'https://github.com/coderhabiba/A-08_Hero_App',
    },
    {
      name: 'Skill Exchange',
      desc: 'A platform for sharing and learning new skills.',
      longDesc:
        'Skill Exchange is a community portal where users can trade their expertise. From coding to cooking, users can find mentors and learners in a peer-to-peer environment.',
      features: [
        'Peer-to-peer Skill Trading',
        'Community Reviews',
        'AOS Animations',
      ],
      tech: ['React', 'AOS', 'React Router', 'Node'],
      img: 'https://i.ibb.co.com/gZNj8nBk/Screenshot-2026-01-02-133912.png',
      link: 'https://a-09-skill-exchenge.netlify.app',
      github: 'https://github.com/coderhabiba/A-09_Hero_App',
    },
    {
      name: 'English Janala',
      desc: 'Language learning platform for interactive education.',
      longDesc:
        'English Janala is a dedicated platform for learning English. It features interactive lessons, vocabulary cards, and progress monitoring to help students improve quickly.',
      features: [
        'Interactive Lessons',
        'Vocabulary Builder',
        'Mobile Responsive UI',
      ],
      tech: ['Javascript', 'Tailwind', 'HTML', 'CSS'],
      img: 'https://i.ibb.co.com/jP7y0Xnq/Screenshot-2026-01-11-192919.png',
      link: 'https://coderhabiba.github.io/English-Janala',
      github: 'https://github.com/coderhabiba/English-Janala',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#6366F1] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            My Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white leading-none"
          >
            Selected <span className="text-[#6366F1]">Works.</span>
          </motion.h2>
        </div>
        <p className="text-gray-500 max-w-xs text-sm italic font-medium">
          A collection of MERN stack applications built with passion and
          precision.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-[#0D0D0F] border border-white/5 p-6 rounded-[48px] group transition-all duration-500 hover:border-[#6366F1]/30 flex flex-col h-full"
          >
            {/* Project Image Container */}
            <div className="aspect-[4/3] bg-[#151518] rounded-[40px] mb-8 overflow-hidden relative">
              <img
                src={project.img}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                alt={project.name}
              />

              {/* Action Links */}
              <div className="absolute top-4 right-4 translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 flex gap-2 z-20">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-[#6366F1] transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-[#6366F1] transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="px-2 flex flex-col flex-grow">
              <h3 className="text-2xl font-black italic text-white group-hover:text-[#6366F1] transition-colors uppercase tracking-tighter mb-2">
                {project.name}
              </h3>
              <p className="text-gray-500 text-xs mb-6 line-clamp-2 font-medium italic h-8">
                {project.desc}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-auto w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] uppercase font-bold tracking-[0.2em] text-white hover:bg-[#6366F1] hover:border-[#6366F1] transition-all duration-300 cursor-pointer"
              >
                Project Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Project Details Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-[#0D0D0F] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 p-4 md:p-8">
                <div className="w-full h-full min-h-[250px] md:min-h-full rounded-[30px] overflow-hidden border border-white/5 bg-[#151518]">
                  <img
                    src={selectedProject.img}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <span className="text-[#6366F1] text-[10px] font-bold uppercase tracking-[0.3em]">
                  Case Study
                </span>
                <h3 className="text-4xl font-black italic text-white uppercase mt-2 mb-6 tracking-tighter">
                  {selectedProject.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
                  {selectedProject.longDesc}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">
                    Core Features
                  </h4>
                  {selectedProject.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-300 text-sm italic"
                    >
                      <CheckCircle2 size={16} className="text-[#6366F1]" />{' '}
                      {feat}
                    </div>
                  ))}
                </div>

                {/* Tags in Modal */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-bold text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 uppercase tracking-widest"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5 mt-auto">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#6366F1] text-white px-7 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/5 text-white px-7 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    GitHub <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
