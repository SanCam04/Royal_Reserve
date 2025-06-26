'use client';

import { Sala } from '@/data/salas';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SalaCard({ sala }: { sala: Sala }) {
  const router = useRouter();

  const handleReservaClick = () => {
    const query = `?sala=${encodeURIComponent(sala.nombre)}`;
    router.push(`/reservas${query}`);
  };

  return (
    <div className="bg-black text-white border border-yellow-200 rounded-lg overflow-hidden shadow-lg max-w-sm w-full">
      <Image
        src={sala.imagen}
        alt={sala.nombre}
        width={400}
        height={250}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-yellow-400">{sala.nombre}</h2>
        <p className="text-sm text-gray-300">Capacidad: {sala.capacidad} personas</p>
        <p className="text-sm text-gray-300">
          Precio reserva: ${sala.precio.toLocaleString()}
        </p>
        <p className="text-sm text-gray-300">
          Consumibles: ${sala.consumibles.toLocaleString()}
        </p>
        {sala.zonaAsado && (
          <p className="text-sm text-green-400 mt-2">Incluye opción de asado</p>
        )}
        <button
          onClick={handleReservaClick}
          className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
        >
          Reservar
        </button>
      </div>
    </div>
  );
}
