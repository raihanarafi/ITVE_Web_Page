import React, { useState, useEffect } from 'react';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Views/Home';
import Courses from './components/Views/Courses';
import About from './components/Views/About';
import Updates from './components/Views/Updates';
import Achievements from './components/Views/Achievements';
import Contact from './components/Views/Contact';
import Portal from './components/Views/StudentPortal';
import PaginationDots from './components/Layout/PaginationDots';

function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-950 selection:bg-blue-600 selection:text-white">
      <Navbar setView={setView} currentView={view} />
      <PaginationDots currentView={view} setView={setView} />
      {view !== 'portal' && <Navbar view={view} setView={setView} />}

      <main>
        {view === 'home' && <Home setView={setView} />}
        {view === 'courses' && <Courses />}
        {view === 'about' && <About />}
        {view === 'updates' && <Updates />}
        {view === 'achievements' && <Achievements setView={setView} />}
        {view === 'contact' && <Contact />}
        {view === 'portal' && <Portal setView={setView} />}
      </main>


      <Footer setView={setView} />
    </div>
  );
}

export default App;