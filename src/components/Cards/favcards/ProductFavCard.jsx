import React from 'react';
import { useContext } from 'react';
import Context from '../../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const ProductFavCard = () => {

  const { usuarios, favoritos,servicios, setServicioDetails } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = (id) => {
    setServicioDetails(id)
    navigate(`/service-detail/${id}`);
  };

  const serviciosFavoritos = servicios.filter((servicio) =>
  favoritos.includes(servicio.id)
);


  return (
    <>
      {serviciosFavoritos.map((servicio) => (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={servicio.id}>
          <div className="flex items-center justify-between px-5 py-3" >
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">{usuarios.nombre} {usuarios.apellido} </span>

            <img className="w-8 h-8 rounded-full" src={process.env.PUBLIC_URL + '../img/navbar/icon-profile.png'} alt="avatar" />
          </div>
          <a href="/">
            <img className="p-8 rounded-t-lg" src={process.env.PUBLIC_URL + '../img/Cards/contructor.jpg'} alt="product imagen" />
          </a>
          <div className="px-5 pb-5">
            <a href="/">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{servicio.servicio}</h5>
            </a>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{servicio.descripcion}</p>
            <div className="flex items-center mt-2.5 mb-5">
              <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${servicio.monto}</span>
              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
              text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800"
              onClick={() => handleClick(servicio.id)}
              >Más Detalles</a>
              {/* <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleClick(servicio.id)}
              >
                Más Detalles
              </button> */}
            </div>
          </div>

        </div>
      ))}
    </>
  );
};

export default ProductFavCard;
