import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 mt-auto">
            <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="text-xl font-extrabold text-slate-900 tracking-tight">Dimas.</span>
                    <span className="text-sm font-medium text-slate-500">Software Developer</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-full transition-all">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 rounded-full transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:dimassputra1616@gmail.com" className="p-2 text-slate-400 hover:text-rose-600 hover:bg-slate-50 rounded-full transition-all">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <div className="text-sm text-slate-400 font-medium">
                    &copy; {new Date().getFullYear()} Dimas Saputra.
                </div>
            </div>
        </footer>
    );
}
