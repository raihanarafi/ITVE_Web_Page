import React from 'react';

export default function Home({ setView }) {
  return (
    <>
    {/* 1. HERO SECTION */}
      <section 
        id="hero" 
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white px-6 pt-24"
      >
        <div className="absolute top-20 -left-10 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 bg-slate-800 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse"></div>

        <div className="relative z-10 max-w-5xl text-center">
          <h1 className="mb-6 text-5xl font-black tracking-tighter md:text-5xl uppercase">
            Transforming Futures Through <span className="text-blue-500">Technical Excellence</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl leading-relaxed font-medium">
            Join Pakistan's leading institute for vocational training. We bridge the gap 
            between education and employment with hands-on technical skills.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button className="rounded-full bg-blue-600 px-10 py-4 text-xs font-black uppercase tracking-widest text-white shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-all hover:bg-blue-500 hover:-translate-y-1">
              Apply for Admissions 2026
            </button>
            <button 
              onClick={() => setView('courses')}
              className="rounded-full border-2 border-slate-800 bg-slate-900/50 px-10 py-4 text-xs font-black uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-slate-800"
            >
              Explore Programs
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border-2 border-slate-700 flex justify-center p-1">
            <div className="h-2 w-1 rounded-full bg-blue-500"></div>
          </div>
        </div>
      </section>

      {/*2. ABOUT SECTION */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            {/* Text and Mission */}
            <div>
              <h2 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-blue-600">
                About the Institute
              </h2>
              <h3 className="mb-6 text-4xl font-black text-slate-950 md:text-5xl tracking-tighter leading-tight uppercase">
                Empowering the Next <br/> Generation
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-slate-600 font-medium">
                The Institute of Technical and Vocational Education (ITVE) is dedicated to 
                bridging the gap between academic learning and industrial requirements. 
                We provide students with the high-demand technical skills needed to excel 
                in Pakistan's evolving job market.
              </p>
              <div className="flex items-center space-x-4 border-l-4 border-blue-600 pl-6 py-4 bg-slate-50 rounded-r-xl">
                <p className="text-xl font-bold italic text-slate-900 tracking-tight">
                  "Education for Employment"
                </p>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-6">
              <div className="group rounded-2xl bg-slate-50 p-8 transition-all hover:bg-white border border-slate-100 hover:border-blue-600 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-black text-slate-950 uppercase tracking-tight group-hover:text-blue-600 transition-colors">Our Mission</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  To provide accessible, high-quality technical and vocational education that empowers individuals with practical skills for sustainable careers and personal growth.
                </p>
              </div>

              <div className="group rounded-2xl bg-slate-50 p-8 transition-all hover:bg-white border border-slate-100 hover:border-blue-600 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white shadow-lg shadow-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h4 className="mb-2 text-xl font-black text-slate-950 uppercase tracking-tight group-hover:text-blue-600 transition-colors">Our Vision</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  To be a leading institution in technical and vocational training, recognized for innovation, excellence, and its contribution to societal development and economic prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 py-20 px-8 text-center text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          <h2 className="mb-4 text-4xl font-black md:text-4xl uppercase tracking-tighter">Ready to Start Your Journey?</h2>
          <p className="mb-10 text-lg text-slate-400 font-medium">Join thousands of successful graduates. Your new career is just a click away.</p>
          <button 
            onClick={() => setView('courses')} 
            className="rounded-full bg-blue-600 px-12 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-500 hover:-translate-y-1"
          >
            Explore All Courses
          </button>
        </div>
      </section>

      {/* 3. PATH SECTION */}
      <section id="path" className="py-24 px-6 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-blue-600">How to Start</h2>
            <h3 className="text-4xl font-black text-slate-950 md:text-5xl uppercase tracking-tighter">Your Path to Success</h3>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", title: "Pick a Course", desc: "Choose from IT, Business, or Vocational programs." },
                { step: "02", title: "Submit Application", desc: "Fill out the online form or visit our campus." },
                { step: "03", title: "Get Certified", desc: "Complete hands-on training and projects." },
                { step: "04", title: "Start Career", desc: "Connect with partners for job placement." }
              ].map((item, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border-2 border-blue-600 text-blue-600 font-black text-xl shadow-xl shadow-blue-100 transition-all group-hover:-translate-y-2 group-hover:bg-blue-600 group-hover:text-white">
                    {item.step}
                  </div>
                  <h4 className="mb-2 text-xl font-black text-slate-950 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENVIRONMENT SECTION */}
      <section id="environment" className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-blue-600">Learning Environment</h2>
              <h3 className="mb-6 text-4xl font-black text-slate-950 md:text-5xl uppercase tracking-tighter leading-tight">
                World-Class Facilities <br /> for Leaders
              </h3>
              <p className="mb-8 text-slate-600 leading-relaxed font-medium">
                We believe that the right environment fosters innovation. Our campus is equipped 
                with modern technology to ensure students have everything they need to succeed.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3"><div className="h-2 w-2 rounded-full bg-blue-600 shadow-sm shadow-blue-400"></div><span className="font-bold text-slate-800 uppercase text-xs tracking-wider">Hi-Tech IT Labs</span></div>
                <div className="flex items-center space-x-3"><div className="h-2 w-2 rounded-full bg-blue-600 shadow-sm shadow-blue-400"></div><span className="font-bold text-slate-800 uppercase text-xs tracking-wider">E-Library Access</span></div>
                <div className="flex items-center space-x-3"><div className="h-2 w-2 rounded-full bg-blue-600 shadow-sm shadow-blue-400"></div><span className="font-bold text-slate-800 uppercase text-xs tracking-wider">Workshop Tools</span></div>
                <div className="flex items-center space-x-3"><div className="h-2 w-2 rounded-full bg-blue-600 shadow-sm shadow-blue-400"></div><span className="font-bold text-slate-800 uppercase text-xs tracking-wider">Student Lounge</span></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="/assets/images/lab1.jpg" alt="IT Lab" className="h-64 w-full rounded-2xl object-cover shadow-2xl" />
                <img src="/assets/images/E-library.jpg" alt="Library" className="h-40 w-full rounded-2xl object-cover shadow-xl" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="/assets/images/workshop1.webp" alt="Vocational Workshop" className="h-40 w-full rounded-2xl object-cover shadow-xl" />
                <img src="/assets/images/campus.jpg" alt="Campus" className="h-64 w-full rounded-2xl object-cover shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-12 text-3xl font-black text-slate-950 uppercase tracking-tighter md:text-4xl">Common Questions</h2>
          <div className="space-y-4 text-left">
            {[
              { q: "Is job placement guaranteed?", a: "While we don't guarantee a job, our 92% employment rate is a result of our strong partnerships with local industries." },
              { q: "What is the duration of diploma courses?", a: "Most of our professional diploma programs are 1 year long, divided into two semesters." },
              { q: "Are there any weekend classes available?", a: "Yes, we offer specialized weekend sessions for working professionals in the IT and Business tracks." }
            ].map((faq, i) => (
              <details key={i} className="group rounded-xl border border-slate-100 bg-slate-50 p-6 [&_summary::-webkit-details-marker]:hidden transition-all hover:border-blue-600/30">
                <summary className="flex cursor-pointer items-center justify-between text-slate-950">
                  <h5 className="text-lg font-bold uppercase tracking-tight">{faq.q}</h5>
                  <span className="ml-1.5 flex-shrink-0 rounded-lg bg-slate-950 p-1.5 text-white transition duration-300 group-open:-rotate-180 group-open:bg-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-slate-600 font-medium border-t border-slate-200 pt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}