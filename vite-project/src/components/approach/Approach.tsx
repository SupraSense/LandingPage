
import { motion } from "framer-motion";

export const Approach = () => {
    return (
        <section id="enfoque" className="scroll-mt-28 border-b border-grid overflow-hidden">
            <div className="container py-0 mx-auto">
                <div className="grid md:grid-cols-2">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="border-b md:border-b-0 md:border-r border-grid p-8 md:p-12 lg:p-12 flex items-center"
                    >
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest text-violet mb-4 block">
                                — Enfoque
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                <span className="text-foreground">No solo hacemos software.</span>
                            </h2>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="p-8 md:p-12 lg:p-12 flex items-center"
                    >
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Ayudamos al cliente a entender sus procesos, encontrar cuellos de botella y
                            tomar decisiones informadas. Traducimos necesidades reales en <span className="text-violet font-medium">soluciones concretas</span>.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
