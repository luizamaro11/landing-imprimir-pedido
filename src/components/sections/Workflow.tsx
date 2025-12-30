import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, FileSpreadsheet, FileText, Code2, Printer } from 'lucide-react';
import CloudIcon from '../ui/CloudIcon';

const Workflow = () => {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Fluxo de Dados</h2>
                    <p className="text-gray-400">Pipeline de execução contínua, do WhatsApp à Cozinha.</p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-secondary/20 dashed-line"></div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
                        {[
                            { icon: MessageCircle, label: "WhatsApp", sub: "Cliente", color: "text-green-500" },
                            { icon: Zap, label: "BotConversa", sub: "Webhook", color: "text-yellow-500" },
                            { icon: FileSpreadsheet, label: "G. Sheets", sub: "Database", color: "text-green-400" },
                            { icon: FileText, label: "App Script", sub: "Conversor", color: "text-blue-500" },
                            { icon: CloudIcon, label: "G. Drive", sub: "Storage", color: "text-blue-400" },
                            { icon: Code2, label: "PHP Script", sub: "Monitor", color: "text-purple-500" },
                            { icon: Printer, label: "Impressora", sub: "Saída", color: "text-secondary" },
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center group relative z-10"
                            >
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card flex items-center justify-center mb-4 border border-white/5 group-hover:border-white/20 transition-all shadow-lg ${step.color} bg-[#0a0a0a]`}>
                                    <step.icon size={28} />
                                </div>
                                <h4 className="text-white font-semibold text-sm md:text-base">{step.label}</h4>
                                <p className="text-xs text-gray-500">{step.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
