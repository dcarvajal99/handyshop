import { Card } from 'flowbite-react';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';
import { useParams } from 'react-router-dom';
import React from 'react';

// falta el use navigate del componente productcard para usar el id params

export default function DetailsServices() {

    const { id } = useParams();
    const { servicios } = useContext(Context);
    const { cart, setCart } = useContext(Context);

    const clickAddToCart = () => {
        setCart((elementosAnadidos) => {
            const itemsAñadidos = elementosAnadidos.find((item) => item.id === id);
            if (itemsAñadidos) {
                return elementosAnadidos.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...elementosAnadidos, { id, quantity: 1 }]
            }
        })
    }

    const removerItem = (id) => {
        setCart((elementosAnadidos) => {
            if (elementosAnadidos.find((item) => item.id === id)?.quantity === 1){
                return elementosAnadidos.filter((item) => item.id !== id)
            }else {
                return elementosAnadidos.map((item) => {
                    if(item.id === id) {
                        return {...item,quantity: item.quantity -1}
                    }else {
                        return item
                    }
                })
            }
            
        })
    }
    /*const service = servicios.find((servicio) => servicio.id === (id));

    if (!service) {
        return <p>El servicio no fue encontrado.</p>;
    }*/

    //para añadir al carrito en detailsServices
    /*const { addToCart, cartItems } = useContext(Context);
 
    const clickAddToCart = (service) => {
        addToCart(service);
    };*/

    /*en el context habria que hacer  
    const [cartItems, setCartItems] = useState([]);

  const addToCart = (service) => {
    setCartItems((prevCartItems) => [...prevCartItems, service]);
  };

  const removeFromCart = (serviceId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== serviceId)
    );
  };*/

    const ImagenUrl = 'https://www.oikos.com.co/constructora/images/website/Noticias_2019_/funciones-de-los-constructores.jpg'
    return (
        /*<div className="flex items-center justify-center h-screen">
            <div className="bg-gray-200 p-4">
                Contenido del div centrado
            </div>
        </div>*/
        /*{servicios.map((servicio) => (
            <li key={servicio.id} className="mb-4">
                <h2 className="text-xl font-semibold">{servicio.servicio}</h2>
                <p>{servicio.descripcion}</p>
                <p className="font-bold">Monto: ${servicio.monto}</p>
                <p>Ubicación: {servicio.ubicacion}</p>
            </li>
        ))}*/

        /*<Card 
            horizontal
            imgSrc={ImagenUrl}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                    Noteworthy technology acquisitions 2021
                </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </p>
        </Card>*/

        <div className="flex items-center justify-center h-screen ">
            <div className="w-400 h-400 bg-center bg-no-repeat bg-cover" >
                <img src={ImagenUrl} alt="Descripción de la imagen" className="max-w-full max-h-full" />
            </div>
            <div className="m-l-2rem m-b-2rem w-50 text-start mx-8 my-2">
                <h1 className='font-bold'>titulo{id}</h1>
                <div className="list-none pl-0 my-6 border-t border-gray-300">
                    <p className="font-bold my-6">monto</p>
                    <ul >
                        <h2>$</h2>
                        <h2 className='my-4'>ubicacion</h2>
                    </ul>
                </div>
                <div className="flex justify-between ">
                    <button
                        //onClick={() => clickAddToCart(service)} // Añade el servicio al carrito al hacer clic en el botón
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Favoritos ❤️</button>
                    <button
                        //onClick={() => clickAddToCart(service)} // Añade el servicio al carrito al hacer clic en el botón
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4">Añadir 🛒</button>
                </div>


            </div>
        </div>

    )
}


