
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Schema Definition
const diagnosticSchema = z.object({
    fullName: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
    company: z.string().optional(),
    phone: z.string().regex(/^[0-9+\-\s()]+$/, { message: "Formato de teléfono inválido" }), // Basic format check
    email: z.string().email({ message: "Introduce un email válido" }),
    consultationReason: z.string().min(5, { message: "Por favor detalla un poco más (mín. 5 caracteres)" }),
});

type DiagnosticFormData = z.infer<typeof diagnosticSchema>;

export const DiagnosticSection = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<DiagnosticFormData>({
        resolver: zodResolver(diagnosticSchema),
        mode: 'onChange',
    });

    const onSubmit = async (data: DiagnosticFormData) => {
        setIsSuccess(false);
        setIsError(false);

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                console.error("EmailJS credentials are missing in .env file");
                throw new Error("Configuration incomplete");
            }

            // Send email using EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                data as unknown as Record<string, unknown>, // Cast to satisfy EmailJS types if needed
                publicKey
            );

            console.log("Email sent successfully:", data);
            setIsSuccess(true);
            reset();

            // Clear success message after 5 seconds
            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);

        } catch (error) {
            console.error("EmailJS Error:", error);
            setIsError(true);

            // Clear error message after 5 seconds
            setTimeout(() => {
                setIsError(false);
            }, 5000);
        }
    };

    return (
        <section id="diagnostico" className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-10 text-center"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest text-violet-600 mb-3 block">
                            — Diagnóstico Inicial
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Hablemos de tu Proyecto
                        </h2>
                        <p className="text-gray-500 max-w-lg mx-auto">
                            Cuéntanos tu desafío y recibe una primera evaluación de viabilidad técnica y estrategia de desarrollo.
                        </p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="text-sm font-medium text-gray-700 block">
                                    Nombre Completo
                                </label>
                                <input
                                    id="fullName"
                                    {...register("fullName")}
                                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all duration-200
                    ${errors.fullName
                                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                                            : 'border-gray-200 focus:border-violet-600 focus:ring-1 focus:ring-violet-600'
                                        }`}
                                    placeholder="Tu nombre"
                                    disabled={isSubmitting}
                                />
                                {errors.fullName && (
                                    <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
                                )}
                            </div>

                            {/* Company */}
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-gray-700 block">
                                    Empresa <span className="text-gray-400 font-normal">(Opcional)</span>
                                </label>
                                <input
                                    id="company"
                                    {...register("company")}
                                    className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all duration-200 focus:border-violet-600 focus:ring-1 focus:ring-violet-600`}
                                    placeholder="Nombre de tu empresa"
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all duration-200
                    ${errors.email
                                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                                            : 'border-gray-200 focus:border-violet-600 focus:ring-1 focus:ring-violet-600'
                                        }`}
                                    placeholder="nombre@empresa.com"
                                    disabled={isSubmitting}
                                />
                                {errors.email && (
                                    <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700 block">
                                    Teléfono
                                </label>
                                <input
                                    id="phone"
                                    {...register("phone")}
                                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all duration-200
                    ${errors.phone
                                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                                            : 'border-gray-200 focus:border-violet-600 focus:ring-1 focus:ring-violet-600'
                                        }`}
                                    placeholder="+54 9 11..."
                                    disabled={isSubmitting}
                                />
                                {errors.phone && (
                                    <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Consultation Reason */}
                        <div className="space-y-2">
                            <label htmlFor="consultationReason" className="text-sm font-medium text-gray-700 block">
                                Motivo de Consulta
                            </label>
                            <textarea
                                id="consultationReason"
                                {...register("consultationReason")}
                                rows={4}
                                className={`w-full px-4 py-3 bg-gray-50 border rounded-lg outline-none transition-all duration-200 resize-none
                  ${errors.consultationReason
                                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                                        : 'border-gray-200 focus:border-violet-600 focus:ring-1 focus:ring-violet-600'
                                    }`}
                                placeholder="Cuéntanos brevemente tu desafío actual..."
                                disabled={isSubmitting}
                            />
                            {errors.consultationReason && (
                                <p className="text-xs text-red-500 mt-1">{errors.consultationReason.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-black text-white hover:bg-gray-900 disabled:bg-gray-800 disabled:cursor-not-allowed font-medium py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Enviando...</span>
                                </>
                            ) : (
                                <span>Solicitar Diagnóstico</span>
                            )}
                        </button>

                        {/* Success Message */}
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center text-sm font-medium"
                            >
                                Correo enviado con éxito, te contactaremos pronto.
                            </motion.div>
                        )}

                        {/* Error Message */}
                        {isError && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center text-sm font-medium"
                            >
                                Error al enviar el correo. Por favor, inténtalo de nuevo o contáctanos por otro medio.
                            </motion.div>
                        )}

                    </motion.form>
                </div>
            </div>
        </section>
    );
};
