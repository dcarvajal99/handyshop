import React, { useState } from 'react';
import Filtros from './Filtros';

const Productos = () => {
  // Supongamos que tienes un array de productos
  const productos = [
    { id: 1, nombre: 'Producto A', servicio: 'aseo', precio: 50, fecha: '2023-07-20' },
    { id: 2, nombre: 'Producto B', servicio: 'construccion', precio: 30, fecha: '2023-07-19' },
    { id: 3, nombre: 'Producto C', servicio: 'electrico', precio: 25, fecha: '2023-07-18' },
    // ... más productos
  ];

  const [filtroServicio, setFiltroServicio] = useState('');
  const [ordenarPor, setOrdenarPor] = useState('');

  const handleFilterChange = (e) => {
    setFiltroServicio(e.target.value);
  };

  const handleSortChange = (e) => {
    setOrdenarPor(e.target.value);
  };

  // Aplicar los filtros y ordenamientos según las selecciones del usuario
  let productosFiltrados = [...productos];

  if (filtroServicio) {
    productosFiltrados = productosFiltrados.filter((producto) => producto.servicio === filtroServicio);
  }

  if (ordenarPor === 'precio') {
    productosFiltrados.sort((a, b) => a.precio - b.precio);
  } else if (ordenarPor === 'fecha') {
    productosFiltrados.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  } else if (ordenarPor === 'letra') {
    productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  return (
    <div>
      <Filtros handleFilterChange={handleFilterChange} handleSortChange={handleSortChange} />
      {/* Renderiza los productos filtrados y ordenados */}
      {productosFiltrados.map((producto) => (
        <div key={producto.id} className="p-4 border mb-4">
          <h3 className="font-bold">{producto.nombre}</h3>
          <p>Servicio: {producto.servicio}</p>
          <p>Precio: {producto.precio}</p>
          <p>Fecha: {producto.fecha}</p>
        </div>
      ))}
    </div>
  );
};

export default Productos;
