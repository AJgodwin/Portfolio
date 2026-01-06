import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackgroundFX from './components/BackgroundFX';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <BackgroundFX />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
