import React, { useContext, useEffect } from "react";
import Context from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";  
import { useState } from "react";
const Cart = () => {

    const navigate = useNavigate()
    const { cart,
        removerProducto,
        total,
        usuariologeado,
        handleToggleModal,
        favoritos,
        anadirProducto,
        formatPrice, URL,setCart
    } = useContext(Context);
    const [id_compra, setId_compra] = useState(0);

    const clickRedireccion = (id_compra) => {
        if (usuariologeado) {
            navigate(`/contratoexitoso/${id_compra}`);
        } else {
            handleToggleModal();
        }
    };

    const serviciosIds = cart.map(servicio => servicio.id_servicio);

    //enviar carrito a la base de datos en ruta /compras
    const carritobbdd = async () => {
        const endpoint = `/compras`;
        try {
            const resultado = await axios.post(URL + endpoint, {
                servicios: serviciosIds,
                id_usuario: localStorage.getItem("id_usuario"),
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            Swal.fire(
                '¡Servicios contratados con exito!',
                'los detalles serán enviado mediante correo electronico',
                'success',
              )
              //redireccionar a la pagina de contrato exitoso siempre y cuando haya data en el resultado
            setId_compra(resultado.data.mensaje.resultado);
            setCart([]);
            localStorage.removeItem('carrito');
        } catch ({ response: { data: mensaje } }) {
            alert(mensaje + " 🙁");
            
        }
    };

    useEffect(() => {
        if(id_compra){
            clickRedireccion(id_compra);
        }
    }, [id_compra]);

    const validarCarrito = () => {
        if (cart.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay servicios en el carrito',
                footer: '<a href="/">Ir a servicios</a>'
                })
        } else {
            carritobbdd();

        }
    };


    return (

        <section  className="dark:bg-gray-900 h-full w-full">
            
            <h1 className="mb-10 text-center text-2xl font-bold">Carrito de compras</h1>
            
            <div   className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            
                <div  className="rounded-lg md:w-2/3">
                {cart.map((servicio) => (
                    <div key={servicio.id_servicio} className="rounded-lg md:w-2/3">
                        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img src={servicio.img_url} alt={`img de producto ${servicio.id_servicio}`}  className="w-full rounded-lg sm:w-40" />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold text-gray-900">{servicio.nombre_servicio}</h2>
                                    <p className="mt-1 text-xs text-gray-700">{servicio.ubicacion}</p>
                                </div>
                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div className="flex items-center border-gray-100">
                                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => removerProducto(servicio)}> - </span>
                                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none"  value={servicio.cantidad} min="1"  />
                                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => anadirProducto(servicio)}> + </span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <h2 className="text-lg font-bold text-gray-900">{formatPrice(servicio.monto)}</h2>
                                        {favoritos.includes(servicio.id_servicio) ? 
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 3.162l-1.545-1.545a5.5 5.5 0 00-7.778 7.778L10 18.94l9.323-9.545a5.5 5.5 0 00-7.778-7.778L10 3.162z" clipRule="evenodd" />
                                                            </svg>
                                                            :
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 3.162l-1.545-1.545a5.5 5.5 0 00-7.778 7.778L10 18.94l9.323-9.545a5.5 5.5 0 00-7.778-7.778L10 3.162z" clipRule="evenodd" />
                                                            </svg>
                                                            } {/* Corazón lleno o vacío */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">{formatPrice(total)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">Comisión</p>
                        <p className="text-gray-700">{formatPrice(total*0.1)}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-lg font-bold">{formatPrice(total + total*0.1)}</p>
                            {/* con cursivas decir que inclue taxes */}
                            <p className="text-sm text-gray-700"><span className="italic">Comisión incluida</span></p> 
                        </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={validarCarrito} >Pagar</button>
                </div>
            </div>
        </section>
    );
};


export default Cart;
