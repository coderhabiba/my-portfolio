import { motion } from 'framer-motion';
import { Rocket, Terminal, Search } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Self-Employed / Freelance Developer',
      company: 'Independent Projects',
      duration: '2024 - Present',
      description:
        'Focusing on Full-stack MERN development. Building production-ready applications, managing databases, and optimizing frontend performance.',
      icon: <Rocket size={22} />,
      skills: ['MERN Stack', 'Tailwind CSS', 'App Deployment'],
    },
    {
      role: 'Professional Web Development Journey',
      company: 'Learning & Implementation',
      duration: '2023 - 2024',
      description:
        'Deep-dived into JavaScript ES6+, React, and Backend integration. Completed intensive training at Programming Hero and built 15+ practice projects.',
      icon: <Terminal size={22} />,
      skills: ['React.js', 'Express.js', 'Firebase'],
    },
    {
      role: 'Junior Web Design Explorer',
      company: 'Foundational Learning',
      duration: '2022 - 2023',
      description:
        'Started the journey with HTML5, CSS3, and Bootstrap. Mastered responsive design principles and UI/UX basics through eShikhon.',
      icon: <Search size={22} />,
      skills: ['HTML/CSS', 'Bootstrap', 'Web Design'],
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 px-6 bg-[#050505] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#6366F1] text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            My Professional Timeline
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mt-3 text-white italic tracking-tighter"
          >
            EXPERIENCE <span className="text-[#6366F1]">& JOURNEY</span>
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6366F1]/50 via-white/5 to-transparent hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row gap-8 items-start group"
            >
              {/* Icon / Dot */}
              <div className="relative z-10 p-4 bg-[#0D0D0F] border border-white/10 rounded-2xl text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-500 shadow-xl">
                {exp.icon}
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-[#0D0D0F] p-8 rounded-[32px] border border-white/5 group-hover:border-[#6366F1]/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white">
                      {exp.role}
                    </h4>
                    <p className="text-[#6366F1] text-xs font-bold uppercase tracking-widest mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 bg-white/5 px-4 py-2 rounded-full border border-white/5 self-start md:self-center">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-lg border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
