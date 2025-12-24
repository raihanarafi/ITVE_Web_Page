import React from 'react';

export default function Footer({ setView }) {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-6 border-t-4 border-blue-600">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 mb-16">
          
          {/* Brand & Bio */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setView('home')}>
              <div className="bg-white p-1 rounded-lg">
                <img 
                  src="/assets/logo.jpg" 
                  alt="ITVE Logo" 
                  className="h-10 w-auto" 
                />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">ITVE</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium max-w-sm">
              The Institute of Technical and Vocational Education is dedicated to providing 
              world-class skills that translate directly into career opportunities. Bridging 
              the gap between industry and education.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-all transform hover:-translate-y-1">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-all transform hover:-translate-y-1">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Quick Navigation</h4>
            <ul className="space-y-5">
              <li><button onClick={() => setView('home')} className="text-slate-400 hover:text-blue-600 transition-colors font-bold uppercase text-xs tracking-widest">Home</button></li>
              <li><button onClick={() => setView('courses')} className="text-slate-400 hover:text-blue-600 transition-colors font-bold uppercase text-xs tracking-widest">Courses</button></li>
              <li><button onClick={() => setView('updates')} className="text-slate-400 hover:text-blue-600 transition-colors font-bold uppercase text-xs tracking-widest">Updates</button></li>
              <li><button onClick={() => setView('about')} className="text-slate-400 hover:text-blue-600 transition-colors font-bold uppercase text-xs tracking-widest">About Us</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Direct Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <svg className="h-5 w-5 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-300">Main Campus, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center space-x-4 group">
                 <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <svg className="h-5 w-5 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-300">+92 (000) 000-0000</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <svg className="h-5 w-5 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-300">info@itve.edu.pk</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 space-y-4 md:space-y-0">
          <p>© 2025 ITVE Institute. Skill the Future.</p>
          <div className="flex space-x-8">
            <button 
                onClick={() => setView('privacy')} 
                   className="text-slate-400 hover:text-blue-600 transition-colors"
                       >
                       PRIVACY POLICY
            </button>
            <button 
                onClick={() => setView('terms')} 
                   className="text-slate-400 hover:text-blue-600 transition-colors"
                       >
                       TERMS OF SERVICE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}