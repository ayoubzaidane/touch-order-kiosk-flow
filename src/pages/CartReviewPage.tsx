
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CartReviewPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    // In a real app, this would send the order to a backend
    console.log("Order confirmed:", cartItems, "Total:", totalPrice);
    // For now, just navigate to confirmation and clear cart
    navigate('/confirmation');
    // clearCart(); // We might want to clear cart after confirmation success
  };


  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="text-center py-10">
          <h1 className="text-3xl font-semibold mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/categories">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Browse Menu</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showBackButton={true}>
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-600">Review Your Order</h1>
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-b-0">
            <div className="flex items-center">
              <img src={item.imageUrl || '/placeholder.svg'} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
              <div>
                <h2 className="text-lg font-semibold text-neutral-700">{item.name}</h2>
                <p className="text-sm text-neutral-500">${item.price.toFixed(2)} each</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-8 w-8">
                <MinusCircle className="h-4 w-4" />
              </Button>
              <Input type="number" value={item.quantity} readOnly className="h-8 w-12 text-center appearance-none [-moz-appearance:_textfield]" />
              <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-8 w-8">
                <PlusCircle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 h-8 w-8">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-lg font-semibold w-20 text-right text-neutral-700">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="mt-8 pt-6 border-t">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-neutral-800">Total:</h2>
            <p className="text-3xl font-bold text-green-600">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={clearCart} className="text-red-500 border-red-500 hover:bg-red-50">Clear Cart</Button>
            <Button onClick={handleConfirmOrder} size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-xl rounded-lg shadow-md">
              Confirm Order
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartReviewPage;
