import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'ZapShift',
      desc: 'An Employee Management System for seamless workflow.',
      tech: ['React', 'Express', 'MongoDB', 'TanStack Query'],
      img: 'https://i.ibb.co.com/v62k8nBN/Screenshot-2026-01-02-140805.png',
      link: 'https://zap-shift-curier.netlify.app',
      github: 'https://github.com/coderhabiba/ZapShift_client',
    },
    {
      name: 'PlateShare',
      desc: 'Community Food Sharing platform to reduce food waste.',
      tech: ['React', 'Node.js', 'Firebase', 'Tailwind'],
      img: 'https://i.ibb.co.com/5gtV6Y02/Screenshot-2026-01-02-132302.png',
      link: 'https://plate-share-web.netlify.app',
      github: 'https://github.com/coderhabiba/Plate_Share_Client_Site',
    },
    {
      name: 'Asset Verse',
      desc: 'Powerful Asset Management system for businesses.',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Framer Motion'],
      img: 'https://i.ibb.co.com/Lzz7qJ04/Screenshot-2026-01-02-125200.png',
      link: 'https://asset-verse.netlify.app',
      github: 'https://github.com/coderhabiba/Asset_Verse-Client',
    },
    {
      name: 'Hero App',
      desc: 'Learning platform dashboard with modern UI.',
      tech: ['React', 'Redux', 'DaisyUI', 'JWT'],
      img: 'https://i.ibb.co.com/whL2fmyd/Screenshot-2026-01-02-142322.png',
      link: 'https://a-08-hero-app.netlify.app',
      github: 'https://github.com/coderhabiba/A-08_Hero_App',
    },
    {
      name: 'Skill Exchange',
      desc: 'A platform for sharing and learning new skills.',
      tech: ['React', 'AOS', 'React Router', 'Node'],
      img: 'https://i.ibb.co.com/gZNj8nBk/Screenshot-2026-01-02-133912.png',
      link: 'https://a-09-skill-exchenge.netlify.app',
      github: 'https://github.com/coderhabiba/A-09_Hero_App',
    },
    {
      name: 'English Janala',
      desc: 'Language learning platform for interactive education.',
      tech: ['Javascript', 'Tailwind', 'HTML', 'CSS'],
      img: 'https://i.ibb.co.com/jP7y0Xnq/Screenshot-2026-01-11-192919.png',
      link: 'https://coderhabiba.github.io/English-Janala',
      github: 'https://github.com/coderhabiba/English-Janala',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
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
                className="w-full h-full object-cover opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                alt={project.name}
              />

              {/* Floating Action Links */}
              <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex gap-2 z-20">
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

            {/* Content Area */}
            <div className="px-2 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-2xl font-black italic text-white group-hover:text-[#6366F1] transition-colors uppercase tracking-tighter">
                      {project.name}
                    </h3>
                  </a>
                  <p className="text-gray-500 text-xs mt-2 line-clamp-2 font-medium italic h-8">
                    {project.desc}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full group-hover:bg-[#6366F1]/10 transition-colors"
                >
                  <ArrowUpRight
                    className="text-[#6366F1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    size={20}
                  />
                </a>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-bold text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
