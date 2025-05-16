import { Category, MenuItem } from '@/types';

export const categories: Category[] = [
  { id: 'waffles', name: 'Waffles (Gaufres)', imageUrl: '/placeholder.svg' },
  { id: 'churros', name: 'Churros', imageUrl: '/placeholder.svg' },
  { id: 'desserts', name: 'Desserts', imageUrl: '/placeholder.svg' },
];

export const menuItems: MenuItem[] = [
  // Waffles
  { id: 'waffle-chocolate', name: 'Chocolate Waffle', description: 'Classic sweet waffle with rich chocolate sauce. Mix and match flavors!', price: 10, category: 'waffles', imageUrl: '/placeholder.svg' },
  { id: 'waffle-caramel', name: 'Caramel Waffle', description: 'Classic sweet waffle with smooth caramel sauce. Mix and match flavors!', price: 10, category: 'waffles', imageUrl: '/placeholder.svg' },
  { id: 'waffle-raspberry', name: 'Raspberry Waffle', description: 'Classic sweet waffle with tangy raspberry coulis. Mix and match flavors!', price: 11, category: 'waffles', imageUrl: '/placeholder.svg' },
  { id: 'waffle-lemon', name: 'Lemon Waffle', description: 'Classic sweet waffle with zesty lemon curd. Mix and match flavors!', price: 11, category: 'waffles', imageUrl: '/placeholder.svg' },
  { id: 'waffle-banana', name: 'Banana Waffle', description: 'Classic sweet waffle with fresh banana slices. Mix and match flavors!', price: 12, category: 'waffles', imageUrl: '/placeholder.svg' },
  { id: 'topping-sweeties', name: 'Sweeties Topping', description: 'Add a delightful mix of sweeties to your waffle!', price: 3, category: 'waffles', imageUrl: '/placeholder.svg' },

  // Churros
  { id: 'churros-sucre-choco', name: 'Churros Sucrés - Chocolate Dip', description: 'Crispy sweet churros served with a rich chocolate dip.', price: 8, category: 'churros', imageUrl: '/placeholder.svg' },
  { id: 'churros-sucre-caramel', name: 'Churros Sucrés - Caramel Dip', description: 'Crispy sweet churros served with a creamy caramel dip.', price: 8, category: 'churros', imageUrl: '/placeholder.svg' },
  { id: 'churros-sales-turkey-small', name: 'Churros Salés - Smoked Turkey (Small)', description: 'Savory churros with smoked turkey filling.', price: 9, category: 'churros', imageUrl: '/placeholder.svg' },
  { id: 'churros-sales-turkey-large', name: 'Churros Salés - Smoked Turkey (Large)', description: 'Large portion of savory churros with smoked turkey filling.', price: 14, category: 'churros', imageUrl: '/placeholder.svg' },
  { id: 'churros-sales-cheese-small', name: 'Churros Salés - Herb Cheese (Small)', description: 'Savory churros with herb cheese filling.', price: 9, category: 'churros', imageUrl: '/placeholder.svg' },
  { id: 'churros-sales-cheese-large', name: 'Churros Salés - Herb Cheese (Large)', description: 'Large portion of savory churros with herb cheese filling.', price: 14, category: 'churros', imageUrl: '/placeholder.svg' },

  // Desserts
  { id: 'tiramisu-coffee', name: 'Tiramisu - Coffee', description: 'Creamy classic Italian coffee-flavored dessert.', price: 15, category: 'desserts', imageUrl: '/placeholder.svg' },
  { id: 'tiramisu-lemon', name: 'Tiramisu - Lemon', description: 'A refreshing lemon twist on the classic Tiramisu.', price: 15, category: 'desserts', imageUrl: '/placeholder.svg' },
  
  // Keeping old items for now, in case they are referenced elsewhere or for variety,
  // but they won't appear under the new categories.
  // You can ask me to remove them if they are no longer needed.
  { id: '1', name: 'Classic Burger (Old)', description: 'A delicious classic beef burger.', price: 8.99, category: 'burgers-old', imageUrl: '/placeholder.svg' },
  { id: '2', name: 'Cheese Burger (Old)', description: 'Classic burger with a slice of cheddar.', price: 9.99, category: 'burgers-old', imageUrl: '/placeholder.svg' },
  { id: '4', name: 'Fries (Old)', description: 'Crispy golden fries.', price: 3.49, category: 'sides-old', imageUrl: '/placeholder.svg' },
  { id: '6', name: 'Cola (Old)', description: 'Refreshing cola.', price: 2.00, category: 'drinks-old', imageUrl: '/placeholder.svg' },
];
