import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'Bootstrap',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'Tailwind',
      logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    },
    {
      name: 'React.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'GitHub',
      logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
    },
    {
      name: 'Netlify',
      logo: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg',
    },
    {
      name: 'Vercel',
      logo: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-32 px-6 bg-[#050505] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#6366F1] text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            My Technology Toolkit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mt-3 text-white italic tracking-tighter"
          >
            SKILLS & <span className="text-[#6366F1]">TOOLS</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
        >
          {skills.map(skill => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 bg-[#0D0D0F] border border-white/5 rounded-[24px] flex flex-col items-center justify-center gap-4 hover:border-[#6366F1]/30 transition-all duration-300"
            >
              {/* Logo Container */}
              <div className="w-12 h-12 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-xl group-hover:bg-[#6366F1]/20 transition-all"></div>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <span className="text-[10px] font-bold text-gray-500 group-hover:text-white transition-colors duration-300 uppercase tracking-widest text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
