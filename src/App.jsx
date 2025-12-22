import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* --- HEADER SECTION --- */}
      <header className="fixed top-0 z-50 w-full bg-white px-6 py-2 border-b border-gray-100 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/logo.jpg" 
              alt="ITVE Logo" 
              className="h-12 w-auto" 
            />
            <span className="text-3xl font-bold tracking-tighter text-blue-600">ITVE</span>
          </div>

          {/* Navigation Links with Icons */}

          <nav className="hidden items-center space-x-8 md:flex">
            {/* HOME - Active State (Blue) */}
            <a href="#home" className="flex items-center space-x-1.5 text-blue-600 border-b-2 border-blue-600 pb-1 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
              <span>Home</span>
            </a>

            {/* COURSES */}
            <a href="#" className="flex items-center space-x-1.5 text-black hover:text-blue-600 transition-colors font-medium">
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
            <a href="#" className="flex items-center space-x-1.5 text-black hover:text-blue-600 transition-colors font-medium">
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

      {/* --- SECTION 1: HERO --- */}
      {/* pt-24 is enough now that the header is shorter */}
      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white px-6 pt-24">
        
        {/* Background Decorative Blur */}
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
              Apply for Admissions 2025
            </button>
            <button className="rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20">
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

    </div>
  );
}

export default App;