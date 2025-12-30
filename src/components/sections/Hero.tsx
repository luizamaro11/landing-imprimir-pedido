import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-[100%] blur-[120px] pointer-events-none opacity-40" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                >
                    Automatize a Impressão de<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-purple-400">
                        Pedidos do WhatsApp
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Sistema de automação open-source que integra <span className="text-white font-medium">BotConversa</span>,
                    <span className="text-white font-medium"> Google Sheets</span> e
                    <span className="text-white font-medium"> Impressoras Térmicas</span> para eliminar a intervenção manual no processamento de pedidos.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="https://github.com/luizamaro11/imprimir-pedido"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_-10px_rgba(112,0,255,0.6)] hover:shadow-[0_0_40px_-5px_rgba(112,0,255,0.8)]"
                    >
                        <Github size={20} />
                        Ver no GitHub
                    </a>
                    <a
                        href="#install"
                        className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        Documentação
                        <ArrowRight size={18} />
                    </a>
                </motion.div>

                {/* Tech Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-6 md:gap-10"
                >
                    {['PHP', 'Google Drive API', 'Google Sheets API', 'Google App Script', 'Windows Batch'].map((tech) => (
                        <div key={tech} className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_10px_rgba(0,194,255,0.5)]"></div>
                            {tech}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
