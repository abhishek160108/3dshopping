import React from 'react';
import { SupermarketScene } from './components/3d/SupermarketScene';
import { useStore } from './store/useStore';
import { DEPARTMENTS, PRODUCTS } from './data/products';

export default function App() {
  const {
    mode,
    setMode,
    cart,
    addToCart,
    selectedProduct,
    setSelectedProduct
  } = useStore();

  const totalCount = Object.values(cart).reduce((acc, q) => acc + q, 0);
  const totalAmount = Object.entries(cart).reduce((acc, [pid, q]) => {
    const p = PRODUCTS.find((x) => x.id === pid);
    return acc + (p ? p.price * q : 0);
  }, 0);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-forest-950 text-ivory-50">
      <SupermarketScene />

      {mode === 'entrance' && (
        <section className="fixed inset-0 z-50 flex flex-col items-center justify-center p-8 bg-forest-950/80 backdrop-blur-md text-center space-y-6">
          <div className="px-4 py-1.5 rounded-full glass-panel text-xs font-mono uppercase tracking-widest text-lime-300">
            FRESHVERSE 3D • NEXT-GENERATION SPATIAL SUPERMARKET
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl tracking-tight max-w-4xl">
            STEP INSIDE THE FUTURE OF FRESH GROCERY.
          </h1>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setMode('exploring')}
              className="px-8 py-4 rounded-2xl bg-lime-400 text-forest-950 font-display font-extrabold text-lg"
            >
              ENTER THE STORE
            </button>
          </div>
        </section>
      )}

      {/* Top HUD */}
      <header className="fixed top-0 inset-x-0 z-30 p-4 flex items-center justify-between pointer-events-none">
        <div className="glass-panel px-4 py-2.5 rounded-2xl pointer-events-auto font-display font-extrabold">
          FRESHVERSE <span className="text-lime-400">3D</span>
        </div>
        <div className="glass-panel px-4 py-2.5 rounded-2xl pointer-events-auto font-mono text-sm">
          Cart: {totalCount} items • ₹{totalAmount}
        </div>
      </header>

      {/* Side Department Navigation */}
      <aside className="fixed left-4 top-20 z-20 w-52 glass-panel rounded-2xl p-3 space-y-1.5">
        <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 px-2">
          8 Store Aisles
        </div>
        {DEPARTMENTS.map((d) => (
          <div key={d.id} className="px-2.5 py-1.5 rounded-xl hover:bg-forest-800 text-xs flex justify-between">
            <span>{d.shortName}</span>
            <span className="font-mono text-lime-300">{d.aisleNumber}</span>
          </div>
        ))}
      </aside>

      {/* Selected Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-forest-950/70 backdrop-blur-sm">
          <div className="glass-panel rounded-3xl max-w-lg w-full p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs font-mono text-lime-400">{selectedProduct.category} • {selectedProduct.aisleNumber}</div>
                <h2 className="font-display font-bold text-2xl">{selectedProduct.name}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-3 py-1 rounded-lg bg-forest-800 text-xs"
              >
                Close
              </button>
            </div>
            <div className="font-mono font-extrabold text-3xl text-lime-300">
              ₹{selectedProduct.price} <span className="text-xs font-normal text-ivory-200">/ {selectedProduct.unit}</span>
            </div>
            <p className="text-sm text-ivory-100/85">{selectedProduct.description}</p>
            <button
              type="button"
              onClick={() => {
                addToCart(selectedProduct.id, 1);
                setSelectedProduct(null);
              }}
              className="w-full py-3 rounded-xl bg-lime-400 text-forest-950 font-display font-extrabold text-sm"
            >
              Add to Cart • ₹{selectedProduct.price}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
