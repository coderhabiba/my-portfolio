import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Coffee, Plane, Book, Gamepad2, Palette } from 'lucide-react';

const Hobbies = () => {
  const hobbyList = [
    {
      name: 'Photography',
      desc: 'Capturing moments and exploring visual storytelling.',
      icon: <Camera size={24} />,
      color: '#6366F1',
    },
    {
      name: 'Travelling',
      desc: 'Exploring new places and experiencing different cultures.',
      icon: <Plane size={24} />,
      color: '#10B981',
    },
    {
      name: 'Reading',
      desc: 'Always eager to learn new things from books and articles.',
      icon: <Book size={24} />,
      color: '#F59E0B',
    },
    {
      name: 'Gaming',
      desc: 'Unwinding with some immersive digital experiences.',
      icon: <Gamepad2 size={24} />,
      color: '#EC4899',
    },
    {
      name: 'Coffee Lover',
      desc: 'A perfect day starts with a hot cup of coffee.',
      icon: <Coffee size={24} />,
      color: '#8B4513',
    },
    {
      name: 'Creative UI',
      desc: 'Experimenting with colors and shapes in my free time.',
      icon: <Palette size={24} />,
      color: '#06B6D4',
    },
  ];

  return (
    <section
      id="hobbies"
      className="py-32 px-6 lg:px-20 bg-[#050505] relative overflow-hidden"
    >
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#6366F1]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#6366F1] text-[10px] font-bold uppercase tracking-[0.4em]"
          >
            Beyond the Code
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mt-3 text-white italic tracking-tighter"
          >
            MY <span className="text-[#6366F1]">HOBBIES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbyList.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
              }}
              className="p-8 bg-[#0D0D0F] border border-white/5 rounded-[40px] group transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6"
                style={{
                  backgroundColor: `${hobby.color}15`,
                  color: hobby.color,
                }}
              >
                {hobby.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6366F1] transition-colors">
                {hobby.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                {hobby.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
