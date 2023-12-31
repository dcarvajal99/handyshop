import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import Context from '../../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Modal, Button } from 'flowbite-react';
import HiOutlineExclamationCircle from '@meronex/icons/hi/HiOutlineExclamationCircle';

const MyProductCard = () => {

  const { usuario, servicios,
    setServicioDetails, servicio_eliminado, formatPrice
  } = useContext(Context);
  const [misServicios, setMisServicios] = useState([]);
  const navigate = useNavigate();
  const PORT = process.env.PORT || 3001;
  const URL = process.env.REACT_APP_BACKEND_URL || `http://localhost:${PORT}`;

  const handleClickEdit = (id) => {
    setServicioDetails(id)
    navigate(`/editar-servicios/${id}`);
  };

  const obtenerMisServicios = async () => {
    const endpoint = `/servicios/usuario/${localStorage.getItem("id_usuario")}`;
    // si no existe usuario logeado mandar a inicio
    try {
      const { data } = await axios.get(URL + endpoint, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMisServicios(data.mensaje);
    } catch ({ response: { data: mensaje } }) {
      alert(mensaje + " 🙁");
    }
  };

  // ejecutar esta funcion luego de 0.5 segundos
  useEffect(() => {
    obtenerMisServicios();
  }, [usuario, servicio_eliminado]);

  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const handleClickDelete = async (id) => {
    const endpoint = `/servicios/${usuario.id_usuario}/${id}`;
    try {
      const data = await axios.delete(URL + endpoint, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Servicio eliminado correctamente");
      obtenerMisServicios();
      navigate(`/micuenta`);
    } catch ({ response: { data: mensaje } }) {
      alert(mensaje + " 🙁");
    }
  };


  return (
    <>
      {servicios.length > 0 ? (
        misServicios.map((servicio) => (
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={servicio.id_servicio}>
            <div className="flex items-center justify-between px-5 py-3" >
              <div className="flex flex-col">
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">{servicio.nombre + " " + servicio.apellido} </span>
                <span className="text-sm font-light text-gray-600 dark:text-gray-400"><b>{servicio.region + ", " + servicio.comuna} </b></span>
              </div>
              <img className="w-8 h-8 rounded-full" src={process.env.PUBLIC_URL + '../img/navbar/icon-profile.png'} alt="avatar" />
            </div>
            <a href="/">
              <img className="p-8 rounded-t-lg" src={process.env.PUBLIC_URL + '../img/Cards/contructor.jpg'} alt="product imagen" />
            </a>
            <div className="px-5 pb-5">
              <a href="/">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{servicio.nombre_servicio}</h5>
              </a>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{servicio.descripcion}</p>
              <div className="flex items-center mt-2.5 mb-5">
                <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{formatPrice(servicio.monto)}</span>
                <div className="flex items-center space-x-2">

                  {/* {usuariologeadotest ?
                  <Button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg
              text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
              dark:focus:ring-blue-800"
                    onClick={handleToggleModal}
                  >
                    Editar
                  </Button>
                  : <></>
                }
                <Button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg
              text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
              dark:focus:ring-blue-800"
                  onClick={() => marcarFavorito(servicio.id_servicio)}
                >
                  {favoritos.includes(servicio.id_servicio) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                </Button>

                <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
              text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800"
                  onClick={() => handleClick(servicio.id_servicio)}
                >Más Detalles</p>
                */}
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => handleClickEdit(servicio.id_servicio)}
                  >
                    Editar
                  </button>
                  <>
                    <button onClick={() => props.setOpenModal('pop-up')} className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ""
                                `}>Eliminar</button>
                    <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            ¿Estás seguro que deseas eliminar este producto?
                          </h3>
                          <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => {
                              handleClickDelete(servicio.id_servicio);
                              props.setOpenModal(undefined);
                            }}>
                              Sí, estoy seguro
                            </Button>
                            <Button color="gray" onClick={() => { props.setOpenModal(undefined); }}>
                              No, cancelar
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </>
                </div>

              </div>
            </div>

          </div>
        ))) : (
        <>
          {Array.from({ length: 12 }).map((_, index) => (
            <div role="status" class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
              <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              <div class="flex items-center mt-4 space-x-3">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                  <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
          ))}
        </>)}
    </>
  );
};

export default MyProductCard;
