import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Mail, Phone, Linkedin } from 'lucide-react';

export function Contact() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="contact" className="py-20 px-6 pb-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborations, or just connect with fellow technology enthusiasts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="mailto:muskandhamuria3k@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg px-8 py-4 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all group"
            >
              <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-gray-200">Email Me</span>
            </motion.a>

            <motion.a
              href="tel:+6596787615"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg px-8 py-4 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all group"
            >
              <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-gray-200">Call Me</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/muskan-d-2a81a2331/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg px-8 py-4 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all group"
            >
              <Linkedin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-gray-200">LinkedIn</span>
            </motion.a>
          </div>

          <motion.div
            className="mt-16 text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>© 2025 Muskan Dhamuria.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}