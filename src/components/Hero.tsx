import { motion } from 'framer-motion';
import { Code, Database, Cpu } from 'lucide-react';

const Hero = () => {
  const floatingIcons = [
    { Icon: Code, delay: 0, x: -20, y: -20 },
    { Icon: Database, delay: 0.2, x: 20, y: 20 },
    { Icon: Cpu, delay: 0.4, x: -15, y: 25 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent"></div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Amal Godwin J
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-gray-300 mb-2 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bachelor of Technology in Computer Science & Engineering with a passion for machine learning, systems programming, and full-stack development.
          </motion.p>

          <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
            <motion.div
              className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border border-blue-500/40 ring-2 ring-blue-400/40 shadow-2xl shadow-[0_0_30px_rgba(59,130,246,0.35)] bg-gradient-to-br from-blue-500/10 to-violet-500/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src={encodeURI('/certificates/profile.jpg')}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="mt-16 flex justify-center gap-16 relative">
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                className="text-blue-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + delay }}
              >
                <motion.div
                  animate={{
                    y: [0, y, 0],
                    x: [0, x, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Icon className="w-12 h-12 md:w-16 md:h-16" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-blue-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
