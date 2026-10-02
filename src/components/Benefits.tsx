import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../data/content';
import { Sparkles, HeartHandshake, ShieldCheck, Home } from 'lucide-react';

export const Benefits: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <HeartHandshake className="w-5 h-5 text-caramel" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-green" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-caramel" />;
      case 3:
        return <Home className="w-5 h-5 text-green" />;
      default:
        return <Sparkles className="w-5 h-5 text-caramel" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/40 border border-sand/70 text-caramel font-semibold text-xs uppercase tracking-wider mb-4">
            <span>DIFERENCIAIS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brown font-bold tracking-tight mb-4">
            Cuidado que dá para sentir.
          </h2>

          <p className="text-base sm:text-lg text-brown/75 leading-relaxed">
            Mais do que cumprir procedimentos, cultivamos uma rotina de respeito absoluto à
            individualidade de cada companheiro de quatro patas.
          </p>
        </div>

        {/* Layout Editorial dos 4 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream-50 rounded-3xl p-8 sm:p-10 border border-sand/70 shadow-xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-sand/40 flex items-center justify-center">
                      {getPillarIcon(index)}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brown/60">
                      {benefit.tag}
                    </span>
                  </div>

                  <span className="font-serif text-2xl font-bold text-sand-300 group-hover:text-caramel/40 transition-colors">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brown mb-3 group-hover:text-caramel transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-base text-brown/80 leading-relaxed">{benefit.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-sand/40 flex items-center justify-between text-xs text-brown/60 font-medium">
                <span>Pilar {benefit.number} de Bem-Estar</span>
                <span className="text-caramel group-hover:translate-x-1 transition-transform">
                  Pata Amiga ♡
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
