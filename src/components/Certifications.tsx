import { useInView } from '../hooks/useInView';
import { Award, CheckCircle, Trophy, Star } from 'lucide-react';

const certifications = [
  {
    title: 'AI, Data Analysis & Cyber Security',
    issuer: 'Cognizant Practice Courses',
    type: 'Professional Certification',
    icon: Star,
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-100 dark:border-blue-800',
    topics: ['Artificial Intelligence', 'Data Analysis', 'Cyber Security Analysis'],
  },
  {
    title: 'Advanced AI & Data Analytics',
    issuer: 'Tata Foreign Practice Courses',
    type: 'Professional Certification',
    icon: Star,
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    iconColor: 'text-teal-600 dark:text-teal-400',
    borderColor: 'border-teal-100 dark:border-teal-800',
    topics: ['Advanced AI', 'Data Analytics', 'Machine Learning'],
  },
  {
    title: 'AI Fundamentals Certificate',
    issuer: 'IBM',
    type: 'Industry Certification',
    icon: Award,
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-violet-100 dark:border-violet-800',
    topics: ['AI Concepts', 'Machine Learning Basics', 'Neural Networks'],
  },
  {
    title: 'Smart India Hackathon (SIH)',
    issuer: 'Government of India',
    type: 'Hackathon Participant',
    icon: Trophy,
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
    borderColor: 'border-amber-100 dark:border-amber-800',
    topics: ['Innovation', 'Problem Solving', 'Team Collaboration'],
  },
];

export default function Certifications() {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center">
              <Award size={20} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-widest">Certifications</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Credentials & Achievements</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/20 to-transparent ml-4" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            Industry-recognized certifications that validate my expertise in AI, data, and technology.
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} delay={i * 100} />
          ))}
        </div>

        {/* Stats row */}
        <StatsRow />
      </div>
    </section>
  );
}

function CertCard({ cert, delay }: { cert: typeof certifications[0]; delay: number }) {
  const [ref, inView] = useInView(0.1);
  const Icon = cert.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border ${cert.borderColor} hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-500 hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Top gradient */}
      <div className={`h-1 bg-gradient-to-r ${cert.color}`} />

      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl ${cert.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
            <Icon size={22} className={cert.iconColor} />
          </div>
          <div className="flex-1 min-w-0">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cert.bgColor} ${cert.iconColor} mb-2 inline-block`}>
              {cert.type}
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{cert.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{cert.issuer}</p>
          </div>
        </div>

        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {cert.topics.map((topic) => (
            <div key={topic} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
              <CheckCircle size={12} className="text-teal-500 flex-shrink-0" />
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsRow() {
  const [ref, inView] = useInView(0.1);

  const stats = [
    { value: '4+', label: 'Certifications' },
    { value: '5+', label: 'Projects Built' },
    { value: '2', label: 'Internships' },
    { value: '3', label: 'Languages' },
  ];

  return (
    <div
      ref={ref}
      className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {stats.map(({ value, label }, i) => (
        <div
          key={label}
          style={{ transitionDelay: `${i * 100}ms` }}
          className="text-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
        >
          <div className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent mb-1">
            {value}
          </div>
          <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">{label}</div>
        </div>
      ))}
    </div>
  );
}
