'use client';

import { createSupabaseClient } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export default function AdminPage() {
  const supabase = createSupabaseClient();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log('👤 Sesión:', session);

      if (!session) {
        console.log('⚠️ No hay sesión, redirigiendo a /login');
        redirect('/login');
        return;
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      console.log('📄 Perfil encontrado:', profile);
      console.log('⚠️ Error al buscar perfil:', error);

      if (error || !profile) {
        console.log('❌ No se encontró perfil o hubo error, redirigiendo a /');
        redirect('/');
        return;
      }

      if (profile.role !== 'admin') {
        console.log('⛔ Usuario sin permisos de admin, redirigiendo a /');
        redirect('/');
        return;
      }

      console.log('✅ Usuario admin detectado');
      setIsAdmin(true);
      setLoading(false);
    };

    checkAdmin();
  }, [supabase]);

  if (loading) return <p className="p-4">Cargando...</p>;
  if (!isAdmin) return null;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Bienvenido 👑</p>
    </div>
  );
}
