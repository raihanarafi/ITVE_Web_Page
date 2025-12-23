import React from 'react';

export default function StudentPortal() {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center p-6 animate-fadeIn pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{ 
            backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', 
            backgroundSize: '30px 30px' 
          }}
        ></div>
      </div>
      
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative z-10">
        
        {/* Login */}
        <div className="bg-slate-900 p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800 group hover:bg-slate-900/80 transition-all">
          <div className="mb-8">
            <div className="h-12 w-12 rounded-full border border-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">Authorized Access</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Secure Terminal Login</p>
          </div>
          
          <button className="w-full py-4 bg-transparent border-2 border-slate-700 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-xl hover:border-blue-600 hover:bg-blue-600 transition-all duration-300">
            Login
          </button>
        </div>

        {/* Signup */}
        <div className="bg-slate-950 p-12 flex flex-col justify-center group relative transition-all">
          <div className="mb-8">
            <div className="h-12 w-12 rounded-full border border-slate-700 flex items-center justify-center mb-6 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">New Enrollment</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Create Student Identity</p>
          </div>

          <button className="w-full py-4 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-blue-700 shadow-xl shadow-blue-900/20 transition-all active:scale-95">
            Register Now
          </button>

          <div className="absolute left-0 top-0 w-1 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        </div>
      </div>
    </section>
  );
}