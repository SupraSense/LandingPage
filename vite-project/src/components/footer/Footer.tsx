import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/suprasense/about/" },
    { label: "Instagram", href: "https://www.instagram.com/suprasense_/?hl=es-la" },
    { label: "Email", href: "mailto:suprasense111@gmail.com" },
];

export const Footer = () => {
    return (
        <footer className="bg-foreground text-background">
            {/* CTA Section */}
            <div className="container px-4 mx-auto">
                <div className="py-16 md:py-24 lg:py-32 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                        ¿Listo para escalar?
                    </h2>
                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-transparent border-background text-background hover:bg-background hover:text-foreground"
                    >
                        Agendar visita
                        <ArrowUpRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Footer Links */}
            <div className="border-t border-background/20">
                <div className="container px-4 mx-auto">
                    <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Logo */}
                        <span className="text-xl font-bold tracking-tight">
                            SupraSense
                        </span>

                        {/* Social Links */}
                        <div className="flex items-center gap-8">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-sm text-background/60 hover:text-background transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <span className="font-mono text-xs text-background/40">
                            © 2024 SupraSense
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
