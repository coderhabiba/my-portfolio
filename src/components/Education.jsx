import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  GraduationCap,
  Code2,
  Palette,
  Award,
  ExternalLink,
} from 'lucide-react';

const Education = () => {
  const certifications = [
    {
      title: 'MERN Stack Development',
      platform: 'Programming Hero',
      status: 'Completed',
      icon: <Code2 size={22} />,
      color: '#6366F1',
    },
    {
      title: 'Professional Web Design',
      platform: 'eShikhon',
      status: 'Completed',
      icon: <Palette size={22} />,
      color: '#F59E0B',
    },
  ];

  return (
    <section
      id="education"
      className="py-32 px-6 bg-[#050505] relative overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#6366F1]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#6366F1] text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            Academic & Professional Background
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mt-3 text-white italic tracking-tighter"
          >
            EDUCATION & <span className="text-[#6366F1]">TRAINING</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* --- Academic Path --- */}
          <div>
            <h3 className="text-white text-lg font-bold mb-8 flex items-center gap-3 italic">
              <GraduationCap className="text-[#6366F1]" /> Academic
              Qualification
            </h3>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-[#0D0D0F] p-8 rounded-[32px] border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen size={60} />
              </div>

              <span className="text-[10px] font-bold text-[#6366F1] uppercase tracking-widest bg-[#6366F1]/10 px-3 py-1 rounded-full">
                Masters Degree
              </span>
              <h4 className="text-2xl font-bold text-white mt-4">
                MA in Islamic Studies
              </h4>
              <p className="text-gray-400 mt-2 font-medium italic uppercase tracking-tighter text-xs">
                Dawra-e-Hadith | Qawmi Madrasa Board
              </p>

              <div className="mt-8 flex items-center gap-2 text-gray-500 text-xs font-bold">
                <Award size={14} className="text-[#6366F1]" />
                Highest Academic Achievement
              </div>
            </motion.div>
          </div>

          {/* --- Professional Path --- */}
          <div>
            <h3 className="text-white text-lg font-bold mb-8 flex items-center gap-3 italic">
              <Code2 className="text-[#6366F1]" /> Tech Certifications
            </h3>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="bg-[#0D0D0F] p-6 rounded-[24px] border border-white/5 flex items-center gap-5 group transition-all"
                >
                  <div
                    className="p-4 rounded-2xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${cert.color}10`,
                      color: cert.color,
                    }}
                  >
                    {cert.icon}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg group-hover:text-[#6366F1] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                      {cert.platform}
                    </p>
                  </div>

                  <div className="text-gray-600 group-hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
