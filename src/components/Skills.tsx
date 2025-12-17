import { motion } from 'motion/react';
import { useInView } from './useInView';

// Icons
import {
  SiPython,
  SiMysql,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTableau,
  SiPandas,
  SiTailwindcss,
  SiReact,
  SiMongodb,
  SiTypescript,
  SiBootstrap,
} from 'react-icons/si';

import { FaChartLine, FaMapMarkedAlt, FaFileExcel, FaVuejs } from 'react-icons/fa';

const skills = [
  { name: 'Python', icon: SiPython },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PHP', icon: SiPhp },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Vue', icon: FaVuejs },
  { name: 'Excel', icon: FaFileExcel },
  { name: 'Power Query', icon: FaFileExcel },
  { name: 'Tableau', icon: SiTableau },
  { name: 'Pandas', icon: SiPandas },
  { name: 'Matplotlib', icon: FaChartLine },
  { name: 'Folium', icon: FaMapMarkedAlt },
];

export function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ">
            Technical Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg px-6 py-3 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all cursor-default"
                >
                  <Icon className="text-cyan-300 text-lg" />
                  <span className="text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
