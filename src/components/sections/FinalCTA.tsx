import React from 'react';
import { Github, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Pronto para automatizar seus pedidos?</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://github.com/luizamaro11/imprimir-pedido"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
                    >
                        <Github size={20} />
                        Ver no GitHub
                    </a>
                    <a
                        href="https://luizhamaro.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                        <ArrowRight size={20} />
                        Voltar ao Portfólio
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
