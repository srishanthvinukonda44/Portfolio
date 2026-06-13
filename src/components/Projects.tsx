import { useInView } from '../hooks/useInView';
import { FolderOpen, ExternalLink, Github, Bot, HeartPulse, BookOpen, ShoppingCart, Map } from 'lucide-react';

const projects = [
  {
    title: 'JNTUH Chatbot',
    description: 'Developed a chatbot with syllabus navigation and interactive buttons for JNTUH students to access course information and academic resources.',
    icon: Bot,
    tech: ['Python', 'NLP', 'Chatbot', 'AI'],
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
    category: 'AI / Chatbot',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Healthcare Chatbot',
    description: 'Built an intelligent system to receive and process medicine orders online, streamlining the pharmacy ordering experience.',
    icon: HeartPulse,
    tech: ['Python', 'ML', 'Healthcare', 'API'],
    color: 'from-rose-500 to-red-600',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    iconColor: 'text-rose-600 dark:text-rose-400',
    category: 'Healthcare',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'BookCycle Platform',
    description: 'Designed an online marketplace for buying and selling old books using HTML, CSS, and JavaScript with a user-friendly interface.',
    icon: ShoppingCart,
    tech: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
    category: 'Web App',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Old Books Website',
    description: 'Built a dedicated website for selling old books online, focusing on user-friendly navigation and fully responsive design.',
    icon: BookOpen,
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    iconColor: 'text-teal-600 dark:text-teal-400',
    category: 'Web App',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Travel UI/UX Prototype',
    description: 'Designed a 5-step interactive UI/UX flow for planning travel to other countries, emphasizing usability and visual appeal.',
    icon: Map,
    tech: ['Figma', 'UI/UX', 'Prototyping', 'Design'],
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    category: 'UI/UX Design',
    image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Projects() {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center">
              <FolderOpen size={20} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-widest">Projects</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Things I've Built</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/20 to-transparent ml-4" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            A selection of projects that showcase my skills in AI, web development, and UI/UX design.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const [ref, inView] = useInView(0.1);
  const Icon = project.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-800 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Project image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold border border-white/30">
            {project.category}
          </span>
        </div>

        {/* Hover actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <a
            href="https://github.com/srishanthvinukonda44"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/40 flex items-center justify-center text-white border border-white/30 transition-colors"
          >
            <Github size={14} />
          </a>
          <button className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/40 flex items-center justify-center text-white border border-white/30 transition-colors">
            <ExternalLink size={14} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-9 h-9 rounded-lg ${project.bgColor} flex items-center justify-center flex-shrink-0`}>
            <Icon size={17} className={project.iconColor} />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">{project.title}</h3>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-2 py-0.5 rounded-md text-xs font-medium ${project.bgColor} ${project.iconColor}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
