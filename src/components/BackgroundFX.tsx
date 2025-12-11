import { motion } from 'framer-motion';

const particles = Array.from({ length: 60 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 6 + Math.random() * 6,
}));

const orbs = [
  { size: 280, x: '8%', y: '20%', color: 'from-emerald-500/20 to-blue-500/10' },
  { size: 220, x: '86%', y: '70%', color: 'from-blue-500/20 to-violet-500/10' },
];

const BackgroundFX = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      {/* gradient orbs */}
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl bg-gradient-to-br ${o.color}`}
          style={{ width: o.size, height: o.size, left: o.x, top: o.y }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
        />
      ))}

      {/* drifting particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%`, background: 'radial-gradient(circle, #22d3ee 0%, #38bdf8 50%, transparent 70%)' }}
          animate={{ y: ['0%', '-8%', '0%'], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}
    </div>
  );
};

export default BackgroundFX;
