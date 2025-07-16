'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';
import UserMenu from './UserMenu';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createSupabaseClient();

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error fetching session:', error);
        return;
      }
      if (data.session?.user) {
        setUser(data.session.user);
      } else {
        setUser(null);
      }
    };

    fetchSession();

    // 👇 Escuchar cambios en la sesión
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        setUser(null);
      }
      router.refresh(); // 🔄 fuerza refresco del estado
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [supabase, router]);

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
        {user ? (
          <UserMenu user={user} />
        ) : (
          <Link href="/login">
            <Button variant="primary">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
