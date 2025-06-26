'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Inicio', path: '/' },
  { name: 'Salas', path: '/salas' },
  { name: 'Reservas', path: '/reservas' },
  { name: 'Eventos', path: '/eventos' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-black border-b border-gray-700 px-6 py-4">
      <ul className="flex justify-center gap-8 text-white">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`hover:text-yellow-400 transition-colors ${
                pathname === link.path ? 'border-b-2 border-yellow-400 pb-1' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
