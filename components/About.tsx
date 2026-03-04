import { SlideUp } from "./animations/SlideUp";
import { Terminal, Database, Server, GitBranch } from "lucide-react";

export function About() {
    const skills = [
        {
            name: "Backend Architecture",
            description: "Merancang sistem server-side yang scalable dan tangguh.",
            icon: <Server className="w-5 h-5 text-indigo-500" />
        },
        {
            name: "Database Design",
            description: "Menyusun skema yang efisien untuk performa query optimal.",
            icon: <Database className="w-5 h-5 text-emerald-500" />
        },
        {
            name: "System Integration",
            description: "Menghubungkan berbagai API pihak ketiga dan microservices.",
            icon: <GitBranch className="w-5 h-5 text-blue-500" />
        },
        {
            name: "Clean Code",
            description: "Menulis solusi yang maintainable, dapat diuji, dan efisien.",
            icon: <Terminal className="w-5 h-5 text-purple-500" />
        }
    ];

    return (
        <section id="about" className="relative py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.03)_0%,transparent_70%)] blur-3xl"></div>
                <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.02)_0%,transparent_70%)] blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* ZIG-ZAG: Left Side -> Skill Cards (Order 2 on Mobile, 1 on Desktop) */}
                    <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
                        <SlideUp className="sm:col-span-2 mb-2 hidden lg:block">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                                Keahlian Inti
                            </h2>
                            <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
                        </SlideUp>

                        {skills.map((skill, index) => (
                            <SlideUp key={skill.name} delay={0.2 + (index * 0.1)} className="h-full">
                                <div className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 h-full group">
                                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-all duration-300">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{skill.name}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">{skill.description}</p>
                                </div>
                            </SlideUp>
                        ))}
                    </div>

                    {/* ZIG-ZAG: Right Side -> Text Section (Order 1 on Mobile, 2 on Desktop) */}
                    <div className="lg:col-span-6 space-y-6 text-lg text-slate-600 leading-relaxed pt-2 order-1 lg:order-2">
                        <SlideUp delay={0.1}>
                            <div className="mb-8 lg:mb-6">
                                <h2 className="text-3xl lg:text-2xl font-bold tracking-tight text-slate-900 mb-4 lg:mb-6">
                                    Tentang Saya
                                </h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded-full lg:hidden mb-6"></div>
                            </div>
                            <p className="font-medium text-slate-800 text-xl">
                                Halo, saya Dimas. Latar belakang saya adalah seorang Junior Programmer dengan ketertarikan besar di dunia web development.
                            </p>
                        </SlideUp>

                        <SlideUp delay={0.2}>
                            <p>
                                Saya sangat menikmati proses belajar, mulai dari memecahkan masalah logika sederhana hingga merangkai baris kode menjadi sebuah aplikasi yang dapat digunakan sehari-hari.
                            </p>
                        </SlideUp>

                        <SlideUp delay={0.3}>
                            <p>
                                Sebagai orang yang baru memulai karir profesional, saya percaya bahwa fondasi pemrograman yang kuat, kemauan keras untuk menyerap ilmu baru, dan kedisiplinan dalam praktek *coding* adalah kunci utama untuk terus berkembang.
                            </p>
                        </SlideUp>

                        <SlideUp delay={0.4}>
                            <p>
                                Saat ini, fokus saya adalah terus mengasah kemampuan teknis saya dan mencari peluang pekerjaan di mana saya bisa terjun langsung mengerjakan proyek *real-world*, berkolaborasi dengan para senior, sekaligus berdedikasi memberikan kontribusi nyata bagi tempat saya bekerja.
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    );
}
