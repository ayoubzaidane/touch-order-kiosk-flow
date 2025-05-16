
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { CartItem } from '@/types'; // Import CartItem type

interface LocationState {
  items: CartItem[];
  total: number;
  orderNumber: number;
}

const OrderConfirmationPage = () => {
  const { clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate(); // Added for potential redirect

  // Attempt to get state, default to null or empty if not present
  const state = location.state as LocationState | null;
  
  const orderItems = state?.items || [];
  const orderTotal = state?.total || 0;
  const orderNumberDisplay = state?.orderNumber || (Math.floor(Math.random() * 90000) + 10000); // Fallback if not passed

  useEffect(() => {
    // Clear cart when component mounts after order confirmation
    clearCart();
    
    // Automatically navigate to welcome screen after a delay
    const timer = setTimeout(() => {
      navigate('/'); 
    }, 15000); // 15 seconds redirect

    return () => clearTimeout(timer);
  }, [clearCart, navigate]);

  if (!state) {
    // Optional: Handle case where user lands here without order data (e.g., direct navigation)
    // You could redirect them or show a specific message.
    // For now, it will show a generic message with a random order number.
    console.warn("OrderConfirmationPage: No order data found in location state.");
  }

  return (
    <Layout showCartButton={false} showBackButton={false} showHomeButton={false} showKdsButton={false}>
      <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-200px)] py-10">
        <CheckCircle2 className="w-20 h-20 sm:w-24 sm:h-24 text-green-500 mb-6" />
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-green-600">Order Placed Successfully!</h1>
        <p className="text-lg sm:text-xl text-neutral-600 mb-2">Your order number is:</p>
        <p className="text-2xl sm:text-3xl font-mono font-semibold text-orange-600 mb-6">{orderNumberDisplay}</p>
        
        {orderItems.length > 0 && (
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mb-8">
            <h2 className="text-xl font-semibold mb-4 text-neutral-700">Order Summary:</h2>
            <ul className="space-y-3 text-left">
              {orderItems.map(item => (
                <li key={item.id} className="flex justify-between items-center border-b pb-2 last:border-b-0 last:pb-0">
                  <div>
                    <span className="font-medium text-neutral-700">{item.name}</span>
                    <span className="text-sm text-neutral-500 ml-2"> (x{item.quantity})</span>
                  </div>
                  <span className="font-medium text-neutral-600">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-4 pt-3 border-t">
              <p className="text-lg font-bold text-neutral-800">Total:</p>
              <p className="text-2xl font-bold text-green-600">${orderTotal.toFixed(2)}</p>
            </div>
          </div>
        )}

        <p className="text-md sm:text-lg text-neutral-500 mb-8">Please wait for your order at the pickup counter. Thank you!</p>
        <Link to="/">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md px-8 py-3 text-lg">
            Start New Order
          </Button>
        </Link>
        <p className="text-xs text-neutral-400 mt-4">You will be redirected to the home screen shortly.</p>
      </div>
    </Layout>
  );
};

export default OrderConfirmationPage;
