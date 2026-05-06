import React from 'react';
import { Heart, Eye, Gem } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="despre" className="py-24 bg-festin-cream relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <span className="text-festin-accent font-bold uppercase tracking-[0.2em] text-sm">Povestea Noastră</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-festin-dark mt-4 mb-6">Tradiție și Modernitate</h2>
            <div className="h-1 w-20 bg-festin-gold mx-auto mb-10"></div>

            {/* Manifesto Section - Moved here as requested */}
            <p className="max-w-4xl mx-auto text-festin-gold text-lg md:text-xl font-serif italic leading-relaxed px-4">
                "Producem zilnic produse de panificație și cofetărie din ingrediente atent selecționate, respectând standarde ridicate de calitate și prospețime. Restaurantul nostru oferă preparate gustoase, realizate cu atenție și servite într-un ambient plăcut. Ne adresăm clienților care apreciază gustul autentic, constanța și profesionalismul."
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1: Misiune */}
            <div className="about-card">
                <div className="flex items-center justify-center mb-6">
                    <Heart className="text-festin-gold" size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-festin-dark">Misiune</h3>
                <p className="text-gray-600 leading-relaxed">
                    Facem deserturi care aduc zâmbete și creează amintiri.
                </p>
            </div>
            
            {/* Card 2: Viziune */}
            <div className="about-card">
                <div className="flex items-center justify-center mb-6">
                    <Eye className="text-festin-gold" size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-festin-dark">Viziune</h3>
                <p className="text-gray-600 leading-relaxed">
                    Să fim parte din momentele tale speciale, zi de zi.
                </p>
            </div>

            {/* Card 3: Valori */}
            <div className="about-card">
                <div className="flex items-center justify-center mb-6">
                    <Gem className="text-festin-gold" size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-festin-dark">Valori</h3>
                <p className="values-list">
                    Oameni dedicați excelenței creează zilnic momente de bucurie. Prin onestitate, rafinament și inovație, transformăm ingredientele de calitate în experiențe profesionale memorabile.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;