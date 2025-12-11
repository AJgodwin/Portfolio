import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Folder, ExternalLink, Github, Brain, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'XpertEdge',
      subtitle: 'Clustered Federated Learning Simulation',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
      description: 'Advanced federated learning simulation implementing client selection strategies over wireless edge networks.',
      features: [
        'Discrete-event system using Python + SimPy',
        'FEMNIST dataset with unique client data',
        'CNN model with Genetic Algorithm tuning',
        'Accuracy improvement: 80.2% → 86.38%',
        'Latency-aware device scheduler',
        'Cosine-similarity based clustering',
      ],
      challenges: 'Simulated heterogeneous distributed systems, tuned clustering thresholds, managed non-IID data and network variability.',
      tech: ['Python', 'SimPy', 'PyTorch', 'CNN', 'Genetic Algorithms'],
      gradient: 'from-blue-500 to-violet-500',
    },
    {
      title: 'Life Simulator',
      subtitle: 'Interactive Web Game',
      icon: Gamepad2,
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
      description: 'A fully-featured React-based life simulation game where player choices dynamically affect character attributes.',
      features: [
        'Built entirely with React',
        'State-driven character simulation',
        'Dynamic attributes (happiness, wealth, health)',
        'Complex decision-making system',
        'Deep state management with useState/useReducer',
      ],
      challenges: 'Mastered advanced React state management patterns, created complex state interactions, and designed engaging user experiences.',
      tech: ['React', 'JavaScript', 'State Management', 'Game Design'],
      gradient: 'from-violet-500 to-blue-500',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gray-900/30">
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
              <Folder className="w-12 h-12 text-blue-400 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-violet-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <motion.div
                      className={`relative h-48 lg:h-full rounded-xl overflow-hidden border border-blue-500/20`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`} />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="p-2 bg-gray-900/70 rounded-lg">
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white font-semibold drop-shadow">{project.title}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="lg:w-2/3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-blue-400 font-semibold">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <div className="w-1 h-5 bg-gradient-to-b from-blue-400 to-violet-400 rounded-full"></div>
                        Key Features
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, fIndex) => (
                          <motion.li
                            key={fIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 + fIndex * 0.1 }}
                            className="flex items-start gap-2 text-gray-400 text-sm"
                          >
                            <span className="text-blue-400 mt-1">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-violet-400 mb-2">Challenges & Learnings</h4>
                      <p className="text-gray-400 text-sm italic">{project.challenges}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
