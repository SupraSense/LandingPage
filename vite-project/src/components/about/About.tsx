
export const About = () => {
    return (
        <section id="nosotros" className="border-b border-border bg-white">
            <div className="container py-16 mx-auto px-8 md:px-12 lg:px-16">
                <div className="mb-12 border-b border-border pb-8">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                        06 — Nosotros
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Sobre SupraSense
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Nacimiento</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            SupraSense nace de la necesidad de profesionalizar el desarrollo de software, uniendo rigor técnico con visión de negocio.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Propósito</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Crear una comunidad tecnológica que priorice la calidad, la claridad y el valor real sobre las tendencias pasajeras.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Visión</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Aspiramos a ser un referente en ingeniería aplicada, construyendo sistemas robustos que perduren y evolucionen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
