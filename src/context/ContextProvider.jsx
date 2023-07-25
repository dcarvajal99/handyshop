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

    const login = () => {
        setUserLogin(true);
    };

    const logout = () => {
        setUserLogin(false)
    }
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
            userLogin,
            setUserLogin,
            login,
            logout
        }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider };
export default Context;

