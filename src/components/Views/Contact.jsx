import React from 'react';

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-slate-950 text-white animate-fadeIn pt-32 min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="border-l-4 border-blue-600 pl-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-2">
                Terminal_Link_09
              </h2>
              <h3 className="text-5xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                Connect With <br /> The <span className="text-blue-600">Future</span>
              </h3>
              <p className="text-slate-400 font-medium max-w-md leading-relaxed">
                Our technical advisors are standing by to process your enrollment and provide career trajectory mapping.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl group hover:border-blue-600 transition-all">
                <span className="block text-[10px] font-black uppercase tracking-widest text-blue-600 mb-3">HQ Coordinates</span>
                <p className="text-sm font-bold text-slate-200 uppercase">Main Campus, Karachi, Pakistan</p>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl group hover:border-blue-600 transition-all">
                <span className="block text-[10px] font-black uppercase tracking-widest text-blue-600 mb-3">Direct Line</span>
                <p className="text-sm font-bold text-slate-200">+92 (000) 000-0000</p>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl group hover:border-blue-600 transition-all">
                <span className="block text-[10px] font-black uppercase tracking-widest text-blue-600 mb-3">Encrypted Mail</span>
                <p className="text-sm font-bold text-slate-200">admissions@itve.edu.pk</p>
              </div>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl group hover:border-blue-600 transition-all">
                <span className="block text-[10px] font-black uppercase tracking-widest text-blue-600 mb-3">Operation Hours</span>
                <p className="text-sm font-bold text-slate-200">09:00 - 18:00 PKT</p>
              </div>
            </div>
          </div>

          {/* The Inquiry Form */}
          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative">
            <div className="flex space-x-2 absolute top-6 right-8">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
            </div>

            <form className="space-y-6 pt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Personnel Identity</label>
                <input 
                  type="text" 
                  placeholder="ENTER FULL NAME..." 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-sm font-bold text-white placeholder-slate-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Signal Frequency (Email)</label>
                  <input 
                    type="email" 
                    placeholder="NAME@DOMAIN.COM" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-sm font-bold text-white placeholder-slate-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Target Sector</label>
                  <div className="relative">
                    <select className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-sm font-bold text-white focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer">
                      <option>INFORMATION TECHNOLOGY</option>
                      <option>VOCATIONAL TRADES</option>
                      <option>BUSINESS MANAGEMENT</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-blue-600">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Data Packet (Message)</label>
                <textarea 
                  rows="4" 
                  placeholder="TYPE YOUR MESSAGE HERE..." 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-sm font-bold text-white placeholder-slate-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] py-5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-900/20">
                Initialize Transmission
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}