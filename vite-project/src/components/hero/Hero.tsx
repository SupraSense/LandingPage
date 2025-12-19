import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="absolute inset-0 geometric-pattern" />

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
            <div className="absolute bottom-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container relative z-10 px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Label */}
                    <div
                        className="inline-flex items-center gap-2 mb-8 opacity-0 animate-fade-in"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                            Software Engineering Agency
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 opacity-0 animate-slide-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Ingeniería aplicada.
                        <br />
                        <span className="text-muted-foreground">Visión de producto.</span>
                        <br />
                        Creatividad estratégica.
                    </h1>

                    {/* Subheadline */}
                    <p
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance opacity-0 animate-fade-in"
                        style={{ animationDelay: "0.4s" }}
                    >
                        SupraSense es tu socio técnico. Analizamos procesos, diseñamos sistemas
                        inteligentes y creamos soluciones escalables.
                    </p>

                    {/* CTA */}
                    <div
                        className="opacity-0 animate-fade-in"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <Button variant="hero" size="lg" className="group">
                            Hablemos de tu proyecto
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-border opacity-50" />
        </section>
    );
};
