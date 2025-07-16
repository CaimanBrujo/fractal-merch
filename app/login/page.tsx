'use client';

import { createSupabaseClient } from '@/lib/supabaseClient';

export default function LoginPage() {
  const supabase = createSupabaseClient();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      console.error('❌ Error al iniciar sesión:', error.message);
    }
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Iniciar sesión</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
      >
        Login con Google
      </button>
    </div>
  );
}
