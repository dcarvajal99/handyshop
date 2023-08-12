import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react';
import ModalContent from '../Modal/ModalContent';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';

export default function DetailsServices() {
    const { id } = useParams();
    const { anadirProducto,
        usuariologeado, isModalOpen, handleToggleModal,
        favoritos, eliminarFavorito,
        agregarFavorito } = useContext(Context);

    const [servicio, setServicioLocal] = useState({});
    const URL = process.env.REACT_APP_BACKEND_URL;

    const getServicioId = async () => {
        const endpoint = "/servicios/" + id;
        try {
            //obtener servicio por id sin token
            const { data } = await axios.get(URL + endpoint);
            setServicioLocal(data.mensaje[0]);
        } catch ({ response: { data: mensaje } }) {
            alert(mensaje + " 🙁");
        }
    };

    useEffect(() => {
        getServicioId();
    }, [id]);

    let existe = false;

    for (const key in favoritos) {
        if (favoritos[key].id_servicio === servicio.id_servicio) {
            existe = true;
            break;
        }
    }

    if (!servicio) {
        return <p>Servicio no encontrado</p>;
    }
    return (
        <section className="dark:bg-gray-900 py-10 px-12">
            {servicio ? (<>
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            src={servicio.img_url}
                            alt="ecommerce"
                            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{servicio.region + ", " + servicio.comuna}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{servicio.nombre_servicio}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <div className="flex items-center mt-2 mb-3">
                                        <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.5</span>
                                    </div>
                                    {/* Resto del código para las estrellas */}
                                </span>
                                {/* Resto del código para los íconos de acciones */}
                            </div>
                            <div className="flex mb-4">
                                <span className="flex items-center mt-2 mb-3">
                                    <p className="text-base text-gray-900 dark:text-white">
                                        {servicio.descripcion}
                                    </p>
                                </span>
                            </div>

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

                                    {usuariologeado ?
                                        (
                                            <Button
                                                //onClick={() => marcarFavorito(servicio.id_servicio)}
                                                className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                                                {existe ?
                                                    <svg onClick={() => eliminarFavorito(servicio.id_servicio)}
                                                        xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 3.162l-1.545-1.545a5.5 5.5 0 00-7.778 7.778L10 18.94l9.323-9.545a5.5 5.5 0 00-7.778-7.778L10 3.162z" clipRule="evenodd" />
                                                    </svg>
                                                    :
                                                    <svg onClick={() => agregarFavorito(servicio.id_servicio)}
                                                        xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
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

                            <div className="flex flex-row items-center justify-between">
                                <div className="flex-initial">
                                    <img className="w-10 h-10 rounded-full" src={process.env.PUBLIC_URL + '../img/navbar/icon-profile.png'} alt="avatar" />

                                    <div className="flex flex-col">
                                        <span className="text-xl text-gray-900 dark:text-white">{servicio.nombre + " " + servicio.apellido}</span>
                                        <span className="text-base text-gray-900 dark:text-white">{servicio.telefono}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalContent isOpen={isModalOpen} onClose={handleToggleModal} />
            </>
            ) :
                (
                    <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                        <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                        <div class="w-full">
                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                        </div>
                        <span class="sr-only">Loading...</span>
                    </div>
                )
            }
        </section>



    );
}



