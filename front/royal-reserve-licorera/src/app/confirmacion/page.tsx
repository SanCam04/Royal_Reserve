export default function ConfirmacionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-black text-white text-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">¡Reserva confirmada!</h1>
      <p className="text-lg text-gray-300 mb-6">
        Te hemos enviado un correo con los detalles de tu reserva.  
        ¡Gracias por elegirnos! 🍾
      </p>
      <a
        href="/"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  );
}
