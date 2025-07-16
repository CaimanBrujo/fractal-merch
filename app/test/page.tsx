'use client';

import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function TestPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error('❌ Error:', error);
        setError('❌ Error al conectar a Supabase');
      } else {
        console.log('✅ Data:', data);
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Test Supabase</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p.id} className="border p-2 rounded">
            <strong>{p.name}</strong> - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
