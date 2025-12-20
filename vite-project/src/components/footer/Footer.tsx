import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/suprasense/about/" },
    { label: "Instagram", href: "https://www.instagram.com/suprasense_/?hl=es-la" },
    { label: "Email", href: "mailto:hola@suprasense.com" },
];

export const Footer = () => {
    return (
        <footer className="bg-foreground text-background overflow-hidden relative">
            {/* CTA Section */}
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="py-16 md:py-24 lg:py-32 text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                        ¿Listo para empezar?
                    </h2>
                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-transparent border-background text-background hover:bg-background hover:text-foreground"
                    >
                        Agendar un diagnóstico
                        <ArrowUpRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>

            {/* Footer Links */}
            <div className="border-t border-background/20">
                <div className="container px-4 mx-auto">
                    <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Logo */}
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img src="/white_logo.svg" alt="Logo" className="h-8 w-auto" />
                            <span className="text-xl font-bold tracking-tight">
                                SupraSense
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-8">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.label !== "Email" ? "_blank" : undefined}
                                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                                    className="font-mono text-sm text-background/60 hover:text-background transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <span className="font-mono text-xs text-background/40">
                            © 2025 SupraSense
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
