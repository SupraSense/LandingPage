import { motion } from "framer-motion";

export const Community = () => {
    return (
        <section id="red" className="scroll-mt-28 border-t border-b border-grid bg-white overflow-hidden">
            <div className="container py-16 mx-auto px-8 md:px-12 lg:px-16">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="font-mono text-xs uppercase tracking-widest text-violet mb-4 block">
                            — Red
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                            Una red técnica en crecimiento
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="text-lg text-muted-foreground space-y-6 leading-relaxed"
                    >
                        <p>
                            SupraSense surge a partir de proyectos reales desarrollados en colaboración con empresas y equipos técnicos en formación.
                        </p>
                        <p>
                            Hoy trabajamos junto a una red de desarrolladores y futuros ingenieros, combinando aprendizaje real con ejecución profesional.
                        </p>
                        <p>
                            Nuestro objetivo es compartir y escalar esta experiencia en distintos negocios, manteniendo calidad, responsabilidad y visión a largo plazo.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
