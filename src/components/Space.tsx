import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Smile, MapPin } from 'lucide-react';
import { SPACE_FEATURES } from '../data/content';

export const Space: React.FC = () => {
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles className="w-5 h-5 text-caramel" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-green" />;
      case 2:
        return <Smile className="w-5 h-5 text-caramel" />;
      default:
        return <Sparkles className="w-5 h-5 text-caramel" />;
    }
  };

  return (
    <section id="espaco" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/40 border border-sand/70 text-caramel font-semibold text-xs uppercase tracking-wider mb-4">
            <span>ESTRUTURA FÍSICA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brown font-bold tracking-tight mb-4">
            Um espaço feito para eles.
          </h2>

          <p className="text-base sm:text-lg text-brown/80 max-w-2xl mx-auto leading-relaxed">
            Ambientes acolhedores, seguros e preparados para transformar cada visita em uma
            experiência tranquila.
          </p>
        </div>

        {/* Fotografia Oficial da Fachada em Grande Presença Editorial */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-cream bg-sand/30 mb-12 sm:mb-16"
        >
          {/* Imagem da Fachada com proporção nobre */}
          <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] w-full overflow-hidden">
            <img
              src="/faixada.png"
              alt="Fachada oficial do Centro de Bem-Estar Animal Pata Amiga"
              className="w-full h-full object-cover object-center warm-filter transition-transform duration-700 hover:scale-102"
              loading="lazy"
            />
          </div>

          {/* Gradiente escurecido suave e overlay de identificação */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-brown/70 via-brown/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Legenda institucional sutil dentro da foto */}
          <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 right-4 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-cream">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/20 backdrop-blur-md text-xs font-medium text-cream mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Nossa Sede</span>
              </span>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-cream drop-shadow-sm">
                Pata Amiga — Centro de Bem-Estar Animal
              </h3>
              <p className="text-xs sm:text-sm text-cream/90 font-normal max-w-lg mt-1">
                Concebido para ser uma extensão do conforto do seu lar, com iluminação acolhedora e
                acústica controlada.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 bg-cream/20 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-medium border border-cream/30">
              <span className="w-2 h-2 rounded-full bg-green" />
              <span>Visitas abertas com agendamento</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Tags Conceituais: Conforto • Segurança • Diversão */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SPACE_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-cream rounded-2xl p-6 sm:p-7 border border-sand/70 shadow-xs flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-sand/40 flex items-center justify-center shrink-0 mt-0.5">
                {getFeatureIcon(index)}
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-brown mb-1.5">
                  {feature.title}
                </h4>
                <p className="text-sm text-brown/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
