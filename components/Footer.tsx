import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Building2, CreditCard, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="contact" 
      ref={footerRef}
      className="bg-festin-dark text-white pt-20 pb-10 border-t-4 border-festin-gold reveal transform transition-all duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-6 text-festin-gold">Festin Acasă</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Brutărie, Patiserie și Cofetărie într-un singur loc. 
              Creăm momente dulci pentru evenimentele tale speciale sau pentru micile plăceri zilnice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Navigare Rapidă</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#acasa" onClick={(e) => scrollToSection(e, 'acasa')} className="hover:text-festin-gold transition-colors cursor-pointer">Acasă</a></li>
              <li><a href="#cofetarie" onClick={(e) => scrollToSection(e, 'cofetarie')} className="hover:text-festin-gold transition-colors cursor-pointer">Cofetărie</a></li>
              <li><a href="#patiserie" onClick={(e) => scrollToSection(e, 'patiserie')} className="hover:text-festin-gold transition-colors cursor-pointer">Patiserie</a></li>
              <li><a href="#brutarie" onClick={(e) => scrollToSection(e, 'brutarie')} className="hover:text-festin-gold transition-colors cursor-pointer">Brutărie</a></li>
              <li><a href="#evenimente" onClick={(e) => scrollToSection(e, 'evenimente')} className="hover:text-festin-gold transition-colors cursor-pointer">Evenimente</a></li>
              <li><a href="#despre" onClick={(e) => scrollToSection(e, 'despre')} className="hover:text-festin-gold transition-colors cursor-pointer">Despre Noi</a></li>
            </ul>
          </div>

          {/* Contact (Updated Legal Entity Info) */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-gray-400">
              
              {/* Firma */}
              <div className="flex items-start gap-3">
                <Building2 className="text-festin-gold mt-1 flex-shrink-0" size={18} />
                <div>
                  <strong className="text-white block">Firma de exercițiu:</strong>
                  <span>FESTIN ACASĂ SRL</span>
                </div>
              </div>

              {/* Sediu */}
              <div className="flex items-start gap-3">
                <MapPin className="text-festin-gold mt-1 flex-shrink-0" size={18} />
                <div>
                  <strong className="text-white block">Sediul social:</strong>
                  <span>Colegiul Tehnic ”Ioan C. Ștefănescu”,<br/>Bulevardul Socola nr. 51-53,<br/>Iași, jud. Iaşi</span>
                </div>
              </div>

              {/* CUI */}
              <div className="flex items-start gap-3">
                <CreditCard className="text-festin-gold mt-1 flex-shrink-0" size={18} />
                <div>
                  <strong className="text-white block">CUI:</strong>
                  <span>83252063</span>
                </div>
              </div>

              {/* Nr Ordine */}
              <div className="flex items-start gap-3">
                <FileText className="text-festin-gold mt-1 flex-shrink-0" size={18} />
                <div>
                  <strong className="text-white block">Nr. de ordine:</strong>
                  <span>J22/6263/2025</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-700">
                <Mail className="text-festin-gold" size={18} />
                <a href="mailto:comenzi@festinacasa.ro" className="hover:text-white transition-colors">comenzi@festinacasa.ro</a>
              </div>

            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Program</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span>Luni - Vineri</span>
                <span className="text-white">07:30 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span>Sâmbătă</span>
                <span className="text-white">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Duminică</span>
                <span className="text-festin-gold">Închis</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Simplified Footer Copyright */}
        <div className="pt-8 text-center text-gray-500 text-sm border-none">
          <p>© 2026 Festin Acasă. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;