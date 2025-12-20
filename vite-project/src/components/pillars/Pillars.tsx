import { motion } from "framer-motion";
import { Settings, Terminal, Eye } from "lucide-react";

const pillars = [
    {
        id: "01",
        icon: Settings,
        title: "Ingeniería aplicada al negocio.",
        description:
            "Ordenamos procesos, información y operación para poder escalar con criterio. Priorizamos la claridad antes que el código.",
    },
    {
        id: "02",
        icon: Terminal,
        title: "Desarrollo moderno y eficiente.",
        description:
            "Modernizamos la operación sin perder contexto. Diseñamos sistemas que funcionan en producción, alineados al negocio.",
    },
    {
        id: "03",
        icon: Eye,
        title: "Contenido, comunicación y transferencia.",
        description:
            "No solo entregamos software, transferimos conocimiento. Narrativa técnica y documentación clara para profesionales.",
    },
];

export const Pillars = () => {
    return (
        <section id="servicios" className="scroll-mt-28 border-b border-grid overflow-hidden">
            <div className="container py-0 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="border-b border-grid p-8 md:p-12 lg:p-12"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-violet mb-4 block">
                        — Servicios
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Los tres pilares
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-3">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }} // Staggered delay
                            className={`group p-8 md:p-12 lg:p-12 transition-all duration-300 hover:bg-muted/30 hover:border-violet/40 hover:shadow-[0_0_30px_-10px_hsl(var(--violet-glow)/0.3)] ${index < pillars.length - 1 ? "border-b md:border-b-0 md:border-r border-grid" : ""
                                }`}
                        >
                            {/* Number & Icon */}
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-mono text-xs text-muted-foreground group-hover:text-violet transition-colors duration-300">
                                </span>
                                <pillar.icon
                                    className="w-8 h-8 text-muted-foreground group-hover:text-violet transition-colors duration-300"
                                    strokeWidth={1.5}
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-tight group-hover:text-violet/90 transition-colors duration-300">
                                {pillar.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {pillar.description}
                            </p>

                            {/* Hover Indicator */}
                            <div className="mt-8 h-px bg-transparent group-hover:bg-violet transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
