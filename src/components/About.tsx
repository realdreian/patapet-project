import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Smile } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-cream-50 dark:bg-dark-bg transition-colors duration-200 relative overflow-hidden">
      {/* Detalhes sutis de atmosfera */}
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-sand/30 dark:bg-caramel/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Coluna Visual: Foto Oficial da Equipe */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Moldura orgânica com rotação e tom areia */}
              <div
                className="absolute inset-0 bg-sand/60 dark:bg-dark-elevated rounded-3xl -rotate-1.5 scale-102 -z-10"
                aria-hidden="true"
              />

              <div className="overflow-hidden rounded-3xl border-4 border-cream dark:border-dark-surface shadow-xl bg-sand/20 dark:bg-dark-surface aspect-[4/3]">
                <img
                  src="/equipe.png"
                  alt="Equipe Pata Amiga cuidando com carinho dos animais"
                  className="w-full h-full object-cover object-center warm-filter transition-transform duration-500 hover:scale-102"
                  loading="lazy"
                />
              </div>

              {/* Card de destaque sobreposto */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:right-6 bg-cream/95 dark:bg-dark-elevated/95 backdrop-blur-md border border-sand/80 dark:border-dark-border p-4 sm:p-5 rounded-2xl shadow-md flex items-center gap-3.5 max-w-[270px]">
                <div className="w-10 h-10 rounded-xl bg-caramel/15 dark:bg-caramel/25 text-caramel dark:text-caramel-400 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brown dark:text-dark-text">Equipe Apaixonada</p>
                  <p className="text-[11px] text-brown/75 dark:text-dark-soft leading-tight">
                    Profissionais que tratam cada pet pelo nome
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna Editorial / Texto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/40 dark:bg-dark-elevated border border-sand/70 dark:border-dark-border text-caramel dark:text-caramel-400 font-semibold text-xs uppercase tracking-wider mb-4">
              <span>NOSSA ESSÊNCIA</span>
            </div>

            {/* Título Principal */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brown dark:text-dark-text font-bold tracking-tight leading-[1.18] mb-6">
              Cuidamos como quem entende que{' '}
              <span className="italic font-normal text-caramel dark:text-caramel-400">eles são família.</span>
            </h2>

            {/* Parágrafos de Copy aprovados */}
            <div className="space-y-4 text-base sm:text-lg text-brown/80 dark:text-dark-muted leading-relaxed mb-8">
              <p>
                A Pata Amiga nasceu de uma ideia simples: todo animal merece ser tratado com
                carinho, respeito e atenção de verdade.
              </p>
              <p>
                Criamos um espaço onde cuidado profissional e afeto caminham juntos — do banho à
                hospedagem e aos momentos de passeio.
              </p>
            </div>

            {/* Pilares rápidos de essência */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8 pt-4 border-t border-sand/50 dark:border-dark-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green/10 dark:bg-green/20 text-green dark:text-green-400 flex items-center justify-center shrink-0">
                  <Smile className="w-4 h-4 text-green dark:text-green-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-brown dark:text-dark-text">
                  Ambiente sereno e sem estresse
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-caramel/10 dark:bg-caramel/20 text-caramel dark:text-caramel-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-caramel dark:text-caramel-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-brown dark:text-dark-text">
                  Paciência e atenção dedicada
                </span>
              </div>
            </div>

            {/* Assinatura Emocional */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-sand/30 dark:bg-dark-elevated border border-sand/60 dark:border-dark-border">
              <Heart className="w-4 h-4 text-caramel dark:text-caramel-400 fill-caramel dark:fill-caramel-400" />
              <span className="font-serif text-brown dark:text-dark-text text-base sm:text-lg font-medium italic">
                {SITE_CONFIG.heroMicrocopy}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
