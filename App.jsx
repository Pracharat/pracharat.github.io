import React, { useState } from 'react';

const PortfolioLanding = () => {
  const [activeMenu, setActiveMenu] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveMenu(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500 selection:text-white relative overflow-hidden">
      
      {/* Background Glowing Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer" onClick={() => scrollToSection('home')}>
            Atom.Dev
          </span>
          <div className="hidden sm:flex gap-6 text-sm font-medium">
            {['home', 'about', 'skills', 'experience'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-cyan-400 transition-colors ${activeMenu === item ? 'text-cyan-400' : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16 relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-cyan-500/20 mb-8 ring-2 ring-cyan-500/50">
            <img 
              src="https://ui-avatars.com/api/?name=Pracharat+Sungtong&background=0D8ABC&color=fff&size=200" 
              alt="Atom Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Atom.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 font-medium mb-8 max-w-2xl">
            IT Support & Backend Developer crafting scalable solutions and secure systems.
          </h2>
          <div className="flex gap-4">
            <button 
              onClick={() => scrollToSection('experience')}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30"
            >
              View My Work
            </button>
            <a 
              href="mailto:Pracharat.sung@gmail.com" 
              className="px-8 py-3 rounded-full bg-slate-800 text-white font-semibold border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 border-t border-slate-800/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-2">About Me</h3>
              <h4 className="text-3xl font-bold text-white mb-6">Passionate about System Engineering & Cyber Security.</h4>
              <p className="text-slate-400 leading-relaxed mb-6">
                I graduated from Rajamangala University of Technology Thanyaburi with a Bachelor's degree in Computer Engineering. 
                Currently, I work as an IT Support Officer at the Prachuapkhirikhan Provincial Cooperative Auditing Office.
              </p>
              <div className="flex flex-col gap-3 text-sm text-slate-300">
                <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700">📧</span> Pracharat.sung@gmail.com</span>
                <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 border border-slate-700">📱</span> 080-2924312</span>
                <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-green-400 border border-slate-700">💬</span> LINE: Pracharat222</span>
              </div>
            </div>
            
            {/* Education Mini-Cards */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Education</h3>
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                <div className="text-xs text-cyan-400 font-semibold mb-1">2016 - 2020</div>
                <div className="text-lg font-bold text-white">Computer Engineering (B.Eng)</div>
                <div className="text-sm text-slate-400">RMUTT | GPA: 2.93</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-500/30 transition-colors">
                <div className="text-xs text-slate-400 font-semibold mb-1">2014 - 2016</div>
                <div className="text-lg font-bold text-white">Electronic Industry (High Voc. Cert.)</div>
                <div className="text-sm text-slate-400">Prachuap Khiri Khan Technical College | GPA: 3.70</div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 border-t border-slate-800/50 text-center">
          <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-2">Tech Stack & Skills</h3>
          <h4 className="text-3xl font-bold text-white mb-12">Tools I use to build and manage systems</h4>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['Node.js', 'React.js', 'Angular', 'JavaScript', 'MongoDB', 'MSSQL', 'IT Support', 'Troubleshooting', 'Helpdesk', 'Technical Support'].map((skill) => (
              <span key={skill} className="px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-medium hover:scale-105 hover:border-cyan-500 hover:text-cyan-300 transition-all cursor-default shadow-lg">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20 border-t border-slate-800/50">
          <h3 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-2 text-center">Experience</h3>
          <h4 className="text-3xl font-bold text-white mb-12 text-center">My Professional Journey</h4>
          
          <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-cyan-500 before:to-slate-800">
            
            {/* Job 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-cyan-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/80 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-xl text-white">IT Support</h4>
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full">2022 - Present</span>
                </div>
                <h5 className="text-sm text-slate-400 mb-4">Prachuapkhirikhan Provincial Cooperative Auditing Office</h5>
                <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                  <li>Troubleshoot hardware and software for staff.</li>
                  <li>Onboard/Offboard employees (devices & system access).</li>
                  <li>Maintain system stability, security, and efficiency.</li>
                </ul>
              </div>
            </div>

            {/* Job 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/80 border border-slate-700 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-xl text-white">Backend Developer</h4>
                  <span className="text-xs font-bold text-slate-400 bg-slate-700 px-3 py-1 rounded-full">2020 - 2021</span>
                </div>
                <h5 className="text-sm text-blue-400 mb-4">Dplus Intertrade Co., Ltd.</h5>
                <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                  <li>Developed APIs using Node.js, React, Angular.</li>
                  <li>Optimized system performance and scalability.</li>
                  <li>Participated in requirement analysis and system design.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm relative z-10 bg-[#0f172a]">
        <p>Crafted with React & Tailwind CSS. © {new Date().getFullYear()} Pracharat Sungtong.</p>
      </footer>
    </div>
  );
};

export default PortfolioLanding;
