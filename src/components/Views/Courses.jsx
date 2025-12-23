import React from 'react';

export default function Courses() {
  return (
    <section id="courses" className="py-24 px-6 bg-slate-50 animate-fadeIn min-h-screen pt-32">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-blue-600">
            Specialized Training
          </h2>
          <h3 className="text-4xl font-black text-slate-950 md:text-5xl uppercase tracking-tighter">
            Our Featured Programs
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 font-medium">
            Choose from a variety of diploma and certificate courses designed to make you industry-ready.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Course 1: IT & Software */}
          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-blue-600">
            <div className="relative h-48 bg-blue-600 flex items-center justify-center text-white overflow-hidden">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-32 h-32 opacity-20 absolute -right-4 -bottom-4 rotate-12 transition-transform group-hover:scale-110"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
              <span className="relative z-10 font-black text-2xl uppercase tracking-tighter">IT & Software</span>
            </div>
            <div className="p-8">
              <h4 className="mb-3 text-xl font-black text-slate-950 uppercase">DIT & Software Engineering</h4>
              <p className="mb-6 text-slate-600 text-sm leading-relaxed font-medium">
                Master Web Development, Programming, and Database Management through our 1-year Diploma.
              </p>
              <button className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center hover:text-slate-950 transition-colors">
                View Curriculum <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          {/* Course 2: Management */}
          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-blue-600">
            <div className="relative h-48 bg-slate-950 flex items-center justify-center text-white overflow-hidden">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-32 h-32 opacity-10 absolute -right-4 -bottom-4 rotate-12 transition-transform group-hover:scale-110"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              <span className="relative z-10 font-black text-2xl uppercase tracking-tighter">Business</span>
            </div>
            <div className="p-8">
              <h4 className="mb-3 text-xl font-black text-slate-950 uppercase">Business Management</h4>
              <p className="mb-6 text-slate-600 text-sm leading-relaxed font-medium">
                Gain essential skills in Office Automation, Accounting, and Business Communication.
              </p>
              <button className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center hover:text-slate-950 transition-colors">
                View Curriculum <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          {/* Course 3: Vocational */}
          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-blue-600">
            <div className="relative h-48 bg-blue-500 flex items-center justify-center text-white overflow-hidden">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-32 h-32 opacity-20 absolute -right-4 -bottom-4 rotate-12 transition-transform group-hover:scale-110"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.423 3.007a3 3 0 0 1 1.154 0 12.01 12.01 0 0 1 2.153 1.112c.827.535 1.487 1.252 1.941 2.094s.661 1.769.61 2.704a12.01 12.01 0 0 1-.418 2.361 3 3 0 0 1-1.154 1.733l-3.39 2.26a3 3 0 0 1-3.33 0l-3.39-2.26a3 3 0 0 1-1.154-1.733 12.01 12.01 0 0 1-.418-2.361c-.051-.935.156-1.862.61-2.704s1.114-1.559 1.941-2.094a12.01 12.01 0 0 1 2.153-1.112Z" />
              </svg>
              <span className="relative z-10 font-black text-2xl uppercase tracking-tighter text-center">
                Vocational Trades
              </span>
            </div>
            <div className="p-8">
              <h4 className="mb-3 text-xl font-black text-slate-950 uppercase">Technical & Vocational</h4>
              <p className="mb-6 text-slate-600 text-sm leading-relaxed font-medium">
                Hands-on training in Electrical work, Fashion Designing, and Media studies.
              </p>
              <button className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center hover:text-slate-950 transition-colors">
                View Curriculum <span className="ml-2">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}