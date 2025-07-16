'use client';

import React from 'react';
import ProductCard from '@/components/ProductCard';

const mockProducts = [
  {
    id: 1,
    name: 'Remera Fractal 01',
    price: 19.99,
    imageUrl: 'https://source.unsplash.com/400x400/?tshirt,1',
  },
  {
    id: 2,
    name: 'Remera Fractal 02',
    price: 24.99,
    imageUrl: 'https://source.unsplash.com/400x400/?tshirt,2',
  },
  {
    id: 3,
    name: 'Remera Fractal 03',
    price: 21.5,
    imageUrl: 'https://source.unsplash.com/400x400/?tshirt,3',
  },
  {
    id: 4,
    name: 'Remera Fractal 04',
    price: 29.99,
    imageUrl: 'https://source.unsplash.com/400x400/?tshirt,4',
  },
];

export default function CatalogPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Catálogo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
