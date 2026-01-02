import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            if (!containerRef.current || !spotlightRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = ev.clientX - rect.left;
            const y = ev.clientY - rect.top;

            spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(124, 58, 237, 0.15), transparent 40%)`;
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", updateMousePosition);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", updateMousePosition);
            }
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20"
        >
            {/* Spotlight Effect (Behind Grid) - Optimized with direct DOM manipulation */}
            <div
                ref={spotlightRef}
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at 50% 50%, rgba(124, 58, 237, 0.15), transparent 40%)`, // Default fallback
                }}
            />

            {/* Grid Pattern */}
            <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            />

            {/* Content */}
            <div className="relative z-10 container px-4 mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-8 leading-[1.1]">
                    Análisis Profundo.
                    <br />
                    <span className="text-brand-grey">Software con Criterio.</span>
                    <br />
                    Ejecución Técnica.
                </h1>

                <p className="text-xl text-gray-600 max-w-[600px] mx-auto mb-12 leading-relaxed text-balance">
                    Llevamos tu negocio al siguiente nivel mediante reingeniería de tus procesos con software y desarrollo estratégico.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <Button
                        variant="cta"
                        size="xl"
                        className="group text-lg"
                        onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Agendar Diagnóstico
                        <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Button>
                </motion.div>
            </div>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-border opacity-50" />
        </section>
    );
};
