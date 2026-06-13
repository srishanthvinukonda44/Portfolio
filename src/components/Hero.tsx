import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown, Download } from 'lucide-react';

const roles = [
  'AI & ML Engineer',
  'UI/UX Designer',
  'Web Developer',
  'Graphic Designer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-700/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(20,184,166,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Open to Internship Opportunities
        </div>

        {/* Name */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Vinukonda{' '}
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Srishanth
          </span>
        </h1>

        {/* Typewriter role */}
        <div
          className={`text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 mb-6 h-10 transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span>{displayed}</span>
          <span className="inline-block w-0.5 h-7 bg-teal-400 ml-1 animate-blink" />
        </div>

        {/* Bio */}
        <p
          className={`text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Motivated CS (AI & ML) student passionate about applying creativity, design skills, and technical
          knowledge to real-world projects. Seeking opportunities in UI/UX design, graphic design, and web development.
        </p>

        {/* Quick info */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-slate-400 transition-all duration-700 delay-[600ms] ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-teal-400" />
            Telangana, India
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <a href="mailto:srishanthvinukonda44@gmail.com" className="flex items-center gap-1.5 hover:text-teal-400 transition-colors">
            <Mail size={14} className="text-teal-400" />
            srishanthvinukonda44@gmail.com
          </a>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <a href="tel:9110330063" className="flex items-center gap-1.5 hover:text-teal-400 transition-colors">
            <Phone size={14} className="text-teal-400" />
            9110330063
          </a>
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 mb-14 transition-all duration-700 delay-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-xl border border-slate-700 hover:border-teal-500/50 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Download size={16} />
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div
          className={`flex items-center justify-center gap-4 mb-14 transition-all duration-700 delay-[800ms] ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://github.com/srishanthvinukonda44"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/vinukonda-srishanth-9727b9394"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:srishanthvinukonda44@gmail.com"
            className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-teal-400 transition-colors mx-auto animate-bounce"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
}
