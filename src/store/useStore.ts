import { create } from 'zustand';
import { PRODUCTS } from '../data/products';
import { CompletedReceipt, DepartmentId, Product, WayfindingTarget } from '../types/store';

interface StoreState {
  mode: 'entrance' | 'exploring' | 'checkout';
  cart: Record<string, number>;
  selectedProduct: Product | null;
  hoveredProduct: Product | null;
  wayfindingTarget: WayfindingTarget | null;
  activeCategory: 'All' | DepartmentId;
  onlyPromos: boolean;
  soundEnabled: boolean;
  quality: 'high' | 'medium' | 'low';
  reducedMotion: boolean;
  completedReceipt: CompletedReceipt | null;
  setMode: (mode: 'entrance' | 'exploring' | 'checkout') => void;
  addToCart: (productId: string, delta: number) => void;
  clearCart: () => void;
  setSelectedProduct: (product: Product | null) => void;
  setHoveredProduct: (product: Product | null) => void;
  setWayfindingTarget: (target: WayfindingTarget | null) => void;
  setActiveCategory: (cat: 'All' | DepartmentId) => void;
  toggleOnlyPromos: () => void;
  toggleSound: () => void;
  setQuality: (q: 'high' | 'medium' | 'low') => void;
  toggleReducedMotion: () => void;
  setCompletedReceipt: (receipt: CompletedReceipt | null) => void;
}

const CART_KEY = 'freshverse_3d_cart_v1';

function loadInitialCart(): Record<string, number> {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // Ignore storage errors
  }
  return {};
}

export const useStore = create<StoreState>((set) => ({
  mode: 'entrance',
  cart: loadInitialCart(),
  selectedProduct: null,
  hoveredProduct: null,
  wayfindingTarget: null,
  activeCategory: 'All',
  onlyPromos: false,
  soundEnabled: true,
  quality: 'high',
  reducedMotion: false,
  completedReceipt: null,

  setMode: (mode) => set({ mode }),

  addToCart: (productId, delta) =>
    set((state) => {
      const prod = PRODUCTS.find((p) => p.id === productId);
      if (!prod) return state;
      const current = state.cart[productId] || 0;
      const next = Math.min(prod.stock, current + delta);
      const nextCart = { ...state.cart };
      if (next <= 0) {
        delete nextCart[productId];
      } else {
        nextCart[productId] = next;
      }
      try {
        localStorage.setItem(CART_KEY, JSON.stringify(nextCart));
      } catch {
        // Ignore storage errors
      }
      return { cart: nextCart };
    }),

  clearCart: () =>
    set(() => {
      try {
        localStorage.removeItem(CART_KEY);
      } catch {
        // Ignore storage errors
      }
      return { cart: {} };
    }),

  setSelectedProduct: (selectedProduct) => set({ selectedProduct }),
  setHoveredProduct: (hoveredProduct) => set({ hoveredProduct }),
  setWayfindingTarget: (wayfindingTarget) => set({ wayfindingTarget }),
  setActiveCategory: (activeCategory) => set({ activeCategory }),
  toggleOnlyPromos: () => set((s) => ({ onlyPromos: !s.onlyPromos })),
  toggleSound: () => set((s) => ({ soundEnabled: !s.soundEnabled })),
  setQuality: (quality) => set({ quality }),
  toggleReducedMotion: () => set((s) => ({ reducedMotion: !s.reducedMotion })),
  setCompletedReceipt: (completedReceipt) => set({ completedReceipt })
}));
