import React from 'react';
import { Navigation } from 'lucide-react';

const FindUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-festin-dark mb-4">Cum ne găsiți?</h2>
            <div className="gold-divider"></div>
            <p className="text-gray-600 mb-10 max-w-2xl">
                Vă așteptăm la sediul nostru pentru a discuta despre cele mai dulci proiecte și pentru a gusta din preparatele noastre.
            </p>

            <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] border-4 border-white mb-8 relative bg-gray-200">
                <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    title="Locația Festin Acasă"
                    src="https://maps.google.com/maps?q=Colegiul+Tehnic+Ioan+C.+%C8%98tef%C4%83nescu,+Ia%C8%99i&t=&z=15&ie=UTF8&iwloc=&output=embed"
                >
                </iframe>
            </div>

            <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Colegiul+Tehnic+Ioan+C.+%C8%98tef%C4%83nescu,+Ia%C8%99i" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-festin-gold text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#b08d55] hover:-translate-y-1 transition-all duration-300 custom-nav-btn"
            >
                <Navigation size={20} />
                Navighează de la locația ta
            </a>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;