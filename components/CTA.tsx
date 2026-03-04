import { SlideUp } from "./animations/SlideUp";
import { Mail, MessageCircle, Send } from "lucide-react";

export function CTA() {
    return (
        <section id="contact" className="relative py-24 bg-slate-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.04)_0%,transparent_60%)] blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <SlideUp>
                    <div className="bg-white border border-slate-200/60 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                        {/* Decorative Background for Card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                            {/* Left Text Content */}
                            <div className="md:w-3/5">
                                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                                    Mari Bekerja Sama
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Punya ide proyek, butuh bantuan untuk memperbaiki arsitektur backend, atau sekadar ingin diskusi teknis? Jangan ragu untuk menghubungi saya.
                                </p>
                            </div>

                            {/* Right Action Buttons */}
                            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:w-2/5 justify-end">
                                <a
                                    href="mailto:dimassputra1616@gmail.com"
                                    className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                                >
                                    <Mail className="w-5 h-5" />
                                    Kirim Email
                                </a>

                                <div className="flex gap-4 w-full sm:w-auto">
                                    <a
                                        href="#"
                                        className="flex-1 sm:flex-none flex items-center justify-center p-3.5 bg-slate-50 border border-slate-200 text-emerald-600 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                                        aria-label="WhatsApp"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-1 sm:flex-none flex items-center justify-center p-3.5 bg-slate-50 border border-slate-200 text-sky-500 rounded-xl hover:bg-sky-50 hover:border-sky-200 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                                        aria-label="Telegram"
                                    >
                                        <Send className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SlideUp>
            </div>
        </section>
    );
}
