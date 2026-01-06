import { motion } from 'framer-motion';
import OrbitIcons from './OrbitIcons';

const Hero = () => {
  // Orbiting icons handled by OrbitIcons component

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
        <div className="grid grid-cols-2 items-center gap-10">
          {/* Left: Photo with orbit animation */}
          <div className="flex justify-start relative">
            <div className="absolute -left-6 -top-6 md:-left-10 md:-top-10">
              <OrbitIcons size={260} radius={105} speedSec={20} />
            </div>
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
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/300x300.png?text=Profile+Photo';
                }}
              />
            </motion.div>
          </div>

          {/* Right: Greeting and description */}
          <motion.div
            className=""
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

            <motion.p
              className="text-base md:text-lg text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bachelor of Technology in Computer Science & Engineering with a passion for machine learning, systems programming, and full-stack development.
            </motion.p>
          </motion.div>

          {/* Removed bottom floating icon row to keep animation clean */}
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
