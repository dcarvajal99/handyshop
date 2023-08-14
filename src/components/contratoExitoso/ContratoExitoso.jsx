import React from "react";
import { useContext } from "react";
import Context from "../../context/ContextProvider";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
const ContratoExitoso = () => {
    const { id } = useParams();
    const { cart, formatPrice, total,usuario,URL } = useContext(Context)
    const [compras, setCompras] = useState([]);
    const obtenerFechaActual = () => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('es-ES', options);
    };
    useEffect(() => {
        const obtenerCompras = async () => {
            const endpoint = `/compras/${localStorage.getItem("id_usuario")}/${id}`;
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

    const totalcompra = compras.reduce((acc, el) => acc + el.monto, 0);

    return (
        <>

            <div className="flex justify-center items-center h-screen bg-gray-200 text-gray-900">
                <div className="rounded-md relative w-72 shadow-2xl p-3 bg-white">
                    <div className="py-2">
                        <div className="text-center text-xl font-bold">ORDEN</div>
                        <div className="text-center text-xs font-bold">Detalles de la orden</div>
                    </div>
                    <div className="text-center text-xs font-bold mb-1">~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
                    <div className="text-xs pl-2">
                        <div className="text-xs mb-1">Comprador：{usuario.nombre+" "+usuario.apellido}</div>
                        <div className="text-xs mb-1">Telefono：{usuario.telefono}</div>
                        <div>OrderNumber：17485554487748500</div>
                    </div>
                    <div className="border-double border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 my-3">
                        <div className="flex text-sm pt-1 px-1">
                            <span className="w-2/6">Nombre</span>
                            <span className="w-2/6 text-right">Precio</span>
                            <span className="w-2/6 text-right">Cantidad</span>
                        </div>
                        <div className="border-dashed border-t border-b border-l-0 border-r-0 border-gray-900 mt-1 my-2 py-2 px-1">
                            {compras.map((servicio) => (
                            <div className="flex justify-between text-sm" key={servicio.id}>
                                <span className="w-2/6 truncate">{servicio.nombre_servicio}</span>
                                <span className="w-2/6 text-right">{formatPrice(servicio.monto)}</span>
                                <span className="w-2/6 text-right">{servicio.cantidad}</span>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-xs">
                        <div className="mb-1">Descuentos：$0</div>
                        <div className="mb-52">Comentarios：--</div>
                        <div className="text-right">
                            <div>{obtenerFechaActual()}</div>
                            <div className="font-bold text-sm">Total： {formatPrice(totalcompra + totalcompra*0.1)}</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContratoExitoso;

