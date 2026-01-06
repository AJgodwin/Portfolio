import { motion } from 'framer-motion';
import { Code, Database, Cpu } from 'lucide-react';
import React from 'react';

type IconType = React.ComponentType<{ className?: string }>;

const icons: IconType[] = [Code, Database, Cpu];

interface OrbitIconsProps {
  size?: number; // container size in px
  radius?: number; // orbit radius in px
  speedSec?: number; // full rotation duration
}

const OrbitIcons: React.FC<OrbitIconsProps> = ({ size = 240, radius = 95, speedSec = 18 }) => {
  const center = size / 2;

  return (
    <motion.div
      className="absolute"
      style={{ width: size, height: size, left: 0, top: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: speedSec }}
    >
      {icons.map((Icon, i) => {
        const angle = (i / icons.length) * Math.PI * 2; // radians
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return (
          <div
            key={i}
            className="absolute"
            style={{ left: x - 12, top: y - 12 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-blue-400/50 drop-shadow-[0_0_8px_rgba(59,130,246,0.35)]"
            >
              <Icon className="w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
          </div>
        );
      })}

      {/* soft glow ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            '0 0 0 1px rgba(59,130,246,0.2), 0 0 24px rgba(59,130,246,0.18), inset 0 0 24px rgba(139,92,246,0.14)'
        }}
      />
    </motion.div>
  );
};

export default OrbitIcons;
