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
    const [servicio_eliminado, setServicio_eliminado] = useState(false);

    // consultar cada vez que se cargue la pagina si el usuario esta logeado y existe dentro del localstorage
    useEffect(() => {
        if (localStorage.getItem("token") && localStorage.getItem("usuario")) {
            setUsuariologeado(true);
            setUsuario(JSON.parse(localStorage.getItem("usuario")));
        }
    }, []);



    // Funciones para obtener los datos de servicios a traves de la ruta GET localhost:3001/servicios
     // Funciones para obtener los datos de servicios a traves de la ruta GET localhost:3001/servicios
     const PORT = process.env.PORT || 3001;
     const URL = process.env.REACT_APP_BACKEND_URL || `http://localhost:${PORT}`;
 
     const [urlPagination, setUrlPagination] = useState(`${process.env.REACT_APP_BACKEND_URL}/servicios`);
     const [currentPage, setCurrentPage] = useState(1);
     const [totalPages, setTotalPages] = useState(0);
     const [totalRecords, setTotalRecords] = useState(0);
     console.log(urlPagination);
 
     useEffect(() => {
 
         const obtenerServicios = async () => {
             try {
                 const response = await axios.get(`${urlPagination}?page=${currentPage}`);
                 console.log(response);
                 const dataServicios = response.data.mensaje.result;
                 setServicios(dataServicios);
                 const paginationLinks = response.data.mensaje.hateoas;
                 const totalPaginas = parseInt(paginationLinks.totalPaginas);
                 const totalRegistros = parseInt(paginationLinks.serviciosTotal);
                 // Actualizar estados en el contexto
                 setTotalPages(totalPaginas);
                 setTotalRecords(totalRegistros);
                 setError(null); // Limpiar el error si la solicitud es exitosa
             } catch (error) {
                 console.error('Error al obtener servicios:', error);
                 setError('Error al obtener servicios. Por favor, inténtelo de nuevo más tarde.'); // Establecer el mensaje de error
             }
         };
         obtenerServicios();
     }, [urlPagination, currentPage]);

    // Funcion para obtener los datos de un servicio a traves de la ruta GET localhost:3001/servicios/:id
    /*  useEffect(() => {
         const obtenerFavoritos = async () => {
             const urlServer = "http://localhost:3001";
             const endpoint = `/favoritos/${localStorage.getItem("id_usuario")}`;
             try {
                 const { data } = await axios.get(urlServer + endpoint, {
                     headers: {
                         Authorization: `Bearer ${localStorage.getItem("token")}`,
                     },
                 });
                 console.log(data);
                 setFavoritos(data.mensaje);
             } catch ({ response: { data: mensaje } }) {
                 alert(mensaje + " 🙁");
                 console.log(mensaje);
             }
         };
         obtenerFavoritos();
     }, [usuariologeado]); */

    /* const [eliminarFavorito, setEliminarFavorito] = useState(false);
     // funcion para eliminar los favoritos a traves de la ruta DELETE localhost:3001/favoritos/:id_servicio/:id_usuario
     useEffect(() => {
         const eliminarFavorito = async (id_servicio) => {
             const urlServer = "http://localhost:3001";
             const endpoint = `/favoritos/${id_servicio}/${localStorage.getItem("id_usuario")}`;
             try {
                 const { data } = await axios.delete(urlServer + endpoint, {
                     headers: {
                         Authorization: `Bearer ${localStorage.getItem("token")}`,
                     },
                 });
                 console.log(data);
             } catch ({ response: { data: mensaje } }) {
                 alert(mensaje + " 🙁");
                 console.log(mensaje);
             }
         };
         eliminarFavorito();
     }, [eliminarFavorito]);
     const [añadirFavorito, setAñadirFavorito] = useState();
     // funcion para agregar los favoritos a traves de la ruta POST localhost:3001/favoritos/:id_servicio/:id_usuario
     useEffect(() => {
         const agregarFavorito = async (id_servicio) => {
             const urlServer = "http://localhost:3001";
             const endpoint = `/favoritos/${id_servicio}/${localStorage.getItem("id_usuario")}`;
             try {
                 const { data } = await axios.post(urlServer + endpoint, {
                     headers: {
                         Authorization: `Bearer ${localStorage.getItem("token")}`,
                     },
                 });
                 console.log(data);
             } catch ({ response: { data: mensaje } }) {
                 alert(mensaje + " 🙁");
                 console.log(mensaje);
             }
         };
         agregarFavorito();
     }, [añadirFavorito]);
 */


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



    // Función para remover un producto del carrito si hay uno repetido o si la cantidad es 0 (cero)
    const removerProducto = (producto) => {
        const index = cart.findIndex((ele) => ele.id_servicio === producto.id_servicio);

        if (index !== -1) {
            const newCart = [...cart];
            newCart[index].cantidad -= 1;

            if (newCart[index].cantidad === 0) {
                newCart.splice(index, 1);
            }

            setCart(newCart);
            guardarCarritoEnLocalStorage(newCart); // Actualiza el localStorage con el nuevo carrito
        }

        if (cart.length === 1) {
            localStorage.removeItem('carrito'); // Elimina el carrito del localStorage si está vacío
        }
    };
    const guardarCarritoEnLocalStorage = (carrito) => {
        try {
            const carritoJSON = JSON.stringify(carrito);
            localStorage.setItem('carrito', carritoJSON);
            console.log('Carrito guardado en el localStorage');
        } catch (error) {
            console.error('Error al guardar el carrito en el localStorage:', error);
        }
    };
    // Función para añadir un producto al carrito

    const anadirProducto = (producto) => {
        const index = cart.findIndex((ele) => ele.id_servicio === producto.id_servicio);

        if (index !== -1) {
            const newCart = [...cart];
            newCart[index].cantidad += 1;
            setCart(newCart);
            guardarCarritoEnLocalStorage(newCart); // Actualiza el localStorage con el nuevo carrito
        } else {
            const newCart = [...cart, { ...producto, cantidad: 1 }];
            setCart(newCart);
            guardarCarritoEnLocalStorage(newCart); // Actualiza el localStorage con el nuevo carrito
        }
    };

    // Función para cargar el carrito desde el localStorage al cargar el componente
    useEffect(() => {
        const carritoGuardado = cargarCarritoDesdeLocalStorage();
        if (carritoGuardado) {
            setCart(carritoGuardado);
        }
    }, []);

    // Función para cargar el carrito desde el localStorage
    const cargarCarritoDesdeLocalStorage = () => {
        try {
            const carritoJSON = localStorage.getItem('carrito');
            return carritoJSON ? JSON.parse(carritoJSON) : [];
        } catch (error) {
            console.error('Error al cargar el carrito desde el localStorage:', error);
            return [];
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
            setUsuariologeado,
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
            setFavoritos, // Agregar el estado 'favoritos' al contexto
            //marcarFavorito
            error,
            currentPage,
            setCurrentPage,
            totalPages,
            totalRecords,
            URL
            //eliminarFavorito, 
            //setEliminarFavorito,
        }}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider };
export default Context;