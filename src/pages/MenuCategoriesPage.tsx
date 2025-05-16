
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MenuCategoriesPage = () => {
  return (
    <Layout showKdsButton={false}>
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-600">Menu Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.id} to={`/products/${category.id}`}>
            <Card className="hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden transform hover:scale-105">
              <CardHeader className="p-0">
                <img src={category.imageUrl || '/placeholder.svg'} alt={category.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6 text-center">
                <CardTitle className="text-2xl font-semibold text-neutral-700">{category.name}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default MenuCategoriesPage;

