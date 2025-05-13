
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string; // Optional image URL
}

export interface Category {
  id: string;
  name: string;
  imageUrl?: string; // Optional image URL
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  timestamp: Date;
  status: 'pending' | 'preparing' | 'ready' | 'completed';
}
