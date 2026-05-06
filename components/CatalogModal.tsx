import React from 'react';
import { X } from 'lucide-react';
import { Category, Product } from '../types';
import ProductCard from './ProductCard';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category;
  products: Product[];
}

const CatalogModal: React.FC<CatalogModalProps> = ({ isOpen, onClose, category, products }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-festin-cream w-full h-full md:w-[90%] md:h-[90%] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
            <div>
                <h2 className="font-serif text-3xl font-bold text-festin-dark">{category.title}</h2>
                <p className="text-gray-500 text-sm mt-1">Meniul complet</p>
            </div>
            <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-festin-dark"
            >
                <X size={32} />
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map(product => (
                    <div key={product.id} className="h-full">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            
            {products.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    Nu există produse disponibile momentan în această categorie.
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CatalogModal;
