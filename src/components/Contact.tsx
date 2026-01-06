import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Send, CheckCircle, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || 'Failed to send');
      }

      // success: clear inputs and show confirmation
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(true);
    } catch (err) {
      alert('Sorry, sending failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
              <Mail className="w-12 h-12 text-blue-400 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                <motion.a
                  href="mailto:amalgodwin004@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-semibold">amalgodwin004@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/AJgodwin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-white font-semibold">github.com/AJgodwin</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/amal-godwin-39501b274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white font-semibold">linkedin.com/in/amal-godwin-39501b274</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-all resize-none"
                    placeholder=""
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
