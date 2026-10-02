import React from 'react';
import { Heart, MessageCircle, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG, SERVICES, getWhatsAppLink } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-900 text-cream/90 pt-16 pb-12 border-t border-brown-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brown-700/80">
          {/* Coluna 1: Marca & Descriptor */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a
              href="#inicio"
              aria-label="Pata Amiga — Voltar ao topo"
              className="inline-block p-1 bg-cream/10 rounded-2xl mb-4 hover:bg-cream/15 transition-colors"
            >
              <img
                src="/logo.png"
                alt="Pata Amiga — Centro de Bem-Estar Animal"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-sand/80 max-w-sm mb-4 leading-relaxed font-light">
              Centro de Bem-Estar Animal dedicado a transformar a rotina do seu cão e gato em uma
              experiência de afeto, segurança e tranquilidade.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-caramel/90 font-medium">
              <Heart className="w-3.5 h-3.5 fill-caramel text-caramel" />
              <span>{SITE_CONFIG.heroMicrocopy}</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-caramel mb-4">
              Navegação
            </p>
            <ul className="space-y-2.5 text-sm text-sand/80 font-normal">
              <li>
                <a href="#inicio" className="hover:text-cream transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cream transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-cream transition-colors">
                  Nossa Essência
                </a>
              </li>
              <li>
                <a href="#espaco" className="hover:text-cream transition-colors">
                  Nosso Espaço
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-cream transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Serviços Confirmados */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-caramel mb-4">
              Cuidados Confirmados
            </p>
            <ul className="space-y-2.5 text-sm text-sand/80 font-normal">
              {SERVICES.map((serv) => (
                <li key={serv.id}>
                  <a
                    href="#servicos"
                    className="hover:text-cream transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-caramel/70 text-xs">•</span>
                    <span>{serv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Atendimento & Horário */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-caramel mb-4">
              Atendimento
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-sand/80 font-light">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                <div>
                  <p>{SITE_CONFIG.contact.hoursWeek}</p>
                  <p>{SITE_CONFIG.contact.hoursWeekend}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                <p>{SITE_CONFIG.contact.address}</p>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cream/10 text-cream text-xs hover:bg-caramel hover:text-cream transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {SITE_CONFIG.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright e Easter Egg */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60">
          <p>
            © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.name} — {SITE_CONFIG.descriptor}. Todos os
            direitos reservados.
          </p>

          {/* Easter egg sutil em homenagem ao site antigo */}
          <p className="text-sand/50 hover:text-sand/80 transition-colors flex items-center gap-1 text-[11px] italic">
            <span>{SITE_CONFIG.easterEgg}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
