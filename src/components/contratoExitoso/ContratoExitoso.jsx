import React from "react";
import { Card, Button } from "flowbite-react";
import { useContext } from "react";
import Context from "../../context/ContextProvider";


const ContratoExitoso = () => {

    const { cart, formatPrice, total,usuario } = useContext(Context)
    const obtenerFechaActual = () => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('es-ES', options);
    };

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
                            {cart.map((servicio) => (
                            <div className="flex justify-between text-sm" key={servicio.id}>
                                <span className="w-2/6 truncate">{servicio.nombre_servicio}</span>
                                <span className="w-2/6 text-right">{formatPrice(servicio.monto)}</span>
                                <span className="w-2/6 text-right">{servicio.cantidad}</span>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-xs">
                        <div className="mb-1">Discount：0</div>
                        <div className="mb-52">Remark：--</div>
                        <div className="text-right">
                            <div>{obtenerFechaActual()}</div>
                            <div className="font-bold text-sm">Total： {formatPrice(total + total*0.1)}</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContratoExitoso;

