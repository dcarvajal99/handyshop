import React from 'react';
import { BsFilter, BsArrowDown, BsArrowUp } from 'react-icons/bs';

const Filtros = ({ handleFilterChange, handleSortChange, sortOrder, toggleSortOrder }) => {
    return (
        <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold">Filtros</h2>
            <div className="flex items-center">
                <label htmlFor="servicio" className="block font-medium mr-4">
                    Filtrar por servicio:
                </label>
                <select
                    id="servicio"
                    name="servicio"
                    onChange={handleFilterChange}
                    className="w-32 px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value="">Todos</option>
                    <option value="aseo">Aseo</option>
                    <option value="construccion">Construcción</option>
                    <option value="electrico">Eléctrico</option>
                </select>
            </div>
            <div className="flex items-center">
                <label htmlFor="ordenarPor" className="block font-medium mr-4">
                    Ordenar por:
                </label>
                <select
                    id="ordenarPor"
                    name="ordenarPor"
                    onChange={handleSortChange}
                    className="w-32 px-3 py-2 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value="">Ninguno</option>
                    <option value="precio">Precio</option>
                    <option value="fecha">Fecha</option>
                    <option value="letra">Letra</option>
                </select>
                {sortOrder && (
                    <button
                        onClick={toggleSortOrder}
                        className="ml-2 p-2 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        {sortOrder === 'asc' ? <BsArrowUp size={20} /> : <BsArrowDown size={20} />}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Filtros;
