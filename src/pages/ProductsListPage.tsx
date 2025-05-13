
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { menuItems, categories } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

const ProductsListPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { addToCart } = useCart();

  const currentCategory = categories.find(cat => cat.id === categoryId);
  const filteredItems = menuItems.filter(item => item.category === categoryId);

  if (!currentCategory) {
    return (
      <Layout>
        <div className="text-center py-10">
          <h1 className="text-2xl font-semibold">Category not found</h1>
          <Link to="/categories" className="text-orange-500 hover:underline">
            Back to categories
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showBackButton={true}>
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-600">{currentCategory.name}</h1>
      {filteredItems.length === 0 ? (
         <p className="text-center text-neutral-500 text-xl">No items in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="flex flex-col justify-between rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <img src={item.imageUrl || '/placeholder.svg'} alt={item.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-xl font-semibold mb-1 text-neutral-700">{item.name}</CardTitle>
                <CardDescription className="text-sm text-neutral-500 mb-2">{item.description}</CardDescription>
                <p className="text-lg font-bold text-green-600">${item.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button onClick={() => addToCart(item)} className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                  <PlusCircle className="mr-2 h-5 w-5" /> Add to Order
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default ProductsListPage;
