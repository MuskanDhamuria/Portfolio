import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Award } from 'lucide-react';

const awards = [
  'Bronze in Design Thinking with Robotics and Computational Thinking - 2022',
  'Bronze in Queen\'s Commonwealth Essay Competition - 2022',
  'Bronze in Singapore Math Kangaroo Competition - 2022 and 2023',
  'Credit in American Mathematics competition - 2022',
  'Credit in Australian Mathematics competition - 2021 and 2022',
  'First nationwide for Hindi examinations - 2016',
  'Gold in International Singapore Maths Competition - 2017',
  'Honourable mention in International Bebras Challenge on Informatics - 2022',
  'Silver in International Science Competition - VANDA 2019',
];

export function Awards() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="awards" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Awards & Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30 hover:border-cyan-500/40 transition-all duration-300 flex items-start gap-3"
              >
                <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{award}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}