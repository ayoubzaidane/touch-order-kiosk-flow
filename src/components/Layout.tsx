
import React, { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ShoppingCart, UtensilsCrossed, ArrowLeft } from 'lucide-react'; // Added ArrowLeft
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface LayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
  showCartButton?: boolean;
  showHomeButton?: boolean;
  showKdsButton?: boolean;
}

const Layout = ({ children, showBackButton = false, showCartButton = true, showHomeButton = true, showKdsButton = true }: LayoutProps) => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-red-100 text-neutral-800">
      <header className="p-4 bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            {showBackButton && (
              <Button variant="outline" size="icon" onClick={() => navigate(-1)} aria-label="Go back">
                <ArrowLeft className="h-5 w-5" /> {/* Changed icon to ArrowLeft */}
              </Button>
            )}
             {showHomeButton && (
              <Button variant="outline" size="icon" onClick={() => navigate('/')} aria-label="Go to homepage">
                <Home className="h-5 w-5" />
              </Button>
            )}
            <Link to="/" className="text-2xl font-bold text-orange-600">
              KioskOrder
            </Link>
          </div>
          <div className="flex items-center gap-2">
           {showKdsButton && (
             <Button variant="outline" onClick={() => navigate('/kds')}>
                <UtensilsCrossed className="h-5 w-5 mr-2" /> KDS
              </Button>
           )}
            {showCartButton && (
              <Button variant="default" className="relative bg-orange-500 hover:bg-orange-600" onClick={() => navigate('/cart')}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <footer className="p-4 text-center text-sm text-neutral-500 bg-white/50">
        © {new Date().getFullYear()} KioskOrder. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
