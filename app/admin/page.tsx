'use client';

import React from 'react';
import Button from '@/components/Button';

const mockProducts = [
  {
    id: 1,
    name: 'Remera Fractal 01',
    price: 19.99,
    stock: 12,
  },
  {
    id: 2,
    name: 'Remera Fractal 02',
    price: 24.99,
    stock: 5,
  },
];

export default function AdminPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      {/* Sección productos */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Productos</h2>
          <Button variant="primary">Agregar Producto</Button>
        </div>
        <div className="border rounded-lg overflow-hidden">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b last:border-b-0 p-4"
            >
              <div>
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-700">
                  ${product.price} | Stock: {product.stock}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary">Editar</Button>
                <Button variant="ghost">Eliminar</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección pedidos */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Pedidos recientes</h2>
        <p className="text-gray-500">
          Esta sección estará disponible cuando conectemos la base de datos.
        </p>
      </section>
    </div>
  );
}
