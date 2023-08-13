import React from "react";
import { Card, Button } from "flowbite-react";
import { useContext } from "react";
import Context from "../../context/ContextProvider";
import CartTotal from "../cart/CartTotal";


const ContratoExitoso = () => {

    const { cart, formatPrice } = useContext(Context)
    const obtenerFechaActual = () => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('es-ES', options);
    };

    return (

        <div className="flex items-center justify-center h-screen">
            <div className="w-60 h-96  flex items-center justify-center flex-col">
                <Card className="p-4 border w-96"> {/* Ajusta el valor de "w-96" según tus necesidades */}
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Factura de compra</h1>
                        <p className="text-gray-600">Fecha: {obtenerFechaActual()}</p>
                    </div>
                    <div className="mt-4">
                        {/* Aquí utilizamos el mapeo para mostrar los productos del carrito */}
                        {cart.map((servicio) => (
                            <div key={servicio.id_servicio} className="flex justify-between items-center">
                                <span className="w-1/2">{servicio.nombre_servicio}</span>
                                <span className="w-1/4 text-center">{servicio.cantidad}</span>
                                <span className="w-1/4 text-right">{formatPrice(servicio.monto)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4">
                        {/* Aquí puedes colocar el componente CartTotal */}
                        <span className="font-bold">
                            <CartTotal />
                        </span>
                    </div>
                    <div className="flex justify-end mt-4">
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Imprimir factura
                        </Button>
                    </div>
                </Card>

                <div className="mt-auto">
                    <h6 className="text-xl font-bold text-gray-900 dark:text-white">
                        Gracias por Preferirnos
                    </h6>
                    <p className="text-gray-700 dark:text-gray-400">
                        Enviaremos un Correo con los detalles de su Servicio
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContratoExitoso;