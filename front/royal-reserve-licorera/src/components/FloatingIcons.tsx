'use client';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function FloatingIcons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/573001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://instagram.com/royalreserveliquors"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:brightness-110 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
}
