import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, X } from 'lucide-react';

type Cert = { title: string; description: string; image: string };

const certificates: Cert[] = [
  {
    title: 'AWS Certificate',
    description: '',
    image: '/certificates/Course Completion Certificate - Amal Godwin (1)_page-0001.jpg',
  },
];

const Highlights = () => {
  const [open, setOpen] = useState<null | number>(null);

  return (
    <section id="highlights" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <Award className="w-12 h-12 text-blue-400 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">My Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((c, idx) => (
            <motion.button
              key={c.title}
              onClick={() => setOpen(idx)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-left bg-gray-800/50 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-violet-500/40 transition-all group"
            >
              <div className="relative h-40">
                <img src={encodeURI(c.image)} alt={c.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-4 py-2 rounded-full bg-black/70 text-white text-sm font-semibold border border-blue-500/40 shadow">View Certificate</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {open !== null && (
          <div className="fixed inset-0 z-[500] bg-black/80 backdrop-blur-sm" onClick={() => setOpen(null)}>
            {/* Close button pinned near right edge with gap */}
            <button
              onClick={() => setOpen(null)}
              className="fixed top-2 right-1 p-3 bg-gray-900/95 rounded-full border border-blue-500/40 shadow-xl hover:bg-gray-800 z-[600]"
              aria-label="Close preview"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Centered image container */}
            <div className="w-full h-full flex items-center justify-center p-3" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-blue-500/30 shadow-2xl">
                <img
                  src={encodeURI(certificates[open].image)}
                  alt={certificates[open].title}
                  className="max-w-[90vw] max-h-[65vh] md:max-w-[50vw] md:max-h-[55vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Highlights;
