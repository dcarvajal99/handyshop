import React, { useContext } from "react";
import Context from "../../context/ContextProvider";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart } = useContext(Context);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg w-80 p-4">
                <h1 className="text-2xl font-bold mb-4">Detalles del pedido</h1>
                <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-gray-200 p-2 text-center font-bold">Items</div>
                    <div className="bg-gray-200 p-2 text-center font-bold">Descripción</div>
                    <div className="bg-gray-200 p-2 text-center font-bold">Precio</div>
                </div>
                {cart.map((servicio) => (
                    <div key={servicio.id} className="grid grid-cols-3 gap-2 mb-2">
                        <div className="bg-white p-2 text-center">{servicio.servicio}</div>
                        <div className="bg-white p-2 text-center">{servicio.descripcion}</div>
                        <div className="bg-white p-2 text-center">${servicio.monto}</div>
                    </div>
                ))}
                <div className="flex justify-end mt-4">
                    <Link to="/contratoexitoso">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">
                            Contratar 🛒
                        </button>
                    </Link>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                        Ir a otra página
                    </button>
                </div>
                <CartTotal />
            </div>
        </div>
    );
};

export default Cart;
