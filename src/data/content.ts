export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  subtitle: string;
  description: string;
  highlights: string[];
  durationHint: string;
  iconName: 'bath' | 'home' | 'paw';
}

export interface BenefitItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
}

export const SITE_CONFIG = {
  name: 'Pata Amiga',
  descriptor: 'Centro de Bem-Estar Animal',
  tagline: 'Mais que cuidados, laços para a vida toda.',
  heroSubtitle:
    'Um espaço pensado para proporcionar carinho, segurança e bem-estar em cada momento do seu pet.',
  heroMicrocopy: '♡ Aqui, todo pet é família.',
  primaryCtaText: 'Agendar atendimento',
  secondaryCtaText: 'Conhecer serviços',

  // Contato demonstrativo (fictício para o MVP)
  contact: {
    phone: '(11) 98765-4321',
    phoneRaw: '5511987654321',
    email: 'contato@pataamiga.com.br',
    instagram: '@pataamigapetcare',
    instagramUrl: 'https://instagram.com',
    address: 'Rua das Camélias Aconchegantes, 340 — Bairro Jardim',
    city: 'São Paulo - SP',
    hoursWeek: 'Segunda a Sexta: 08h às 18h',
    hoursWeekend: 'Sábado: 08h às 14h',
    whatsappMessage:
      'Olá! Vim pelo site da Pata Amiga e gostaria de agendar um atendimento.',
  },

  easterEgg: 'Agora otimizado para muito mais que 800×600. ♡',
  copyrightYear: 2026,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'banho-e-tosa',
    title: 'Banho & Tosa',
    tag: 'Higiene & Bem-Estar',
    subtitle: 'Higiene, conforto e cuidado com atenção aos detalhes.',
    description:
      'Banhos calmos e revitalizantes com produtos hipoalergênicos de alta qualidade, secagem paciente em temperatura amena e tosas especializadas que respeitam a pelagem, a saúde e o bem-estar de cada pet.',
    highlights: [
      'Cosmética hipoalergênica e pH balanceado',
      'Secagem gentil e silenciosa sem estresse',
      'Tosa higiênica e cortes na tesoura com acabamento artesanal',
      'Cuidado redobrado e carinho para filhotes e pets idosos',
    ],
    durationHint: 'Duração média: 1h a 2h com pausas de descanso',
    iconName: 'bath',
  },
  {
    id: 'hospedagem',
    title: 'Hospedagem',
    tag: 'Segurança & Conforto',
    subtitle: 'Um ambiente acolhedor para ele se sentir seguro e em casa.',
    description:
      'Uma estadia tranquila e calorosa em suítes individuais e climatizadas. Monitoramento atencioso 24 horas, alimentação individualizada, recreação dosada e notícias diárias com fotos e vídeos para o tutor viajar em paz.',
    highlights: [
      'Quartos privativos confortáveis com caminhas térmicas',
      'Equipe dedicada com supervisão afetuosa e constante',
      'Respeito rigoroso aos horários de medicação e ração',
      'Boletim diário com fotos e vídeos dos momentos do pet',
    ],
    durationHint: 'Diárias personalizadas com check-in e check-out flexíveis',
    iconName: 'home',
  },
  {
    id: 'passeios',
    title: 'Passeios',
    tag: 'Movimento & Socialização',
    subtitle: 'Movimento, diversão e companhia para uma rotina mais saudável.',
    description:
      'Caminhadas enriquecedoras e estruturadas com condutores afetuosos e experientes. Foco em estímulo olfativo, gasto saudável de energia e socialização controlada em praças e ruas arborizadas.',
    highlights: [
      'Passeios individuais ou em duplas compatíveis',
      'Equipamentos ergonômicos e seguros anti-puxão',
      'Hidratação fresca durante e após o trajeto',
      'Relatório afetuoso de rotas e comportamento após cada volta',
    ],
    durationHint: 'Sessões de 30min ou 50min adaptadas ao porte e fôlego',
    iconName: 'paw',
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'acolhimento',
    number: '01',
    title: 'Atendimento acolhedor',
    tag: 'Tempo e Paciência',
    description:
      'Entendemos a personalidade única de cada cão e gato. Sem pressa, sem contenções forçadas: respeitamos o ritmo do pet para que a experiência seja sempre agradável e serena.',
  },
  {
    id: 'bem-estar',
    number: '02',
    title: 'Bem-estar em primeiro lugar',
    tag: 'Conforto Integral',
    description:
      'Cada processo e espaço foi desenhado para eliminar o medo e a ansiedade. Aromas suaves, acústica controlada e contato humano gentil protegem o equilíbrio emocional do animal.',
  },
  {
    id: 'atencao-individual',
    number: '03',
    title: 'Atenção individual',
    tag: 'Cuidado Sob Medida',
    description:
      'Aqui nenhum pet é apenas um número de fila. Nossos profissionais conhecem cada cliente pelo nome, preferências de carinho, manias e necessidades de saúde específicas.',
  },
  {
    id: 'ambiente-acolhedor',
    number: '04',
    title: 'Ambiente acolhedor',
    tag: 'Espaço Afetivo',
    description:
      'Instalações limpas, ventiladas e planejadas com elementos de madeira e luz natural. Um verdadeiro refúgio aconchegante que transmite a paz e a segurança de um lar.',
  },
];

export const SPACE_FEATURES = [
  {
    title: 'Conforto',
    description: 'Áreas de repouso silenciosas, climatizadas e com pisos antiderrapantes térmicos.',
  },
  {
    title: 'Segurança',
    description: 'Portões duplos de contenção, monitoramento constante e protocolos rigorosos de assepsia.',
  },
  {
    title: 'Diversão',
    description: 'Espaço gramado seguro para enriquecimento ambiental, brinquedos táteis e momentos de lazer.',
  },
];

export const getWhatsAppLink = (customText?: string) => {
  const text = customText || SITE_CONFIG.contact.whatsappMessage;
  return `https://wa.me/${SITE_CONFIG.contact.phoneRaw}?text=${encodeURIComponent(text)}`;
};
