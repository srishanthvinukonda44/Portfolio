import { useInView } from '../hooks/useInView';
import { Layers, Code2, Palette, Monitor, Globe, Users } from 'lucide-react';

const skillCategories = [
  {
    icon: Palette,
    title: 'Graphic Design',
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    iconColor: 'text-rose-600 dark:text-rose-400',
    skills: ['Adobe Photoshop', 'Adobe XD', 'Figma', 'Sketch'],
  },
  {
    icon: Code2,
    title: 'Programming',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    skills: ['Python', 'Java', 'C'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    color: 'from-teal-500 to-emerald-600',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    iconColor: 'text-teal-600 dark:text-teal-400',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    icon: Monitor,
    title: 'UI/UX Design',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
    skills: ['Wireframing', 'Prototyping', 'User Research'],
  },
  {
    icon: Layers,
    title: 'AI & ML',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
    skills: ['Machine Learning', 'Data Analysis', 'AI Fundamentals', 'Generative AI'],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    color: 'from-slate-500 to-slate-600',
    bg: 'bg-slate-50 dark:bg-slate-800/50',
    iconColor: 'text-slate-600 dark:text-slate-400',
    skills: ['Communication', 'Teamwork', 'Leadership', 'Problem Solving'],
  },
];

const techStack = [
  'Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript', 'React',
  'Figma', 'Adobe XD', 'Photoshop', 'Sketch', 'AI/ML', 'Data Analysis',
];

export default function Skills() {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center">
              <Layers size={20} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-widest">Skills</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What I Do</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/20 to-transparent ml-4" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            A versatile skill set combining technical expertise with creative design capabilities.
          </p>
        </div>

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} delay={i * 100} />
          ))}
        </div>

        {/* Tech tags */}
        <TechStack tags={techStack} />
      </div>
    </section>
  );
}

function SkillCard({ category, delay }: { category: typeof skillCategories[0]; delay: number }) {
  const [ref, inView] = useInView(0.1);
  const Icon = category.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-500 hover:-translate-y-1 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
        <Icon size={22} className={category.iconColor} />
      </div>
      <h3 className="font-bold text-slate-900 dark:text-white mb-3">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-100 dark:border-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function TechStack({ tags }: { tags: string[] }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4 text-center">
        Technologies & Tools
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 cursor-default shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
