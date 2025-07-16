'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-bold">
          <Logo />
        </Link>
        <Link href="/catalog" className="text-gray-700 hover:text-black transition-colors">
          Catálogo
        </Link>
        <Link href="/cart" className="text-gray-700 hover:text-black transition-colors">
          Carrito
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Link href="/login">
          <Button variant="primary">Login</Button>
        </Link>
      </div>
    </nav>
  );
}
