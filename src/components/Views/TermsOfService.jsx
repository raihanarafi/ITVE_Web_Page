import React from 'react';

export default function TermsOfService() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "accounts", title: "2. User Accounts & Conduct" },
    { id: "enrollment", title: "3. Enrollment & Payments" },
    { id: "intellectual", title: "4. Intellectual Property" },
    { id: "prohibited", title: "5. Prohibited Uses" },
    { id: "disclaimer", title: "6. Disclaimer of Warranties" },
    { id: "liability", title: "7. Limitation of Liability" },
    { id: "indemnification", title: "8. Indemnification" },
    { id: "governing", title: "9. Governing Law" },
    { id: "changes", title: "10. Changes to Terms" },
    { id: "contact", title: "11. Contact Information" },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 animate-fadeIn pt-32 min-h-screen">
      <div className="mx-auto max-w-7xl">
        
        {/*  PAGE HEADER  */}
        <div className="mb-16 border-b border-slate-200 pb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-12 bg-blue-600"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Legal Documentation</span>
          </div>
          <h1 className="text-5xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter mb-6">
            Terms of <span className="text-blue-600">Service</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase text-xs tracking-widest bg-white px-4 py-2 rounded-lg border border-slate-200 inline-block">
            Last Updated: May 24, 2025 • Version 2.0
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/*  STICKY NAVIGATION */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-6 pb-2 border-b-2 border-blue-600 w-fit">Navigation</h4>
              {sections.map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-[11px] font-bold text-slate-400 hover:text-blue-600 transition-all hover:translate-x-1 uppercase tracking-tight"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </aside>

          {/*  LEGAL CONTENT */}
          <div className="flex-1 max-w-3xl">
            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] border border-slate-200 shadow-sm leading-relaxed text-slate-600 prose prose-slate max-w-none">
              
              <p className="text-xl font-medium text-slate-900 mb-16 italic border-l-4 border-blue-600 pl-6">
                Welcome to the Institute of Technical & Vocational Education ("ITVE"). These Terms govern your access to our website, courses, and student portal.
              </p>

              {/* 1. Acceptance */}
              <section id="acceptance" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="text-blue-600">01</span> Acceptance of Terms
                </h2>
                <p>
                  By creating an account or enrolling, you affirm you are at least 18 years of age or have obtained parental/guardian consent. If you do not agree, you may not use our Services.
                </p>
              </section>

              {/* 2. Accounts */}
              <section id="accounts" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="text-blue-600">02</span> User Accounts & Conduct
                </h2>
                <div className="space-y-6 text-sm">
                  <div className="p-6 bg-slate-50 rounded-2xl">
                    <strong className="text-slate-900 block mb-2 uppercase tracking-widest text-[10px]">Account Security</strong>
                    You are responsible for safeguarding your password and notifying ITVE immediately of any unauthorized access.
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl">
                    <strong className="text-slate-900 block mb-2 uppercase tracking-widest text-[10px]">Student Conduct</strong>
                    You agree to abide by academic integrity policies. Prohibited conduct includes cheating, plagiarism, harassment, and disruptive behavior.
                  </div>
                </div>
              </section>

              {/* 3. Enrollment */}
              <section id="enrollment" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="text-blue-600">03</span> Enrollment & Payments
                </h2>
                <p className="mb-4">Fees are non-refundable except as explicitly stated in our Refund Policy. ITVE reserves the right to modify, cancel, or reschedule courses with reasonable notice.</p>
              </section>

              {/* 4. Intellectual Property */}
              <section id="intellectual" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="text-blue-600">04</span> Intellectual Property
                </h2>
                <p className="bg-slate-950 text-white p-8 rounded-3xl shadow-xl">
                  ITVE Content (text, graphics, logos, software) is the property of ITVE. We grant you a <strong>limited, non-exclusive license</strong> for personal, educational use only. Reproduction or distribution without consent is strictly prohibited.
                </p>
              </section>

              {/* 5. Prohibited Uses */}
              <section id="prohibited" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="text-blue-600">05</span> Prohibited Uses
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
                  {[
                    "Violation of any local or international laws",
                    "Exploiting or harming minors",
                    "Sending unauthorized advertising/spam",
                    "Impersonating ITVE employees or users",
                    "Sharing account credentials with others",
                    "Engaging in conduct that inhibits others"
                  ].map((item, i) => (
                    <li key={i} className="bg-slate-50 p-4 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span> {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 6 & 7. Disclaimer and Liability (All Caps as per legal standard) */}
              <section id="disclaimer" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="text-blue-600">06</span> Disclaimer
                </h2>
                <p className="text-[10px] leading-relaxed font-bold uppercase tracking-wider bg-slate-100 p-8 rounded-2xl border border-slate-200">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." ITVE DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT UNINTERRUPTED OR ERROR-FREE SERVICE.
                </p>
              </section>

              <section id="liability" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="text-blue-600">07</span> Limitation of Liability
                </h2>
                <p className="text-[10px] leading-relaxed font-bold uppercase tracking-wider bg-slate-100 p-8 rounded-2xl border border-slate-200">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, ITVE SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF REVENUE, PROFITS, OR DATA, ARISING FROM YOUR USE OR INABILITY TO USE THE SERVICES.
                </p>
              </section>

              {/* 8. Indemnification */}
              <section id="indemnification" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="text-blue-600">08</span> Indemnification
                </h2>
                <p>You agree to defend and hold harmless ITVE from any claims, damages, or expenses arising from your violation of these Terms or your use of the Services.</p>
              </section>

              {/* 9. Governing Law */}
              <section id="governing" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="text-blue-600">09</span> Governing Law
                </h2>
                <p>
                  These Terms are governed by the laws of <strong>Pakistan</strong>. Any legal suit or proceeding shall be instituted exclusively in the courts of <strong>Karachi, Pakistan.</strong>
                </p>
              </section>

              {/* 10. Changes */}
              <section id="changes" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="text-blue-600">10</span> Changes to Terms
                </h2>
                <p>We may update these Terms at any time. Your continued use of the Services following updates signifies your acceptance of the revised Terms.</p>
              </section>

              {/* 11. Contact Info */}
              <section id="contact" className="pt-16 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-8">Official Contact</h3>
                <div className="bg-blue-600 text-white rounded-[2rem] p-10 md:p-14 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full"></div>
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-[10px] font-black uppercase text-blue-200 mb-2 tracking-widest">Legal Department</p>
                      <p className="text-lg font-bold leading-tight">
                        Institute of Technical & <br /> Vocational Education <br />
                        <span className="text-sm font-medium opacity-80 italic">123 Education Lane, Karachi</span>
                      </p>
                    </div>
                    <div className="flex flex-col justify-end">
                      <p className="text-2xl font-black">legal@itve.edu.pk</p>
                      <p className="text-blue-100 font-bold">+92 21 3456 7898</p>
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