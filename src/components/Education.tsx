import { motion } from 'motion/react';
import { useInView } from './useInView';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-cyan-300" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl text-gray-200 mb-1">
                    Bachelor of Science - Information Systems
                  </h3>
                  <div className="text-lg text-cyan-400 mb-2">
                    Product Development & Cybersecurity 
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    SINGAPORE MANAGEMENT UNIVERSITY<br></br>
                    August 2024 - Present
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-300 mb-2">Activities and Societies:</h4>
                      <p className="text-gray-300">SMU Women in Tech, SMU .Hack, UWS STEMentorship 2025 (Mentee), SMU AI Club</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-300 mb-2">Competitions:</h4>
                      <p className="text-gray-300">Ellipsis Code# 2025, Ellipsis Tech Series 2025, UWS STEM First Fintech Programme 2026</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-300 mb-2">Academic Excellence:</h4>
                      <p className="text-gray-300">Current Standing GPA: Cum Laude (Distinction) </p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-300 mb-2">Module Distinctions:</h4>
                      <p className="text-gray-300">Alogorithms and Programming, Business Process Analysis and Solutioning, Data Management, Economics and Society, Writing and Reasoning, Big Questions</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-300 mb-2">Teaching Assistant:</h4>
                      <p className="text-gray-300">Data Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-cyan-300" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl text-gray-200 mb-1">
                    Science Stream
                  </h3>
                  <div className="text-lg text-cyan-400 mb-2">
                    Integrated Programme 
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    TEMASEK JUNIOR COLLEGE
                    <br></br>
                    January 2018 - December 2023
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-300 mb-2">IP 1-4:</h4>
                      <p className="text-gray-300">Member of Modern Dance Club. Won 67 1st place trophies for Dance in external competitions as a solo performer (Hip Hop, Ballet, Cha Cha and Bharathnatyam)</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-300 mb-2">IP 5-6 Activities:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400">●</span>
                          <span><strong>Member of Infocomm Club:</strong> Provided photography and videography coverage for school events, handled AV equipment setup and management, including mixers, lightboards, and stage monitors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400">●</span>
                          <span><strong>Secretary of Indian Cultural Society:</strong> Led weekly team meetings. Effectively delegated tasks based on team members' strengths and interests. Initiated and maintained contact with renowned organisations like SINDA and Omkar Arts. Devised strategies to increase online presence and successfully tripled ICS' Instagram followers, boosted membership and opened opportunities for non-Indians, making ICS more inclusive. Organised large scale events for all students from Secondary 1 to JC 2.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400">●</span>
                          <span><strong>Executive manager of volunteering project</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400">●</span>
                          <span><strong>Citizenship Ambassador</strong></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}