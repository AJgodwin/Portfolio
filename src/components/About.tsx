import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <User className="w-12 h-12 text-blue-400 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-500/20 shadow-xl shadow-blue-500/10">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Bachelor of Technology student in Computer Science and Engineering with skills in systems programming, real-time communication systems, machine learning, open-source tools, and interactive application design.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-6">
                I'm passionate about building complete, end-to-end software solutions that solve real-world user problems. I enjoy creating practical and interactive projects, from full-scale e-commerce platforms to real-time collaborative applications, and I'm always eager to learn, improve, and explore new technologies.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
