'use client';

import React from 'react';
import Button from '@/components/Button';

const mockProduct = {
  id: 1,
  name: 'Remera Fractal 01',
  price: 19.99,
  description:
    'Remera premium 100% algodón con diseño fractal sublimado. Ideal para quienes buscan estilo y comodidad.',
  imageUrl: 'https://source.unsplash.com/600x600/?tshirt,1',
};

export default function ProductDetailPage() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={mockProduct.imageUrl}
          alt={mockProduct.name}
          className="w-full md:w-1/2 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{mockProduct.name}</h1>
          <p className="text-gray-700 mb-4">{mockProduct.description}</p>
          <p className="text-2xl font-semibold mb-6">${mockProduct.price}</p>
          <Button variant="primary">Agregar al carrito</Button>
        </div>
      </div>
    </div>
  );
}
