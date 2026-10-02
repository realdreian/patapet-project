import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../data/content';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Contact: React.FC = () => {
  const contactCards = [
    {
      icon: <MessageCircle className="w-5 h-5 text-caramel dark:text-caramel-400" />,
      title: 'WhatsApp & Atendimento',
      line1: SITE_CONFIG.contact.phone,
      line2: 'Mensagens e agendamentos diretos',
      actionLabel: 'Iniciar conversa no WhatsApp',
      href: getWhatsAppLink(),
      external: true,
    },
    {
      icon: <Clock className="w-5 h-5 text-green dark:text-green-400" />,
      title: 'Horário de Funcionamento',
      line1: SITE_CONFIG.contact.hoursWeek,
      line2: SITE_CONFIG.contact.hoursWeekend,
      actionLabel: 'Atendimento com horário marcado',
      href: '#servicos',
      external: false,
    },
    {
      icon: <MapPin className="w-5 h-5 text-caramel dark:text-caramel-400" />,
      title: 'Localização do Centro',
      line1: SITE_CONFIG.contact.address,
      line2: SITE_CONFIG.contact.city,
      actionLabel: 'Estacionamento privativo e seguro',
      href: '#espaco',
      external: false,
    },
    {
      icon: <InstagramIcon className="w-5 h-5 text-green dark:text-green-400" />,
      title: 'Rede Social & E-mail',
      line1: SITE_CONFIG.contact.instagram,
      line2: SITE_CONFIG.contact.email,
      actionLabel: 'Acompanhe nosso dia a dia',
      href: SITE_CONFIG.contact.instagramUrl,
      external: true,
    },
  ];

  return (
    <section id="contato" className="py-20 sm:py-24 bg-cream-50 dark:bg-dark-bg transition-colors duration-200 relative border-t border-sand/40 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/40 dark:bg-dark-elevated border border-sand/70 dark:border-dark-border text-caramel dark:text-caramel-400 font-semibold text-xs uppercase tracking-wider mb-4">
            <span>FALE CONOSCO</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-brown dark:text-dark-text font-bold tracking-tight mb-4">
            Canais de Contato & Horários
          </h2>

          <p className="text-base text-brown/75 dark:text-dark-muted leading-relaxed">
            Estamos sempre à disposição para tirar dúvidas, agendar atendimentos e receber seu
            pet com todo o acolhimento que ele merece.
          </p>
        </div>

        {/* Grid de 4 Cards de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-cream dark:bg-dark-elevated rounded-2xl p-6 border border-sand/70 dark:border-dark-border shadow-xs flex flex-col justify-between hover:border-caramel/40 dark:hover:border-caramel/40 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sand/35 dark:bg-dark-surface flex items-center justify-center mb-4">
                  {card.icon}
                </div>

                <h3 className="font-serif text-lg font-bold text-brown dark:text-dark-text mb-2">{card.title}</h3>

                <p className="text-sm font-semibold text-brown/90 dark:text-dark-text mb-1">{card.line1}</p>

                <p className="text-xs text-brown/70 dark:text-dark-muted leading-relaxed">{card.line2}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-sand/40 dark:border-dark-border">
                {card.external ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-caramel dark:text-caramel-400 hover:text-caramel-700 flex items-center gap-1 focus-visible:outline-caramel"
                  >
                    <span>{card.actionLabel}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span className="text-xs text-brown/60 dark:text-dark-soft">{card.actionLabel}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
