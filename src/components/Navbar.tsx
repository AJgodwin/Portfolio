import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Education', to: '/education' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-blue-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div className="flex items-center space-x-2 text-xl font-bold">
            <Code2 className="w-8 h-8 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Amal Godwin J
            </span>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive ? 'text-blue-400 bg-blue-400/10' : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 text-white bg-indigo-600 hover:bg-indigo-500"
              >
                Resume
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-blue-400 bg-blue-400/10' : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
