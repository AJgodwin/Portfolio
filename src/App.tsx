import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Highlights from './components/Highlights';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackgroundFX from './components/BackgroundFX';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <BackgroundFX />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Highlights />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
