import React, { useContext } from "react";
import Context from "../../context/ContextProvider";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import ModalContent from '../Modal/ModalContent';

const Cart = () => {

    const navigate = useNavigate()
    const { cart,
        removerProducto,
        scrollVisible,
        handleMouseEnter,
        handleMouseLeave,
        usuariologeadotest,
        isModalOpen,
        handleToggleModal,
        favoritos,
        marcarFavorito,
    } = useContext(Context);

    const clickRedireccion = () => {
        if (usuariologeadotest) {

            navigate("/contratoexitoso");
        } else {
            handleToggleModal();
        }
    };

    const ImagenUrl = 'https://www.oikos.com.co/constructora/images/website/Noticias_2019_/funciones-de-los-constructores.jpg';

    /*const userLogin = false;  const userLogin = true;*/



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
                                            <div className="flex items-center px-2 py-1 pl-0 space-x-1">


                                                <Button
                                                    onClick={() => removerProducto(servicio.id)}
                                                    type="button"
                                                    className="flex items-center px-2 py-1 pl-0 space-x-1 "
                                                >
                                                    🗑️ remove
                                                </Button>
                                                {usuariologeadotest ? (
                                                    <Link>
                                                        <Button
                                                            onClick={() => marcarFavorito(servicio.id)}
                                                            type="button"
                                                            className="flex items-center px-2 py-1 space-x-1">
                                                            {favoritos.includes(servicio.id) ? 
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 3.162l-1.545-1.545a5.5 5.5 0 00-7.778 7.778L10 18.94l9.323-9.545a5.5 5.5 0 00-7.778-7.778L10 3.162z" clipRule="evenodd" />
                                                            </svg>
                                                            :
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 3.162l-1.545-1.545a5.5 5.5 0 00-7.778 7.778L10 18.94l9.323-9.545a5.5 5.5 0 00-7.778-7.778L10 3.162z" clipRule="evenodd" />
                                                            </svg>
                                                            } {/* Corazón lleno o vacío */}
                                                            Favorito
                                                        </Button>
                                                    </Link>
                                                ) : <></>}
                                            </div>
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
                    {usuariologeadotest ? (
                        <Link to="/">
                            <Button
                                type="button"
                                className="flex items-center px-2 py-1 space-x-1"
                            >
                                Volver al inicio
                            </Button>
                        </Link>
                    ) : <></>}

                    <Button
                        className="w-24 px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                        onClick={clickRedireccion}
                    >
                        Contratar
                    </Button>
                </div>
            </div>
            <ModalContent isOpen={isModalOpen} onClose={handleToggleModal} />
        </div>
    );
};

export default Cart;
