import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

interface FloatingWhatsAppProps {
  onOpenBooking?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-end flex-col gap-2">
      {/* Balãozinho amigável com botão de fechar */}
      {showTooltip && (
        <div className="bg-cream-50 text-brown border border-sand shadow-lg rounded-2xl p-3 pr-8 text-xs max-w-[220px] relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-brown/40 hover:text-brown"
            aria-label="Fechar mensagem de ajuda"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-caramel mb-0.5">Precisa de ajuda?</p>
          <p className="text-brown/80 leading-tight">
            Clique para agendar um atendimento pelo WhatsApp!
          </p>
        </div>
      )}

      {/* Botão Flutuante */}
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
        aria-label="Falar com a Pata Amiga no WhatsApp"
        className="w-14 h-14 rounded-full bg-caramel hover:bg-caramel-600 text-cream shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-108 active:scale-95 focus-visible:outline-caramel focus-visible:outline-offset-4 group"
      >
        <MessageCircle className="w-7 h-7 text-cream group-hover:rotate-12 transition-transform duration-200" />
      </a>
    </div>
  );
};
