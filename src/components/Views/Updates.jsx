import React from 'react';

export default function Updates() {
  return (
    <section className="py-24 px-6 bg-white animate-fadeIn pt-32 min-h-screen">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">Live Transmission</h2>
            </div>
            <h3 className="text-5xl font-black text-slate-950 uppercase tracking-tighter md:text-6xl">Campus Updates</h3>
          </div>
          <p className="text-slate-500 font-bold uppercase text-xs tracking-widest border-l-2 border-blue-600 pl-4">
            Latest News & <br /> Accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Industry Event */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-slate-950 text-white min-h-[450px] flex flex-col justify-end p-8 md:p-12 shadow-2xl">
            <img 
              src="/assets/images/lab1.jpg" 
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30" 
              alt="Tech Symposium"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black tracking-widest uppercase bg-blue-600 rounded-full">Event</span>
              <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                Industry 4.0: The Future of <br /> Vocational Training
              </h4>
              <p className="text-slate-300 max-w-xl mb-6 font-medium">
                Join our panel of industrial experts as they discuss how automation and AI are reshaping the landscape of technical careers. A must-attend for all final-year students.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">February 12, 2026</span>
                <button className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Hackathon */}
          <div className="md:col-span-4 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between hover:border-blue-600 transition-all shadow-sm">
            <div>
              <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                </svg>
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-blue-600">Achievement</span>
              <h4 className="text-2xl font-black uppercase tracking-tighter mt-2 mb-4">Coding Team Ranks Top 5 in National Hackathon</h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">Our students showcased exceptional skill at the "Code-Pakistan" event, outperforming 50 competing institutions.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <span className="text-xs font-black uppercase text-slate-400">July 28, 2025</span>
            </div>
          </div>

          {/* Announcement */}
          <div className="md:col-span-6 bg-blue-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-blue-900/20 group">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black tracking-widest uppercase bg-slate-950 rounded-full">New Program</span>
              <h4 className="text-3xl font-black uppercase tracking-tighter mb-4">Cybersecurity <br /> Enrollment Open</h4>
              <p className="text-blue-100 text-sm font-medium mb-6">Protect the digital frontier. Now accepting applications for our 1-year specialized program starting Fall 2026.</p>
              <button className="text-xs font-black uppercase tracking-widest bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-slate-950 hover:text-white transition-all">Secure Spot</button>
            </div>
            <div className="h-32 w-32 bg-blue-500 rounded-full flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform">
               <svg className="h-16 w-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
               </svg>
            </div>
          </div>

          {/* Partnership */}
          <div className="md:col-span-6 bg-white rounded-3xl p-8 border-2 border-slate-950 shadow-sm flex items-center justify-between group hover:bg-slate-950 hover:text-white transition-all duration-300">
            <div className="max-w-md">
               <span className="text-[10px] font-black tracking-widest uppercase text-blue-600 mb-2 block">Partnership</span>
               <h4 className="text-2xl font-black uppercase tracking-tighter leading-tight">MOU Signed: Guaranteed Internship Pathway with Global Tech Solutions</h4>
            </div>
            <div className="text-4xl font-black text-slate-200 group-hover:text-blue-600">MOU</div>
          </div>

        </div>
      </div>
    </section>
  );
}