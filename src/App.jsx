import { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails/ProjectDetails'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

function LoadingFallback() {
  return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
}

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return <div className={isHome ? 'homeShell' : undefined}><Navbar /><main className={isHome ? 'homeMain' : undefined}><AnimatePresence mode="wait">
    <Suspense fallback={<LoadingFallback />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /><Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  </AnimatePresence></main><Footer /></div>;
}

export default App;
