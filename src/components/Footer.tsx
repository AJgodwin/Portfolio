import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/AJgodwin',
      color: 'hover:text-blue-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/amal-godwin-39501b274',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:amalgodwin004@gmail.com',
      color: 'hover:text-violet-400',
    },
  ];

  return (
    <footer className="relative bg-gray-900/50 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            {/* Left column intentionally left minimal per request */}
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', to: '/' },
                { name: 'Education', to: '/education' },
                { name: 'Projects', to: '/projects' },
                { name: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-gray-400 hover:text-blue-400 transition-colors text-sm ${
                        isActive ? 'text-blue-400' : ''
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 rounded-lg border border-blue-500/20 text-gray-400 ${social.color} transition-all`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-500/20 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
