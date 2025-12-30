import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';

const InstallationWizard = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Clonar Repositório",
            content: "Baixe o código fonte do projeto para sua máquina local.",
            code: "git clone https://github.com/luizamaro11/imprimir-pedido.git\ncd imprimir-pedido",
            lang: "bash"
        },
        {
            title: "Instalar Dependências",
            content: "Utilize o Composer para instalar as bibliotecas do Google Client e PHP.",
            code: "composer install",
            lang: "bash"
        },
        {
            title: "Configurar Google Cloud",
            content: (
                <div className="flex flex-col gap-2">
                    <ol className="list-decimal list-inside space-y-1 ml-1 text-base">
                        <li>Acesse <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Google Cloud Console</a></li>
                        <li>Crie um novo projeto</li>
                        <li>Ative a <strong>Google Drive API</strong></li>
                        <li>Crie credenciais <strong>OAuth 2.0</strong></li>
                        <li>Baixe o arquivo <code>credentials.json</code></li>
                        <li>Coloque na raiz do projeto</li>
                    </ol>
                </div>
            ),
            code: "# Renomeie o arquivo baixado para:\ncredentials.json\n# E coloque na raiz do projeto",
            lang: "bash"
        },
        {
            title: "Autenticação",
            content: "Execute o script pela primeira vez para gerar o token de acesso via navegador.",
            code: "php index.php\n# Siga a URL gerada no terminal para autorizar",
            lang: "bash"
        },
        {
            title: "Configurar Impressora",
            content: (
                <div className="flex flex-col gap-2">
                    <ol className="list-decimal list-inside space-y-1 ml-1 text-base">
                        <li>Abra <strong>Painel de Controle</strong> → <strong>Dispositivos e Impressoras</strong></li>
                        <li>Clique com botão direito na impressora térmica</li>
                        <li>Selecione <strong>Propriedades da impressora</strong></li>
                        <li>Vá em <strong>Compartilhamento</strong> e marque <strong>Compartilhar esta impressora</strong></li>
                        <li>Anote o caminho (ex: <code>\\DESKTOP-ABC\Termica</code>)</li>
                    </ol>
                    <p className="mt-2">Edite <code>script.php</code> e configure o caminho:</p>
                </div>
            ),
            code: "$printer = \"\\\\\\\\DESKTOP-ABC\\\\Termica\";",
            lang: "php"
        },
        {
            title: "Google App Script",
            content: (
                <div className="flex flex-col gap-2">
                    <ol className="list-decimal list-inside space-y-1 ml-1 text-base">
                        <li>Abra sua planilha do Google Sheets</li>
                        <li>Vá em <strong>Extensões</strong> → <strong>Apps Script</strong></li>
                        <li>Cole o código do script (ver documentação)</li>
                        <li>Configure o gatilho para executar a cada nova linha</li>
                    </ol>
                </div>
            ),
            code: "// Copie o conteúdo de app-script.js do repositório\n// Configure o gatilho 'onChange'",
            lang: "javascript"
        },
        {
            title: "Executar",
            content: "Para iniciar o monitoramento, execute o script PHP.",
            code: "php script.php",
            lang: "bash"
        },
        {
            title: "Testar",
            content: (
                <div className="flex flex-col gap-2">
                    <ol className="list-decimal list-inside space-y-1 ml-1 text-base">
                        <li>Envie um pedido de teste pelo WhatsApp</li>
                        <li>Verifique se aparece na planilha</li>
                        <li>Aguarde até 30 segundos</li>
                        <li>A impressora deve imprimir automaticamente</li>
                    </ol>
                </div>
            ),
            code: "# Log esperado no terminal:\n[INFO] Nova venda detectada: Pedido #123\n[SUCCESS] Enviado para impressora: \\\\DESKTOP\\Termica",
            lang: "bash"
        },
        {
            title: "Automatizar (Batch)",
            content: "Configure o script para iniciar com o Windows usando a pasta Startup.",
            code: "# Pressione Win + R e digite:\nshell:startup\n# Copie o atalho do arquivo 'run_script.bat' para esta pasta",
            lang: "plaintext"
        }
    ];

    return (
        <section id="install" className="py-24 bg-surface/20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Instalação & Configuração</h2>
                    <p className="text-gray-400">Guia passo-a-passo para colocar o sistema em produção.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Steps Navigation */}
                    <div className="lg:w-1/3 flex flex-col gap-2">
                        {steps.map((step, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveStep(idx)}
                                className={`text-left px-6 py-4 rounded-xl transition-all flex items-center gap-4 ${activeStep === idx
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${activeStep === idx ? 'bg-white text-primary' : 'bg-black/30'
                                    }`}>
                                    {idx + 1}
                                </span>
                                <span className="font-medium">{step.title}</span>
                            </button>
                        ))}
                    </div>


                    {/* Code Window */}
                    <div className="lg:w-2/3">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#0f0b29] border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col"
                        >
                            <div className="bg-[#1a1633] px-6 py-4 border-b border-white/5 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-gray-400 font-mono">
                                    Passo {activeStep + 1}: {steps[activeStep].title}
                                </div>
                                <Copy size={16} className="text-gray-500 hover:text-white cursor-pointer" />
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="text-gray-300 mb-6 text-lg">
                                    {steps[activeStep].content}
                                </div>

                                <div className="bg-black/50 rounded-lg p-6 font-mono text-sm text-gray-300 overflow-x-auto border border-white/5">
                                    <pre className="whitespace-pre-wrap">
                                        <span className="text-secondary select-none">$ </span>
                                        {steps[activeStep].code}
                                    </pre>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstallationWizard;
