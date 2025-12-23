import React from 'react';

export default function Achievements() {
  return (
    <section className="py-24 px-6 bg-slate-950 text-white animate-fadeIn pt-32 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50"></div>
      <div className="absolute -right-24 top-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20 border-l-4 border-blue-600 pl-8">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-2">
            Institutional Report_v2.0
          </h2>
          <h3 className="text-5xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            Our Milestones <br /> <span className="text-blue-600">&</span> Global Impact
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 border border-slate-800 bg-slate-800 shadow-2xl mb-12">
          
          {/* Stat 1: Students */}
          <div className="bg-slate-950 p-12 flex flex-col justify-center items-start group hover:bg-slate-900 transition-colors">
            <div className="text-blue-600 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-4xl font-black tracking-tighter mb-2 tabular-nums">904,854</div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-500">Total Personnel Trained</div>
          </div>

          {/* Stat 2: Placement */}
          <div className="bg-slate-950 p-12 flex flex-col justify-center items-start group hover:bg-slate-900 transition-colors border-x md:border-x-0 md:border-l border-slate-800">
            <div className="text-blue-600 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-4xl font-black tracking-tighter mb-2 tabular-nums text-blue-600">85%</div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-500">Employment Velocity</div>
          </div>

          {/* Stat 3: Certifications */}
          <div className="bg-slate-950 p-12 flex flex-col justify-center items-start group hover:bg-slate-900 transition-colors">
            <div className="text-blue-600 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="text-4xl font-black tracking-tighter mb-2 tabular-nums">50K+</div>
            <div className="text-xs font-black uppercase tracking-widest text-slate-500">Industry Validations</div>
          </div>
        </div>

        {/* Featured Wins / Awards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Award 1 */}
          <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-600 transition-all duration-500">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[10px] font-black uppercase tracking-widest bg-blue-600 text-white px-3 py-1 rounded-full shadow-lg">Victory</span>
            </div>
            <div className="p-10">
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-4">Industrial Design Award</h4>
              <p className="text-2xl font-black uppercase tracking-tighter leading-tight mb-6">ITVE Students Secure Top Prize at Rajby Textiles National Competition</p>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <span className="text-sm font-bold text-slate-400">Karachi Convention, 2025</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </div>

          {/* Award 2 */}
          <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-600 transition-all duration-500">
            <div className="p-10">
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-4">Sustainability Milestone</h4>
              <p className="text-2xl font-black uppercase tracking-tighter leading-tight mb-6">Awarded "Center of Excellence" for Vocational Tech Innovation</p>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all">
                  <span className="text-white text-xl">🌟</span>
                </div>
                <span className="text-sm font-bold text-slate-400">Board of Technical Education</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </div>
        </div>

        {/* Bottom CTA / Information Bar */}
        <div className="mt-12 bg-blue-600 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xl font-black uppercase tracking-tighter">Ready to become our next success story?</p>
          <button className="bg-slate-950 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform active:scale-95 shadow-2xl">
            Enrollment Open
          </button>
        </div>
      </div>
    </section>
  );
}