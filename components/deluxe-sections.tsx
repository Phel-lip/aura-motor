'use client'

import { useState } from 'react'
import { Coffee, CreditCard, Gift, Camera, MapPin, MessageCircle, Snowflake, Sparkles, Star, Wifi, X } from 'lucide-react'
import { businessConfig, formatBRL, waLink } from '@/lib/demo-data'

const amenities = [
  ['Pagamento fácil', 'Pix, débito e crédito', CreditCard], ['Estacionamento', 'Bem na porta do studio', MapPin], ['Café por nossa conta', 'Um mimo para o seu momento', Coffee], ['Espaço instagramável', 'Luz bonita, naturalmente', Camera], ['Wi-Fi', 'Para você ficar à vontade', Wifi], ['Clima gostoso', 'Ar-condicionado sempre', Snowflake],
] as const
const products = [
  { name: 'Shampoo Aura', category: 'Cuidado diário · Aura Lab', price: 78 }, { name: 'Máscara Ritual', category: 'Tratamento intenso · Aura Lab', price: 112 }, { name: 'Leave-in Leve', category: 'Proteção e movimento · Aura Lab', price: 94 }, { name: 'Óleo de Brilho', category: 'Finalização · Aura Lab', price: 86 },
]
const reviews = [
  ['Marina C.', 'O ambiente é lindo e o atendimento impecável. A equipe entende exatamente o que você quer e faz tudo parecer leve.'], ['Carolina A.', 'Vim fazer as unhas pela primeira vez e já saí com o próximo horário marcado. Muito carinho em cada detalhe.'], ['Renata L.', 'Faço meu cabelo aqui há meses. Além do resultado, adoro como tudo é organizado e fácil de agendar.'], ['Júlia P.', 'Fiz cabelo e maquiagem para um evento e amei o resultado. Com certeza vou voltar.'],
]

export function DeluxeSections() {
  const [giftOpen, setGiftOpen] = useState(false)
  const send = (message: string) => window.open(waLink(businessConfig.whatsapp, message), '_blank', 'noopener,noreferrer')
  return <>
    <section className="section amenities-section" id="amenities"><div className="section-heading"><div><p className="eyebrow">Amenities</p><h2>Tudo pensado para<br /><em>você aproveitar.</em></h2></div><p>Os pequenos detalhes que transformam uma visita ao Aura em um momento só seu.</p></div><div className="amenities-grid">{amenities.map(([title, text, Icon]) => <article className="amenity" key={title}><Icon size={20} strokeWidth={1.5} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
    <section className="shop-section" id="produtos"><div className="shop-intro"><p className="eyebrow">Aura em casa</p><h2>Leve o cuidado<br /><em>com você.</em></h2><p>Os mesmos rituais que usamos no studio, escolhidos para continuar cuidando de você entre uma visita e outra.</p><button className="button button-dark" onClick={() => send('Olá! Quero uma recomendação de produto para o meu cabelo.')}>Quero uma recomendação <MessageCircle size={16} /></button></div><div className="products-area"><div className="products-photo"><img src="/images/produtos-aura.png" alt="Produtos profissionais Aura" /></div><div className="product-grid">{products.map((product) => <article className="product" key={product.name}><div><p className="product-category">{product.category}</p><h3>{product.name}</h3><strong>{formatBRL(product.price)}</strong></div><button aria-label={`Comprar ${product.name}`} onClick={() => send(`Olá! Quero comprar o produto ${product.name}.`)}><MessageCircle size={16} /></button></article>)}</div></div></section>
    <section className="gift-section"><div><Gift size={26} strokeWidth={1.5} /><p className="eyebrow">Um presente com intenção</p><h2>Gift Card</h2><p>Cuidado escolhido por você, para alguém especial.</p></div><button className="button button-primary" onClick={() => setGiftOpen(true)}>Enviar de presente <Gift size={16} /></button><div className="recommendation"><Sparkles size={19} /><div><strong>Não sabe o que escolher?</strong><p>Conte o que seu cabelo precisa e a nossa equipe ajuda você a encontrar o cuidado ideal.</p></div><button className="text-link" onClick={() => send('Olá! Não sei qual cuidado escolher. Podem me ajudar?')}>Pedir recomendação</button></div></section>
    <section className="section testimonials-section" id="depoimentos"><div className="section-heading"><div><p className="eyebrow">Palavras que ficam</p><h2>O que falam<br />sobre o Aura.</h2></div><p>A experiência de quem já encontrou no studio um lugar para chamar de seu.</p></div><div className="reviews-grid">{reviews.map(([name, text]) => <article className="review" key={name}><div className="google-line"><span className="review-avatar">{name.split(' ').map((word) => word[0]).join('')}</span><span>Google</span><span className="stars">★★★★★</span></div><p>“{text}”</p><strong>— {name}</strong></article>)}</div></section>
    {giftOpen && <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setGiftOpen(false)}><div className="gift-modal" role="dialog" aria-modal="true" aria-labelledby="gift-title"><button className="icon-button modal-close" aria-label="Fechar" onClick={() => setGiftOpen(false)}><X /></button><Gift size={26} /><p className="eyebrow">Gift Card Aura</p><h2 id="gift-title">Um momento só dela.</h2><p>Escolha entre um ritual de beleza ou um valor para ela usar como quiser.</p><div className="gift-options"><button onClick={() => send('Olá! Quero enviar um Gift Card de R$ 150.')}>R$ 150 <span>Um carinho</span></button><button onClick={() => send('Olá! Quero enviar um Gift Card de R$ 250.')}>R$ 250 <span>Um ritual completo</span></button><button onClick={() => send('Olá! Quero enviar um Gift Card personalizado.')}>Personalizado <span>Você escolhe</span></button></div></div></div>}
  </>
}
export default DeluxeSections
