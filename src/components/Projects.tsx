import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'URBANIX',
    description:
      'Designed and implemented the system architecture, with close team collaboration on debugging and validation. Implemented multi-objective optimization logic and Pareto frontier analysis to simulate and evaluate urban policy bundles. Developed data ingestion and transformation pipeline for Excel-based urban datasets and real-time visualization dashboards.',
    technologies: ['Ollama','Web APIs','React.js', 'Typescript', 'Tailwind CSS','Recharts','SheetJS (XLSX)','JavaScript', 'Node.js'],
    github: 'https://github.com/MuskanDhamuria/URBANIX',
    demo: '#',
    highlight: 'Most Feasible Solution & Finalist in Hack For Cities Hackathon 2026',
  },
  
  {
    title: 'Data Management Projects',
    description:
      'Various data analysis and management projects completed during coursework, demonstrating proficiency in database design, SQL queries, and data visualization using modern tools.',
    technologies: ['MySQL', 'Python', 'Pandas', 'Tableau', 'Data Visualization'],
    github: '#',
    demo: '#',
    highlight: 'Achieved distinction in Data Management module & serving as Teaching Assistant',
  },
  
  {
    title: 'Factors Affecting Housing Prices in Singapore',
    description:
      'Conducted an in-depth analysis of residential property prices in Singapore by examining key factors such as location, flat type, floor area, lease duration, and proximity to amenities. Leveraged data transformation and cleaning techniques to uncover trends and pricing drivers.',
    technologies: ['Tableau', 'Power Query', 'Excel', 'Data Analysis', 'Data Visualization'],
    github: '#',
    demo: '#',
    highlight: 'Achieved Distinction for the project during my Coursework',
  },
  {
    title: 'QuestPass',
    description:
      'QuestPass is a fair-access presale platform designed to combat ticket scalping and bot abuse. Instead of selling tickets, QuestPass integrates with official ticketing partners and allows fans to earn presale access by completing engagement-based quests such as music trivia, listening history verification, and mini-games.',
    technologies: [
      'Vue.js',
      'Vue Router',
      'Pinia',
      'Bootstrap 5',
      'Firebase Authentication',
      'Cloud Firestore',
      'Firebase Cloud Functions',
      'Node.js',
      'Spotify API',
      'Gemini API',
      'Jambase API',
      'Google Maps API',
      'EmailJS',
      'Deezer API',
    ],
    github: 'https://github.com/MuskanDhamuria/QuestPass',
    demo: 'https://questpass-b3680.web.app/',
    highlight: 'Achieved Distinction for the project during my Coursework',
  },
  {
    title: 'PixelPop',
    description:
      'A responsive web-based Game Dashboard that showcases mini-games I have built.',
    technologies: [
      'HTML5',
      'CSS3',
      'TailwindCSS',
      'Leaflet.js',
      'APIs',
      'Motion',
      'React',
      'TypeScript',
      'GeoJSON',
    ],
    github: 'https://github.com/MuskanDhamuria/PixelPop',
    demo: 'https://muskandhamuria.github.io/PixelPop/',
    highlight: 'Personal Hobby',
  },
  
];

export function Projects() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <h3 className="text-2xl text-gray-200 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-200 italic">✨ {project.highlight}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-cyan-500/20 text-gray-200 px-3 py-1 rounded-full border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg px-4 py-2 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all text-gray-200 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  )}

                  {project.demo && project.demo !== '#' && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg px-4 py-2 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all text-gray-200 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-4">Want to see more of my work?</p>
            <motion.a
              href="https://github.com/MuskanDhamuria"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg px-8 py-4 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all text-gray-200"
            >
              <Github className="w-5 h-5" />
              Visit My GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
