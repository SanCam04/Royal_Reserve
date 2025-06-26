import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import FloatingIcons from '@/components/FloatingIcons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Royal Reserve Liquors',
  description: 'Sitio oficial de la licorera Royal Reserve',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">



      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main>{children}</main>
        <FloatingIcons />
        <footer className="mt-10 p-4 text-center text-sm border-t border-gray-700">
          &copy; {new Date().getFullYear()} Royal Reserve. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
