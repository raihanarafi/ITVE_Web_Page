import React, { useState, useEffect } from 'react';

const PaginationDots = ({ currentView }) => {
  const [activeSection, setActiveSection] = useState('hero');

  const homeSections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'path', label: 'Success Path' },
    { id: 'environment', label: 'Facilities' },
    { id: 'faq', label: 'FAQ' }
  ];

  useEffect(() => {
    // Only run the observer if we are on the home view
    if (currentView !== 'home') return;

    const observerOptions = {
      root: null,
      threshold: 0.5, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing each section defined in our array
    homeSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [currentView]); 

  if (currentView !== 'home') return null;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {homeSections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center justify-end"
        >
          {/* Tooltip */}
          <span className="absolute right-8 px-2 py-1 rounded bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-800">
            {section.label}
          </span>
          
          {/* The Dot */}
          <div 
            className={`w-2.5 h-2.5 rounded-full border-2 border-blue-600 transition-all duration-300 ${
              activeSection === section.id 
                ? 'bg-blue-600 scale-125' 
                : 'bg-transparent hover:bg-blue-400' 
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default PaginationDots;