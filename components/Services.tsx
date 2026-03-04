import { SlideUp } from "./animations/SlideUp";
import { Server, Database, GitBranch } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Backend Architecture",
            description: "Designing resilient microservices and monoliths with high throughput and low latency. Specialized in Node.js, Go, and scalable API development.",
            icon: Server,
            color: "from-blue-500 to-indigo-500",
            bg: "bg-blue-50"
        },
        {
            title: "Cloud Infrastructure",
            description: "Building secure, multi-region cloud environments on AWS and GCP. Container orchestration with Docker & Kubernetes for zero-downtime deployments.",
            icon: Database,
            color: "from-indigo-500 to-purple-500",
            bg: "bg-indigo-50"
        },
        {
            title: "CI/CD & Automation",
            description: "Creating robust developer workflows. Implementing automated testing, security scanning, and seamless delivery pipelines from code push to production.",
            icon: GitBranch,
            color: "from-purple-500 to-pink-500",
            bg: "bg-purple-50"
        }
    ];

    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-[100%] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SlideUp>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                            Core Capabilities
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Delivering enterprise-grade backend solutions with a focus on automation, reliability, and scale.
                        </p>
                    </div>
                </SlideUp>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <SlideUp key={service.title} delay={0.1 * (index + 1)} className="h-full">
                            <div className="group relative h-full bg-white/60 backdrop-blur-xl border border-slate-200/60 p-8 rounded-3xl hover:bg-white/90 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1 flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 rounded-3xl pointer-events-none" />

                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 ${service.bg} group-hover:scale-110 transition-transform duration-500`}>
                                    <service.icon className={`w-7 h-7 text-transparent bg-clip-text bg-gradient-to-br ${service.color} [&>path]:stroke-[url(#gradient${index})] [&>path]:stroke-indigo-600`} />

                                    {/* SVG Gradient definition for Lucide icons stroke */}
                                    <svg className="hidden">
                                        <defs>
                                            <linearGradient id={`gradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="currentColor" className="text-indigo-500" />
                                                <stop offset="100%" stopColor="currentColor" className="text-purple-500" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed flex-grow">{service.description}</p>
                            </div>
                        </SlideUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
