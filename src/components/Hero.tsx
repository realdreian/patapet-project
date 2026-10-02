import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../data/content';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-cream-50 via-cream to-cream"
    >
      {/* Elementos orgânicos sutis de fundo */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sand/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-caramel/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna de Texto & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Pill / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/40 border border-sand text-brown-800 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" aria-hidden="true" />
              <span>{SITE_CONFIG.descriptor}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brown font-bold tracking-tight leading-[1.12] mb-6">
              Mais que cuidados,{' '}
              <span className="italic font-normal text-caramel">laços para a vida toda.</span>
            </h1>

            {/* Texto de Apoio */}
            <p className="text-lg sm:text-xl text-brown/80 font-normal leading-relaxed max-w-2xl mb-8">
              {SITE_CONFIG.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOpenBooking) {
                    e.preventDefault();
                    onOpenBooking();
                  }
                }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-caramel hover:bg-caramel-600 text-cream font-medium text-base shadow-sm hover:shadow-md transition-all duration-200 active:scale-98 focus-visible:outline-caramel group"
              >
                <MessageCircle className="w-5 h-5 text-cream transition-transform group-hover:rotate-6" />
                <span>{SITE_CONFIG.primaryCtaText}</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-sand/35 hover:bg-sand/60 text-brown font-medium text-base border border-sand/70 transition-all duration-200 focus-visible:outline-caramel"
              >
                <span>{SITE_CONFIG.secondaryCtaText}</span>
                <ArrowDown className="w-4 h-4 text-brown/70" />
              </a>
            </div>

            {/* Microcopy e Vínculo Afetivo */}
            <div className="flex items-center gap-2 text-sm text-brown/70 pt-2">
              <Heart className="w-4 h-4 text-caramel fill-caramel" />
              <span className="font-medium">{SITE_CONFIG.heroMicrocopy}</span>
              <span className="text-sand-300">•</span>
              <span className="text-xs text-brown/60">Banho & Tosa • Hospedagem • Passeios</span>
            </div>
          </motion.div>

          {/* Coluna Visual: Composição Fotográfica Afetiva */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura de fundo orgânica */}
              <div
                className="absolute inset-0 bg-sand/50 rounded-3xl transform rotate-2 scale-102 -z-10"
                aria-hidden="true"
              />

              {/* Card da Imagem Principal */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-cream shadow-xl bg-sand/20 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3]">
                <img
                  src="/hero-pets.jpg"
                  alt="Cão e gato descansando juntos em clima de carinho e segurança"
                  className="w-full h-full object-cover object-center warm-filter transition-transform duration-500 hover:scale-103"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Gradiente ultra sutil inferior */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brown/10 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Floating Badge 1: Cuidado Acolhedor */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-cream/95 backdrop-blur-md border border-sand/70 p-3 sm:p-4 rounded-2xl shadow-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green/15 text-green flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-brown">Ambiente Seguro & Calmo</p>
                  <p className="text-[11px] text-brown/70">Atenção individualizada</p>
                </div>
              </div>

              {/* Floating Badge 2: Amor e Vínculo */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-cream/95 backdrop-blur-md border border-sand/70 px-3.5 py-2 rounded-2xl shadow-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-caramel" />
                <span className="text-xs font-semibold text-brown">Afeto & Dedicação</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
