import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Context = createContext();

const ContextProvider = ({ children }) => {


    const { id } = useParams();
    const [servicios, setServicios] = useState([]);
    const [servicioDetails, setServicioDetails] = useState(null);
    const [usuarios, setUsuarios] = useState({});
    const [cart, setCart] = useState([]);
    const [userLogin, setUserLogin] = useState(false)
    const [scrollVisible, setScrollVisible] = useState(false);


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

    const total = cart.reduce((acc, ele) => acc + ele.monto, 0);


    const anadirProducto = (servicio) => {
        console.log(servicio)
        setCart([...cart, servicio])
    }

    const removerProducto = (id) => {
        const founId = cart.find((ele) => ele.id === id)
        const newCart = cart.filter((ele) => {
            return ele !== founId
        })
        setCart(newCart)
    }

    /* const removerProducto = (id) => {
       const productoAEliminar = cart.find((producto) => producto.id === id);
       if (productoAEliminar) {
           const montoEliminado = productoAEliminar.monto;
           setCart((prevCart) =>
               prevCart.filter((producto) => producto.id !== id)
           );
           setTotal((prevTotal) => prevTotal - montoEliminado);
       }
   };*/


    // Llamar a las funciones para obtener los datos en el montaje del componente
    useEffect(() => {
        obtenerUsuario();
        obtenerServicios();
    }, []);


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
            userLogin,
            setUserLogin,
            login,
            logout,
            scrollVisible,
            setScrollVisible,
            handleMouseEnter,
            handleMouseLeave
        }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider };
export default Context;

