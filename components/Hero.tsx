import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="acasa" className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center md:justify-start">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516919549054-e08258825f80?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center md:text-left text-white px-4 md:px-12 lg:px-20 max-w-6xl animate-fade-in-up">
        <h2 className="font-sans text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 text-festin-accent">
          Bun venit la Festin Acasă
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Gustul care îți <br/> trezește amintiri
        </h1>
        {/* Adjusted font weight to font-normal to avoid bold diacritics issue */}
        <p className="font-sans text-lg md:text-xl text-gray-200 mb-10 w-full font-normal whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis">
          Descoperă armonia dintre cofetăria modernă, patiseria fină și brutăria artizanală.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="border border-white text-white px-8 py-3 rounded-none uppercase tracking-wider font-semibold hover:bg-white hover:text-festin-dark transition-all duration-300 cursor-pointer"
          >
            Contactează-ne
          </a>
          <a 
            href="#cofetarie" 
            onClick={(e) => scrollToSection(e, 'cofetarie')}
            className="bg-festin-accent text-white px-8 py-3 rounded-none uppercase tracking-wider font-semibold hover:bg-white hover:text-festin-dark transition-all duration-300 cursor-pointer"
          >
            Vezi Produsele
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;