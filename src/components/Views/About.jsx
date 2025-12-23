import React from 'react';

export default function About() {
  return (
    <div className="animate-fadeIn">
      {/* SECTION HEADER */}
      <section className="py-24 px-6 bg-white pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-blue-600">
            Who We Are
          </h2>
          <h3 className="text-4xl font-black text-slate-950 md:text-5xl uppercase tracking-tighter mb-6">
            About ITVE
          </h3>
          <p className="mx-auto max-w-3xl text-lg text-slate-600 leading-relaxed font-medium">
            Dedicated to shaping futures through excellence in technical and vocational education. 
            Discover our story, values, and commitment to student success.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h3 className="text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Our Core Values
            </h3>
            <p className="mt-4 text-slate-600 font-medium">
              The fundamental principles that guide our institutional culture.
            </p>
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
              <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-blue-600 hover:shadow-xl group">
                <div className="mb-6 h-1.5 w-12 bg-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                <h4 className="mb-3 text-xl font-black text-slate-950 uppercase tracking-tight">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h3 className="text-4xl font-black text-slate-950 uppercase tracking-tighter">Meet Our Team</h3>
            <p className="mt-4 text-slate-600 font-medium">The dedicated professionals driving ITVE's mission forward.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { initials: "TN", name: "Muhammad Talha Nawaz", role: "President" },
              { initials: "SL", name: "Sahil", role: "Chief Administrator" },
              { initials: "MO", name: "Muhammad Osama", role: "Head of Academics" },
              { initials: "AM", name: "Ammar", role: "IT Director" },
              { initials: "HI", name: "Haashi", role: "CFO" },
              { initials: "AY", name: "Ayesha", role: "HR Director" }
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-950 text-xl font-black text-white transition-all group-hover:bg-blue-600 group-hover:scale-105 shadow-xl">
                  {member.initials}
                </div>
                <h4 className="text-sm font-black text-slate-950 uppercase tracking-tight leading-tight">{member.name}</h4>
                <p className="text-[10px] text-blue-600 uppercase font-black mt-2 tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE GOALS */}
      <section className="py-24 px-6 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center lg:text-left">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Our Future Goals</h3>
            <p className="mt-4 text-slate-400 font-medium">Charting the course for continued growth and innovation.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Train 200,000+ students in AI and emerging technologies by 2028.",
              "Establish 5 new state-of-the-art vocational centers nationwide.",
              "Achieve 90%+ job placement rate for graduates.",
              "Launch a comprehensive global online learning platform.",
              "Become a leading research hub for vocational tech innovation."
            ].map((goal, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-600 transition-colors group">
                <span className="text-2xl font-black text-blue-600 opacity-50 group-hover:opacity-100">0{idx + 1}</span>
                <p className="text-sm font-bold uppercase tracking-tight leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h3 className="text-4xl font-black text-slate-950 uppercase tracking-tighter">Our History</h3>
            <p className="mt-4 text-slate-600 font-medium">A legacy of empowerment and skill development.</p>
          </div>
          <div className="space-y-12">
            {[
              { year: "2013", title: "The First Initiative", desc: "Launched collaboration with BBSYDP, training over 1,000 underprivileged students." },
              { year: "2015", title: "Growth & Expansion", desc: "Reached thousands across Karachi, adding emerging technologies to the curriculum." },
              { year: "2024", title: "New Leadership", desc: "Launched ambitious plan to collaborate with universities and revolutionize the landscape." }
            ].map((item, i) => (
              <div key={i} className="relative pl-10 border-l-4 border-slate-100 hover:border-blue-600 transition-colors pb-4">
                <div className="absolute -left-[14px] top-0 h-6 w-6 rounded-full bg-white border-4 border-blue-600"></div>
                <h4 className="font-black text-2xl text-slate-950 uppercase tracking-tighter">{item.year}: {item.title}</h4>
                <p className="mt-2 text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-10 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16"></div>
            <h4 className="font-black text-blue-600 mb-6 uppercase tracking-[0.2em] text-xs">Future Vision</h4>
            <ul className="grid md:grid-cols-2 gap-4 text-slate-800 text-sm font-bold uppercase tracking-tight">
              <li className="flex items-center"><span className="mr-3 h-1.5 w-1.5 bg-blue-600 rounded-full"></span> Infrastructure Partnerships</li>
              <li className="flex items-center"><span className="mr-3 h-1.5 w-1.5 bg-blue-600 rounded-full"></span> Rural Vocational Hubs</li>
              <li className="flex items-center"><span className="mr-3 h-1.5 w-1.5 bg-blue-600 rounded-full"></span> Global Technical Standards</li>
              <li className="flex items-center"><span className="mr-3 h-1.5 w-1.5 bg-blue-600 rounded-full"></span> AI-Driven Curricula</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}