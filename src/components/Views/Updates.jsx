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

        {/* UPDATES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. Featured Industry Event */}
          <div className="md:col-span-12 group relative overflow-hidden rounded-3xl bg-slate-950 text-white min-h-[500px] flex flex-col justify-end p-8 md:p-16 shadow-2xl">
            <img 
              src="/assets/images/lab1.jpg" 
              className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40" 
              alt="Tech Symposium"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="relative z-10 max-w-4xl">
              <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black tracking-widest uppercase bg-blue-600 rounded-full">Featured Event</span>
              <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                Industry 4.0: The Future of <br className="hidden md:block" /> Vocational Training
              </h4>
              <p className="text-slate-300 text-lg max-w-2xl mb-8 font-medium">
                Join our panel of industrial experts as they discuss how automation and AI are reshaping technical careers.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-sm font-black uppercase tracking-widest text-blue-400">February 12, 2026</span>
                <button className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all text-xl"> → </button>
              </div>
            </div>
          </div>

          {/* 2. Hackathon */}
          <div className="md:col-span-4 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between hover:border-blue-600 transition-all shadow-sm">
            <div>
              <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                </svg>
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-blue-600">Achievement</span>
              <h4 className="text-2xl font-black uppercase tracking-tighter mt-2 mb-4">Top 5 in National Hackathon</h4>
              <p className="text-sm text-slate-600 font-medium">Our coding team outperformed 50 competing institutions at Code-Pakistan.</p>
            </div>
            <span className="text-xs font-black uppercase text-slate-400 mt-6 pt-4 border-t border-slate-200">July 28, 2025</span>
          </div>

          {/* 3. Alumni Success  */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-blue-900 text-white p-8 md:p-12 flex items-center shadow-xl">
            <div className="relative z-10 md:w-2/3">
              <span className="text-[10px] font-black tracking-widest uppercase bg-slate-950 px-2 py-1 rounded mb-4 inline-block">Alumni Spotlight</span>
              <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">Sarah Chen joins Tesla Robotics</h4>
              <p className="text-blue-100 text-sm mb-6">Class of '24 graduate Sarah Chen secures a lead technician role, proving the power of vocational excellence.</p>
              <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-white pb-1">Read Her Story</button>
            </div>
            <div className="hidden md:block absolute right-0 top-0 h-full w-1/3 opacity-20 group-hover:opacity-40 transition-opacity">
               <div className="bg-white h-full w-full rotate-12 translate-x-12 translate-y-12"></div>
            </div>
          </div>

          {/* 4. Cybersecurity  */}
          <div className="md:col-span-7 bg-blue-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl group">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black tracking-widest uppercase bg-slate-950 rounded-full">New Program</span>
              <h4 className="text-3xl font-black uppercase tracking-tighter mb-4">Cybersecurity Open</h4>
              <p className="text-blue-100 text-sm mb-6">Applications for our Fall 2026 specialized program are now live.</p>
              <button className="text-xs font-black uppercase tracking-widest bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-slate-950 hover:text-white transition-all">Secure Spot</button>
            </div>
            <div className="h-24 w-24 bg-blue-500 rounded-full flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform">
               <svg className="h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
               </svg>
            </div>
          </div>

          {/* 5. Workshop */}
          <div className="md:col-span-5 bg-white rounded-3xl p-8 border-2 border-blue-600 shadow-sm hover:bg-blue-50 transition-colors">
            <span className="text-[10px] font-black tracking-widest uppercase text-blue-600">Upcoming Workshop</span>
            <h4 className="text-2xl font-black uppercase tracking-tighter mt-2 mb-4">Solar Energy Installation</h4>
            <p className="text-sm text-slate-600 mb-6">A hands-on 3-day workshop on sustainable power systems.</p>
            <div className="flex justify-between items-center">
              <span className="text-xs font-black uppercase text-slate-400">March 05, 2026</span>
              <span className="bg-blue-600 h-8 w-8 rounded-lg flex items-center justify-center text-white">→</span>
            </div>
          </div>

          {/* 6. MOU / Partnership  */}
          <div className="md:col-span-12 bg-white rounded-3xl p-8 border-2 border-slate-950 flex items-center justify-between group hover:bg-slate-950 hover:text-white transition-all duration-300">
            <div className="max-w-2xl">
               <span className="text-[10px] font-black tracking-widest uppercase text-blue-600 mb-2 block">Global Partnership</span>
               <h4 className="text-3xl font-black uppercase tracking-tighter leading-tight">Guaranteed Internship Pathway with Global Tech Solutions</h4>
            </div>
            <div className="text-5xl font-black text-slate-100 group-hover:text-blue-600 transition-colors">MOU</div>
          </div>

          {/* 7. New Facility */}
          <div className="md:col-span-6 bg-slate-950 rounded-3xl p-10 text-white relative overflow-hidden group">
             <div className="relative z-10">
               <span className="text-[10px] font-black tracking-widest uppercase text-blue-400">Infrastructure</span>
               <h4 className="text-3xl font-black uppercase tracking-tighter mt-4 mb-4">Smart Manufacturing Lab Now Open</h4>
               <p className="text-slate-400 text-sm mb-6">Equipped with 10 new robotic arms and CNC precision machinery.</p>
             </div>
             <div className="absolute -right-8 -bottom-8 h-40 w-40 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/40 transition-all"></div>
          </div>

          {/* 8. Scholarship */}
          <div className="md:col-span-6 border border-slate-200 bg-slate-50 rounded-3xl p-10 flex flex-col justify-center text-center">
             <h4 className="text-4xl font-black uppercase tracking-tighter text-slate-950 mb-2">Merit Scholarships</h4>
             <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-6">Apply before August 2026</p>
             <div className="flex justify-center gap-4">
               <button className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-blue-900/20 hover:scale-105 transition-transform">Apply Now</button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}