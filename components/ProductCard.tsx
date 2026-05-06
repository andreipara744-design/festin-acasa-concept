import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.01] h-full flex flex-col relative border border-transparent hover:border-festin-gold/20">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.isBestSeller && (
            <span className="bg-festin-gold text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-md">
              Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="bg-festin-dark text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-md">
              Nou
            </span>
          )}
        </div>

        {/* Quick Action Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <button 
              onClick={() => addItem(product)}
              className="bg-white text-festin-dark px-6 py-3 rounded-none uppercase tracking-widest font-bold text-xs transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-xl hover:bg-festin-accent hover:text-white flex items-center gap-2 hover:scale-105"
            >
                <ShoppingBag size={16} /> Adaugă în Coș
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow text-center relative z-20 bg-white group-hover:bg-festin-cream/30 transition-colors">
        <div className="flex flex-col items-center gap-1 mb-2">
            <div className="text-[10px] text-festin-accent font-bold uppercase tracking-[0.2em]">
                {product.category}
            </div>
            <div className="text-[9px] text-gray-400 font-mono tracking-wider">
                COD: {product.id.toUpperCase()}
            </div>
        </div>
        
        <h3 className="font-serif text-xl font-bold text-festin-dark mb-2 group-hover:text-festin-accent transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-center gap-1 mb-4 opacity-70">
            {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-festin-gold text-festin-gold" />)}
        </div>

        <div className="flex items-center justify-center justify-between border-t border-gray-100 pt-4 mt-auto">
            <span className="text-gray-400 text-sm">{product.weight}</span>
            <span className="font-serif text-xl font-bold text-festin-dark">{product.price.toFixed(2)} Lei</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;