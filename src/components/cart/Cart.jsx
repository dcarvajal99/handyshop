import Context from "../../context/ContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContratoExitoso from "../contratoExitoso/ContratoExitoso";


const Cart = () => {

    const ImagenUrl = 'https://www.oikos.com.co/constructora/images/website/Noticias_2019_/funciones-de-los-constructores.jpg'
    const { cartTotal } = useContext(Context)
    const navigate = useNavigate();

    const handleClick = () => {
      // Redirige a /ruta-destino cuando se haga clic en el botón
      navigate(ContratoExitoso);
    };

    return (
        <div className="w-full h-screen flex items-center justify-center ">
            <div className="container p-5 border "> {/*fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 p-4*/}
                <p className="text-4xl font-bold text-center mb-4">Detalles del pedido</p>
                <div className="flex items-center">
                    <div className="bg-gray-400 w-1/3 h-10 flex items-center rounded-l-lg"><p className="text-gray-800 text-lg font-bold">items</p></div>
                    <div className="bg-gray-400 w-1/3 h-10 flex items-center"><p className="text-gray-800 text-lg font-bold">descripcion</p></div>
                    <div className="bg-gray-400 w-1/3 h-10 flex items-center rounded-r-lg"><p className="text-gray-800 text-lg font-bold">precio</p></div>
                </div>
                <div className=" flex items-center">
                    <div className=" flex items-center w-1/3 p-4">
                        <img
                            src={ImagenUrl} // Reemplaza con la ruta correcta de la imagen
                            alt="Imagen"
                            className="h-16 w-16 mr-2" // Ajusta el tamaño de la imagen aquí (16px x 16px en este caso)
                        />
                        <ul>
                            <h2 className="text-gray-800 text-lg font-bold">servicio</h2>
                            <li className="text-gray-800 text-lg font-bold">reponsable</li>
                            <li className="text-gray-800 text-lg font-bold">nombre</li>
                        </ul>
                    </div>
                    <div className=" w-1/3 p-4">
                        servicio.descripcion
                    </div>
                    <div className=" w-1/3 p-4">
                        servicio.monto
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4">contratar 🛒</button>
                    {/*<Link to={handleClick}>contratar</Link>*/}
                    <button onClick={handleClick}>Ir a otra página</button>
                    {/* <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4">mas servicios 🛒</button>*/}
                </div>
            </div>
        </div>
    )
}

export default Cart;