import React, { useContext, useState } from "react";
import Context from "../../context/ContextProvider";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";



const Cart = () => {
    const { cart, userLogin, removerProducto, scrollVisible, handleMouseEnter, handleMouseLeave } = useContext(Context);
    

    const ImagenUrl = 'https://www.oikos.com.co/constructora/images/website/Noticias_2019_/funciones-de-los-constructores.jpg';
    /*const userLogin = false; o true const userLogin = true;*/

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="text-xl font-semibold">Detalle del pedido</h2>
                <div style={{
                    maxHeight: "70vh",
                    overflowY: scrollVisible ? "auto" : "hidden",
                    transition: "overflow-y 0.3s ease-in-out",
                }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <ul className="divide-y divide-gray-700">
                        {cart.map((servicio) => (
                            <li key={servicio.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                <div className="flex w-full space-x-2 sm:space-x-4">
                                    <img
                                        className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                                        src={ImagenUrl} // Agrega la URL de la imagen aquí
                                        alt="imagen"
                                    />
                                    <div className="flex flex-col justify-between w-full pb-4">
                                        <div className="flex justify-between w-full pb-2 space-x-2">
                                            <div className="space-y-1">
                                                <h3 className="text-lg font-semibold leading-tight sm:pr-8">
                                                    {servicio.servicio}
                                                </h3>
                                                {/* Otros detalles del producto */}
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-semibold">{servicio.monto}</p>
                                                {/* Otros detalles del producto */}
                                            </div>
                                        </div>
                                        <div className="flex text-sm divide-x">
                                            <Button
                                                onClick={() => removerProducto(servicio.id)}
                                                type="button"
                                                className="flex items-center px-2 py-1 pl-0 space-x-1"
                                            >
                                                🗑️ remove
                                            </Button>
                                            <button
                                                type="button"
                                                className="flex items-center px-2 py-1 space-x-1"
                                            >
                                                {/* Botón de agregar a favoritos */}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-1 text-right">
                    <p>
                        Total: <span className="font-semibold"><CartTotal /></span>
                    </p>
                    <p className="text-sm dark:text-gray-400">
                        Not including taxes and shipping costs
                    </p>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
                    >
                        <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
                    </button>
                    <Link to="/contratoexitoso">
                        <Button
                            className="w-24 px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                        >
                            Contratar
                        </Button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Cart;
