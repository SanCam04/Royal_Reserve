'use client';

import SalaCard from '@/components/SalaCard';
import { salas } from '@/data/salas';

export default function SalasPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-black text-white">
      <h1 className="text-3xl font-bold text-yellow-200 mb-8 text-center">
        Salas Disponibles
      </h1>
      <br></br>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full justify-items-center">
        {salas.map((sala) => (
          <SalaCard key={sala.id} sala={sala} />
        ))}
      </div>
    </div>
  );
}
