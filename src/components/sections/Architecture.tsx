import React from 'react';
import { MessageCircle, Zap, ChevronDown, FileSpreadsheet, FileText, Code2, Printer, ArrowRight } from 'lucide-react';

const Architecture = () => {
    return (
        <section className="py-24 relative">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Arquitetura do Sistema</h2>
                    <p className="text-gray-400">Separação clara de responsabilidades em camadas.</p>
                </div>

                <div className="relative p-8 border border-white/10 rounded-3xl bg-[#050510]">
                    {/* Layer 1: Presentation */}
                    <div className="mb-8 p-6 border border-white/5 rounded-xl bg-white/5">
                        <h4 className="text-xs font-mono text-gray-500 uppercase mb-4 tracking-wider">Camada de Apresentação & Input</h4>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <div className="flex-1 p-4 bg-black/40 rounded-lg text-center border border-green-500/20">
                                <MessageCircle className="mx-auto mb-2 text-green-500" size={20} />
                                <span className="text-white font-medium">WhatsApp</span>
                            </div>
                            <ArrowRight className="hidden md:block text-gray-600 self-center" />
                            <div className="flex-1 p-4 bg-black/40 rounded-lg text-center border border-yellow-500/20">
                                <Zap className="mx-auto mb-2 text-yellow-500" size={20} />
                                <span className="text-white font-medium">BotConversa</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-8"><ChevronDown className="text-gray-600" /></div>

                    {/* Layer 2: Storage & Process */}
                    <div className="mb-8 p-6 border border-white/5 rounded-xl bg-white/5">
                        <h4 className="text-xs font-mono text-gray-500 uppercase mb-4 tracking-wider">Camada de Armazenamento & Processamento</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 bg-black/40 rounded-lg border border-green-400/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <FileSpreadsheet className="text-green-400" size={18} />
                                    <span className="text-white font-bold">Google Sheets</span>
                                </div>
                                <p className="text-xs text-gray-400">Persistência dos dados do pedido e status.</p>
                            </div>
                            <div className="p-4 bg-black/40 rounded-lg border border-blue-500/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <FileText className="text-blue-500" size={18} />
                                    <span className="text-white font-bold">Google App Script</span>
                                </div>
                                <p className="text-xs text-gray-400">Trigger automatizado para geração de PDF.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-8"><ChevronDown className="text-gray-600" /></div>

                    {/* Layer 3: Output */}
                    <div className="p-6 border border-white/5 rounded-xl bg-white/5">
                        <h4 className="text-xs font-mono text-gray-500 uppercase mb-4 tracking-wider">Camada de Saída (Local)</h4>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <div className="flex-1 p-4 bg-black/40 rounded-lg text-center border border-purple-500/20">
                                <Code2 className="mx-auto mb-2 text-purple-500" size={20} />
                                <span className="text-white font-medium">PHP Script (Worker)</span>
                            </div>
                            <ArrowRight className="hidden md:block text-gray-600 self-center" />
                            <div className="flex-1 p-4 bg-black/40 rounded-lg text-center border border-secondary/20">
                                <Printer className="mx-auto mb-2 text-secondary" size={20} />
                                <span className="text-white font-medium">Impressora Térmica</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Architecture;
