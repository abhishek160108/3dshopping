export type DepartmentId =
  | 'Fresh Produce'
  | 'Bakery'
  | 'Dairy'
  | 'Snacks'
  | 'Beverages'
  | 'Pantry'
  | 'Household'
  | 'Personal Care';

export type ProductShape =
  | 'box'
  | 'cylinder'
  | 'bottle'
  | 'jar'
  | 'crate'
  | 'loaf'
  | 'pouch';

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: DepartmentId;
  aisleNumber: string;
  price: number; // Indian Rupees (₹)
  originalPrice?: number | null;
  unit: string;
  stock: number;
  rating: number;
  origin: string;
  isPromo: boolean;
  promoTag?: string | null;
  shape: ProductShape;
  primaryColor: string;
  accentColor: string;
  description: string;
  specs: string;
  relatedIds: string[];
  position?: {
    x: number;
    y: number;
    z: number;
    shelfX: number;
  };
}

export interface DepartmentConfig {
  id: DepartmentId;
  shortName: string;
  aisleNumber: string;
  color: string;
  accent: string;
  bannerText: string;
  center: { x: number; z: number };
  teleportPos: { x: number; y: number; z: number; yaw: number };
  shelfRowX: number;
  zStart: number;
  zEnd: number;
}

export interface WayfindingTarget {
  name: string;
  x: number;
  z: number;
  productId?: string;
  deptId?: DepartmentId;
}

export interface CompletedReceipt {
  txnId: string;
  timestamp: string;
  paymentMethod: string;
  items: Array<{ product: Product; quantity: number; lineTotal: number }>;
  subtotal: number;
  savings: number;
  gst: number;
  total: number;
}
