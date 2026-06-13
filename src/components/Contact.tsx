import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'srishanthvinukonda44@gmail.com',
    href: 'mailto:srishanthvinukonda44@gmail.com',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    iconColor: 'text-teal-600 dark:text-teal-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '9110330063',
    href: 'tel:9110330063',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Telangana, India',
    href: undefined,
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
];

export default function Contact() {
  const [headerRef, headerInView] = useInView(0.1);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center">
              <MessageSquare size={20} className="text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-widest">Contact</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Let's Work Together</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/20 to-transparent ml-4" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            I'm open to internship opportunities in AI/ML, UI/UX design, and web development. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <ContactInfo />

          {/* Right side - Form */}
          <ContactForm
            form={form}
            sent={sent}
            sending={sending}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
    >
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Get In Touch</h3>
      <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
        Whether you have an internship opportunity, want to collaborate on a project, or just want to say hello —
        my inbox is always open. I'll get back to you as soon as possible!
      </p>

      {/* Contact items */}
      <div className="space-y-4 mb-10">
        {contactInfo.map(({ icon: Icon, label, value, href, bg, iconColor }) => (
          <div key={label} className="flex items-center gap-4">
            <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
              <Icon size={19} className={iconColor} />
            </div>
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">{label}</p>
              {href ? (
                <a
                  href={href}
                  className="text-slate-800 dark:text-slate-200 font-medium text-sm hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {value}
                </a>
              ) : (
                <p className="text-slate-800 dark:text-slate-200 font-medium text-sm">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">Find me on</p>
        <div className="flex gap-3">
          <a
            href="https://github.com/srishanthvinukonda44"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-700 text-white text-sm font-medium hover:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/vinukonda-srishanth-9727b9394"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Availability card */}
      <div className="mt-10 p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 border border-teal-100 dark:border-teal-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-teal-700 dark:text-teal-300 font-semibold text-sm">Available for Opportunities</span>
        </div>
        <p className="text-teal-600 dark:text-teal-400 text-sm">
          Currently seeking internships in AI/ML, UI/UX Design, and Web Development.
        </p>
      </div>
    </div>
  );
}

interface ContactFormProps {
  form: { name: string; email: string; subject: string; message: string };
  sent: boolean;
  sending: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

function ContactForm({ form, sent, sending, onChange, onSubmit }: ContactFormProps) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
    >
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
        {sent ? (
          <div className="flex flex-col items-center justify-center h-full py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-4">
              <CheckCircle size={32} className="text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Thanks for reaching out. I'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-200 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={onChange}
                required
                placeholder="Internship Opportunity / Project Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-200 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-200 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 disabled:bg-teal-600/70 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 disabled:translate-y-0"
            >
              {sending ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
