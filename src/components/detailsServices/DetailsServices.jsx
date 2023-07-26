import { useContext } from 'react';
import Context from '../../context/ContextProvider';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card, Button } from 'flowbite-react';

export default function DetailsServices() {
    const { id } = useParams();
    const { servicios, anadirProducto } = useContext(Context);
    const servicio = servicios.find((servicio) => servicio.id === parseInt(id));

    /*const userLogin = false; o true const userLogin = true;*/

    const userLogin = false;

    const ImagenUrl = 'https://www.oikos.com.co/constructora/images/website/Noticias_2019_/funciones-de-los-constructores.jpg';

    if (!servicio) {
        return <p>Servicio no encontrado</p>;
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
            <div>
                <Card className="max-w-lg overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
                            {servicio.servicio}
                        </h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {servicio.descripcion}
                        </p>
                    </div>

                    <img
                        className="object-cover w-full h-48 mt-2"
                        src={ImagenUrl}
                        alt="imagen de servicio"
                    />

                    <div className="flex items-center flex-col md:flex-row justify-between px-4 py-2 bg-gray-900 mb-4">
                        <h1 className="text-lg font-bold text-white">${servicio.monto}</h1>
                        {userLogin && (
                            <Link to="/favoritos">
                                <Button
                                    className="w-24 px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                                >
                                    Favoritos ❤️
                                </Button>
                            </Link>
                        )}
                        <Link to="/carrito">
                            <Button
                                onClick={() => anadirProducto(servicio)}
                                className="w-24 px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                            >
                                Añadir 🛒
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>


    );
}



