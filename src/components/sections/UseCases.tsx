import React from 'react';

const UseCases = () => {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">Casos de Uso</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Pizzarias", icon: "🍕", desc: "Impressão direta na cozinha, separando bebidas e pizzas." },
                        { title: "Restaurantes", icon: "🍔", desc: "Ideal para delivery e integração com apps de entrega." },
                        { title: "Dark Kitchens", icon: "🛵", desc: "Alta velocidade para operações focadas 100% em entrega." },
                        { title: "Comércio", icon: "🏪", desc: "Qualquer negócio que receba pedidos estruturados no WhatsApp." }
                    ].map((item, idx) => (
                        <div key={idx} className="glass-card p-6 rounded-xl text-center hover:bg-white/5 transition-colors">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
