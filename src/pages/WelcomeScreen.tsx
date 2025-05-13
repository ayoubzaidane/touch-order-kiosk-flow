
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout'; // Using a generic layout

const WelcomeScreen = () => {
  return (
    <Layout showBackButton={false} showCartButton={false} showHomeButton={false}>
      <div className="flex flex-col items-center justify-center text-center h-[calc(100vh-200px)]">
        <img src="/placeholder.svg" alt="Restaurant Logo" className="w-40 h-40 mb-8 rounded-full shadow-lg" />
        <h1 className="text-5xl font-bold mb-6 text-orange-600">Welcome!</h1>
        <p className="text-xl text-neutral-600 mb-10">Tap below to start your order.</p>
        <Link to="/categories">
          <Button size="lg" className="px-12 py-8 text-2xl bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            Start Order
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default WelcomeScreen;
