export type CategoryId = 'cofetarie' | 'patiserie' | 'brutarie';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  category: CategoryId;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
