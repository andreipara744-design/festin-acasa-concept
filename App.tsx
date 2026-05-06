import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import EventsSection from './components/EventsSection';
import AboutSection from './components/AboutSection';
import FindUsSection from './components/FindUsSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { PRODUCTS, CATEGORIES } from './constants';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  // Runtime check for navigation links
  useEffect(() => {
    const checkLinks = () => {
        const ids = ['acasa', 'cofetarie', 'patiserie', 'brutarie', 'evenimente', 'despre', 'contact'];
        console.group('Festin Acasă - Navigation Check');
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                console.log(`%c✓ Section found: #${id}`, 'color: green');
            } else {
                console.error(`✗ Missing section: #${id}`);
            }
        });
        console.groupEnd();
    };
    
    // Check after a short delay to ensure rendering
    setTimeout(checkLinks, 1000);
  }, []);

  // Filter products by category
  const cofetarieProducts = PRODUCTS.filter(p => p.category === 'cofetarie');
  const patiserieProducts = PRODUCTS.filter(p => p.category === 'patiserie');
  const brutarieProducts = PRODUCTS.filter(p => p.category === 'brutarie');

  const cofetarieCat = CATEGORIES.find(c => c.id === 'cofetarie')!;
  const patiserieCat = CATEGORIES.find(c => c.id === 'patiserie')!;
  const brutarieCat = CATEGORIES.find(c => c.id === 'brutarie')!;

  return (
    <CartProvider>
      <div className="antialiased text-gray-800">
        <Navbar />
        <CartDrawer />
        <Hero />
        
        {/* Visual Transition Separator */}
        <div className="h-16 bg-gradient-to-b from-transparent to-festin-cream -mt-16 relative z-20"></div>

        <main>
          {/* Sections */}
          <ProductSection 
            category={cofetarieCat} 
            products={cofetarieProducts} 
          />
          
          {/* Parallax Break */}
          <div 
            className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative my-10"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2000&auto=format&fit=crop")' }}
          >
             <div className="absolute inset-0 bg-festin-dark/60"></div>
             <div className="relative z-10 text-center px-4">
                <h3 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4 italic">"Dulciurile sunt fericire comestibilă."</h3>
             </div>
          </div>

          <ProductSection 
            category={patiserieCat} 
            products={patiserieProducts}
            reversed={true} 
          />

          {/* Parallax Break */}
          <div 
            className="h-64 bg-fixed bg-cover bg-center flex items-center justify-center relative my-10"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=2000&auto=format&fit=crop")' }}
          >
             <div className="absolute inset-0 bg-festin-dark/60"></div>
             <div className="relative z-10 text-center px-4">
                <h3 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4 italic">"Pâinea noastră, sufletul mesei."</h3>
             </div>
          </div>

          <ProductSection 
            category={brutarieCat} 
            products={brutarieProducts} 
          />
          
          {/* Events Section */}
          <EventsSection />

          <AboutSection />
          
          {/* New Map Section */}
          <FindUsSection />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;