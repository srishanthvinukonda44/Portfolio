import { useInView } from '../hooks/useInView';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    institution: 'VREC Nizamabad',
    degree: 'B.Tech in CSE (AI & ML)',
    period: '2024 – 2027',
    affiliation: 'Affiliated to JNTUH',
    location: 'Nizamabad, Telangana',
    current: true,
    description: 'Pursuing Bachelor of Technology in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning.',
  },
  {
    institution: 'SR Junior College',
    degree: 'Intermediate (MPC)',
    period: '2022 – 2024',
    affiliation: 'Board of Intermediate Education',
    location: 'Telangana, India',
    current: false,
    description: 'Completed intermediate education with a strong foundation in Mathematics, Physics, and Chemistry.',
  },
];

export default function Education() {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center">
              <GraduationCap size={20} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-widest">Education</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Academic Background</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/20 to-transparent ml-4" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-teal-300 to-transparent dark:from-teal-600 dark:via-teal-800" />

          <div className="space-y-8">
            {education.map((item, i) => (
              <EducationCard key={item.institution} item={item} delay={i * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationCard({ item, delay }: { item: typeof education[0]; delay: number }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative pl-16 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-3.5 top-5 w-5 h-5 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-900 flex items-center justify-center">
        {item.current && <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />}
      </div>

      <div className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-700 hover:shadow-lg transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.institution}</h3>
            <p className="text-teal-600 dark:text-teal-400 font-semibold text-sm">{item.degree}</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{item.affiliation}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            {item.current && (
              <span className="px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                Current
              </span>
            )}
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
              <Calendar size={13} />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs">
              <MapPin size={12} />
              <span>{item.location}</span>
            </div>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}
