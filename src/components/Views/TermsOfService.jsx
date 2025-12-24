import React from 'react';

export default function TermsOfService() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "accounts", title: "2. User Accounts" },
    { id: "enrollment", title: "3. Enrollment & Payments" },
    { id: "intellectual", title: "4. Intellectual Property" },
    { id: "prohibited", title: "5. Prohibited Uses" },
    { id: "disclaimer", title: "6. Disclaimer" },
    { id: "liability", title: "7. Limitation of Liability" },
    { id: "governing", title: "9. Governing Law" },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 animate-fadeIn pt-32 min-h-screen">
      <div className="mx-auto max-w-7xl">
        
        {/* PAGE HEADER */}
        <div className="mb-16 border-b border-slate-200 pb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-12 bg-blue-600"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Legal Documentation</span>
          </div>
          <h1 className="text-5xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter mb-6">
            Terms of <span className="text-blue-600">Service</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">
            Last Updated: May 24, 2025 • Version 1.0.2
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* STICKY NAVIGATION (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 mb-6">Table of Contents</h4>
              {sections.map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-tight"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </aside>

          {/* LEGAL CONTENT */}
          <div className="flex-1 max-w-3xl prose prose-slate">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm leading-relaxed text-slate-600">
              
              <p className="text-lg font-medium text-slate-900 mb-12">
                Welcome to the Institute of Technical & Vocational Education ("ITVE"). These Terms of Service govern your access to and use of our website, student portal, and services.
              </p>

              <section id="acceptance" className="mb-12">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-blue-600">01.</span> Acceptance of Terms
                </h2>
                <p>
                  By creating an account, enrolling in a course, or otherwise using our Services, you affirm that you are at least 18 years of age or have obtained parental/guardian consent and agree to these Terms.
                </p>
              </section>

              <section id="accounts" className="mb-12">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-blue-600">02.</span> User Accounts & Responsibilities
                </h2>
                <ul className="space-y-4 list-none p-0">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">A.</span>
                    <span><strong>Account Creation:</strong> You agree to provide accurate, current, and complete information during registration.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">B.</span>
                    <span><strong>Security:</strong> You are responsible for safeguarding your password and notifying us of unauthorized use.</span>
                  </li>
                </ul>
              </section>

              <section id="enrollment" className="mb-12">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-blue-600">03.</span> Course Enrollment & Payments
                </h2>
                <p>
                  Fees are non-refundable except as explicitly stated in our Refund Policy. ITVE reserves the right to modify or reschedule courses with reasonable notice.
                </p>
              </section>

              <section id="intellectual" className="mb-12">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-blue-600">04.</span> Intellectual Property
                </h2>
                <p className="bg-slate-50 p-6 rounded-2xl italic border-l-4 border-blue-600">
                  ITVE grants you a limited, non-exclusive license to use course materials solely for personal, non-commercial educational purposes. Reproduction without consent is strictly prohibited.
                </p>
              </section>

              <section id="disclaimer" className="mb-12">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-blue-600">06.</span> Disclaimer of Warranties
                </h2>
                <p className="text-xs uppercase font-bold tracking-wider bg-slate-100 p-6 rounded-xl">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." ITVE DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                </p>
              </section>

              <section id="governing" className="mb-12">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-4 flex items-center gap-2">
                  <span className="text-blue-600">09.</span> Governing Law
                </h2>
                <p>
                  These terms are governed by the laws of Pakistan. All legal proceedings shall be instituted exclusively in the courts of <strong>Karachi, Pakistan.</strong>
                </p>
              </section>

              <section className="pt-12 border-t border-slate-100 mt-12">
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6">Contact Legal Department</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div>
                    <p className="font-bold text-slate-950 mb-1">Office Address</p>
                    <p>123 Education Lane,<br />Karachi, Pakistan 12345</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-950 mb-1">Direct Contact</p>
                    <p>Email: legal@itve.edu.pk</p>
                    <p>Phone: +92 21 3456 7898</p>
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