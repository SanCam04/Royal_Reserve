// src/data/salas.ts
export interface Sala {
  id: string;
  nombre: string;
  precio: number;
  consumibles: number;
  capacidad: number;
  tipo: 'Sala' | 'Bolirana';
  vip?: boolean;
  zonaAsado?: boolean;
  imagen: string;
}

export const salas: Sala[] = [
  {
    id: 'sala1',
    nombre: 'Sala 1',
    precio: 200000,
    consumibles: 150000,
    capacidad: 10,
    tipo: 'Sala',
    imagen: '/salas/sala1.png',
  },
  {
    id: 'sala2',
    nombre: 'Sala 2',
    precio: 200000,
    consumibles: 150000,
    capacidad: 10,
    tipo: 'Sala',
    imagen: '/salas/sala2.png',
  },
  {
    id: 'salavip',
    nombre: 'Sala VIP',
    precio: 500000,
    consumibles: 300000,
    capacidad: 25,
    tipo: 'Sala',
    vip: true,
    zonaAsado: true,
    imagen: '/salas/salavip.png',
  },
  {
    id: 'bolirana1',
    nombre: 'Bolirana 1',
    precio: 100000,
    consumibles: 80000,
    capacidad: 10,
    tipo: 'Bolirana',
    imagen: '/salas/bolirana1.jpeg',
  },
  {
    id: 'bolirana2',
    nombre: 'Bolirana 2',
    precio: 100000,
    consumibles: 80000,
    capacidad: 10,
    tipo: 'Bolirana',
    imagen: '/salas/bolirana2.jpeg',
  },
  {
    id: 'boliranavip',
    nombre: 'Bolirana VIP',
    precio: 250000,
    consumibles: 150000,
    capacidad: 20,
    tipo: 'Bolirana',
    vip: true,
    imagen: '/salas/boliranavip.jpeg',
  },
];
