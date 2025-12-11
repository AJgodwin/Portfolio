import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const coursework = [
    'Data Structures',
    'Database Management',
    'Computer Vision',
    'Edge Computing',
    'Machine Learning',
    'Compiler Design',
    'Scripting',
    'Algorithms Analysis',
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

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
              <GraduationCap className="w-12 h-12 text-blue-400 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bachelor of Technology
                  </h3>
                  <p className="text-blue-400 font-semibold">Computer Science and Engineering</p>
                  <p className="text-gray-400 mt-1">Amrita Vishwa Vidyapeetham, Coimbatore</p>
                  <p className="text-gray-500 text-sm mt-1">2023 – Present</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-violet-400" />
                  <h4 className="text-lg font-semibold text-white">Relevant Coursework</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {coursework.map((course, index) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="bg-blue-500/10 px-3 py-2 rounded-lg text-gray-300 text-sm border border-blue-500/20 hover:border-blue-500/40 transition-all"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    AWS Academy Cloud Foundations
                  </h3>
                  <p className="text-violet-400 font-semibold">Amazon Web Services</p>
                  <p className="text-gray-500 text-sm mt-1">March 2025</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Key Competencies</h4>
                <ul className="space-y-3">
                  {[
                    'EC2 & S3 Management',
                    'IAM Security & Access Control',
                    'Lambda Serverless Functions',
                    'RDS Database Services',
                    'CloudWatch Monitoring',
                    'Cloud Architecture Design',
                  ].map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full"></div>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
