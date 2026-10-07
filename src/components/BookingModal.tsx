import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Heart, Check, Sparkles } from 'lucide-react';
import { SERVICES, getWhatsAppLink, SITE_CONFIG } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialService || SERVICES[0].title
  );
  const [petType, setPetType] = useState<'Cachorro' | 'Gato'>('Cachorro');
  const [petName, setPetName] = useState('');
  const [preferredPeriod, setPreferredPeriod] = useState<'Manhã' | 'Tarde' | 'Qualquer horário'>('Manhã');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameStr = petName.trim() ? ` do meu ${petType.toLowerCase()} ${petName.trim()}` : ` do meu ${petType.toLowerCase()}`;
    const customMessage = `Olá! Vim pelo site da Pata Amiga e gostaria de agendar o serviço de *${selectedService}*${nameStr}. Período de preferência: *${preferredPeriod}*.`;
    const url = getWhatsAppLink(customMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brown-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      {/* Backdrop click to close */}
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="bg-cream dark:bg-dark-surface rounded-3xl border border-sand/80 dark:border-dark-border shadow-2xl max-w-lg w-full p-6 sm:p-8 relative overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Botão de Fechar */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-brown/60 hover:text-brown hover:bg-sand/40 dark:text-dark-soft dark:hover:text-dark-text dark:hover:bg-dark-elevated transition-colors focus-visible:outline-caramel"
          aria-label="Fechar janela de agendamento"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cabeçalho do Modal */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/40 text-caramel dark:bg-dark-elevated dark:text-caramel-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendamento Rápido</span>
          </div>

          <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-brown dark:text-dark-text font-bold">
            Agendar Atendimento
          </h3>

          <p className="text-xs sm:text-sm text-brown/75 dark:text-dark-muted mt-1">
            Escolha os detalhes abaixo para iniciar a conversa no WhatsApp já com seu pedido preparado.
          </p>
        </div>

        {/* Formulário Interativo */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Escolha do Serviço */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brown/80 dark:text-dark-muted mb-2">
              Selecione o Serviço:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {SERVICES.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setSelectedService(s.title)}
                  className={`p-3 rounded-2xl border text-left text-xs font-medium transition-all flex flex-col justify-between gap-2 ${
                    selectedService === s.title
                      ? 'border-caramel bg-caramel/10 text-brown dark:bg-caramel/20 dark:text-dark-text shadow-xs ring-1 ring-caramel'
                      : 'border-sand bg-cream-50 text-brown/70 hover:border-sand-300 dark:border-dark-border dark:bg-dark-elevated dark:text-dark-muted dark:hover:border-dark-soft'
                  }`}
                >
                  <span className="font-bold text-brown dark:text-dark-text">{s.title}</span>
                  {selectedService === s.title && (
                    <span className="self-end text-[10px] text-caramel dark:text-caramel-400 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Selecionado
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tipo de Pet */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brown/80 dark:text-dark-muted mb-2">
              Tipo de Pet:
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(['Cachorro', 'Gato'] as const).map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setPetType(type)}
                  className={`py-2.5 px-4 rounded-xl border text-center text-sm font-medium transition-all ${
                    petType === type
                      ? 'border-caramel bg-caramel/10 text-brown dark:bg-caramel/20 dark:text-dark-text ring-1 ring-caramel'
                      : 'border-sand bg-cream-50 text-brown/70 hover:border-sand-300 dark:border-dark-border dark:bg-dark-elevated dark:text-dark-muted dark:hover:border-dark-soft'
                  }`}
                >
                  {type === 'Cachorro' ? '🐶 Cão' : '🐱 Gato'}
                </button>
              ))}
            </div>
          </div>

          {/* Nome do Pet */}
          <div>
            <label
              htmlFor="pet-name"
              className="block text-xs font-bold uppercase tracking-wider text-brown/80 dark:text-dark-muted mb-1.5"
            >
              Nome do Pet <span className="text-brown/40 dark:text-dark-soft lowercase font-normal">(opcional)</span>:
            </label>
            <input
              id="pet-name"
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Ex: Pipoca, Thor, Mel..."
              className="w-full px-4 py-3 rounded-xl border border-sand bg-cream-50 text-brown dark:border-dark-border dark:bg-dark-elevated dark:text-dark-text text-sm placeholder:text-brown/40 dark:placeholder:text-dark-soft focus:border-caramel focus:ring-1 focus:ring-caramel outline-none transition-colors"
            />
          </div>

          {/* Período de Preferência */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brown/80 dark:text-dark-muted mb-1.5">
              Período de preferência:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Manhã', 'Tarde', 'Qualquer horário'] as const).map((period) => (
                <button
                  type="button"
                  key={period}
                  onClick={() => setPreferredPeriod(period)}
                  className={`py-2 px-3 rounded-xl border text-center text-xs font-medium transition-all ${
                    preferredPeriod === period
                      ? 'border-caramel bg-caramel/10 text-brown dark:bg-caramel/20 dark:text-dark-text ring-1 ring-caramel'
                      : 'border-sand bg-cream-50 text-brown/70 hover:border-sand-300 dark:border-dark-border dark:bg-dark-elevated dark:text-dark-muted dark:hover:border-dark-soft'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* Botão de Envio para WhatsApp */}
          <div className="pt-3 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-caramel hover:bg-caramel-600 text-cream font-medium text-base shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <MessageCircle className="w-5 h-5 text-cream" />
              <span>Continuar no WhatsApp</span>
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="text-center text-xs text-brown/60 hover:text-brown dark:text-dark-soft dark:hover:text-dark-text py-1 underline underline-offset-2"
            >
              Ou apenas iniciar conversa geral sem formulário
            </a>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t border-sand/50 dark:border-dark-border text-center">
          <p className="text-[11px] text-brown/60 dark:text-dark-soft flex items-center justify-center gap-1">
            <Heart className="w-3 h-3 text-caramel fill-caramel dark:text-caramel-400 dark:fill-caramel-400 inline" />
            <span>{SITE_CONFIG.heroMicrocopy}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
