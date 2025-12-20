import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="nosotros" className="scroll-mt-28 border-b border-border bg-white overflow-hidden">
            <div className="container py-16 mx-auto px-8 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12 border-b border-border pb-8"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-violet mb-4 block">
                        — Nosotros
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Sobre SupraSense
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { title: "Nacimiento", content: "SupraSense nace de la necesidad de profesionalizar el desarrollo de software, uniendo rigor técnico con visión de negocio." },
                        { title: "Propósito", content: (<span>Potenciar el crecimiento empresarial mediante la reingeniería de procesos. Entendemos el software no como un fin, sino como una herramienta estratégica para optimizar operaciones, eliminar ineficiencias y escalar negocios reales.</span>) },
                        { title: "Visión", content: (<span>Aspiramos a ser un referente en ingeniería aplicada, construyendo sistemas robustos que perduren y evolucionen.</span>) }
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                        >
                            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
