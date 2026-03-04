import { SlideUp } from "./animations/SlideUp";
import { FadeIn } from "./animations/FadeIn";


export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-white">
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.04)_0%,transparent_70%)] blur-3xl"></div>
                <div className="absolute top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.03)_0%,transparent_70%)] blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Text Content */}
                    <div>
                        <SlideUp duration={0.8}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[11px] font-bold uppercase tracking-wider mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Open to Opportunities
                            </div>
                        </SlideUp>

                        <SlideUp delay={0.1} duration={0.8}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                                Hi, I&apos;m Dimas.
                            </h1>
                        </SlideUp>

                        <SlideUp delay={0.2} duration={0.8}>
                            <p className="text-xl md:text-2xl text-slate-700 mb-6 max-w-2xl font-medium">
                                Junior Programmer
                            </p>
                        </SlideUp>

                        <SlideUp delay={0.3} duration={0.8}>
                            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                                Saya adalah seorang programmer pemula yang sangat antusias dalam mempelajari teknologi web dan membangun aplikasi interaktif. Selalu bersemangat untuk berkembang dan siap berkontribusi dalam tim pemasaran.
                            </p>
                        </SlideUp>

                        <FadeIn delay={0.4} duration={0.8}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#projects"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
                                >
                                    View Projects
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: Visual Graphic / Photo */}
                    <div className="hidden lg:flex relative justify-center items-center">
                        <SlideUp delay={0.4} duration={1}>
                            <div className="relative w-80 h-96 group">
                                {/* Decorative elements behind */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 rounded-full blur-xl border border-indigo-200"></div>
                                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-100 rounded-full blur-xl border border-emerald-200"></div>

                                {/* Main Photo Container */}
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-100 border-4 border-white/60 backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
                                    <span className="text-8xl font-black text-slate-200 tracking-tighter">DS</span>
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute top-8 -right-8 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
                                    <div className="flex items-center gap-2.5">
                                        <div className="flex -space-x-2">
                                            <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-700">JS</div>
                                            <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">PHP</div>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-slate-500 font-medium">Tech Stack</p>
                                            <p className="text-xs font-bold text-slate-800">Junior</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    );
}
