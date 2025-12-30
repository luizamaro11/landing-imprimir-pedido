import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "Funciona em outros sistemas além do Windows?", a: "Atualmente o script de impressão foi otimizado para Windows devido aos drivers de impressora. Adaptações para Linux/Mac são possíveis via CUPS, mas requerem ajustes no código PHP." },
        { q: "Posso usar com outras plataformas além do BotConversa?", a: "Sim! Qualquer sistema que consiga adicionar uma linha em uma planilha do Google Sheets pode ser integrado automaticamente." },
        { q: "Quanto custa manter o sistema?", a: "O software é Open Source (gratuito). O Google Cloud oferece uma camada gratuita generosa que cobre milhares de requisições por mês, tornando o custo virtualmente zero para pequenas e médias operações." },
        { q: "Preciso deixar o computador ligado?", a: "Sim. O script PHP precisa estar rodando para monitorar o Google Drive e enviar o comando para a impressora. Recomenda-se um PC dedicado ou o caixa do estabelecimento." },
    ];

    return (
        <section className="py-24 max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Perguntas Frequentes</h2>
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-white/10 rounded-xl bg-white/5 overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                        >
                            <span className="font-medium text-white">{faq.q}</span>
                            {openIndex === idx ? <ChevronDown className="rotate-180 transition-transform" /> : <ChevronDown className="transition-transform" />}
                        </button>
                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
