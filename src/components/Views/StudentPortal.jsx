import React from 'react';

export default function StudentPortal({ setView }) {
  const gridImages = [
    "path/to/image1.jpg", "path/to/image1.jpg",
    "path/to/image2.jpg", "path/to/image2.jpg",
    "path/to/image3.jpg", "path/to/image3.jpg"
  ];

  return (
    <section className="min-h-screen bg-gray-300 flex items-center justify-center p-4 pt-24 pb-12">
      <div className="w-full max-w-5xl flex flex-col md:flex-row shadow-2xl overflow-hidden rounded-xl bg-white">
        
        {/* Left Side: Image Grid (3 rows, 2 columns) */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-0 bg-white">
          {gridImages.map((src, index) => (
            <div key={index} className="aspect-video overflow-hidden border-[0.5px] border-gray-100">
              <img 
                src={src} 
                alt={`Campus ${index}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 bg-[#E5E7EB] p-8 md:p-12 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-black mb-8 tracking-tight">EMPLOYEE</h2>

          {/* Role Toggles */}
          <div className="flex bg-gray-400/30 p-1 rounded-full mb-10 w-full max-w-xs">
            <button className="flex-1 py-3 px-2 bg-black text-white rounded-full flex flex-col items-center justify-center text-[10px] font-bold">
              <span className="mb-1">🏛️</span> PARTNERS
            </button>
            <button className="flex-1 py-3 px-2 text-gray-500 flex flex-col items-center justify-center text-[10px] font-bold border-l border-gray-400/50">
              <span className="mb-1">🏫</span> SCHOOLS
            </button>
            <button className="flex-1 py-3 px-2 text-gray-500 flex flex-col items-center justify-center text-[10px] font-bold border-l border-gray-400/50">
              <span className="mb-1">💰</span> DONORS
            </button>
          </div>

          {/* Form Fields */}
          <form className="w-full space-y-6">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1 ml-1">Email *</label>
              <input type="email" className="w-full p-3 rounded-lg border-none shadow-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1 ml-1">Password *</label>
              <input type="password" className="w-full p-3 rounded-lg border-none shadow-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div className="flex items-center justify-between text-xs">
              <button type="button" className="text-red-700 font-bold hover:underline">Forgot Password?</button>
              <label className="flex items-center gap-2 text-gray-600 font-medium">
                <input type="checkbox" className="rounded border-gray-300" /> Remember me
              </label>
            </div>

            {/* Sign In Button & Socials */}
            <div className="flex items-center justify-between pt-4">
              <button className="bg-black text-white px-8 py-3 rounded-full flex items-center gap-3 font-bold hover:bg-gray-800 transition-all group">
                Sign In 
                <span className="bg-gray-700 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </span>
              </button>
              
              <div className="flex gap-3">
                <span className="text-gray-500 text-[10px] mt-2 mr-1">or sign up with</span>
                <button className="p-2 bg-white rounded-full shadow-sm hover:scale-110 transition-transform">🍎</button>
                <button className="p-2 bg-white rounded-full shadow-sm hover:scale-110 transition-transform">🌐</button>
                <button className="p-2 bg-white rounded-full shadow-sm hover:scale-110 transition-transform">🔵</button>
              </div>
            </div>
          </form>

          <p className="mt-12 text-sm text-gray-600">
            Don't have an account? <button onClick={() => setView('signup')} className="font-bold text-gray-800 hover:underline">Sign Up</button>
          </p>
        </div>
      </div>
    </section>
  );
}