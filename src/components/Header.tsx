import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../data/content';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Nosso Espaço', href: '#espaco' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-xs border-b border-sand/40 py-2.5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Oficial */}
          <a
            href="#inicio"
            aria-label="Pata Amiga — Ir para a página inicial"
            className="flex items-center gap-3 group focus-visible:outline-caramel rounded-xl"
          >
            <img
              src="/logo.png"
              alt="Pata Amiga — Centro de Bem-Estar Animal"
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-103"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-8 text-[15px] font-medium text-brown/90"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-caramel transition-colors duration-150 focus-visible:text-caramel focus-visible:outline-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-caramel after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
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
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-caramel text-cream font-medium text-sm shadow-xs hover:bg-caramel-600 active:scale-98 transition-all duration-150 focus-visible:outline-caramel"
            >
              <MessageCircle className="w-4 h-4 text-cream" aria-hidden="true" />
              <span>{SITE_CONFIG.primaryCtaText}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar via WhatsApp"
              className="p-2 rounded-full bg-caramel/10 text-caramel hover:bg-caramel/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-brown hover:bg-sand/40 transition-colors focus-visible:outline-caramel"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brown" />
              ) : (
                <Menu className="w-6 h-6 text-brown" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[60px] bg-cream/98 backdrop-blur-lg z-40 border-t border-sand/40 flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col gap-2 pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-caramel px-3">
              Navegação
            </span>
            <div className="flex flex-col gap-1 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 text-lg font-medium text-brown hover:bg-sand/30 hover:text-caramel rounded-xl transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-caramel/40 text-sm">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-sand/50 flex flex-col gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-caramel text-cream font-medium text-base shadow-sm hover:bg-caramel-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-cream" />
              <span>{SITE_CONFIG.primaryCtaText}</span>
            </a>

            <p className="text-center text-xs text-brown/60 flex items-center justify-center gap-1 mt-1">
              <Heart className="w-3.5 h-3.5 text-caramel inline fill-caramel" />
              <span>{SITE_CONFIG.heroMicrocopy}</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
