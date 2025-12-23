import React from 'react';

const PaginationDots = ({ currentView, setView }) => {
  // Define the order of your pages for the pagination
  const views = ['home', 'courses', 'about', 'updates', 'achievements', 'contact'];

  if (currentView === 'portal') return null;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {views.map((v) => (
        <button
          key={v}
          onClick={() => setView(v)}
          className={`group relative flex items-center justify-end`}
        >
          {/* Tooltip that shows on hover */}
          <span className="absolute right-8 px-2 py-1 rounded bg-slate-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity capitalize">
            {v}
          </span>
          
          {/* The Dot */}
          <div 
            className={`w-3 h-3 rounded-full border-2 border-blue-600 transition-all duration-300 ${
              currentView === v ? 'bg-blue-600 scale-125' : 'bg-transparent hover:bg-blue-200'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default PaginationDots;