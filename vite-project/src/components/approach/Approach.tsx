
export const Approach = () => {
    return (
        <section id="enfoque" className="border-b border-grid">
            <div className="container py-0 mx-auto">
                <div className="grid md:grid-cols-2">
                    {/* Left Column */}
                    <div className="border-b md:border-b-0 md:border-r border-grid p-8 md:p-16 lg:p-20 flex items-center">
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                                01 — Enfoque
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                No solo hacemos software.
                            </h2>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="p-8 md:p-16 lg:p-20 flex items-center">
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Ayudamos al cliente a entender sus procesos, encontrar cuellos de
                            botella y tomar decisiones informadas. Traducimos necesidades
                            reales en soluciones concretas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
