import React from 'react';

export default function Navbar({ view, setView }) {
  const isPortal = view === 'portal';

  return (
    <header className={`fixed top-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
      isPortal 
        ? "bg-slate-950/50 backdrop-blur-md border-b border-white/5 shadow-2xl" 
        : "bg-white border-b border-slate-100 shadow-sm"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo and Title */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group" 
          onClick={() => setView('home')}
        >
          <img 
            src="/assets/logo.jpg" 
            alt="ITVE Logo" 
            className="h-10 w-auto rounded-md transition-transform group-hover:scale-105" 
          />
          <span className={`text-3xl font-black tracking-tighter uppercase ${
            isPortal ? "text-white" : "text-blue-600"
          }`}>ITVE</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center space-x-8 md:flex">
          {[
            { name: 'Home', id: 'home', icon: 'm3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' },
            { name: 'Courses', id: 'courses', icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-16.5a8.966 8.966 0 0 1 6 2.25A8.967 8.967 0 0 1 18 18c-2.305 0-4.408.867-6 2.292m0-16.5V18' },
            { name: 'Updates', id: 'updates', icon: 'M9.348 14.651a3.75 3.75 0 0 1 0-5.303m5.304 0a3.75 3.75 0 0 1 0 5.303m-7.425 2.122a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.808-3.808-9.982 0-13.79M18.894 5.106c3.808 3.808 3.808 9.982 0 13.79M12 12h.008v.008H12V12Z' },
            { name: 'Achievements', id: 'achievements', icon: 'M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-5.25c-.621 0-1.125.504-1.125 1.125v3.375m9 0h-9M15 12V4.875c0-.621-.503-1.125-1.125-1.125h-3.75c-.621 0-1.125.504-1.125 1.125V12M9 12h6' },
            { name: 'About Us', id: 'about', icon: 'm11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z' },
            { name: 'Contact', id: 'contact', icon: 'M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z' }
          ].map((item) => {
            // Check if this item is currently active
            const isActive = view === item.id;

            return (
              <button 
                key={item.id}
                onClick={() => setView(item.id)}
                className={`flex items-center space-x-1.5 pb-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 border-b-2 ${
                  isActive 
                    ? "text-blue-600 border-blue-600 translate-y-[-2px]" 
                    : `border-transparent ${isPortal ? "text-slate-400 hover:text-white hover:border-white/20" : "text-slate-500 hover:text-blue-600 hover:border-blue-600/30"}`
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-4 h-4 transition-transform ${isActive ? 'scale-110' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setView('portal')}
            className={`hidden lg:block text-xs font-bold uppercase tracking-widest transition-colors ${
              isPortal ? "text-white hover:text-blue-400" : "text-slate-600 hover:text-blue-600"
            }`}
          >
            Login
          </button>

          <button 
            onClick={() => setView('portal')}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg ${
              isPortal 
                ? "bg-blue-600 text-white shadow-blue-900/40 hover:bg-blue-500" 
                : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-blue-900/10"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
            <span>Student Portal</span>
          </button>
        </div>

      </div>
    </header>
  );
}