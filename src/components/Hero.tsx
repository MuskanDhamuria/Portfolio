import { motion } from 'motion/react';
import { Linkedin, Mail, Phone, Download } from 'lucide-react';

export function Hero() {

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'public/Muskan Dhamuria.pdf'; 
    link.download = 'Muskan_Dhamuria_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl md:text-8xl mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Muskan Dhamuria
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Information Systems Student • Technology Enthusiast • Leader
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="mailto:muskandhamuria3k@gmail.com"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>muskandhamuria3k@gmail.com</span>
            </a>
            
            <a
              href="tel:+6596787615"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>+65 96787615</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/muskan-d-2a81a2331/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-3 rounded-full text-white hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/30"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}