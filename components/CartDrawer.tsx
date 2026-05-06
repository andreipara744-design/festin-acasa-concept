import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { items, removeItem, isOpen, toggleCart, total } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleCart}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b flex justify-between items-center bg-festin-cream">
            <h2 className="font-serif text-2xl font-bold text-festin-dark flex items-center gap-2">
              <ShoppingBag size={24} /> Coșul tău
            </h2>
            <button onClick={toggleCart} className="text-gray-500 hover:text-festin-accent">
              <X size={24} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <ShoppingBag size={48} className="mb-4 opacity-20" />
                <p>Coșul tău este gol.</p>
                <button 
                  onClick={toggleCart}
                  className="mt-4 text-festin-accent font-bold hover:underline"
                >
                  Continuă cumpărăturile
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.product.id} className="flex gap-4 animate-fade-in-up">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-festin-dark">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">{item.product.category}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm">x{item.quantity}</span>
                      <span className="font-bold text-festin-accent">{(item.product.price * item.quantity).toFixed(2)} Lei</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(item.product.id)}
                    className="text-gray-400 hover:text-red-500 self-start p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-4 text-xl font-bold text-festin-dark">
                <span>Total</span>
                <span>{total.toFixed(2)} Lei</span>
              </div>
              <button className="w-full bg-festin-dark text-white py-4 font-bold uppercase tracking-wider hover:bg-festin-accent transition-colors duration-300">
                Finalizează Comanda
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
