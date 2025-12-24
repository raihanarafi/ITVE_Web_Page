import React, { useState, useEffect } from 'react';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Views/Home';
import Courses from './components/Views/Courses';
import About from './components/Views/About';
import Updates from './components/Views/Updates';
import Achievements from './components/Views/Achievements';
import Contact from './components/Views/Contact';
import Portal from './components/Views/LoginPage';
import PaginationDots from './components/Layout/PaginationDots';
import SignUpPage from './components/Views/SignUpPage';

function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-950 selection:bg-blue-600 selection:text-white">
      
      <Navbar setView={setView} currentView={view} />

      {view !== 'portal' && view !== 'signup' && (
        <PaginationDots currentView={view} setView={setView} />
      )}
      
      <main>
        {view === 'home' && <Home setView={setView} />}
        {view === 'courses' && <Courses />}
        {view === 'about' && <About />}
        {view === 'updates' && <Updates />}
        {view === 'achievements' && <Achievements setView={setView} />}
        {view === 'contact' && <Contact />}
        {view === 'portal' && <Portal setView={setView} />}
        {view === 'signup' && <SignUpPage setView={setView}/>}
      </main>

      {view !== 'portal' && view !== 'signup' && (
        <Footer setView={setView} />
      )}
      
    </div>
  );
}

export default App;