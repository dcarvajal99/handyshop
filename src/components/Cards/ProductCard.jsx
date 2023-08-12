import React from 'react';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';

const ProductCard = () => {

  const { /* usuarios, */ servicios,
    setServicioDetails, usuariologeadotest,
    favoritos, marcarFavorito,
    handleToggleModal
  } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = (id) => {
    setServicioDetails(id)
    navigate(`/service-detail/${id}`);
  };


  return (
    <>
      {servicios.length > 0 ? (
        servicios.map((servicio) => (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={servicio.id_servicio}>
          <div className="flex items-center justify-between px-5 py-3" >
          {/* mostrar dos titulos en columna y el segundo en negrita */}
            <div className="flex flex-col">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">{servicio.nombre +" "+ servicio.apellido} </span>
            <span className="text-sm font-light text-gray-600 dark:text-gray-400"><b>{servicio.region +", "+ servicio.comuna} </b></span>
            </div>
            <img className="w-8 h-8 rounded-full" src={process.env.PUBLIC_URL + '../img/navbar/icon-profile.png'} alt="avatar" />
          </div>
          <a href="/">
            <img className="p-5 object-fill rounded-t-lg" src={servicio.img_url} alt="product imagen" />
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
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${servicio.monto}</span>
              <div className="flex items-center space-x-2">
                {usuariologeadotest ?
                  (
                    <Button
                      onClick={() => marcarFavorito(servicio.id_servicio)}
                      className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                      {favoritos.includes(servicio.id) ?
                        <svg xmlns="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oikos.com.co%2Fconstructora%2Fnoticias-constructora%2Flabores-del-constructor&psig=AOvVaw0XVoOw_Sx8Cl41DCTsF_6a&ust=1691779667200000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCVxcHg0oADFQAAAAAdAAAAABAJ" className="h-3 w-3 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3.162l-1.545-1.545a5.5 5.5 0 00-7.778 7.778L10 18.94l9.323-9.545a5.5 5.5 0 00-7.778-7.778L10 3.162z" clipRule="evenodd" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3.162l-1.545-1.545a5.5 5.5 0 00-7.778 7.778L10 18.94l9.323-9.545a5.5 5.5 0 00-7.778-7.778L10 3.162z" clipRule="evenodd" />
                        </svg>
                      }
                    </Button>
                  ) :
                  (<Button
                    className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500" onClick={handleToggleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3.162l-1.545-1.545a5.5 5.5 0 00-7.778 7.778L10 18.94l9.323-9.545a5.5 5.5 0 00-7.778-7.778L10 3.162z" clipRule="evenodd" />
                    </svg>
                  </Button>
                  )}
                <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
              text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800"
                    onClick={() => handleClick(servicio.id_servicio)}
                  >Más Detalles</p>
                </div>
                {/* <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleClick(servicio.id)}
              >
                Más Detalles
              </button> */}
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

export default ProductCard;
