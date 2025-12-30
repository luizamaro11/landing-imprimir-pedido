import React from 'react';
import { Printer, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#02000d] py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                            <Printer size={18} className="text-white" />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white">
                            Imprimir<span className="text-secondary">Pedido</span>
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Luiz Henrique Amaro | Todos os direitos reservados</p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://github.com/luizamaro11" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/luizhamaro/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center md:text-left">
                    <p className="text-xs text-gray-600 text-center">
                        Este projeto não possui afiliação oficial com WhatsApp, BotConversa ou Google.
                        Desenvolvido para fins educacionais e profissionais.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
