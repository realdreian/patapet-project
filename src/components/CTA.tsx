import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

interface CTAProps {
  onOpenBooking?: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-28 bg-cream dark:bg-dark-surface transition-colors duration-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brown to-brown-900 dark:from-[#2E1D13] dark:to-[#170E08] text-cream p-8 sm:p-12 lg:p-16 shadow-2xl border border-brown-700 dark:border-dark-border text-center"
        >
          {/* Efeitos decorativos orgânicos de iluminação */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full bg-caramel/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/10 border border-cream/15 text-sand text-xs font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-caramel dark:text-caramel-400" />
              <span>Cuidado & Confiança</span>
            </div>

            {/* Título Principal */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-bold tracking-tight mb-5 leading-tight">
              Seu pet merece esse cuidado.
            </h2>

            {/* Texto de Apoio */}
            <p className="text-base sm:text-lg lg:text-xl text-cream/85 max-w-xl mb-9 leading-relaxed font-light">
              Estamos prontos para receber seu melhor amigo com todo carinho.
            </p>

            {/* Botão de Agendamento */}
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
              className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full bg-caramel hover:bg-caramel-600 text-cream font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98 group mb-4 focus-visible:outline-cream"
            >
              <MessageCircle className="w-5 h-5 text-cream transition-transform group-hover:rotate-12" />
              <span>Agendar atendimento</span>
              <ArrowRight className="w-4 h-4 text-cream transition-transform group-hover:translate-x-1" />
            </a>

            {/* Microcopy */}
            <p className="text-xs sm:text-sm text-sand/80 flex items-center justify-center gap-1.5">
              <span>Fale com a Pata Amiga pelo WhatsApp.</span>
              <Heart className="w-3.5 h-3.5 text-caramel dark:text-caramel-400 fill-caramel dark:fill-caramel-400 inline" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
