import { useContext } from 'react';
import Context from '../../context/ContextProvider';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function DetailsServices() {
    const { id } = useParams();
    const { servicios, cart, setCart } = useContext(Context);
    const servicio = servicios.find((servicio) => servicio.id === parseInt(id));



    const ImagenUrl = 'https://www.oikos.com.co/constructora/images/website/Noticias_2019_/funciones-de-los-constructores.jpg';

    if (!servicio) {
        return <p>Servicio no encontrado</p>;
    }

    const anadirProducto = (servicio) => {
        console.log(servicio)
        setCart([...cart, servicio])
    }

    /*const clickAddToCart = (id) => {
        console.log("ID del servicio a añadir al carrito:", id);
        setCart((elementosAñadidos) => {
            const itemfound = elementosAñadidos.find((item) => item.id === (id.toString()))
            console.log(itemfound)
            if (itemfound) {
                return elementosAñadidos.map((item) =>
                    item.id === id.toString() ? { ...item, quantity: item.quantity + 1 } : item
                )
            } else {
                const servicioToAdd = servicios.find((servicio) => servicio.id === parseInt(id));
                return [...elementosAñadidos, { servicioToAdd, quantity: 1 }]
            }
        })
    }

    const clickRemoveToCart = (id) => {
        setCart((elementosAñadidos) => {
            if (elementosAñadidos.find((item) => item.id === id)?.quantity === 1) {
                return elementosAñadidos.filter((item) => item.id !== id);
            } else {
                return elementosAñadidos.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }*/

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-400 h-400 bg-center bg-no-repeat bg-cover">
                <img src={ImagenUrl} alt="Descripción de la imagen" className="max-w-full max-h-full" />
            </div>
            <div className="m-l-2rem m-b-2rem w-50 text-start mx-8 my-2">
                <h1 className="font-bold">{servicio.servicio}</h1>
                <div className="list-none pl-0 my-6 border-t border-gray-300">
                    <p className="font-bold my-6">valor del servicio</p>
                    <ul>
                        <h2>${servicio.monto}</h2>
                        <h2 className="my-4">{servicio.ubicacion}</h2>
                    </ul>
                </div>

                <div className="flex justify-between">
                    <Link to="/carrito">
                        <button
                            //onClick={() => clickAddToCart()} // Añade el servicio al carrito al hacer clic en el botón
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Favoritos ❤️
                        </button>
                        <button
                            onClick={() => anadirProducto(servicio)} // Añade el servicio al carrito al hacer clic en el botón
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4"
                        >
                            Añadir 🛒
                        </button>
                        {/*<button
                            onClick={() => clickRemoveToCart(servicio.id)} // Añade el servicio al carrito al hacer clic en el botón
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4"
                        >
                            sacar 🛒
    </button>*/}
                    </Link>
                </div>
            </div>
        </div>
    );
}



