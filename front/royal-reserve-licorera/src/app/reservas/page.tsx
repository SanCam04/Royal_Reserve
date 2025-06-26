'use client';


import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-calendar/dist/Calendar.css';


export default function ReservasPage() {
  const searchParams = useSearchParams();
  const today = new Date().toISOString().split('T')[0]; // 🔸 Define fecha mínima permitida
  const salaSeleccionada = searchParams.get('sala') || '';
  const Calendar = dynamic(() => import('react-calendar'), { ssr: false });
  const handleDateChange = (date: Date | Date[]) => {
      // Asegura que no sea un arreglo
      const selectedDate = Array.isArray(date) ? date[0] : date;
      const formattedDate = selectedDate.toISOString().split('T')[0];

      setForm((prev) => ({ ...prev, fecha: formattedDate }));
    };
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    fecha: '',
    hora: '',
    sala: '',
    asado: '',
    invitadosVip: '',
  });

  useEffect(() => {
    setForm((prev) => ({ ...prev, sala: salaSeleccionada }));
  }, [salaSeleccionada]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (value.trim() === '') {
      setErrors((prev) => ({ ...prev, [name]: 'Este campo es obligatorio' }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (name === 'correo' && value && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      setErrors((prev) => ({ ...prev, correo: 'Correo inválido' }));
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    Object.entries(form).forEach(([key, value]) => {
      if (
        ['nombre', 'apellido', 'correo', 'fecha', 'hora', 'sala'].includes(key) &&
        value.trim() === ''
      ) {
        newErrors[key] = 'Este campo es obligatorio';
      }

      if (key === 'correo' && value && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        newErrors[key] = 'Correo inválido';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    fetch("http://localhost:8080/reservas/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errMsg = await res.text();
          console.error("❌ Backend error:", errMsg);
          throw new Error("Error al guardar la reserva");
        }
        return res.json();
      })
      .then((data) => {
        console.log("✅ Reserva enviada correctamente:", data);
        window.location.href = "/confirmacion";
      })
      .catch((err) => {
        console.error("❌ Error de red o backend:", err);
        alert("Hubo un problema al enviar la reserva.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-black text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Reserva tu sala</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-lg w-full max-w-2xl space-y-4 shadow-lg border border-yellow-700"
      >
        <div className="flex gap-4">
          <div className="w-full">
            <input
              name="nombre"
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full p-2 rounded bg-black border border-gray-600 text-white"
            />
            {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
          </div>
          <div className="w-full">
            <input
              name="apellido"
              type="text"
              placeholder="Apellido"
              value={form.apellido}
              onChange={handleChange}
              className="w-full p-2 rounded bg-black border border-gray-600 text-white"
            />
            {errors.apellido && <p className="text-red-500 text-sm mt-1">{errors.apellido}</p>}
          </div>
        </div>

        <div>
          <input
            name="correo"
            type="email"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={handleChange}
            className="w-full p-2 rounded bg-black border border-gray-600 text-white"
          />
          {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo}</p>}
        </div>

        <div className="flex gap-4">
        <div className="w-full">
          <div className="w-full bg-black border border-gray-600 rounded p-2 text-white">
            <input
              name="fecha"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              value={form.fecha}
              onChange={handleChange}
              className="w-full p-2 rounded bg-black border border-gray-600 text-white"
            />

            {errors.fecha && <p className="text-red-500 text-sm mt-2">{errors.fecha}</p>}
          </div>
        </div>

          <div className="w-full">
            <select
              name="hora"
              value={form.hora}
              onChange={handleChange}
              className="w-full p-2 rounded bg-black border border-gray-600 text-white"
            >
              <option value="">Hora de llegada</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="21:00">9:00 PM</option>
            </select>
            {errors.hora && <p className="text-red-500 text-sm mt-1">{errors.hora}</p>}
          </div>
        </div>

        <div>
          <select
            name="sala"
            value={form.sala}
            onChange={handleChange}
            className="w-full p-2 rounded bg-black border border-gray-600 text-white"
          >
            <option value="">Selecciona una sala</option>
            <option value="Sala 1">Sala 1 (10 personas)</option>
            <option value="Sala 2">Sala 2 (10 personas)</option>
            <option value="Sala VIP">Sala VIP (25 personas)</option>
            <option value="Bolirana 1">Bolirana 1 (10 personas)</option>
            <option value="Bolirana 2">Bolirana 2 (10 personas)</option>
            <option value="Bolirana VIP">Bolirana VIP (20 personas)</option>
          </select>
          {errors.sala && <p className="text-red-500 text-sm mt-1">{errors.sala}</p>}
        </div>

        {form.sala === 'Sala VIP' && (
          <select
            name="asado"
            value={form.asado}
            onChange={handleChange}
            className="w-full p-2 rounded bg-black border border-gray-600 text-white"
          >
            <option value="">¿Deseas zona de asado?</option>
            <option value="Parrilla">Sí - Parrilla</option>
            <option value="Barril">Sí - Barril</option>
            <option value="No">No</option>
          </select>
        )}

        {(form.sala === 'Sala VIP' || form.sala === 'Bolirana VIP') && (
          <textarea
            name="invitadosVip"
            placeholder="Lista de invitados (opcional)"
            value={form.invitadosVip}
            onChange={handleChange}
            className="w-full p-2 rounded bg-black border border-gray-600 text-white"
          />
        )}

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
        >
          Enviar reserva
        </button>
      </form>
    </div>
  );
}
