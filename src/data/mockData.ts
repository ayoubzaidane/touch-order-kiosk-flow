
import { Category, MenuItem } from '@/types';

export const categories: Category[] = [
  { id: 'burgers', name: 'Burgers', imageUrl: '/placeholder.svg' },
  { id: 'sides', name: 'Sides', imageUrl: '/placeholder.svg' },
  { id: 'drinks', name: 'Drinks', imageUrl: '/placeholder.svg' },
  { id: 'desserts', name: 'Desserts', imageUrl: '/placeholder.svg' },
];

export const menuItems: MenuItem[] = [
  { id: '1', name: 'Classic Burger', description: 'A delicious classic beef burger.', price: 8.99, category: 'burgers', imageUrl: '/placeholder.svg' },
  { id: '2', name: 'Cheese Burger', description: 'Classic burger with a slice of cheddar.', price: 9.99, category: 'burgers', imageUrl: '/placeholder.svg' },
  { id: '3', name: 'Veggie Burger', description: 'A tasty plant-based burger.', price: 9.49, category: 'burgers', imageUrl: '/placeholder.svg' },
  { id: '4', name: 'Fries', description: 'Crispy golden fries.', price: 3.49, category: 'sides', imageUrl: '/placeholder.svg' },
  { id: '5', name: 'Onion Rings', description: 'Battered and fried onion rings.', price: 4.49, category: 'sides', imageUrl: '/placeholder.svg' },
  { id: '6', name: 'Cola', description: 'Refreshing cola.', price: 2.00, category: 'drinks', imageUrl: '/placeholder.svg' },
  { id: '7', name: 'Lemonade', description: 'Freshly squeezed lemonade.', price: 2.50, category: 'drinks', imageUrl: '/placeholder.svg' },
  { id: '8', name: 'Chocolate Cake', description: 'Rich chocolate lava cake.', price: 5.99, category: 'desserts', imageUrl: '/placeholder.svg' },
];
