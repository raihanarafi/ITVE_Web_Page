import React from 'react';

export default function Navbar({ view, setView }) {
  return (
    <header className="fixed top-0 z-50 w-full bg-white px-6 py-4 border-b border-slate-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo and Title */}
        <div 
          className="flex items-center space-x-3 cursor-pointer" 
          onClick={() => setView('home')}
        >
          <img 
            src="/assets/logo.jpg" 
            alt="ITVE Logo" 
            className="h-10 w-auto" 
          />
          <span className="text-3xl font-black tracking-tighter text-blue-600 uppercase">ITVE</span>
        </div>

        {/* Navigation Links with Icons */}
        <nav className="hidden items-center space-x-8 md:flex">
          {/* HOME */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); setView('home'); }}
            className={`flex items-center space-x-1.5 pb-1 text-xs font-black uppercase tracking-widest transition-all ${view === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            <span>Home</span>
          </a>

          {/* COURSES */}
          <a 
            href="#courses" 
            onClick={(e) => { e.preventDefault(); setView('courses'); }}
            className={`flex items-center space-x-1.5 pb-1 text-xs font-black uppercase tracking-widest transition-all ${view === 'courses' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-16.5a8.966 8.966 0 0 1 6 2.25A8.967 8.967 0 0 1 18 18c-2.305 0-4.408.867-6 2.292m0-16.5V18" />
            </svg>
            <span>Courses</span>
          </a>

          {/* UPDATES */}
          <button 
            onClick={() => setView('updates')}
            className={`flex items-center space-x-1.5 text-xs font-black uppercase tracking-widest transition-all ${view === 'updates' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 0 1 0-5.303m5.304 0a3.75 3.75 0 0 1 0 5.303m-7.425 2.122a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.808-3.808-9.982 0-13.79M18.894 5.106c3.808 3.808 3.808 9.982 0 13.79M12 12h.008v.008H12V12Z" />
            </svg>
            <span>Updates</span>
          </button>

          {/* ACHIEVEMENTS */}
          <button 
            onClick={() => setView('achievements')}
            className={`flex items-center space-x-1.5 text-xs font-black uppercase tracking-widest transition-all ${view === 'achievements' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-5.25c-.621 0-1.125.504-1.125 1.125v3.375m9 0h-9M15 12V4.875c0-.621-.503-1.125-1.125-1.125h-3.75c-.621 0-1.125.504-1.125 1.125V12M9 12h6" />
            </svg>
            <span>Achievements</span>
          </button>

          {/* ABOUT US */}
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); setView('about'); }}
            className={`flex items-center space-x-1.5 pb-1 text-xs font-black uppercase tracking-widest transition-all ${view === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <span>About Us</span>
          </a>

          {/* CONTACT */}
          <button 
            onClick={() => setView('contact')}
            className={`flex items-center space-x-1.5 text-xs font-black uppercase tracking-widest transition-all ${view === 'contact' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            <span>Contact</span>
          </button>
        </nav>

        {/* Student Portal Button */}
        <button 
          onClick={() => setView('portal')}
          className="flex items-center space-x-2 px-6 py-2.5 border-2 border-blue-600 text-blue-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-lg shadow-blue-900/10 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
          <span>Student Portal</span>
        </button>
      </div>
    </header>
  );
}