import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Users, Building2, Server, Globe, Database, Component, ShieldCheck, Box, Shield, Lock, Activity } from "lucide-react";
import Image from "next/image";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Helper to map string to icon component dynamically
const IconMap: Record<string, any> = {
    server: Server,
    database: Database,
    component: Component,
    cloud: Globe,
    security: ShieldCheck,
    box: Box
};

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Header / Hero Section */}
            <div className="bg-white border-b border-slate-200 pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Kembali ke Portofolio
                    </Link>

                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest rounded-full border border-indigo-100">
                            {project.category}
                        </span>
                        {project.systemOverview?.deploymentStatus.includes("Live") && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full border border-emerald-100">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Production
                            </span>
                        )}
                        {project.myRole && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
                                Role: {project.myRole}
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-3xl">
                        {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Kunjungi Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm"
                            >
                                <Github className="w-5 h-5" />
                                Source Code
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                    {/* Main Content (Left, 2 columns on desktop) */}
                    <div className="md:col-span-2 space-y-16">

                        {/* Measurable Results (Metrics) */}
                        {project.metrics && project.metrics.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                                    <Activity className="w-6 h-6 text-indigo-600" />
                                    Measurable Impact
                                </h2>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {project.metrics.map((metric, idx) => (
                                        <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">
                                                {metric.label}
                                            </span>
                                            <div>
                                                <div className="flex items-baseline gap-2 mb-1">
                                                    <span className="text-sm text-slate-400 line-through decoration-slate-300">{metric.before}</span>
                                                    <span className="text-xl font-extrabold text-slate-900">{metric.after}</span>
                                                </div>
                                                <div className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-emerald-50 text-emerald-700">
                                                    {metric.improvement}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Problem & Solution Narrative */}
                        {project.problemSolution && (
                            <section className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                                        The Challenge
                                    </h2>
                                    <p className="text-lg text-slate-600 leading-relaxed bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-rose-400">
                                        {project.problemSolution.problem}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">The Solution</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {project.problemSolution.solution}
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* Core Features */}
                        {project.coreFeatures && project.coreFeatures.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                                    Core Features
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {project.coreFeatures.map((feature, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors group">
                                            <h3 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Architecture Diagram */}
                        {project.architectureDiagram && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                                    System Architecture
                                </h2>
                                <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 p-2">
                                    {/* Wrapping in a dark container to simulate a blueprint/diagram vibe if the image has a transparent or dark background. Adjust bg-color based on actual diagram design. */}
                                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-800/50">
                                        <Image
                                            src={project.architectureDiagram}
                                            alt={`${project.title} Architecture Diagram`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, 800px"
                                        />
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Architecture */}
                        {project.architecture && project.architecture.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                                    Architecture & Infrastructure
                                </h2>
                                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                                    {project.architecture.map((item, idx) => {
                                        const IconComponent = IconMap[item.icon] || Box;
                                        return (
                                            <div key={idx} className={`p-6 flex gap-4 sm:items-center flex-col sm:flex-row ${idx !== 0 ? 'border-t border-slate-100' : ''}`}>
                                                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-400">
                                                    <IconComponent className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                                                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.detail}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>
                        )}

                        {/* Security Approach */}
                        {project.securityApproach && project.securityApproach.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                                    <Shield className="w-6 h-6 text-indigo-600" />
                                    Security & Data Integrity
                                </h2>
                                <div className="grid gap-4">
                                    {project.securityApproach.map((sec, idx) => (
                                        <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                            <div className="flex-shrink-0 mt-0.5">
                                                <Lock className="w-5 h-5 text-slate-400" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">{sec.title}</h3>
                                                <p className="text-sm text-slate-600 leading-relaxed">{sec.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Project Impact */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                                Business Impact
                            </h2>
                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
                                {project.impacts.map((impact, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                        </div>
                                        <p className="text-slate-700 leading-relaxed text-lg">
                                            {impact}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Technical Challenges */}
                        {project.technicalChallenges && project.technicalChallenges.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight border-t border-slate-200 pt-16">
                                    Technical Challenges
                                </h2>
                                <div className="space-y-4">
                                    {project.technicalChallenges.map((tc, idx) => (
                                        <div key={idx} className="bg-slate-100/50 p-6 rounded-2xl border border-slate-200">
                                            <h3 className="font-semibold text-slate-900 mb-2 flex gap-2">
                                                <span className="text-indigo-600">Q:</span>
                                                {tc.challenge}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed flex gap-2">
                                                <span className="text-emerald-600 font-semibold">A:</span>
                                                {tc.solution}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Gallery Preview */}
                        {project.images && project.images.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight border-t border-slate-200 pt-16">
                                    System Showcase
                                </h2>
                                <div className="grid grid-cols-1 gap-6">
                                    {project.images.map((img, index) => (
                                        <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex items-center justify-center">
                                            <Image
                                                src={img.src}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                fill
                                                className="object-cover object-left-top"
                                                sizes="(max-width: 768px) 100vw, 800px"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar (Right, 1 column on desktop) */}
                    <div className="space-y-6 sticky top-24">

                        {/* System Overview Details */}
                        {project.systemOverview && (
                            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
                                <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                                    System Overview
                                </h3>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                                        <Users className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Users</div>
                                        <div className="text-sm font-semibold text-slate-900">{project.systemOverview.users}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <Building2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Scale</div>
                                        <div className="text-sm font-semibold text-slate-900">{project.systemOverview.departments}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <Globe className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</div>
                                        <div className="text-sm font-semibold text-slate-900">{project.systemOverview.deploymentStatus}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                                        <Server className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Infrastructure</div>
                                        <div className="text-sm font-semibold text-slate-900">{project.systemOverview.infrastructure}</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tech Stack */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
                                Stack & Tools
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
