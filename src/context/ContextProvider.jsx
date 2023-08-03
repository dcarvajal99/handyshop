import axios from "axios";
import { createContext, useEffect, useState, useCallback } from "react";
const Context = createContext();


const ContextProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [servicios, setServicios] = useState([]);
    const [servicioDetails, setServicioDetails] = useState(null);
    const [usuario, setUsuario] = useState({});
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0); // Agrega el estado 'total'
    const [usuariologeado, setUsuariologeado] = useState(false);
    const [favoritos, setFavoritos] = useState([]);
    const [error, setError] = useState(null);

    const PORT = process.env.PORT || 3001;
    const URL = `http://localhost:${PORT}/servicios`;

    // Funciones para agregar y remover productos de favoritos
    const marcarFavorito = (servicioId) => {
        if (favoritos.includes(servicioId)) {
            setFavoritos((prevFavoritos) =>
                prevFavoritos.filter((id) => id !== servicioId)
            );
        } else {
            setFavoritos((prevFavoritos) => [...prevFavoritos, servicioId]);
        }
    };


    // Funciones para obtener los datos
    /*     const obtenerUsuario = async () => {
            const data = await fetch('/usuario.json');
            const dataUsuario = await data.json();
            setUsuario(dataUsuario.usuario[0]);
        };
    
     */

    // Funciones para obtener los datos de servicios a traves de la ruta GET localhost:3001/servicios
    useEffect(() => {
        const obtenerServicios = async () => {
            try {
                const response = await axios.get(URL);
                const dataServicios = response.data.mensaje.result;
                console.log(dataServicios);
                setServicios(dataServicios);
                setError(null); // Limpiar el error si la solicitud es exitosa
            } catch (error) {
                console.error('Error al obtener servicios:', error);
                setError('Error al obtener servicios. Por favor, inténtelo de nuevo más tarde.'); // Establecer el mensaje de error
            }
        };

        obtenerServicios();
    }, []);

    // Funciones para calcular la cantidad total de productos en el carrito
    const calcularCantidadTotal = () => {
        const cantidadTotal = cart.reduce((acc, ele) => acc + ele.cantidad, 0);
        return cantidadTotal;
    };

    const cantidadTotal = calcularCantidadTotal();

    useEffect(() => {
        // Si la cantidad total es cero, oculta el valor
        if (cantidadTotal === 0) {
            return setTotal("");
        }

        // Si la cantidad total no es cero, actualiza el estado 'total' con el valor calculado
        setTotal(cantidadTotal);
    }, [cantidadTotal]);

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    // Función para calcular el monto total del carrito
    const calcularTotal = useCallback(() => {
        const newTotal = cart.reduce((acc, ele) => acc + ele.monto * ele.cantidad, 0);

        setTotal(newTotal);
    }, [cart]);

    // Función para añadir un producto al carrito
    const anadirProducto = (producto) => {
        // Comprueba si el producto ya está en el carrito
        const index = cart.findIndex((ele) => ele.id_servicio === producto.id_servicio);

        if (index !== -1) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            const newCart = [...cart];
            newCart[index].cantidad += 1;
            setCart(newCart);
        } else {
            // Si el producto no está en el carrito, añade el producto
            const newCart = [...cart, { ...producto, cantidad: 1 }];
            setCart(newCart);
        }
    };

    // Función para remover un producto del carrito si hay uno repetido o si la cantidad es 0 (cero)
    const removerProducto = (producto) => {
        // Comprueba si el producto ya está en el carrito
        const index = cart.findIndex((ele) => ele.id_servicio === producto.id_servicio);

        if (index !== -1) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            const newCart = [...cart];
            newCart[index].cantidad -= 1;
            if (newCart[index].cantidad === 0) {
                newCart.splice(index, 1);
            }
            setCart(newCart);
        }
    };


    // Llamar a las funciones para obtener los datos en el montaje del componente
    /*  useEffect(() => {
        obtenerUsuario();
     }, []); */

    useEffect(() => {
        calcularTotal(); // Calcula el total cuando se monta el componente
    }, [calcularTotal]);


    //si el usuario contiene informacion se cambia el estado de usuariologeado a true
    useEffect(() => {
        if (usuario.nombre) {
            setUsuariologeado(true);
        }
    }, [usuario]);
    
    const handleClickUsuarioLogeado = () => {
        setUsuariologeado(!usuariologeado);
    }


    return (
        <Context.Provider value={{
            usuario,
            setUsuario,
            servicios,
            servicioDetails,
            setServicioDetails,
            cart,
            setCart,
            anadirProducto,
            removerProducto,
            total,
            setTotal,
            isModalOpen,
            handleToggleModal,
            cantidadTotal,
            usuariologeado,
            handleClickUsuarioLogeado,
            favoritos,
            marcarFavorito,
            error,
        }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider };
export default Context;