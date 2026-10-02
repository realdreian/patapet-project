import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink } from '../data/content';
import { ThemeToggle } from './ThemeToggle';

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
          ? 'bg-cream/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-xs border-b border-sand/40 dark:border-dark-border py-2.5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Oficial com proteção visual elegante no tema escuro */}
          <a
            href="#inicio"
            aria-label="Pata Amiga — Ir para a página inicial"
            className="flex items-center gap-3 group focus-visible:outline-caramel rounded-xl"
          >
            <div className="p-1 rounded-2xl transition-colors dark:bg-cream-50/15 dark:backdrop-blur-xs">
              <img
                src="/logo.png"
                alt="Pata Amiga — Centro de Bem-Estar Animal"
                className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-103"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-8 text-[15px] font-medium text-brown/90 dark:text-dark-text/90"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-caramel dark:hover:text-caramel-400 transition-colors duration-150 focus-visible:text-caramel focus-visible:outline-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-caramel after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Controls: Theme Toggle & Primary CTA */}
          <div className="hidden md:flex items-center gap-3.5">
            <ThemeToggle />

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
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-caramel hover:bg-caramel-600 active:scale-98 text-cream font-medium text-sm shadow-xs transition-all duration-150 focus-visible:outline-caramel"
            >
              <MessageCircle className="w-4 h-4 text-cream" aria-hidden="true" />
              <span>{SITE_CONFIG.primaryCtaText}</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar via WhatsApp"
              className="p-2.5 rounded-full bg-caramel/10 dark:bg-caramel/20 text-caramel dark:text-caramel-400 hover:bg-caramel/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-brown dark:text-dark-text hover:bg-sand/40 dark:hover:bg-dark-elevated transition-colors focus-visible:outline-caramel"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brown dark:text-dark-text" />
              ) : (
                <Menu className="w-6 h-6 text-brown dark:text-dark-text" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[60px] bg-cream/98 dark:bg-dark-bg/98 backdrop-blur-lg z-40 border-t border-sand/40 dark:border-dark-border flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="flex flex-col gap-2 pt-2">
            <div className="flex items-center justify-between px-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-caramel dark:text-caramel-400">
                Navegação
              </span>
              <span className="text-xs text-brown/60 dark:text-dark-soft">
                Pata Amiga
              </span>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 text-lg font-medium text-brown dark:text-dark-text hover:bg-sand/30 dark:hover:bg-dark-elevated hover:text-caramel dark:hover:text-caramel-400 rounded-xl transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-caramel/40 text-sm">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-sand/50 dark:border-dark-border flex flex-col gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-caramel hover:bg-caramel-600 text-cream font-medium text-base shadow-sm transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-cream" />
              <span>{SITE_CONFIG.primaryCtaText}</span>
            </a>

            <p className="text-center text-xs text-brown/60 dark:text-dark-soft flex items-center justify-center gap-1 mt-1">
              <Heart className="w-3.5 h-3.5 text-caramel dark:text-caramel-400 inline fill-caramel dark:fill-caramel-400" />
              <span>{SITE_CONFIG.heroMicrocopy}</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
