import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'InAmigos Foundation',
    role: 'Graphic Designer',
    period: 'January 2025',
    type: 'Internship',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    iconColor: 'text-rose-600 dark:text-rose-400',
    highlights: [
      'Created creative posters for marketing campaigns',
      'Designed visual assets to improve website and brand presence',
      'Collaborated with the marketing team on visual identity',
    ],
  },
  {
    company: 'Android App Development Workshop',
    role: 'Workshop Lead',
    period: 'June 2025',
    type: 'Workshop',
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    iconColor: 'text-teal-600 dark:text-teal-400',
    highlights: [
      'Led as the primary Android app developer throughout the workshop',
      'Designed application interfaces to enhance website appearance',
      'Mentored participants in Android development best practices',
    ],
  },
];

export default function Experience() {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center">
              <Briefcase size={20} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-widest">Experience</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Work & Internships</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/20 to-transparent ml-4" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            Practical experience gained through internships and hands-on workshops.
          </p>
        </div>

        {/* Experience cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, delay }: { exp: typeof experiences[0]; delay: number }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-500 hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 bg-gradient-to-r ${exp.color}`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl ${exp.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
            <Briefcase size={22} className={exp.iconColor} />
          </div>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
            {exp.type}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{exp.company}</h3>
        <p className={`font-semibold text-sm mb-1 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
          {exp.role}
        </p>
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm mb-5">
          <Calendar size={13} />
          <span>{exp.period}</span>
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5">
          {exp.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
              <ChevronRight size={14} className="text-teal-500 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
