import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  MapPin,
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'anikahabiba50@gmail.com',
      link: 'mailto:anikahabiba50@gmail.com',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone / WhatsApp',
      value: '+880 1720-331344',
      link: 'https://wa.me/8801720331344',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Mymensingh, Bangladesh',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: <Github size={22} />, link: 'https://github.com/coderhabiba' },
    {
      icon: <Linkedin size={22} />,
      link: 'https://www.linkedin.com/in/habiba-anika-00ab163a1/',
    },
    { icon: <MessageCircle size={22} />, link: 'https://wa.me/8801720331344' },
  ];

  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-20 bg-[#050505] relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6366F1]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 relative z-10">
        {/* --- Left Side: Content --- */}
        <div className="flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#6366F1] text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block"
          >
            Let's Collaborate
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.85] text-white mb-12 uppercase"
          >
            GET IN <br /> <span className="text-[#6366F1]">TOUCH.</span>
          </motion.h2>

          <div className="grid gap-4">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  x: 10,
                  backgroundColor: 'rgba(99, 102, 241, 0.05)',
                }}
                className="flex items-center gap-6 p-6 bg-[#0D0D0F] rounded-[28px] border border-white/5 group transition-all"
              >
                <div className="p-4 bg-white/5 rounded-2xl text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                    {info.label}
                  </p>
                  <p className="text-white font-medium text-lg tracking-tight">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex gap-4 mt-12">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ y: -5, color: '#6366F1' }}
                className="p-5 bg-[#0D0D0F] rounded-2xl border border-white/5 text-gray-500 transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* --- Right Side: Modern Form --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#0D0D0F] p-8 md:p-12 rounded-[56px] border border-white/5 relative group"
        >
          {/* Subtle Form Decoration */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Send size={120} className="rotate-12 text-white" />
          </div>

          <div className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Habiba Sultana"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#6366F1]/50 focus:bg-[#6366F1]/5 transition-all text-white placeholder:text-gray-700 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-[#6366F1]/50 focus:bg-[#6366F1]/5 transition-all text-white placeholder:text-gray-700 font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Message
              </label>
              <textarea
                placeholder="Hi, I have a project for you..."
                rows="5"
                className="w-full bg-white/5 border border-white/5 rounded-[32px] px-6 py-6 outline-none focus:border-[#6366F1]/50 focus:bg-[#6366F1]/5 transition-all text-white placeholder:text-gray-700 font-medium resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#6366F1] text-white py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] transition-all flex justify-center items-center gap-3"
            >
              Fire Message <Send size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
