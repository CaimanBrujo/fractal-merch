'use client';

import React from 'react';
import Button from '@/components/Button';

const mockCart = [
  {
    id: 1,
    name: 'Remera Fractal 01',
    price: 19.99,
    quantity: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?tshirt,1',
  },
  {
    id: 2,
    name: 'Remera Fractal 02',
    price: 24.99,
    quantity: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?tshirt,2',
  },
];

export default function CartPage() {
  const total = mockCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Carrito</h1>
      <div className="space-y-4">
        {mockCart.map((item) => (
          <div key={item.id} className="flex items-center border rounded-lg overflow-hidden">
            <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover" />
            <div className="flex-1 p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-700">
                {item.quantity} x ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="p-4 font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Button variant="primary">Realizar pedido</Button>
      </div>
    </div>
  );
}
