import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check } from 'lucide-react';

const ProblemSolution = () => {
    return (
        <section id="problem" className="py-24 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Problem Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl border-l-4 border-l-red-500/50"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-red-500/10 text-red-500">
                                <AlertCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">O Desafio</h3>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Pizzarias e restaurantes que utilizam BotConversa enfrentam um gargalo crítico: a plataforma não oferece impressão automática nativa.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Atrasos críticos no atendimento e cozinha',
                                'Erros de transcrição manual dos pedidos',
                                'Custos elevados com pessoal dedicado apenas para digitar',
                                'Frustração da equipe em horários de pico'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <span className="mt-1 text-red-500">✕</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Solution Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl border-l-4 border-l-green-500/50 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                                <Check size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">A Solução</h3>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed relative z-10">
                            Um middleware robusto que monitora continuamente o Google Sheets e orquestra a impressão via PHP e Scripts Batch.
                        </p>
                        <ul className="space-y-4 relative z-10">
                            {[
                                'Impressão automática em até 30 segundos',
                                '100% de precisão nos dados (Zero Erros)',
                                'Funcionamento 24/7 sem intervenção humana',
                                'Redução drástica de custos operacionais'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <div className="mt-1 text-green-500"><Check size={16} /></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
