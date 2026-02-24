import { motion } from 'motion/react';
import { useInView } from './useInView';
import MyPhoto from '../assets/myphoto.jpg';

export function About() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="flex justify-center mb-6">
            <img
              src={MyPhoto}
              alt="Muskan Dhamuria"
              className="border-2 border-cyan-400/30 shadow-lg shadow-cyan-500/30 mb-12"
              style={{ width: '250px', height: 'auto' }}
            />
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30 hover:border-cyan-500/40 transition-all duration-300">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a motivated and adaptable Bachelor of Science in Information Systems
              student at Singapore Management University (Product Development track) with a second major in Cybersecurity. I have a strong foundation in
              digital technologies, project management, and interdisciplinary collaboration. I
              have the proven ability to lead initiatives, work well in teams, and balance
              academic success with co-curricular excellence. I am extremely passionate
              about technology and hope to use technology to create meaningful change.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
