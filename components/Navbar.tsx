import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Instagram, Facebook } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    } else {
      console.warn(`Section with id ${id} not found`);
    }
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: 'Acasă', href: '#acasa' },
    { name: 'Cofetărie', href: '#cofetarie' },
    { name: 'Patiserie', href: '#patiserie' },
    { name: 'Brutărie', href: '#brutarie' },
    { name: 'Evenimente', href: '#evenimente' },
    { name: 'Despre Noi', href: '#despre' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#acasa" 
            onClick={(e) => scrollToSection(e, '#acasa')}
            className="flex flex-col items-center md:items-start group cursor-pointer"
          >
            <span className={`font-serif text-2xl md:text-3xl font-bold tracking-wider transition-colors duration-300 ${isScrolled ? 'text-festin-dark' : 'text-white'}`}>
              FESTIN ACASĂ
            </span>
            <span className={`text-[10px] md:text-xs tracking-[0.3em] uppercase transition-colors duration-300 ${isScrolled ? 'text-festin-accent' : 'text-gray-200'}`}>
              Brutărie & Cofetărie
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-sans text-xs xl:text-sm font-semibold tracking-wide uppercase hover:text-festin-accent transition-colors duration-200 cursor-pointer ${
                  isScrolled ? 'text-festin-dark' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <button 
              onClick={toggleCart}
              className={`${isScrolled ? 'text-festin-dark' : 'text-white'} hover:text-festin-accent transition-colors relative`}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-festin-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex gap-4 items-center md:hidden">
            <button 
                onClick={toggleCart}
                className={`${isScrolled ? 'text-festin-dark' : 'text-white'} mr-2 relative`}
              >
                <ShoppingBag size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-2 bg-festin-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
            </button>
            <button 
              className="text-festin-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? '#2C241B' : '#FFFFFF'} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0' }}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 text-festin-dark">
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-serif text-2xl text-festin-dark hover:text-festin-accent transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          {/* Removed social icons from mobile menu as per clean-up request, keeping it consistent */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;