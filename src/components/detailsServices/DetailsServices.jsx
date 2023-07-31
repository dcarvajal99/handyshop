import { useContext } from 'react';
import Context from '../../context/ContextProvider';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react';

export default function DetailsServices() {
    const { id } = useParams();
    const { servicios, anadirProducto, userLogin } = useContext(Context);
    const servicio = servicios.find((servicio) => servicio.id === parseInt(id));

    /*const userLogin = false; o true const userLogin = true;*/

  

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
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        src={ImagenUrl}
                        alt="ecommerce"
                        className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{servicio.servicio}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{servicio.servicio}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4 text-red-500"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                {/* Resto del código para las estrellas */}
                            </span>
                            {/* Resto del código para los íconos de acciones */}
                        </div>
                        <p className="leading-relaxed">
                            {servicio.descripcion}
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="title-font font-medium text-2xl text-gray-900">${servicio.monto}</span>
                            <div className="flex items-center space-x-4">
                                <Link>
                                    <Button
                                        onClick={() => anadirProducto(servicio)}
                                        className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                                        Añadir 🛒
                                    </Button>
                                </Link>
                                {userLogin && (
                                    <Link to="/favoritos">
                                        <Button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                            </svg>
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
}



