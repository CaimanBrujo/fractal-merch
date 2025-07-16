'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/navigation';
import { createSupabaseClient } from '@/lib/supabaseClient';

type UserMenuProps = {
  user: any;
};

export default function UserMenu({ user }: UserMenuProps) {
  const router = useRouter();
  const supabase = createSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error);
      return;
    }
    router.refresh();
    router.push('/');
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="text-2xl">👤</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-white shadow rounded p-2 w-48" sideOffset={8}>
        <DropdownMenu.Label className="text-gray-700 px-2">{user.email}</DropdownMenu.Label>
        <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />

        <DropdownMenu.Item
          className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
          onClick={() => router.push('/orders')}
        >
          📦 Mis pedidos
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
          onClick={() => router.push('/settings')}
        >
          ⚙️ Configuración
        </DropdownMenu.Item>
        <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
        <DropdownMenu.Item
          className="px-2 py-1 hover:bg-gray-100 cursor-pointer text-red-600"
          onClick={handleLogout}
        >
          🚪 Cerrar sesión
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
