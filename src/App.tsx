
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"; // Keep Index for now, or replace with WelcomeScreen as default
import NotFound from "./pages/NotFound";

import WelcomeScreen from "./pages/WelcomeScreen";
import MenuCategoriesPage from "./pages/MenuCategoriesPage";
import ProductsListPage from "./pages/ProductsListPage";
import CartReviewPage from "./pages/CartReviewPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import KDSPage from "./pages/KDSPage";

import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} /> {/* Default to WelcomeScreen */}
            <Route path="/categories" element={<MenuCategoriesPage />} />
            <Route path="/products/:categoryId" element={<ProductsListPage />} />
            <Route path="/cart" element={<CartReviewPage />} />
            <Route path="/confirmation" element={<OrderConfirmationPage />} />
            <Route path="/kds" element={<KDSPage />} />
            
            {/* Fallback to Index if other routes are not matched, before NotFound */}
            {/* Or remove Index if WelcomeScreen is the true entry */}
            <Route path="/index-fallback" element={<Index />} /> 
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
