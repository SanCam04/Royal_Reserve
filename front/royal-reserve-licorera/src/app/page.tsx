'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const images = [
  '/carrusel/ron.png',
  '/carrusel/vodka.webp',
  '/carrusel/whisky.webp',
];
const imagesC = [
  '/comida/hamburguesa.jpg',
  '/comida/pizza.avif',
  '/comida/chorizo.jpeg',
];
const barImages = [
  '/bar/bar1.jpg',
  '/bar/bar2.png',
  '/bar/bar3.png',
  '/bar/bar4.png',
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <section className="text-center py-10">
        <br></br><br></br>
        <h1 className="text-5xl font-bold mb-4">Royal Reserve Liquors</h1>
        
        {/*/ aqui quiero que este ubicado el carrusel grande de las 4 imagenes de la parte principal del local */}
        {/* Carrusel grande del bar */}
        <div className="w-full max-w-2xl mt2 relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
          {barImages.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Zona del bar ${i + 1}`}
              fill
              className={`absolute object-cover transition-opacity duration-1000 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <p className="text-lg text-gray-300 mb-8">
          Las mejores marcas en un solo lugar
        </p>
        <Link
          href="/productos"
          className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition"
        >
          Ver catálogo
        </Link>
      </section>

      {/* COLLAGE DE SALAS 2x3 */}
      <section className="py-2 px-4 bg-black text-white max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-17">Nuestras Salas y Boliranas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
          {/* SALA 1 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/salas/sala1.png"
              width={500}
              height={300}
              alt="Sala 1"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Sala 1</h3>
              <p className="text-gray-400">Espacio cómodo con luces cálidas para reuniones privadas.</p>
            </div>
          </div>

          {/* SALA 2 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/salas/sala2.png"
              width={500}
              height={300}
              alt="Sala 2"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Sala 2</h3>
              <p className="text-gray-400">Decoración moderna y ambiente relajado para compartir.</p>
            </div>
          </div>

          {/* BOLIRANA 1 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/salas/bolirana1.jpeg"
              width={500}
              height={300}
              alt="Bolirana 1"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Bolirana 1</h3>
              <p className="text-gray-400">Mesa profesional con iluminación y espacio para espectadores.</p>
            </div>
          </div>

          {/* BOLIRANA 2 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/salas/bolirana2.jpeg"
              width={500}
              height={300}
              alt="Bolirana 2"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Bolirana 2</h3>
              <p className="text-gray-400">Diseño clásico con buena acústica para jugar en grupo.</p>
            </div>
          </div>

          {/* SALA VIP */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/salas/salavip.png"
              width={500}
              height={300}
              alt="Sala VIP"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Sala VIP</h3>
              <p className="text-gray-400">Espacio premium con sofá, nevera y privacidad total.</p>
            </div>
          </div>

          {/* BOLIRANA VIP */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/salas/boliranavip.jpeg"
              width={500}
              height={300}
              alt="Bolirana VIP"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Bolirana VIP</h3>
              <p className="text-gray-400">Área cerrada con aire acondicionado y zona lounge.</p>
            </div>
          </div>
        </div>
      </section>
      {/* COMIDA DISPONIBLE */}
      
    <section className="text-center py-10">
        <br></br><br></br>
        <h1 className="text-5xl font-bold mb-4">Royal Burguer</h1>
      </section>

      <section className="w-full max-w-2xl mt-2 relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
        {imagesC.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Licor ${i + 1}`}
            fill
            className={`absolute object-cover transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </section>
      <br></br><br></br>
      <p className="text-lg text-gray-300 mb-8">
          Pide comida sin salir del lugar
        </p>
        <Link
          href="/productos"
          className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition"
        >
          Ver catálogo
        </Link>
      {/* COCTELERÍA */}
      <section className="py-20 px-4 bg-black text-white max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Coctelería</h2>
        <p className="text-center text-lg text-gray-400 mb-12">Sabores que encienden la noche</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mojito */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/cocteles/mojito.webp"
              width={400}
              height={250}
              alt="Mojito"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Mojito</h3>
              <p className="text-gray-400">Refrescante mezcla de ron, hierbabuena y lima.</p>
            </div>
          </div>

          {/* Cuba Libre */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/cocteles/cuba_libre.jpg"
              width={400}
              height={250}
              alt="Cuba Libre"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cuba Libre</h3>
              <p className="text-gray-400">Ron oscuro con cola y toque de limón.</p>
            </div>
          </div>

          {/* Margarita */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/cocteles/margarita.jpg"
              width={400}
              height={250}
              alt="Margarita"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Margarita</h3>
              <p className="text-gray-400">Tequila, triple sec y limón en un solo sorbo.</p>
            </div>
          </div>

          {/* Jagerinha */}
          <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/cocteles/jagerinha.jpg"
              width={400}
              height={250}
              alt="Jagerinha"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Jagerinha</h3>
              <p className="text-gray-400">La versión brasileña con Jägermeister y lima.</p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
