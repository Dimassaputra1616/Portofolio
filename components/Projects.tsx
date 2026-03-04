"use client";

import { SlideUp } from "./animations/SlideUp";
import { Github, ExternalLink, Code, Images, X, Maximize, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { projects } from "../lib/data";

function ProjectImageSlider({ images, title }: { images: { src: string }[], title: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            {images.map((img, idx) => (
                <Image
                    key={img.src}
                    src={img.src}
                    alt={`${title} - Preview ${idx + 1}`}
                    fill
                    className={`object-cover object-left-top transition-opacity duration-1000 ${idx === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            ))}
        </>
    );
}

export function Projects() {
    const [openLightbox, setOpenLightbox] = useState(false);
    const [currentImages, setCurrentImages] = useState<{ src: string }[]>([]);

    const handleOpenGallery = (images: { src: string }[]) => {
        setCurrentImages(images);
        setOpenLightbox(true);
    };

    return (
        <section id="projects" className="relative py-24 bg-white overflow-hidden border-b border-slate-200">
            {/* Subtle Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] -left-[20%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.02)_0%,transparent_70%)] blur-3xl"></div>
                <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.03)_0%,transparent_70%)] blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SlideUp>
                    <div className="mb-16 md:text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                            Projects
                        </h2>
                        <p className="text-slate-600">
                            Beberapa proyek dan solusi arsitektur yang pernah saya implementasikan.
                        </p>
                    </div>
                </SlideUp>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const hasImages = project.images && project.images.length > 0;

                        return (
                            <SlideUp key={project.title} delay={0.1 * index} className="h-full">
                                <div className="flex flex-col h-full bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-default relative">

                                    {/* Demo Placeholder / Image Area */}
                                    <div
                                        className={`w-full bg-slate-50/80 border-b border-slate-100 aspect-video relative flex flex-col items-center justify-center p-5 overflow-hidden ${hasImages ? 'cursor-pointer group/image' : ''}`}
                                        onClick={() => hasImages && handleOpenGallery(project.images)}
                                    >
                                        {hasImages ? (
                                            <>
                                                {/* Badge on Image Corner */}
                                                {project.title.includes("Ticketing") && (
                                                    <div className="absolute top-2 right-2 md:top-3 md:right-3 z-10 flex items-center gap-1.5 px-2 py-1 bg-white/95 backdrop-blur-md text-emerald-600 text-[10px] font-bold uppercase tracking-wider rounded border border-emerald-100/50 shadow-sm transition-opacity duration-300 group-hover/image:opacity-0">
                                                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                                                        Live Production
                                                    </div>
                                                )}

                                                {/* Image inside rounded container */}
                                                <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-200/80 shadow-sm transition-transform duration-700 ease-out group-hover/image:scale-[1.03]">
                                                    <ProjectImageSlider images={project.images} title={project.title} />

                                                    {/* Modern Hover Overlay */}
                                                    <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover/image:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                                        <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-slate-900 font-semibold text-xs shadow-xl transform translate-y-4 opacity-0 group-hover/image:translate-y-0 group-hover/image:opacity-100 transition-all duration-500 ease-out border border-white/20">
                                                            <Images className="w-4 h-4 text-indigo-600" />
                                                            <span>View Gallery</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center w-full h-full">
                                                <Code className="w-8 h-8 text-slate-300 mb-3 group-hover:text-slate-400 group-hover:scale-105 transition-all duration-300" />
                                                <p className="text-xs text-slate-400 font-medium tracking-wide group-hover:text-slate-500 transition-colors duration-300">{project.imagePlaceholder}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                                {project.category}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                                            {project.summary}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-medium rounded-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4 mt-auto pt-5 border-t border-slate-100/60">
                                            <a
                                                href={`/projects/${project.slug}`}
                                                className="inline-flex items-center gap-2 text-indigo-600 text-sm font-semibold hover:text-indigo-700 transition-colors group/btn"
                                            >
                                                Lihat Detail Proyek
                                                <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        );
                    })}
                </div>
            </div>

            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                slides={currentImages}
                plugins={[Zoom, Counter]}
                carousel={{ padding: "16px", spacing: "30%" }}
                animation={{ fade: 300, swipe: 250 }}
                styles={{
                    container: { backgroundColor: "rgba(15, 23, 42, 0.95)", backdropFilter: "blur(8px)" },
                    icon: { color: "#fff", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" },
                }}
                render={{
                    iconClose: () => <X className="w-7 h-7" />,
                    iconZoomIn: () => <Maximize className="w-6 h-6" />,
                    iconZoomOut: () => <ZoomIn className="w-6 h-6" />,
                    iconPrev: () => <ChevronLeft className="w-8 h-8" />,
                    iconNext: () => <ChevronRight className="w-8 h-8" />,
                }}
            />
        </section>
    );
}
