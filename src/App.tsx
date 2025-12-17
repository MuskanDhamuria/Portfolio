import { StarField } from './components/StarField';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-black text-white overflow-hidden">
      <StarField />
      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Awards />
        <Contact />
      </div>
    </div>
  );
}