import { useContext } from 'react';
import Context from '../../context/ContextProvider';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react';
import ModalContent from '../Modal/ModalContent';

export default function DetailsServices() {
    const { id } = useParams();
    const { servicios, anadirProducto,
        usuariologeadotest, isModalOpen, handleToggleModal,
        favoritos, marcarFavorito } = useContext(Context);
    const servicio = servicios.find((servicio) => servicio.id === parseInt(id));

    const ImagenUrl = 'https://www.oikos.com.co/constructora/images/website/Noticias_2019_/funciones-de-los-constructores.jpg';

    if (!servicio) {
        return <p>Servicio no encontrado</p>;
    }
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
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{servicio.ubicacion}</h2>
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

                                {usuariologeadotest ?
                                    (
                                        <Button
                                            onClick={() => marcarFavorito(servicio.id)}
                                            className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                                            {favoritos.includes(servicio.id) ?
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 3.162l-1.545-1.545a5.5 5.5 0 00-7.778 7.778L10 18.94l9.323-9.545a5.5 5.5 0 00-7.778-7.778L10 3.162z" clipRule="evenodd" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 3.162l-1.545-1.545a5.5 5.5 0 00-7.778 7.778L10 18.94l9.323-9.545a5.5 5.5 0 00-7.778-7.778L10 3.162z" clipRule="evenodd" />
                                                </svg>
                                            }
                                        </Button>
                                    ) :
                                    (<Button
                                        className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500" onClick={handleToggleModal}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 3.162l-1.545-1.545a5.5 5.5 0 00-7.778 7.778L10 18.94l9.323-9.545a5.5 5.5 0 00-7.778-7.778L10 3.162z" clipRule="evenodd" />
                                        </svg>
                                    </Button>
                                    )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalContent isOpen={isModalOpen} onClose={handleToggleModal} />
        </section>



    );
}



