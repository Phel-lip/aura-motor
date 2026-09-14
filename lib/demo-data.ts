export const businessConfig = { name: 'Aura Essencial', tagline: 'Beleza para viver do seu jeito', address: 'Rua das Acácias, 240 · Vila Madalena, São Paulo — SP', phone: '+55 11 98888-1212', whatsapp: '5582991730616', hours: 'Ter–Sáb · 9h às 20h', instagram: '', mapsUrl: '', practicalInfo: ['Atendimento com hora marcada'] }
// rating / reviewCount / source are placeholders for the demo — replace with the salon's real Google data.
export const socialProof = {
  rating: '4,9',
  reviewCount: '127',
  source: 'Google',
  ratingNote: 'Espaço pronto para as avaliações reais do salão.',
  transformation: {
    id: 'result-hair-color',
    before: '/results/hair-before.png',
    after: '/results/hair-after.png',
    alt: 'Mesma cliente antes e depois da iluminação e tratamento capilar',
    category: 'Iluminação + tratamento',
    title: 'Mais brilho, dimensão e movimento — sem perder a naturalidade.',
    description: 'A cliente queria recuperar a luminosidade dos fios sem clarear demais. O trabalho combinou tratamento, ajuste de tom e acabamento para devolver brilho e movimento.',
    serviceId: 'cor',
  },
}
// Conteúdo de exemplo — substitua pelas avaliações reais do Google do salão (nome, nota, texto, data, fonte, serviço).
export const reviews = [
  { name: 'Marina Costa', rating: 5, quote: 'Eu estava com medo de clarear porque meu cabelo já estava bem ressecado. Mostrei uma referência e ficou muito mais natural do que eu imaginava. Amei o tom.', service: 'Coloração', date: 'há 3 semanas', source: 'Google' },
  { name: 'Carolina Almeida', rating: 5, quote: 'Primeira vez no salão e já marquei a próxima. Meu cabelo ficou leve, com brilho e sem aquele aspecto marcado de mechas.', date: 'há 1 mês', source: 'Google' },
  { name: 'Júlia Pereira', rating: 5, quote: 'Finalmente acertaram o tom que eu queria. Já lavei em casa algumas vezes e continua bonito.', service: 'Coloração', date: 'há 2 meses', source: 'Google' },
]
export const faq = [
  { question: 'Como funciona a solicitação de horário?', answer: 'Você escolhe o serviço, informa suas preferências e envia a solicitação pelo WhatsApp. O salão confirma a disponibilidade com você por lá.' },
  { question: 'Posso escolher um profissional?', answer: 'Sim. Quando houver profissionais disponíveis para o serviço, você pode escolher um deles ou seguir sem preferência.' },
  { question: 'O horário escolhido já fica confirmado?', answer: 'Não. A data e o horário informados são preferências. A confirmação é feita pelo salão pelo WhatsApp.' },
]
export const professionals = [
  { id: 'ana', name: 'Ana Clara', role: 'Cabelos & cor', bio: 'Especialista em cortes leves e coloração com movimento.', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=700&q=85' },
  { id: 'luiza', name: 'Luiza Martins', role: 'Unhas & cuidado', bio: 'Manicure delicada, nail art minimalista e autocuidado.', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=700&q=85' },
  { id: 'bia', name: 'Bia Souza', role: 'Make & olhar', bio: 'Maquiagem fresca para destacar a sua melhor versão.', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=85' },
]
export const services = [
  { id: 'corte', name: 'Corte & finalização', ctaLabel: 'Quero horário para corte', category: 'Cabelos', duration: 60, buffer: 0, price: 160, priceMode: 'fixed', durationMode: 'fixed', includes: 'Lavagem, corte e finalização.', professionalIds: ['ana'], description: 'Corte pensado para sua rotina, com finalização leve.' },
  { id: 'cor', name: 'Coloração com brilho', ctaLabel: 'Quero horário para coloração', category: 'Cabelos', duration: 150, buffer: 15, price: 390, priceMode: 'from', durationMode: 'fixed', note: 'Valor final confirmado após avaliação.', professionalIds: ['ana'], description: 'Cor personalizada, brilho e tratamento em cada fio.' },
  { id: 'unhas', name: 'Manicure Aura', ctaLabel: 'Quero horário para manicure', category: 'Unhas', duration: 60, buffer: 0, price: 85, professionalIds: ['luiza'], description: 'Cuidado completo com acabamento impecável.' },
  { id: 'nail-art', name: 'Nail art minimal', ctaLabel: 'Quero horário para nail art', category: 'Unhas', duration: 90, buffer: 10, price: 130, professionalIds: ['luiza'], description: 'Detalhes autorais para unhas que contam histórias.' },
  { id: 'make', name: 'Make fresh', ctaLabel: 'Quero horário para maquiagem', category: 'Make', duration: 75, buffer: 0, price: 220, professionalIds: ['bia'], description: 'Uma produção fresca, luminosa e muito você.' },
  { id: 'sobrancelhas', name: 'Design de sobrancelhas', ctaLabel: 'Quero horário para sobrancelhas', category: 'Olhar', duration: 45, buffer: 0, price: 70, professionalIds: ['bia'], description: 'Desenho que respeita o seu rosto e o seu estilo.' },
]
const hair = [
  ['hair-1','Cabelos','https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85','Corte de cabelo em camadas'],
  ['hair-2','Cabelos','https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85','Finalização de cabelo com movimento'],
  ['hair-3','Cabelos','https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85','Cabelo finalizado no studio'],
  ['hair-4','Cabelos','https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85','Styling de cabelo'],
  ['hair-5','Cabelos','https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85','Cabelo com corte e brilho'],
]
const nails = [
  ['nails-1','Unhas','https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85','Unhas com esmaltação delicada'],
  ['nails-2','Unhas','https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85','Detalhe de nail art minimalista'],
  ['nails-3','Unhas','https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=900&q=85','Unhas com acabamento brilhante'],
  ['nails-4','Unhas','https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=85','Manicure profissional'],
  ['nails-5','Unhas','https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=900&q=85','Esmaltação e nail art'],
]
const makeup = [
  ['make-1','Make','https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85','Paleta e aplicação de maquiagem'],
  ['make-2','Make','https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85','Resultado de maquiagem natural'],
  ['make-3','Make','https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85','Aplicação de maquiagem no rosto'],
  ['make-4','Make','https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=85','Cosméticos para maquiagem'],
  ['make-5','Make','https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=85','Maquiagem profissional finalizada'],
]
const eyes = [
  ['eyes-1','Olhar','/results/brows-result.png','Design de sobrancelhas'],
  ['eyes-2','Olhar','/images/cilios-definidos.png','Design de sobrancelhas e olhar definido'],
  ['eyes-3','Olhar','/results/brows-result.png','Design de sobrancelhas'],
  ['eyes-4','Olhar','/images/cilios-definidos.png','Design de sobrancelhas e área dos olhos'],
  ['eyes-5','Olhar','/results/brows-result.png','Resultado de design de sobrancelhas'],
]
const categoryService: Record<string, string> = { Cabelos: 'corte', Unhas: 'unhas', Make: 'make', Olhar: 'sobrancelhas' }
const toGallery = (items: string[][]) => items.map(([id, category, src, alt]) => ({ id, category, src, alt, title: alt, presentation: 'reference' as const, relatedServiceId: categoryService[category] }))
export const portfolioByCategory = { Cabelos: toGallery(hair), Unhas: toGallery(nails), Make: toGallery(makeup), Olhar: toGallery(eyes) }
export const gallery = [
  { ...portfolioByCategory.Cabelos[0], relatedServiceId: 'corte' },
  { id: 'hair-color-result', category: 'Cabelos', src: '/results/hair-color-result.png', alt: 'Coloração com brilho', title: 'Coloração com brilho', presentation: 'reference' as const, relatedServiceId: 'cor' },
  { ...portfolioByCategory.Unhas[0], relatedServiceId: 'unhas' },
  { ...portfolioByCategory.Unhas[1], relatedServiceId: 'nail-art' },
  { ...portfolioByCategory.Make[0], relatedServiceId: 'make' },
  { id: 'brows-result', category: 'Olhar', src: '/results/brows-result.png', alt: 'Design de sobrancelhas', title: 'Design de sobrancelhas', presentation: 'reference' as const, relatedServiceId: 'sobrancelhas' },
]
export type AppointmentStatus = 'agendado' | 'confirmado' | 'em atendimento' | 'finalizado' | 'cancelado' | 'faltou'
export type Appointment = { id: string; client: string; phone: string; serviceId: string; professionalId: string; date: string; time: string; status: AppointmentStatus; notes?: string }
export const initialAppointments: Appointment[] = [
 { id:'a1',client:'Marina Costa',phone:'5511981112233',serviceId:'corte',professionalId:'ana',date:'2026-09-03',time:'10:00',status:'confirmado',notes:'Prefere finalizar com ondas.' },
 { id:'a2',client:'Carolina Alves',phone:'5511982223344',serviceId:'unhas',professionalId:'luiza',date:'2026-09-03',time:'11:30',status:'agendado' },
 { id:'a3',client:'Júlia Pires',phone:'5511983334455',serviceId:'make',professionalId:'bia',date:'2026-09-03',time:'14:00',status:'confirmado' },
 { id:'a4',client:'Renata Lima',phone:'5511984445566',serviceId:'cor',professionalId:'ana',date:'2026-09-04',time:'15:00',status:'agendado' },
]
export const initialClients = [
 { id:'c1',name:'Marina Costa',phone:'5511981112233',visits:8,lastVisit:'2026-08-06',nextReturn:'2026-09-03',notes:'Cabelo fino, gosta de movimento.',preferences:'Prefere acabamento natural.' },
 { id:'c2',name:'Carolina Alves',phone:'5511982223344',visits:3,lastVisit:'2026-07-21',nextReturn:'2026-09-03',notes:'',preferences:'Gosta de esmaltação nude.' },
 { id:'c3',name:'Júlia Pires',phone:'5511983334455',visits:5,lastVisit:'2026-08-12',nextReturn:'2026-09-03',notes:'',preferences:'Prefere atendimento no período da manhã.' },
 { id:'c4',name:'Renata Lima',phone:'5511984445566',visits:2,lastVisit:'2026-06-28',nextReturn:'2026-09-15',notes:'',preferences:'' },
]
export const initialWaitlist = [{ id:'w1',name:'Nina Rocha',phone:'5511985556677',serviceId:'corte',professionalId:'ana',preferredDate:'2026-09-03',preferredPeriod:'tarde',createdAt:'2026-09-02' },{ id:'w2',name:'Paula Reis',phone:'5511986667788',serviceId:'make',professionalId:'bia',preferredDate:'2026-09-04',preferredPeriod:'manhã',createdAt:'2026-09-01' }]
export const initialBlocks = [{ id:'b1',professionalId:'ana',date:'2026-09-03',time:'13:00',duration:60,label:'Pausa' }]
export const getService=(id:string)=>services.find(s=>s.id===id); export const getProfessional=(id:string)=>professionals.find(p=>p.id===id); export const formatBRL=(v:number)=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}); export const waLink=(phone:string,message:string)=>`https://wa.me/${phone}?text=${encodeURIComponent(message)}`
