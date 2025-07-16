'use client';

import React from 'react';
import Logo from './Logo';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-200">
      <Logo />
      <div className="space-x-2">
        <Button variant="primary">Login</Button>
        <Button variant="secondary">Cart</Button>
      </div>
    </nav>
  );
}
