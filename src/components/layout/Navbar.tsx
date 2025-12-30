import React from 'react';
import { Printer, Github } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030014]/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                        <Printer size={18} className="text-white" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white">
                        Imprimir<span className="text-secondary">Pedido</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#problem" className="hover:text-white transition-colors">Problema</a>
                    <a href="#how-it-works" className="hover:text-white transition-colors">Como Funciona</a>
                    <a href="#features" className="hover:text-white transition-colors">Recursos</a>
                    <a href="#install" className="hover:text-white transition-colors">Instalação</a>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/luizamaro11/imprimir-pedido"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm text-gray-300"
                    >
                        <Github size={16} />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
