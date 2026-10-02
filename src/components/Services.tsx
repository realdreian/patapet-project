import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Home, Footprints, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES, getWhatsAppLink } from '../data/content';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bath':
        return <Sparkles className="w-5 h-5 text-caramel" />;
      case 'home':
        return <Home className="w-5 h-5 text-green" />;
      case 'paw':
        return <Footprints className="w-5 h-5 text-caramel" />;
      default:
        return <Sparkles className="w-5 h-5 text-caramel" />;
    }
  };

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'banho-e-tosa':
        return '/services/banho-tosa.jpg';
      case 'hospedagem':
        return '/services/hospedagem.jpg';
      case 'passeios':
        return '/services/passeios.jpg';
      default:
        return '/services/banho-tosa.jpg';
    }
  };

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/40 border border-sand/70 text-caramel font-semibold text-xs uppercase tracking-wider mb-3">
            <span>CUIDADO COMPLETO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brown font-bold tracking-tight mb-4">
            Tudo que seu melhor amigo precisa.
          </h2>

          <p className="text-base sm:text-lg text-brown/75 max-w-2xl mx-auto">
            Três serviços dedicados, desenhados para acolher com respeito, tranquilidade e carinho em
            cada fase do dia a dia.
          </p>
        </div>

        {/* Grid de 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service, index) => {
            const serviceWhatsappLink = getWhatsAppLink(
              `Olá! Gostaria de agendar o serviço de ${service.title} para o meu pet.`
            );

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-cream-50 rounded-3xl border border-sand/70 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Imagem do Serviço */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-sand/30">
                  <img
                    src={getServiceImage(service.id)}
                    alt={`${service.title} na Pata Amiga`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 warm-filter"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brown/50 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  {/* Tag Pill na Imagem */}
                  <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur-xs px-3 py-1 rounded-full border border-sand/50 shadow-xs flex items-center gap-1.5">
                    {getIcon(service.iconName)}
                    <span className="text-xs font-semibold text-brown">{service.tag}</span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brown mb-2 group-hover:text-caramel transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm font-medium text-caramel mb-3 italic">
                      "{service.subtitle}"
                    </p>

                    <p className="text-sm text-brown/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Lista de Destaques */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-sand/40">
                      {service.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-brown/80">
                          <div className="w-4 h-4 rounded-full bg-sand/50 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green" />
                          </div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rodapé do Card com CTA Contextual */}
                  <div className="pt-4 border-t border-sand/50 mt-auto">
                    <p className="text-[11px] text-brown/60 mb-3">{service.durationHint}</p>

                    <a
                      href={serviceWhatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (onSelectService) {
                          e.preventDefault();
                          onSelectService(service.title);
                        }
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sand/35 hover:bg-caramel hover:text-cream text-brown font-medium text-sm transition-all duration-200 group/btn border border-sand/60"
                    >
                      <MessageCircle className="w-4 h-4 text-caramel group-hover/btn:text-cream transition-colors" />
                      <span>Agendar {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
