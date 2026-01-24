import { motion } from 'motion/react';
import { useInView } from './useInView';

import {
  SiPython,
  SiMysql,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiFigma,
  SiDocker,
  SiFlask,
  SiFirebase,
  SiVirtualbox,
  SiLinux,
  SiOdoo,
  SiSap,
  SiMongodb,
} from 'react-icons/si';

import { FaChartLine, FaMapMarkedAlt, FaFileExcel, FaAws, FaCloud, FaTerminal, FaJava, FaLinux, FaVuejs } from 'react-icons/fa';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Vue', icon: FaVuejs },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Figma', icon: SiFigma },
    ],
  },
  {
    title: 'Backend & Programming',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Flask', icon: SiFlask },
      { name: 'PHP', icon: SiPhp },
      { name: 'Node.js', icon:  FaTerminal },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Java', icon: FaJava }, // fallback
      { name: 'Bash', icon: FaTerminal },
      { name: 'APIs', icon: FaChartLine },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      { name: 'Excel', icon: FaFileExcel },
      { name: 'Power Query', icon: FaFileExcel },
      { name: 'Pandas', icon: SiPython }, // fallback
      { name: 'Matplotlib', icon: FaChartLine }, // fallback
      { name: 'Tableau', icon: FaChartLine }, // fallback
      { name: 'Folium', icon: FaMapMarkedAlt },
    ],
  },
  {
    title: 'Enterprise Systems',
    skills: [
      { name: 'Odoo', icon: SiOdoo },
    ],
  },
  {
    title: 'Cloud, DevOps & Virtualization',
    skills: [
      { name: 'Azure', icon: FaCloud },
      { name: 'Docker', icon: SiDocker },
      { name: 'Oracle VirtualBox', icon: SiVirtualbox },
      { name: 'AWS', icon: FaAws },
    ],
  },
  {
    title: 'Cybersecurity & OS',
    skills: [
      { name: 'Kali Linux', icon: FaLinux },
      { name: 'Metasploitable', icon: FaTerminal },
      { name: 'Linux', icon: SiLinux },
    ],
  },
  {
    title: 'Design & Process',
    skills: [
      { name: 'Signavio', icon: SiSap },
    ],
  },
];


export function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="h-full flex flex-col
                           bg-white/5 backdrop-blur-lg rounded-2xl p-8
                           border border-gray-700/30
                           hover:border-cyan-500/40
                           transition-all duration-300 mb-2"
              >
                
                <h3 className="text-xl font-semibold text-cyan-300 min-h-[32px] mb-2">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3 mt-6">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2
                                   bg-black/30 px-4 py-2 rounded-full
                                   border border-white/10"
                      >
                        <Icon className="text-cyan-300 text-sm" />
                        <span className="text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
