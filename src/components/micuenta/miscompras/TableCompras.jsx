import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Context from "../../../context/ContextProvider";
import { useContext } from "react";
const TableCompras = () => {
    const { URL,formatPrice,usuario } = useContext(Context);
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        const obtenerCompras = async () => {
            const endpoint = `/compras/${localStorage.getItem("id_usuario")}`;
            console.log(endpoint);
            try {
                const { data } = await axios.get(URL + endpoint, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                setCompras(data.mensaje);
                //save favorito in localstorage
                localStorage.setItem("compras", JSON.stringify(data.mensaje));
            } catch ({ response: { data: mensaje } }) {
                alert(mensaje + " 🙁");
            }
        };
        obtenerCompras();
    }, []);

    return (
        <>
            <h1 className="text-3xl text-center font-semibold text-gray-800 dark:text-gray-200">Mis compras</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                ID Compra
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Servicios
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {compras.map((compra) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={compra.id_compra}>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {compra.id_compra}
                                </td>
                                <td className="px-6 py-4">
                                    <table>
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 rounded-l-lg">
                                                    ID servicio
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Servicio
                                                </th>
                                                <th scope="col" className="px-6 py-3 rounded-r-lg">
                                                    Descripcion
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {compra.servicios.map((servicio) => (
                                                <tr key={servicio.id_servicio}>
                                                    <td className="px-6 py-3">
                                                        {servicio.id_servicio}
                                                    </td>
                                                    <td className="px-6 py-3">
                                                        {servicio.nombre_servicio}
                                                    </td>
                                                    <td className="px-6 py-3">
                                                        {servicio.descripcion}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </td>
                                <td className="px-6 py-4">
                                    {formatPrice(compra.total*1.1)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );

};

export default TableCompras;