'use client';

import React from 'react';
import Button from './Button';

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ name, price, imageUrl }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-700 mb-2">${price.toFixed(2)}</p>
        <Button variant="primary">Agregar al carrito</Button>
      </div>
    </div>
  );
}
