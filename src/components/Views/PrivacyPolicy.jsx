import React from 'react';

export default function PrivacyPolicy() {
  const sections = [
    { id: "collect", title: "Information We Collect" },
    { id: "usage", title: "How We Use Data" },
    { id: "sharing", title: "Data Sharing" },
    { id: "rights", title: "Your Data Rights" },
    { id: "security", title: "Data Security" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "children", title: "Children's Privacy" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <section className="py-24 px-6 bg-white animate-fadeIn pt-32 min-h-screen">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER  */}
        <div className="mb-16 border-b border-slate-100 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-blue-600"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Institutional Protocol</span>
          </div>
          <h1 className="text-5xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter mb-6">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase text-xs tracking-widest bg-slate-50 inline-block px-4 py-2 rounded-lg border border-slate-100">
            Last Updated: May 24, 2025
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/*  STICKY SIDEBAR NAVIGATION  */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-8 pb-2 border-b-2 border-blue-600 w-fit">Policy Sections</h4>
              <nav className="flex flex-col gap-4">
                {sections.map((section) => (
                  <a 
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-all hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <span className="h-1 w-0 bg-blue-600 group-hover:w-4 transition-all"></span>
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/*  MAIN CONTENT  */}
          <div className="flex-1 max-w-3xl">
            <div className="prose prose-slate max-w-none">
              
              <p className="text-xl font-medium text-slate-900 leading-relaxed mb-16">
                Our commitment to your privacy is paramount. The Institute of Technical & Vocational Education ("ITVE") outlines below how we collect, use, and safeguard your personal information.
              </p>

              {/* 1. Information We Collect */}
              <section id="collect" className="mb-20 scroll-mt-32">
                <h2 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="bg-slate-950 text-white px-2 py-0.5 text-sm rounded">01</span>
                  Information We Collect
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
                    <h4 className="font-black uppercase text-xs tracking-widest text-blue-600 mb-3">Direct Submissions</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Includes data from course applications, event registration, newsletter subscriptions, and the student portal (Name, email, phone, DOB, educational background, payment info).</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
                    <h4 className="font-black uppercase text-xs tracking-widest text-blue-600 mb-3">Automatic Collection</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">IP addresses, browser types, operating systems, referring URLs, pages viewed, and access times collected via cookies.</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
                    <h4 className="font-black uppercase text-xs tracking-widest text-blue-600 mb-3">Third-Party Sources</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Information from educational partners, payment processors, or public databases in compliance with law.</p>
                  </div>
                </div>
              </section>

              {/* 2. How We Use Information */}
              <section id="usage" className="mb-20 scroll-mt-32">
                <h2 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="bg-slate-950 text-white px-2 py-0.5 text-sm rounded">02</span>
                  How We Use Your Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Maintain educational programs",
                    "Process enrollments & payments",
                    "Update you on account status",
                    "Improve website personalization",
                    "Respond to support requests",
                    "Perform research & analytics",
                    "Enforce terms & policies",
                    "Protect system integrity"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl bg-white shadow-sm">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{text}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Data Sharing */}
              <section id="sharing" className="mb-20 scroll-mt-32">
                <h2 className="text-2xl font-black uppercase tracking-tight mb-6">3. Data Sharing & Disclosure</h2>
                <p className="text-slate-600 mb-6"><strong>We do not sell your personal information.</strong> Sharing only occurs under these circumstances:</p>
                <ul className="space-y-4 text-sm text-slate-600 list-none p-0">
                  <li className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                    <span className="font-black text-blue-600">A.</span> With service providers (Payment processors, IT support) under confidentiality.
                  </li>
                  <li className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                    <span className="font-black text-blue-600">B.</span> With accreditation bodies necessary for program delivery.
                  </li>
                  <li className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                    <span className="font-black text-blue-600">C.</span> When required by law or to protect safety and property.
                  </li>
                </ul>
              </section>

              {/* 4. Your Data Rights */}
              <section id="rights" className="mb-20 scroll-mt-32">
                <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-blue-900/20">
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Your Data Rights</h2>
                  <p className="text-blue-100 text-sm mb-8">You hold specific rights regarding your personal information:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[10px] font-black uppercase tracking-[0.2em]">
                    <div className="flex justify-between border-b border-white/20 pb-2"><span>Access & Correction</span> <span>GRANTED</span></div>
                    <div className="flex justify-between border-b border-white/20 pb-2"><span>Request Deletion</span> <span>GRANTED</span></div>
                    <div className="flex justify-between border-b border-white/20 pb-2"><span>Object to Processing</span> <span>GRANTED</span></div>
                    <div className="flex justify-between border-b border-white/20 pb-2"><span>Data Portability</span> <span>GRANTED</span></div>
                    <div className="flex justify-between border-b border-white/20 pb-2"><span>Marketing Opt-out</span> <span>GRANTED</span></div>
                    <div className="flex justify-between border-b border-white/20 pb-2"><span>Withdraw Consent</span> <span>GRANTED</span></div>
                  </div>
                </div>
              </section>

              {/* 5, 6, 7. Security, Cookies, Children */}
              <div className="space-y-16 mb-20">
                <section id="security" className="scroll-mt-32">
                  <h2 className="text-xl font-black uppercase tracking-tight text-slate-950 mb-4">Data Security</h2>
                  <p className="text-slate-600 text-sm">We implement administrative and technical measures to protect data. However, no internet-based site can be 100% secure.</p>
                </section>

                <section id="cookies" className="scroll-mt-32">
                  <h2 className="text-xl font-black uppercase tracking-tight text-slate-950 mb-4">Cookies & Tracking</h2>
                  <p className="text-slate-600 text-sm">We use cookies to enhance user experience and analyze traffic. You can control these via your browser settings.</p>
                </section>

                <section id="children" className="scroll-mt-32">
                  <h2 className="text-xl font-black uppercase tracking-tight text-slate-950 mb-4">Children's Privacy</h2>
                  <p className="text-slate-600 text-sm">Our services are not directed to individuals under 16. We do not knowingly collect data from children without parental consent.</p>
                </section>
              </div>

              {/* Contact Us */}
              <section id="contact" className="pt-16 border-t border-slate-100 scroll-mt-32">
                <div className="bg-slate-950 text-white rounded-[2rem] p-10 md:p-14 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] group-hover:bg-blue-600/20 transition-all"></div>
                  
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-8">Data Protection Officer</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-500 mb-2 tracking-widest">Physical Address</p>
                      <p className="text-lg font-bold leading-tight uppercase tracking-tighter">
                        Institute of Technical & <br /> Vocational Education <br />
                        <span className="text-blue-500 italic">123 Education Lane, Karachi</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-500 mb-2 tracking-widest">Official Contact</p>
                      <p className="text-xl font-black text-white hover:text-blue-400 transition-colors">privacy@itve.edu.pk</p>
                      <p className="text-slate-400 font-bold mt-2">+92 21 3456 7899</p>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}