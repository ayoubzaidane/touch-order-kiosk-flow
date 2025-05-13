
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Order, CartItem } from '@/types'; // Assuming Order and CartItem types are defined
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

// Mock function to simulate new orders
const fetchNewOrders = (): Order[] => {
  // In a real app, this would fetch from a backend or WebSocket
  const randomItems = (count: number): CartItem[] => Array.from({ length: count }, (_, i) => ({
    id: `mock${i}${Date.now()}`,
    name: `Item ${i + 1}`,
    price: Math.random() * 10 + 1,
    quantity: Math.floor(Math.random() * 3) + 1,
    category: 'mock',
    description: 'Mock description'
  }));

  return Math.random() > 0.7 ? // Simulate orders appearing intermittently
    [{
      id: `order-${Date.now()}`,
      items: randomItems(Math.floor(Math.random() * 4) + 1),
      total: Math.random() * 50 + 10,
      timestamp: new Date(),
      status: 'pending' as 'pending' | 'preparing' | 'ready' | 'completed',
    }] : [];
};


const KDSPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Simulate initial load of some orders
    setOrders([
      { id: 'kds-1', items: [{id: 'kds-item-1', name: 'Classic Burger', quantity: 2, price: 8.99, category: 'burgers', description:''}, {id: 'kds-item-2', name: 'Fries', quantity: 1, price: 3.49, category: 'sides', description:''}], total: (8.99*2)+3.49, timestamp: new Date(Date.now() - 5 * 60000), status: 'pending' },
      { id: 'kds-2', items: [{id: 'kds-item-3', name: 'Cola', quantity: 3, price: 2.00, category: 'drinks', description:''}], total: 6.00, timestamp: new Date(Date.now() - 2 * 60000), status: 'preparing' },
    ]);

    const intervalId = setInterval(() => {
      const newOrders = fetchNewOrders();
      if (newOrders.length > 0) {
        setOrders(prevOrders => [...newOrders, ...prevOrders].sort((a,b) => b.timestamp.getTime() - a.timestamp.getTime()));
      }
      // Simulate some orders completing
      setOrders(prevOrders => prevOrders.map(o => {
        if (o.status === 'preparing' && Math.random() > 0.8) return {...o, status: 'ready'};
        if (o.status === 'pending' && Math.random() > 0.7) return {...o, status: 'preparing'};
        return o;
      }).filter(o => o.status !== 'completed' || (Date.now() - o.timestamp.getTime()) < 5 * 60000)); // Remove completed orders older than 5 mins
    }, 5000); // Check for new orders every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prevOrders => prevOrders.map(order => order.id === orderId ? { ...order, status } : order));
  };
  
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-400';
      case 'preparing': return 'bg-blue-400';
      case 'ready': return 'bg-green-500';
      case 'completed': return 'bg-gray-400';
      default: return 'bg-gray-200';
    }
  };


  return (
    <Layout showCartButton={false} showBackButton={false}>
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-600">Kitchen Display System</h1>
      {orders.length === 0 ? (
        <p className="text-center text-xl text-neutral-500">No active orders.</p>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {orders.map(order => (
          <Card key={order.id} className={`shadow-lg rounded-lg flex flex-col ${getStatusColor(order.status)} text-white`}>
            <CardHeader className="border-b border-white/20 p-4">
              <CardTitle className="text-xl">Order #{order.id.substring(order.id.length - 6)}</CardTitle>
              <p className="text-sm opacity-80">{formatDistanceToNow(order.timestamp, { addSuffix: true })}</p>
            </CardHeader>
            <CardContent className="p-4 flex-grow space-y-2">
              {order.items.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-sm font-mono bg-white/20 px-2 py-0.5 rounded">x{item.quantity}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="p-4 border-t border-white/20 flex flex-col space-y-2">
              <p className="text-lg font-bold self-start">Status: <span className="uppercase">{order.status}</span></p>
              <div className="grid grid-cols-2 gap-2 w-full">
                {order.status === 'pending' && (
                  <Button onClick={() => updateOrderStatus(order.id, 'preparing')} className="bg-blue-500 hover:bg-blue-600 text-white w-full">Start Preparing</Button>
                )}
                {order.status === 'preparing' && (
                  <Button onClick={() => updateOrderStatus(order.id, 'ready')} className="bg-green-600 hover:bg-green-700 text-white w-full">Mark as Ready</Button>
                )}
                 {order.status === 'ready' && (
                  <Button onClick={() => updateOrderStatus(order.id, 'completed')} className="bg-gray-500 hover:bg-gray-600 text-white w-full">Mark Completed</Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      )}
    </Layout>
  );
};

export default KDSPage;
