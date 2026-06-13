import { useInView } from '../hooks/useInView';
import { User, MapPin, Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';

const details = [
  { icon: MapPin, label: 'Location', value: 'Telangana, India' },
  { icon: Mail, label: 'Email', value: 'srishanthvinukonda44@gmail.com', href: 'mailto:srishanthvinukonda44@gmail.com' },
  { icon: Phone, label: 'Phone', value: '9110330063', href: 'tel:9110330063' },
  { icon: Globe, label: 'LinkedIn', value: 'vinukonda-srishanth-9727b9394', href: 'https://linkedin.com/in/vinukonda-srishanth-9727b9394' },
  { icon: Github, label: 'GitHub', value: 'srishanthvinukonda44', href: 'https://github.com/srishanthvinukonda44' },
];

const languages = ['English', 'Telugu', 'Hindi'];

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center">
              <User size={20} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-widest">About Me</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Who I Am</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/20 to-transparent ml-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 to-teal-700/10 rounded-3xl blur-xl" />
                <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto shadow-2xl ring-1 ring-teal-500/10">
                  <img
                    src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Vinukonda Srishanth"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border border-slate-100 dark:border-slate-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">2+</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Years Experience</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 border border-slate-100 dark:border-slate-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">5+</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Projects Built</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                Motivated Computer Science (AI & ML) student seeking internship opportunities in UI/UX design,
                graphic design, and web development. Passionate about applying creativity, design skills, and
                technical knowledge to real-world projects while continuously learning and contributing to
                innovative solutions.
              </p>

              {/* Contact details */}
              <div className="space-y-3 mb-8">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-teal-600 dark:text-teal-400" />
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm w-20 flex-shrink-0">{label}:</span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="text-slate-700 dark:text-slate-200 text-sm hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-slate-700 dark:text-slate-200 text-sm">{value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div>
                <p className="text-slate-700 dark:text-slate-200 text-sm font-semibold mb-3">Languages</p>
                <div className="flex gap-2 flex-wrap">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-medium border border-teal-100 dark:border-teal-800"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 mt-8">
                <a
                  href="https://github.com/srishanthvinukonda44"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-700 text-white text-sm font-medium hover:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/vinukonda-srishanth-9727b9394"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
