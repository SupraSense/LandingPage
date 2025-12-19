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
        <section id="servicios" className="border-b border-grid">
            <div className="container py-0 mx-auto">
                {/* Section Header */}
                <div className="border-b border-grid p-8 md:p-12">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                        02 — Servicios
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Los tres pilares
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-3">
                    {pillars.map((pillar, index) => (
                        <div
                            key={pillar.id}
                            className={`group p-8 md:p-10 lg:p-12 transition-all duration-300 hover:bg-muted/30 ${index < pillars.length - 1 ? "border-b md:border-b-0 md:border-r border-grid" : ""
                                }`}
                        >
                            {/* Number & Icon */}
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-mono text-xs text-muted-foreground">
                                    {pillar.id}
                                </span>
                                <pillar.icon
                                    className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                                    strokeWidth={1.5}
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 leading-tight">
                                {pillar.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {pillar.description}
                            </p>

                            {/* Hover Indicator */}
                            <div className="mt-8 h-px bg-transparent group-hover:bg-primary transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
