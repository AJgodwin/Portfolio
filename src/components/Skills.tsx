import { motion } from 'framer-motion';
import { Layers, Wrench, Code2 } from 'lucide-react';

const badge = (label: string) => (
  <span className="px-3 py-1.5 rounded-full border border-blue-500/30 text-blue-300/90 bg-blue-500/10 text-sm">
    {label}
  </span>
);

const badgeAlt = (label: string) => (
  <span className="px-3 py-1.5 rounded-full border border-violet-500/30 text-violet-300/90 bg-violet-500/10 text-sm">
    {label}
  </span>
);

const SectionCard = ({ title, Icon, children }: { title: string; Icon: React.ElementType; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SectionCard title="Programming Languages" Icon={Code2}>
              <div className="flex flex-wrap gap-3">
                {badge('JavaScript')}
                {badge('HTML/CSS')}
                {badge('Python')}
                {badge('Rust')}
                {badge('C / C++')}
                {badge('Java')}
                {badge('SQL')}
                {badge('Dart')}
              </div>
            </SectionCard>

            <SectionCard title="Web Development" Icon={Layers}>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Frontend:</p>
                  <div className="flex flex-wrap gap-3">
                    {badge('HTML')}
                    {badge('CSS')}
                    {badge('JavaScript')}
                    {badge('React')}
                    {badge('Tailwind CSS')}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Backend:</p>
                  <div className="flex flex-wrap gap-3">
                    {badge('Node.js')}
                    {badge('Flask')}
                    {badge('Python')}
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Frameworks & Libraries" Icon={Layers}>
              <div className="flex flex-wrap gap-3">
                {badge('React')}
                {badge('PyTorch')}
                {badge('Flask')}
                {badge('Tailwind CSS')}
              </div>
            </SectionCard>

            <SectionCard title="Databases" Icon={Layers}>
              <div className="flex flex-wrap gap-3">
                {badgeAlt('SQL')}
                {badgeAlt('MongoDB')}
                {badgeAlt('PostgreSQL')}
              </div>
            </SectionCard>

            <SectionCard title="Tools & Platforms" Icon={Wrench}>
              <div className="flex flex-wrap gap-3">
                {badgeAlt('AWS')}
                {badgeAlt('Git')}
                {badgeAlt('Linux')}
                {badgeAlt('VS Code')}
                {badgeAlt('Jupyter')}
              </div>
            </SectionCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
