import React, { useState } from 'react';
import { Mail, Check, ChevronDown, ChevronUp } from 'lucide-react';

const EventsSection: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState<number | null>(null);

  const events = [
    {
      id: 1,
      title: "Candy Bar Personalizat",
      description: "Transformăm orice eveniment într-o poveste dulce. De la nunți și botezuri la petreceri corporate, candy bar-ul nostru este atracția principală.",
      details: "Inclus în pachet: consultanță pentru alegerea tematicii, degustare gratuită a sortimentelor, vase și decoruri specifice, transport frigorific și montaj la locație. Prețuri flexibile în funcție de numărul de invitați.",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Dineuri & Corporate",
      description: "Oferim soluții complete de patiserie sărată și deserturi fine pentru întâlniri de afaceri, lansări de produse sau cine festive.",
      details: "Asigurăm platouri diversificate cu mini-tarte, quiche-uri, saleuri și patiserie fină. Putem personaliza produsele cu logo-ul companiei (acolo unde este posibil tehnic). Livrare promptă și facturare lunară pentru parteneri.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Zile Onomastice",
      description: "Sărbătorește-i pe cei dragi cu torturi spectaculoase și pachete speciale pentru aniversări, create după gustul sărbătoritului.",
      details: "Torturi la comandă cu design personalizat, figurine din marțipan sau vafă comestibilă. Pachete 'Party Box' care includ tortul, lumânări și o selecție de prăjituri asortate pentru invitați.",
      image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const toggleEvent = (id: number) => {
    setActiveEventId(activeEventId === id ? null : id);
  };

  return (
    <section id="evenimente" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-sans text-sm font-bold tracking-[0.3em] uppercase text-festin-accent mb-3">
            Momente Speciale
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-festin-dark mb-6">
            Evenimente & Catering
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nu suntem doar o cofetărie, suntem partenerii tăi de încredere pentru cele mai importante momente din viață.
          </p>
          <div className="h-1 w-20 bg-festin-gold mx-auto mt-6"></div>
        </div>

        <div className="space-y-24">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20 group`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative">
                <div className={`absolute -inset-4 border-2 border-festin-gold opacity-30 group-hover:opacity-100 transition-opacity duration-500 ${index % 2 === 1 ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`}></div>
                <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-2xl">
                   <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                   />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <span className="text-6xl font-serif text-festin-gold/20 font-bold absolute -mt-10 -ml-6 select-none">
                  0{event.id}
                </span>
                <h4 className="font-serif text-3xl font-bold text-festin-dark mb-6 relative">
                  {event.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {event.description}
                </p>
                
                <button 
                  onClick={() => toggleEvent(event.id)}
                  className="text-festin-accent font-bold uppercase tracking-widest text-sm hover:text-festin-dark transition-colors border-b-2 border-festin-accent/30 pb-1 hover:border-festin-dark flex items-center gap-2 mx-auto md:mx-0"
                >
                  {activeEventId === event.id ? 'Ascunde detalii' : 'Cere o ofertă'}
                  {activeEventId === event.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {/* Expanded Details */}
                <div 
                  className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out ${activeEventId === event.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="bg-festin-cream p-6 rounded-lg border border-festin-gold/20 text-left">
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      <span className="font-bold text-festin-dark block mb-2">Detalii serviciu:</span>
                      {event.details}
                    </p>
                    <div className="flex items-center gap-3 text-festin-dark font-semibold border-t border-festin-gold/20 pt-4">
                      <Mail className="text-festin-accent" size={20} />
                      <a href={`mailto:evenimente@festinacasa.ro?subject=Solicitare oferta ${event.title}`} className="hover:text-festin-accent transition-colors">
                        evenimente@festinacasa.ro
                      </a>
                    </div>
                    <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                      <Check size={12} className="text-green-600" /> Răspundem în maxim 24h
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
