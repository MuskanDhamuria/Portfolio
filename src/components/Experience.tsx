import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Tutor',
    company: 'Eduspace',
    period: 'August 2024 - Present',
    responsibilities: [
      'Tutoring students in various academic subjects with a focus on conceptual understanding and application.',
      'Organised and maintained detailed records of tutoring sessions, including students\' progress, to track and report outcomes effectively.',
    ],
  },
  {
    role: 'Student Intern',
    company: 'Science Centre Singapore',
    period: 'January 2022',
    responsibilities: [
      'Developed an interactive \'Young Engineer Trail\' for primary students using digital tools in a group of 2',
      'Created online modules for the \'Young Digital Fabricator\' badge program',
      'Took lead presentation role during final delivery after unforeseen team absence',
      'Successfully navigated doubled responsibilities in concluding weeks amid team shortage',
      'Strengthened communication, problem-solving, and presentation skills in real-world scenarios',
    ],
  },
  {
    role: 'Executive Manager of volunteering project',
    company: 'Temasek Junior College',
    period: 'JANUARY 2023 - JUNE 2023',
    responsibilities: [
      'Spearheaded volunteering project on improving digital literacy among the elderly',
      'Coordinated logistics, communicated with stakeholders, and ensured the project\'s success',
      'Created opportunities for positive growth for our team and communities',
    ],
  },
];

export function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg">
                    <Briefcase className="w-6 h-6 text-cyan-300" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl text-gray-200 mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-cyan-400 mb-2">
                      {exp.company}
                    </div>
                    <div className="text-sm text-gray-400 mb-4">
                      {exp.period}
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-cyan-400 mt-1">●</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}