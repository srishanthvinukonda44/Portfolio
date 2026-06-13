import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                VS<span className="text-teal-500">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Computer Science (AI & ML) student passionate about building impactful solutions through design and technology.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/srishanthvinukonda44"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/vinukonda-srishanth-9727b9394"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:srishanthvinukonda44@gmail.com"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-teal-500/50 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:srishanthvinukonda44@gmail.com"
                className="flex items-center gap-2.5 text-slate-400 hover:text-teal-400 text-sm transition-colors duration-200"
              >
                <Mail size={14} />
                srishanthvinukonda44@gmail.com
              </a>
              <a
                href="tel:9110330063"
                className="flex items-center gap-2.5 text-slate-400 hover:text-teal-400 text-sm transition-colors duration-200"
              >
                <span className="w-3.5 h-3.5 flex-shrink-0">📞</span>
                9110330063
              </a>
              <p className="flex items-center gap-2.5 text-slate-400 text-sm">
                <span className="w-3.5 h-3.5 flex-shrink-0">📍</span>
                Telangana, India
              </p>
            </div>

            {/* Availability */}
            <div className="mt-6 p-3 rounded-xl bg-teal-900/20 border border-teal-800/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-teal-300 text-xs font-medium">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Vinukonda Srishanth. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart size={13} className="text-rose-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
