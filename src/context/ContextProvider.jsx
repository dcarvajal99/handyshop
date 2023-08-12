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
    const urlPagination = `${process.env.REACT_APP_BACKEND_URL}/servicios`
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);

    useEffect(() => {

        const obtenerServicios = async () => {
            try {
                const response = await axios.get(`${urlPagination}?page=${currentPage}`);
                
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

    const obtenerFavoritos = async () => {
        const endpoint = `/favoritos/${localStorage.getItem("id_usuario") || usuario.id_usuario || ""}`;
        try {
            const { data } = await axios.get(URL + endpoint, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            
            setFavoritos(data.mensaje);
            //save favorito in localstorage
            localStorage.setItem("favoritos", JSON.stringify(data.mensaje));
        } catch ({ response: { data: mensaje } }) {
            alert(mensaje + " 🙁");
        }
    };
    //funcion para guardar los favoritos en el localstorage
    /* const saveFavoritos = useCallback(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }, [favoritos]); */


    //funcion para cargar los favoritos del localstorage
    const loadFavoritos = useCallback(() => {
        const favoritos = JSON.parse(localStorage.getItem("favoritos"));
        if (favoritos) {
            setFavoritos(favoritos);
        }
    }, []);



    useEffect(() => {
        loadFavoritos();

    }, []);


    /* const [eliminarFavorito, setEliminarFavorito] = useState(false);
     // funcion para eliminar los favoritos a traves de la ruta DELETE localhost:3001/favoritos/:id_servicio/:id_usuario */

    const eliminarFavorito = async (id_servicio) => {
        const endpoint = `/favoritos/${localStorage.getItem("id_usuario")}/${id_servicio}/`;
        try {
            const { data } = await axios.delete(URL + endpoint, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            obtenerFavoritos();
        } catch ({ response: { data: mensaje } }) {
            alert(mensaje + " 🙁");
            
        }
    };
    // funcion para agregar los favoritos a traves de la ruta POST localhost:3001/favoritos/:id_servicio/:id_usuario

        const agregarFavorito = async (id_servicio) => {
            const endpoint = `/favoritos`;
            try {
                const { data } = await axios.post(URL + endpoint, {
                    id_servicio: id_servicio,
                    id_usuario: localStorage.getItem("id_usuario"),
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                
                obtenerFavoritos();
            } catch ({ response: { data: mensaje } }) {
                alert(mensaje + " 🙁");
                
            }
        };



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
                //marcarFavorito,
                error,
                currentPage,
                setCurrentPage,
                totalPages,
                totalRecords,
                URL,
                obtenerFavoritos,
                eliminarFavorito, 
                agregarFavorito
            }}>
                {children}
            </Context.Provider>
        );
    };

    export { ContextProvider };
    export default Context;