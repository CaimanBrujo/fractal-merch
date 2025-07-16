'use client';

import { useState } from 'react';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const supabase = createSupabaseClient();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('❌ Error al iniciar sesión:', error.message);
      setError('Email o contraseña incorrectos');
    } else {
      console.log('✅ Login exitoso');
      router.push('/admin');
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      console.error('❌ Error al iniciar sesión con Google:', error.message);
    }
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Iniciar sesión</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-72">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded p-2"
          required
        />
        <button
          type="submit"
          className="bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
          disabled={loading}
        >
          {loading ? 'Iniciando...' : 'Login'}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>

      <p className="text-gray-500">o</p>

      <button
        onClick={handleGoogleLogin}
        className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
      >
        Login con Google
      </button>
    </div>
  );
}
