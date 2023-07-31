import { createContext, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

const Context = createContext();

const ContextProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams();
    const [servicios, setServicios] = useState([]);
    const [servicioDetails, setServicioDetails] = useState(null);
    const [usuarios, setUsuarios] = useState({});
    const [cart, setCart] = useState([]);
    const [userLogin, setUserLogin] = useState(false)
    const [scrollVisible, setScrollVisible] = useState(false);
    const [total, setTotal] = useState(0); // Agrega el estado 'total'


    // Funciones para obtener los datos
    const obtenerUsuario = async () => {
        const data = await fetch('/usuarios.json');
        const dataUsuarios = await data.json();
        setUsuarios(dataUsuarios.usuario[0]);
    };

    const obtenerServicios = async () => {
        const data = await fetch('/servicios.json');
        const dataServicios = await data.json();
        setServicios(dataServicios.servicios);
    };

    const handleMouseEnter = () => {
        setScrollVisible(true);
    };

    const handleMouseLeave = () => {
        setScrollVisible(false);
    };
    const login = () => {
        setUserLogin(true);
    };

    const logout = () => {
        setUserLogin(false)
    }

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };

    // Función para calcular el monto total del carrito
    const calcularTotal = useCallback(() => {
        const newTotal = cart.reduce((acc, ele) => acc + ele.monto, 0);
        setTotal(newTotal);
    }, [cart]);

    // Función para añadir un producto al carrito
    const anadirProducto = (servicio) => {
        console.log(servicio);
        setCart([...cart, servicio]);
        calcularTotal(); // Recalcula el total cuando se añade un producto
    };

    const removerProducto = (id) => {
        // Encuentra el índice del producto en el carrito
        const index = cart.findIndex((producto) => producto.id === id);

        if (index !== -1) {
            // Obtiene el monto del producto que se eliminará
            const montoEliminado = cart[index].monto;

            // Actualiza el carrito eliminando el producto usando el índice
            const newCart = [...cart];
            newCart.splice(index, 1);
            setCart(newCart);

            // Actualiza el total restando el monto del producto eliminado
            setTotal(total - montoEliminado);
        }
    };

    // Llamar a las funciones para obtener los datos en el montaje del componente
    useEffect(() => {
        obtenerUsuario();
        obtenerServicios();

    }, []);

    useEffect(() => {
        calcularTotal(); // Calcula el total cuando se monta el componente
    }, [calcularTotal]);

    console.log(usuarios.nombre);
    console.log(servicios);
    return (
        <Context.Provider value={{
            usuarios,
            servicios,
            servicioDetails,
            setServicioDetails,
            cart,
            setCart,
            anadirProducto,
            removerProducto,
            total,
            setTotal,
            userLogin,
            setUserLogin,
            login,
            logout,
            scrollVisible,
            setScrollVisible,
            handleMouseEnter,
            handleMouseLeave,
            isModalOpen, 
            handleToggleModal
        }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider };
export default Context;

