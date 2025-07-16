'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 p-4 mt-8 text-center text-gray-600">
      {/* Links principales */}
      <div className="flex justify-center gap-6 mb-2">
        <Link href="/about" className="hover:text-black transition-colors">
          Nosotros
        </Link>
        <Link href="/contact" className="hover:text-black transition-colors">
          Contacto
        </Link>
        <a
          href="https://instagram.com/fractalmerch"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          Instagram
        </a>
      </div>

      {/* Contacto */}
      <div className="flex justify-center gap-4 mb-2 text-sm">
        <a href="mailto:contacto@fractalmerch.com" className="hover:text-black transition-colors">
          contacto@fractalmerch.com
        </a>
        <span>|</span>
        <a
          href="https://wa.me/5491123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          WhatsApp
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm mb-1">
        &copy; {new Date().getFullYear()} Fractal Merch. Todos los derechos reservados.
      </p>

      {/* Powered by */}
      <p className="text-xs text-gray-500">
        Powered by{' '}
        <a
          href="https://developingbridges.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors font-medium"
        >
          Developing Bridges
        </a>
      </p>
    </footer>
  );
}
