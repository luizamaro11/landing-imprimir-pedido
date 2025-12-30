import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Database, FileText, Printer, ShieldCheck, Settings } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Zap,
            title: "Monitoramento Automático",
            desc: "Polling inteligente a cada 30s verificando novos arquivos no Google Drive. Processa filas automaticamente."
        },
        {
            icon: Database,
            title: "Integração Google Sheets",
            desc: "Leitura em tempo real da planilha de pedidos, suportando colunas personalizadas e sincronização instantânea."
        },
        {
            icon: FileText,
            title: "Geração de PDF",
            desc: "Template customizável via Google App Script. Formatação otimizada para impressoras térmicas (80mm)."
        },
        {
            icon: Printer,
            title: "Impressão Térmica",
            desc: "Compatibilidade nativa com impressoras Windows compartilhadas na rede. Suporte a ESC/POS."
        },
        {
            icon: ShieldCheck,
            title: "Segurança OAuth 2.0",
            desc: "Autenticação segura com Google APIs. Tokens protegidos e permissões granulares de leitura/escrita."
        },
        {
            icon: Settings,
            title: "Execução Automatizada",
            desc: "Script Batch (.bat) incluso para inicialização automática com o Windows. 'Set and Forget'."
        }
    ];

    return (
        <section id="features" className="py-24 bg-surface/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Funcionalidades Principais</h2>
                    <p className="text-gray-400">Stack tecnológica escolhida para robustez e estabilidade.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-primary/30"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
