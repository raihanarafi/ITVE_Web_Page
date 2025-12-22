import React, { useState } from 'react';

function App() {
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/*HEADER SECTION*/}
      <header className="fixed top-0 z-50 w-full bg-white px-6 py-2 border-b border-gray-100 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          {/* Logo and Title */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => setView('home')}
          >
            <img 
              src="/assets/logo.jpg" 
              alt="ITVE Logo" 
              className="h-12 w-auto" 
            />
            <span className="text-3xl font-bold tracking-tighter text-blue-600">ITVE</span>
          </div>

          {/* Navigation Links with Icons */}
          <nav className="hidden items-center space-x-8 md:flex">
            {/* HOME */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); setView('home'); }}
              className={`flex items-center space-x-1.5 pb-1 font-bold ${view === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-black hover:text-blue-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
              <span>Home</span>
            </a>

            {/* COURSES */}
            <a 
              href="#courses" 
              onClick={(e) => { e.preventDefault(); setView('courses'); }}
              className={`flex items-center space-x-1.5 transition-colors font-medium ${view === 'courses' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-black hover:text-blue-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-16.5a8.966 8.966 0 0 1 6 2.25A8.967 8.967 0 0 1 18 18c-2.305 0-4.408.867-6 2.292m0-16.5V18" />
              </svg>
              <span>Courses</span>
            </a>

            {/* UPDATES */}
            <a href="#" className="flex items-center space-x-1.5 text-black hover:text-blue-600 transition-colors font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>Updates</span>
            </a>

            {/* ACHIEVEMENTS */}
            <a href="#" className="flex items-center space-x-1.5 text-black hover:text-blue-600 transition-colors font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.562.562 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              <span>Achievements</span>
            </a>

            {/* ABOUT US */}
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); setView('about'); }}
              className={`flex items-center space-x-1.5 transition-colors font-medium ${view === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-black hover:text-blue-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <span>About Us</span>
            </a>

            {/* CONTACT */}
            <a href="#" className="flex items-center space-x-1.5 text-black hover:text-blue-600 transition-colors font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>Contact</span>
            </a>
          </nav>

          {/* Student Portal Button */}
          <button className="flex items-center space-x-2 rounded-lg border-2 border-blue-400 px-4 py-2 text-sm font-bold text-blue-500 transition-all hover:bg-blue-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Student Portal</span>
          </button>
        </div>
      </header>

      {/* CONDITIONAL RENDERING FOR HOME VIEW */}
      {view === 'home' && (
        <>
          {/* Home */}
          <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 via-blue-500 to-indigo-400 text-white px-6 pt-24">
            <div className="absolute top-20 -left-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 -right-10 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

            <div className="relative z-10 max-w-5xl text-center">
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                Transforming Futures Through <span className="text-blue-200">Technical Excellence</span>
              </h1>
              
              <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-xl leading-relaxed">
                Join Pakistan's leading institute for vocational training. We bridge the gap 
                between education and employment with hands-on technical skills.
              </p>

              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <button className="rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl transition-all hover:bg-blue-50 hover:-translate-y-1">
                  Apply for Admissions 2026
                </button>
                <button 
                  onClick={() => setView('courses')}
                  className="rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Explore Programs
                </button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="h-10 w-6 rounded-full border-2 border-white/30 flex justify-center p-1">
                <div className="h-2 w-1 rounded-full bg-white"></div>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="py-24 px-6 bg-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                
                {/*Text and Mission */}
                <div>
                  <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
                    About the Institute
                  </h2>
                  <h3 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl leading-tight">
                    Empowering the Next Generation of Professionals
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    The Institute of Technical and Vocational Education (ITVE) is dedicated to 
                    bridging the gap between academic learning and industrial requirements. 
                    We provide students with the high-demand technical skills needed to excel 
                    in Pakistan's evolving job market.
                  </p>
                  
                  <div className="flex items-center space-x-4 border-l-4 border-blue-600 pl-6 py-3 bg-blue-50/50 rounded-r-lg">
                    <p className="text-xl font-semibold italic text-gray-800">
                      "Education for Employment"
                    </p>
                  </div>
                </div>

                {/* Mission & Vision Cards */}
                <div className="space-y-6">
                  {/* Mission Card */}
                  <div className="group rounded-2xl bg-gray-50 p-8 shadow-sm transition-all hover:shadow-md border border-gray-100 hover:border-blue-200">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Our Mission</h4>
                    <p className="text-gray-600 leading-relaxed">
                      To provide accessible, high-quality technical and vocational education that empowers individuals with practical skills for sustainable careers and personal growth.
                    </p>
                  </div>

                  {/* Vision Card */}
                  <div className="group rounded-2xl bg-gray-50 p-8 shadow-sm transition-all hover:shadow-md border border-gray-100 hover:border-blue-200">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </div>
                    <h4 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Our Vision</h4>
                    <p className="text-gray-600 leading-relaxed">
                      To be a leading institution in technical and vocational training, recognized for innovation, excellence, and its contribution to societal development and economic prosperity.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-blue-500 py-20 px-8 text-center text-white shadow-2xl">
              <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">Ready to Start Your Journey?</h2>
              <p className="mb-10 text-lg opacity-90">Join thousands of successful graduates. Your new career is just a click away.</p>
              <button onClick={() => setView('courses')} className="rounded-xl bg-white px-12 py-4 text-lg font-bold text-[#00a2e8] hover:bg-gray-50">Explore All Courses</button>
            </div>
          </section>

          <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#00a2e8]">How to Start</h2>
                <h3 className="text-4xl font-extrabold text-gray-900">Your Path to Professional Success</h3>
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    { step: "01", title: "Pick a Course", desc: "Choose from IT, Business, or Vocational programs." },
                    { step: "02", title: "Submit Application", desc: "Fill out the online form or visit our campus." },
                    { step: "03", title: "Get Certified", desc: "Complete hands-on training and projects." },
                    { step: "04", title: "Start Career", desc: "Connect with partners for job placement." }
                  ].map((item, index) => (
                    <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border-2 border-[#00a2e8] text-[#00a2e8] font-black text-xl shadow-lg transition-transform group-hover:-translate-y-2">
                        {item.step}
                      </div>
                      <h4 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-6 bg-gray-50">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#00a2e8]">Learning Environment</h2>
                  <h3 className="mb-6 text-4xl font-extrabold text-gray-900 leading-tight">
                    World-Class Facilities for <br /> Future Leaders
                  </h3>
                  <p className="mb-8 text-gray-600 leading-relaxed">
                    We believe that the right environment fosters innovation. Our campus is equipped 
                    with modern technology to ensure students have everything they need to succeed.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3"><div className="h-2 w-2 rounded-full bg-[#00a2e8]"></div><span className="font-semibold text-gray-700">Hi-Tech IT Labs</span></div>
                    <div className="flex items-center space-x-3"><div className="h-2 w-2 rounded-full bg-[#00a2e8]"></div><span className="font-semibold text-gray-700">E-Library Access</span></div>
                    <div className="flex items-center space-x-3"><div className="h-2 w-2 rounded-full bg-[#00a2e8]"></div><span className="font-semibold text-gray-700">Workshop Tools</span></div>
                    <div className="flex items-center space-x-3"><div className="h-2 w-2 rounded-full bg-[#00a2e8]"></div><span className="font-semibold text-gray-700">Student Lounge</span></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img src="src/images/lab1.jpg" alt="IT Lab" className="h-64 w-full rounded-2xl object-cover shadow-md" />
                    <img src="src/images/E-library.jpg" alt="Library" className="h-40 w-full rounded-2xl object-cover shadow-md" />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img src="src/images/workshop1.webp" alt="Vocational Workshop" className="h-40 w-full rounded-2xl object-cover shadow-md" />
                    <img src="src/images/campus.jpg" alt="Campus" className="h-64 w-full rounded-2xl object-cover shadow-md" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-6 bg-white">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-12 text-3xl font-extrabold text-gray-900">Common Questions</h2>
              <div className="space-y-4 text-left">
                {[
                  { q: "Is job placement guaranteed?", a: "While we don't guarantee a job, our 92% employment rate is a result of our strong partnerships with local industries." },
                  { q: "What is the duration of diploma courses?", a: "Most of our professional diploma programs are 1 year long, divided into two semesters." },
                  { q: "Are there any weekend classes available?", a: "Yes, we offer specialized weekend sessions for working professionals in the IT and Business tracks." }
                ].map((faq, i) => (
                  <details key={i} className="group rounded-xl border border-gray-100 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                      <h5 className="text-lg font-bold">{faq.q}</h5>
                      <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 transition duration-300 group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-gray-600">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* COURSES */}
      {view === 'courses' && (
        <section id="courses" className="py-24 px-6 bg-gray-50 animate-fadeIn min-h-screen">
          <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#00a2e8]">Specialized Training</h2>
              <h3 className="text-4xl font-extrabold text-gray-900 md:text-5xl">Our Featured Programs</h3>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Choose from a variety of diploma and certificate courses designed to make you industry-ready.
              </p>
            </div>

            {/* Programs Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Course 1: IT & Software */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-48 bg-blue-600 flex items-center justify-center text-white overflow-hidden">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 opacity-20 absolute -right-4 -bottom-4 rotate-12 transition-transform group-hover:scale-110">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                   </svg>
                   <span className="relative z-10 font-bold text-2xl uppercase tracking-tighter">IT & Software</span>
                </div>
                <div className="p-8">
                  <h4 className="mb-3 text-xl font-bold text-gray-900">DIT & Software Engineering</h4>
                  <p className="mb-6 text-gray-600 text-sm leading-relaxed">Master Web Development, Programming, and Database Management through our 1-year Diploma.</p>
                  <button className="text-sm font-bold text-[#00a2e8] flex items-center hover:underline">View Curriculum →</button>
                </div>
              </div>

              {/* Course 2: Management */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-48 bg-indigo-600 flex items-center justify-center text-white overflow-hidden">
                   <span className="relative z-10 font-bold text-2xl uppercase tracking-tighter">Business</span>
                </div>
                <div className="p-8">
                  <h4 className="mb-3 text-xl font-bold text-gray-900">Business Management</h4>
                  <p className="mb-6 text-gray-600 text-sm leading-relaxed">Gain essential skills in Office Automation, Accounting, and Business Communication.</p>
                  <button className="text-sm font-bold text-[#00a2e8] flex items-center hover:underline">View Curriculum →</button>
                </div>
              </div>

              {/* Course 3: Vocational */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-48 bg-[#00a2e8] flex items-center justify-center text-white overflow-hidden">
                   <span className="relative z-10 font-bold text-2xl uppercase tracking-tighter text-center">Vocational Trades</span>
                </div>
                <div className="p-8">
                  <h4 className="mb-3 text-xl font-bold text-gray-900">Technical & Vocational</h4>
                  <p className="mb-6 text-gray-600 text-sm leading-relaxed">Hands-on training in Electrical work, Fashion Designing, and Media studies.</p>
                  <button className="text-sm font-bold text-[#00a2e8] flex items-center hover:underline">View Curriculum →</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ABOUT US */}
      {view === 'about' && (
        <div className="animate-fadeIn">
          {/* About ITVE */}
          <section className="py-24 px-6 bg-white border-b border-gray-100 pt-32">
            <div className="mx-auto max-w-7xl text-center">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#00a2e8]">Who We Are</h2>
              <h3 className="text-4xl font-extrabold text-gray-900 md:text-5xl mb-6">About ITVE</h3>
              <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
                Dedicated to shaping futures through excellence in technical and vocational education. 
                Discover our story, values, and commitment to student success.
              </p>
            </div>
          </section>

          {/* Our Core Values */}
          <section className="py-24 px-6 bg-gray-50">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 text-center">
                <h3 className="text-3xl font-bold text-gray-900">Our Core Values</h3>
                <p className="mt-4 text-gray-600">The fundamental principles that guide our institutional culture.</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Empowerment", desc: "Providing skills and knowledge that enable individuals to achieve their full potential and make informed choices about their future." },
                  { title: "Innovation", desc: "Constantly adapting and introducing new methods, technologies, and curricula to stay ahead in education and industry demands." },
                  { title: "Excellence", desc: "Striving for the highest standards in teaching, learning, student support, and operational management." },
                  { title: "Integrity", desc: "Upholding ethical principles, honesty, and transparency in all our endeavors and interactions." },
                  { title: "Community", desc: "Fostering a supportive, inclusive, and collaborative environment for all students, staff, and partners." },
                  { title: "Accessibility", desc: "Ensuring our programs are available to diverse learners, removing barriers to education and opportunity." }
                ].map((value, idx) => (
                  <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-4 h-2 w-12 bg-[#00a2e8] rounded-full"></div>
                    <h4 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Meet Our Team */}
          <section className="py-24 px-6 bg-white">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 text-center">
                <h3 className="text-3xl font-bold text-gray-900">Meet Our Team</h3>
                <p className="mt-4 text-gray-600">The dedicated professionals driving ITVE's mission forward.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {[
                  { initials: "ER", name: "Muhammad Talha Nawaz", role: "President" },
                  { initials: "SG", name: "Sahil", role: "Chief Administrator" },
                  { initials: "AK", name: "Muhammad Osama", role: "Head of Academics" },
                  { initials: "JD", name: "Ammar", role: "IT Director" },
                  { initials: "JS", name: "Haashi", role: "Chief Financial Officer" },
                  { initials: "RB", name: "Ayesha", role: "HR Director" }
                ].map((member, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white transition-transform group-hover:scale-110">
                      {member.initials}
                    </div>
                    <h4 className="text-sm font-bold text-gray-900">{member.name}</h4>
                    <p className="text-xs text-[#00a2e8] uppercase font-semibold mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Future Goals */}
          <section className="py-24 px-6 bg-blue-900 text-white">
            <div className="mx-auto max-w-7xl text-center lg:text-left">
              <div className="mb-16">
                <h3 className="text-3xl font-bold">Our Future Goals</h3>
                <p className="mt-4 text-blue-200">Charting the course for continued growth and innovation.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  "Train 200,000+ students in AI and emerging technologies by 2028.",
                  "Establish 5 new state-of-the-art vocational centers nationwide.",
                  "Achieve 90%+ job placement rate for graduates.",
                  "Launch a comprehensive global online learning platform.",
                  "Become a leading research hub for vocational tech innovation."
                ].map((goal, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-6 bg-white/10 rounded-xl border border-white/10">
                    <span className="text-2xl font-bold text-[#00a2e8]">0{idx + 1}</span>
                    <p className="text-sm font-medium">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* History */}
          <section className="py-24 px-6 bg-white">
            <div className="mx-auto max-w-4xl">
              <div className="mb-16 text-center">
                <h3 className="text-3xl font-bold text-gray-900">Our History</h3>
                <p className="mt-4 text-gray-600">A legacy of empowerment and skill development.</p>
              </div>
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-blue-600">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600"></div>
                  <h4 className="font-bold text-xl text-gray-900">2013: The First Initiative</h4>
                  <p className="mt-2 text-gray-600 text-sm">Launched collaboration with BBSYDP, training over 1,000 underprivileged students with special focus on female students.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-blue-600">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600"></div>
                  <h4 className="font-bold text-xl text-gray-900">2015-2023: Growth & Expansion</h4>
                  <p className="mt-2 text-gray-600 text-sm">Reached thousands across Karachi, adding emerging technologies to the curriculum and establishing a reputation for quality.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-[#00a2e8]">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-[#00a2e8]"></div>
                  <h4 className="font-bold text-xl text-gray-900">2024: New Leadership</h4>
                  <p className="mt-2 text-gray-600 text-sm">Launched ambitious plan to collaborate with universities and institutions to revolutionize Pakistan's technical landscape.</p>
                </div>
              </div>
              <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-[#00a2e8] mb-4 uppercase tracking-wider text-sm">Future Vision</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Expand to all major urban cities using university infrastructure partnerships.</li>
                  <li>• Build new vocational training infrastructure in rural Pakistan.</li>
                  <li>• Revolutionize technical education inspired by models like China's system.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* FOOTER SECTION */}
      <footer className="bg-blue-200 text-gray-900 pt-16 pb-8 px-6 border-t border-blue-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-12">
            
            {/* Brand & Bio */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setView('home')}>
                <img 
                  src="/assets/logo.jpg" 
                  alt="ITVE Logo" 
                  className="h-12 w-auto" 
                />
                <span className="text-2xl font-bold tracking-tighter text-blue-950">ITVE</span>
              </div>
              <p className="text-sm leading-relaxed text-blue-800/90">
                The Institute of Technical and Vocational Education is dedicated to providing 
                world-class skills that translate directly into career opportunities.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-700 hover:text-[#00a2e8] transition-colors"><span className="sr-only">Facebook</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
                <a href="#" className="text-blue-700 hover:text-[#00a2e8] transition-colors"><span className="sr-only">LinkedIn</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-blue-950 font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><button onClick={() => setView('home')} className="text-blue-900 hover:text-blue-600 transition-colors font-medium">Home</button></li>
                <li><button onClick={() => setView('courses')} className="text-blue-900 hover:text-blue-600 transition-colors font-medium">Courses</button></li>
                <li><a href="#" className="text-blue-900 hover:text-blue-600 transition-colors font-medium">Updates</a></li>
                <li><button onClick={() => setView('about')} className="text-blue-900 hover:text-blue-600 transition-colors font-medium">About Us</button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-blue-950 font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-4 text-sm text-blue-900 font-medium">
                <li className="flex items-start space-x-3">
                  <svg className="h-5 w-5 text-[#00a2e8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span>Main Campus, Karachi, Pakistan</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#00a2e8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <span>+1 (234) 567-8900</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#00a2e8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span>info@itve.edu.pk</span>
                </li>
              </ul>
            </div>

          </div>

          <hr className="border-blue-100 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-800 space-y-4 md:space-y-0 font-medium">
            <p>© 2025 ITVE Institute. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;