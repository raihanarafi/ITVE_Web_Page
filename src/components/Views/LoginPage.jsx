import React, { useState } from 'react';

export default function LoginPage({ setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="relative min-h-screen bg-slate-950 flex justify-center items-start pt-32 pb-12 p-4 overflow-y-auto">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>

      {/* Main Wide Card */}
      <div className="relative w-full max-w-4xl bg-slate-900/40 backdrop-blur-2xl border border-slate-800 shadow-2xl rounded-[2.5rem] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Branding & Welcome */}
          <div className="p-10 flex flex-col justify-center bg-blue-600/5 border-r border-slate-800/50">
            <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
              ITVE <br />
              <span className="text-blue-500">PORTAL</span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm font-medium max-w-[250px]">
              Access your technical courses and vocational training dashboard.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Skill the future</span>
            </div>
          </div>

          {/* Stacked Login Form */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              
              {/* Column-wise Inputs */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-700" 
                  placeholder="name@itve.edu.pk"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-700" 
                  placeholder="••••••••"
                />
              </div>

              {/* Forgot Password */}
              <div className="text-left">
                <button type="button" className="text-[10px] font-bold text-blue-500 hover:text-blue-400 uppercase tracking-tight transition-colors">
                  Forgot Password?
                </button>
              </div>

              {/* Sign In Button */}
              <button className="w-full bg-blue-600 text-white h-12 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-md">
                Sign In
              </button>

              {/* OR Separator */}
              <div className="flex items-center gap-4 py-1">
                <div className="h-[1px] flex-1 bg-slate-800"></div>
                <span className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.3em]">OR</span>
                <div className="h-[1px] flex-1 bg-slate-800"></div>
              </div>

              {/* Social Options */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <button type="button" className="p-3 bg-slate-950 border border-slate-800 rounded-full hover:border-blue-500 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.057 10.74c-.046-2.8 2.301-4.14 2.408-4.204-1.302-1.902-3.324-2.162-4.04-2.193-1.714-.174-3.345 1.01-4.212 1.01-.867 0-2.2-.989-3.644-.96-1.9.028-3.648 1.104-4.625 2.8-1.97 3.428-.504 8.506 1.413 11.274.938 1.353 2.054 2.872 3.518 2.817 1.41-.055 1.944-.91 3.65-.91 1.704 0 2.186.91 3.68.882 1.52-.028 2.483-1.374 3.414-2.73 1.077-1.572 1.52-3.094 1.545-3.172-.033-.014-2.99-1.146-3.02-4.595m-2.152-6.683c.767-.928 1.282-2.22 1.142-3.51-.11-.013-1.428.082-2.31 1.1-.79.91-1.474 2.222-1.288 3.475.122.01.12.01 2.456-1.065" /></svg>
                </button>
                <button type="button" className="p-3 bg-slate-950 border border-slate-800 rounded-full hover:border-blue-500 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.273 0 3.19 2.7 1.24 6.6l4.026 3.165z" />
                    <path fill="#FBBC05" d="M1.24 6.6a7.115 7.115 0 0 0 0 10.8l4.026-3.165a3.647 3.647 0 0 1 0-4.47L1.24 6.6z" />
                    <path fill="#4285F4" d="M22.527 12.191c0-.709-.063-1.39-.181-2.045H12v4.104h5.891a5.035 5.035 0 0 1-2.182 3.3l4.026 3.165c2.355-2.173 3.792-5.373 3.792-8.524z" />
                    <path fill="#34A853" d="M12 24c3.245 0 5.973-1.082 7.964-2.918l-4.026-3.165A4.345 4.345 0 0 1 12 19.091a7.077 7.077 0 0 1-6.734-4.855L1.24 17.4C3.19 21.3 7.273 24 12 24z" />
                  </svg>
                </button>
                <button type="button" className="p-3 bg-slate-950 border border-slate-800 rounded-full hover:border-blue-500 transition-all">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </button>
              </div>

              {/* Sign Up Option */}
              <div className="pt-2 border-t border-slate-800/50 text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Don't have an account? 
                  <button 
                    onClick={() => setView('signup')} 
                    className="ml-2 text-white hover:text-blue-500 transition-colors underline underline-offset-4"
                  >
                    Sign Up Now
                  </button>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}