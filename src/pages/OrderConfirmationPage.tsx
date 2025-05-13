
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const OrderConfirmationPage = () => {
  const { clearCart } = useCart();
  const orderNumber = Math.floor(Math.random() * 90000) + 10000; // Mock order number

  useEffect(() => {
    // Clear cart when component mounts after order confirmation
    clearCart();
    
    // Automatically navigate to welcome screen after a delay
    const timer = setTimeout(() => {
      // In a real kiosk, this might navigate to welcome or an idle screen
      // For now, let's assume we want to go back to Welcome screen.
      // navigate('/'); // This would require passing navigate or using global navigation
      console.log("Order confirmed, redirecting soon...");
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [clearCart]);

  return (
    <Layout showCartButton={false} showBackButton={false} showHomeButton={false} showKdsButton={false}>
      <div className="flex flex-col items-center justify-center text-center h-[calc(100vh-200px)]">
        <CheckCircle2 className="w-24 h-24 text-green-500 mb-8" />
        <h1 className="text-4xl font-bold mb-4 text-green-600">Order Placed Successfully!</h1>
        <p className="text-xl text-neutral-600 mb-2">Your order number is:</p>
        <p className="text-3xl font-mono font-semibold text-orange-600 mb-8">{orderNumber}</p>
        <p className="text-lg text-neutral-500 mb-10">Please wait for your order at the pickup counter. Thank you!</p>
        <Link to="/">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md px-8 py-4">
            Start New Order
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default OrderConfirmationPage;
