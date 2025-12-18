import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Download } from "lucide-react";

export function Hero() {
  const subtitles = [
  "Aspiring Product Developer",
  "Cybersecurity Enthusiast",
  "Information Systems Student",
  "Driven by Technology and Design",
];


  const [textIndex, setTextIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  // Typewriter effect with rotating subtitles
  React.useEffect(() => {
    const currentText = subtitles[textIndex];
    const typingSpeed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentText.substring(0, prev.length - 1)
          : currentText.substring(0, prev.length + 1)
      );

      // Pause before deleting
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      // Move to next subtitle
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % subtitles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://muskandhamuria.github.io/Portfolio/MuskanDhamuria.pdf";
    link.download = "Muskan_Dhamuria_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* STATIC NAME */}
          <motion.h1
            className="text-7xl md:text-8xl mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Muskan Dhamuria
          </motion.h1>

          {/* ROTATING TYPEWRITER SUBTITLE */}
          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-8 flex justify-center min-h-[2.5rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {displayText}
            <motion.span
              className="ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              |
            </motion.span>
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
      </div>
    </section>
  );
}
