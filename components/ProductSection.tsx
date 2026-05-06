import React, { useState } from 'react';
import { Product, Category } from '../types';
import ProductCard from './ProductCard';
import CatalogModal from './CatalogModal';

interface ProductSectionProps {
  category: Category;
  products: Product[];
  reversed?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({ category, products, reversed = false }) => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  // Show only first 4 items in the preview section
  const previewProducts = products.slice(0, 4);

  return (
    <>
      <section id={category.id} className="py-20 overflow-hidden bg-festin-cream">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className={`flex flex-col md:flex-row items-center gap-12 mb-16 ${reversed ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Text Content */}
            <div className="w-full md:w-1/3 text-center md:text-left animate-slide-in">
              <h2 className="font-sans text-sm font-bold tracking-[0.3em] uppercase text-festin-accent mb-3">
                Colecția Noastră
              </h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-festin-dark mb-6">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {category.description}
              </p>
              <div className="h-1 w-20 bg-festin-gold mx-auto md:mx-0"></div>
            </div>

            {/* Featured Category Image (Banner style) */}
            <div className="w-full md:w-2/3 h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Product Grid (Preview) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {previewProducts.map((product) => (
              <div key={product.id} className="w-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="mt-12 text-center">
              <button 
                onClick={() => setIsCatalogOpen(true)}
                className="inline-block border-2 border-festin-dark text-festin-dark px-10 py-3 font-bold uppercase tracking-widest hover:bg-festin-dark hover:text-white transition-all duration-300"
              >
                  Vezi tot meniul {category.title}
              </button>
          </div>
        </div>
      </section>

      {/* Catalog Modal */}
      <CatalogModal 
        isOpen={isCatalogOpen} 
        onClose={() => setIsCatalogOpen(false)} 
        category={category} 
        products={products}
      />
    </>
  );
};

export default ProductSection;
