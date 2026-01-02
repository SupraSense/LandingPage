import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const steps = [
    {
        number: "1",
        title: "Inmersión y Análisis de Negocio",
        description:
            "No empezamos con código. Nuestros especialistas se sumergen en tus procesos para entender virtudes, cuellos de botella y oportunidades reales de reingeniería.",
    },
    {
        number: "2",
        title: "Diagnóstico y Opciones Estratégicas",
        description:
            "Presentamos múltiples propuestas alineadas a tus problemáticas, definiendo alcance, presupuesto y la solución técnica ideal para tu etapa actual.",
    },
    {
        number: "3",
        title: "Formalización y Plan de Acción",
        description:
            "Definimos juntos la propuesta ganadora, establecemos un camino claro con hitos definidos y formalizamos el compromiso con documentación transparente.",
    },
    {
        number: "4",
        title: "Desarrollo Iterativo y Validación Continua",
        description:
            "Construimos en ciclos cortos. Recibes entregas funcionales constantes para testear, dar feedback y validar que el producto evoluciona exactamente hacia lo que necesitas.",
    },
    {
        number: "5",
        title: "Evolución y Soporte Post-Lanzamiento",
        description:
            "El lanzamiento no es el fin. Ofrecemos soporte continuo y planes para escalar el sistema a medida que tu negocio crece.",
    },
];

const StepCard = ({
    step,
    index,
    isLast,
}: {
    step: (typeof steps)[0];
    index: number;
    isLast: boolean;
}) => {
    return (
        <div className="relative flex flex-col lg:flex-row h-full">
            {/* Step Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex-1 group h-full"
            >
                {/* Card */}
                <div className="relative p-6 lg:p-8 border border-border bg-background transition-all duration-300 hover:border-violet/40 hover:shadow-[0_0_30px_-10px_hsl(var(--violet-glow)/0.3)] h-full flex flex-col">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-10 h-10 mb-4 border border-violet/30 bg-violet/5 transition-colors group-hover:bg-violet/10 group-hover:border-violet/50">
                        <span className="font-mono text-sm font-semibold text-violet">
                            {step.number}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg lg:text-xl font-semibold mb-3 text-foreground">
                        {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed flex-grow">
                        {step.description}
                    </p>

                    {/* Subtle accent line */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet to-violet/50 transition-all duration-500 group-hover:w-full" />
                </div>
            </motion.div>

            {/* Connector Line - Desktop */}
            {!isLast && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    className="hidden lg:block w-8 h-[1px] bg-gradient-to-r from-border via-violet/30 to-border self-center origin-left"
                />
            )}

            {/* Connector Line - Mobile */}
            {!isLast && (
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    className="lg:hidden w-[1px] h-8 mx-auto bg-gradient-to-b from-border via-violet/30 to-border origin-top"
                />
            )}
        </div>
    );
};

export const Method = () => {
    return (
        <section id="metodo" className="scroll-mt-28 py-20 lg:py-32 bg-background border-t border-grid relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-violet/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-violet/10 rounded-full blur-3xl opacity-30 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 lg:mb-20"
                >
                    <span className="font-mono text-xs text-violet uppercase tracking-widest mb-4 block">
                        — Método
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Nuestro modo de trabajo
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Un proceso estructurado para transformar necesidades de negocio en
                        soluciones de ingeniería robustas.
                    </p>
                </motion.div>

                {/* Process Timeline */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {steps.map((step, index) => (
                        <StepCard
                            key={step.number}
                            step={step}
                            index={index}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 lg:mt-24 text-center"
                >
                    <Button
                        variant="cta"
                        size="xl"
                        onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Agendar Diagnóstico Inicial
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
