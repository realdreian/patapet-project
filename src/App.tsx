import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Space } from './components/Space';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-cream text-brown font-sans flex flex-col selection:bg-caramel/20 selection:text-brown antialiased">
      {/* 1. Header com Navegação e Logo Oficial */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. Hero com Headline e Composição Visual Emocional */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Serviços: Banho & Tosa, Hospedagem e Passeios */}
        <Services onSelectService={(serviceTitle) => handleOpenBooking(serviceTitle)} />

        {/* 4. Sobre / Nossa Essência com Foto Oficial da Equipe */}
        <About />

        {/* 5. Por que Pata Amiga / 4 Pilares Editoriais */}
        <Benefits />

        {/* 6. Nosso Espaço com Foto Oficial da Fachada */}
        <Space />

        {/* 7. CTA Final Emocional e Comercial */}
        <CTA onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Contato com Canais e Horários */}
        <Contact />
      </main>

      {/* 9. Footer com Easter Egg e Copyright */}
      <Footer />

      {/* Botão Flutuante de WhatsApp para Conversão Ágil */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />

      {/* Modal Interativo de Agendamento */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
