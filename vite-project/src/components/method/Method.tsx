
export const Method = () => {
    const steps = [
        {
            id: "01",
            title: "Contacto inicial",
            description: "Entendimiento del negocio y su situación actual."
        },
        {
            id: "02",
            title: "Diagnóstico y propuesta",
            description: "Definición de alcance, prioridades y documentación inicial."
        },
        {
            id: "03",
            title: "Acuerdos y contratación",
            description: "Contratos firmados, condiciones comerciales y esquema de cobros."
        },
        {
            id: "04",
            title: "Desarrollo",
            description: "Diseño y ejecución junto a la red técnica."
        },
        {
            id: "05",
            title: "Entregas y revisión",
            description: "Iteraciones, validaciones y ajustes con el cliente."
        },
        {
            id: "06",
            title: "Mantenimiento y evolución",
            description: "Soporte continuo, costos operativos y escalabilidad."
        }
    ];

    return (
        <section id="metodo" className="border-b border-grid bg-white">
            <div className="container py-0 mx-auto">
                <div className="border-b border-grid p-8 md:p-12 lg:p-16">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                        04 — Método
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Nuestro modo de trabajo
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Procesos claros. Acuerdos definidos. Desarrollo responsable.
                    </p>
                </div>

                <div className="flex flex-wrap">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="w-full md:w-1/2 lg:w-1/3 p-8 md:p-10 border border-grid -ml-px -mt-px relative z-10 hover:z-20 transition-all bg-white"
                        >
                            <span className="font-mono text-xs text-muted-foreground mb-4 block">
                                {step.id}
                            </span>
                            <h3 className="text-xl font-semibold mb-2">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer of the section */}
                <div className="p-8 md:p-12 text-center border-t border-grid bg-muted/20">
                    <p className="text-muted-foreground font-medium">
                        Todo el proceso se realiza con documentación clara y acuerdos firmados.
                    </p>
                </div>
            </div>
        </section>
    );
};
