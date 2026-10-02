import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Smile, MapPin } from 'lucide-react';
import { SPACE_FEATURES } from '../data/content';

export const Space: React.FC = () => {
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles className="w-5 h-5 text-caramel dark:text-caramel-400" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-green dark:text-green-400" />;
      case 2:
        return <Smile className="w-5 h-5 text-caramel dark:text-caramel-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-caramel dark:text-caramel-400" />;
    }
  };

  return (
    <section id="espaco" className="py-20 sm:py-28 bg-cream-50 dark:bg-dark-bg transition-colors duration-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/40 dark:bg-dark-elevated border border-sand/70 dark:border-dark-border text-caramel dark:text-caramel-400 font-semibold text-xs uppercase tracking-wider mb-4">
            <span>ESTRUTURA FÍSICA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brown dark:text-dark-text font-bold tracking-tight mb-4">
            Um espaço feito para eles.
          </h2>

          <p className="text-base sm:text-lg text-brown/80 dark:text-dark-muted max-w-2xl mx-auto leading-relaxed">
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
          className="relative rounded-3xl overflow-hidden shadow-xl border-4 sm:border-8 border-cream dark:border-dark-surface bg-sand/30 dark:bg-dark-surface mb-12 sm:mb-16"
        >
          {/* Container com aspect ratio 4:3 nativo da fotografia para exibir 100% da imagem sem corte */}
          <div className="w-full aspect-[4/3] overflow-hidden bg-sand/20 dark:bg-dark-surface">
            <img
              src="/faixada.png"
              alt="Fachada oficial do Centro de Bem-Estar Animal Pata Amiga com letreiro iluminado e ambiente acolhedor"
              className="w-full h-full object-contain sm:object-cover object-top sm:object-center warm-filter transition-transform duration-700 hover:scale-101"
              loading="lazy"
            />
          </div>

          {/* Barra Institucional Integrada na base do card */}
          <div className="bg-cream-50 dark:bg-dark-elevated border-t border-sand/70 dark:border-dark-border p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-caramel/15 dark:bg-caramel/25 text-caramel dark:text-caramel-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-caramel dark:text-caramel-400" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brown dark:text-dark-text">
                  Nossa Sede — Pata Amiga
                </h3>
                <p className="text-xs sm:text-sm text-brown/75 dark:text-dark-muted">
                  Concebida para ser uma extensão do conforto do seu lar, com iluminação acolhedora e acústica serena.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/40 dark:bg-dark-surface border border-sand dark:border-dark-border text-xs font-semibold text-brown dark:text-dark-text self-start sm:self-auto shrink-0">
              <span className="w-2 h-2 rounded-full bg-green dark:bg-green-400" aria-hidden="true" />
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
              className="bg-cream dark:bg-dark-elevated rounded-2xl p-6 sm:p-7 border border-sand/70 dark:border-dark-border shadow-xs flex items-start gap-4 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-sand/40 dark:bg-dark-surface flex items-center justify-center shrink-0 mt-0.5">
                {getFeatureIcon(index)}
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-brown dark:text-dark-text mb-1.5">
                  {feature.title}
                </h4>
                <p className="text-sm text-brown/80 dark:text-dark-muted leading-relaxed">
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
