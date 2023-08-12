import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../context/ContextProvider';
import Swal from 'sweetalert2';


const EditarServicios = () => {
    const { id } = useParams();
    const { usuario } = useContext(Context);


    const [servicioLocal, setServicioLocal] = useState({});
    const [servicio, setServicio] = useState({
        nombre_servicio: '',
        img_url: '',
        categoria: '',
        descripcion: '',
        monto: '',
        region: '',
        comuna: '',
    });

    const [errors, setErrors] = useState({
        nombre_servicio: '',
        img_url: '',
        categoria: '',
        descripcion: '',
        monto: '',
        region: '',
        comuna: '',
    });

    const validateForm = () => {
        const newErrors = {};

        if (!servicio.nombre_servicio.trim()) {
            newErrors.nombre_servicio = 'El Nombre del Servicio es requerido';
        }

        if (!servicio.img_url.trim()) {
            newErrors.img_url = 'La URL de la imagen es requerida';
        }

        if (!servicio.categoria.trim()) {
            newErrors.categoria = 'Debe Seleccionar una Categoria';
        }

        if (!servicio.descripcion.trim()) {
            newErrors.descripcion = 'Debe colocar una Descripción del servicio';
        }

        if (!servicio.monto.trim()) {
            newErrors.monto = 'El Monto es Requerido';
        }

        if (!servicio.region.trim()) {
            newErrors.region = 'Debe seleccionar una Región';
        }

        if (!servicio.comuna.trim()) {
            newErrors.comuna = 'Debe seleccionar una Comuna';
        }

        return newErrors;
    };

    const navigate = useNavigate();

    const handleSetServicio = ({ target: { value, name } }) => {
        setServicio((prevServicio) => ({
            ...prevServicio,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '', // Clear the error message when user starts typing
        }));
    };
    const PORT = process.env.PORT || 3001;
    const URL = process.env.REACT_APP_BACKEND_URL   || `http://localhost:${PORT}`;


    const getServicioId = async () => {


        // si usuario.id_usuario no existe entonces darle el valor desde el localStorage 
        const idusuario = usuario.id_usuario === undefined ? localStorage.getItem("id_usuario") : usuario.id_usuario;


        const endpoint = "/servicios/usuario/" + idusuario + "/" + id;
        console.log(endpoint);
        try {
            //obtener servicio por id sin token
            const { data } = await axios.get(URL + endpoint, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setServicioLocal(data[0]);
        } catch ({ response: { data: mensaje } }) {
            Swal.fire(
                'Token Invalido!',
                'Intentalo Nuevamente!',
                'error'
            );
            console.log(mensaje);
        }
    };

    useEffect(() => {
        getServicioId();
    }, [usuario]);

    const EditarServicios = async () => {
        const token = localStorage.getItem("token");
        const endpoint = "/servicios/" + servicioLocal.id_servicio;

        const urlServer = process.env.REACT_APP_BACKEND_URL || `http://localhost:${PORT}`;
        const id_usuario = usuario.id_usuario === undefined ? localStorage.getItem("id_usuario") : usuario.id_usuario;
       /* for (const key in servicio) {
            if (servicio[key] === '') {
                alert(`El campo ${key} es obligatorio`);
                return;
            }
        }*/
        try {
            await axios.post(urlServer + endpoint, {
                servicio: servicio,
                id_usuario: id_usuario,
            }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            alert("servicio registrado con éxito");
            navigate("/");
        } catch (error) {
            alert(error.response.data.mensaje);
            console.log(error);
        }
    };

    const handleCancelar = () => {
        navigate("/micuenta");
    };



    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-5">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Editar servicio: {servicioLocal.nombre_servicio}</h2>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">ID: {servicioLocal.id_servicio}</h3>
                <form>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                            <label htmlFor="nombre_servicio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de Servicio</label>
                            <input type="text" name="nombre_servicio"
                                id="nombre_servicio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                                dark:focus:border-primary-500" value={servicio.nombre_servicio} placeholder={servicioLocal.nombre_servicio} required
                                onChange={handleSetServicio} />
                                {errors.nombre_servicio && <div className="text-red-600 text-sm font-medium">{errors.nombre_servicio}</div>}
                        </div>
                        <div className="w-full">
                            <label htmlFor="img_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL de la imagen</label>
                            <input type="text" name="img_url"
                                id="img_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                            dark:focus:border-primary-500" value={servicio.img_url} placeholder={servicioLocal.img_url} required
                                onChange={handleSetServicio}/>
                                {errors.img_url && <div className="text-red-600 text-sm font-medium">{errors.img_url}</div>}
                        </div>
                        <div className="w-full">
                            <label for="categoria" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                            <select id="categoria" name="categoria" className="bg-gray-50 border border-gray-300 
                            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={handleSetServicio}
                                value={servicio.categoria}
                                required>
                                <option value="">Seleccione una categoria</option>
                                <option value="Hogar">Hogar</option>
                                <option value="Mano de obra">Mano de obra</option>
                                <option value="Cuidado personal">Cuidado personal</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Transporte">Transporte</option>
                                <option value="Otros">Otros</option>
                            </select>
                            {errors.categoria && <div className="text-red-600 text-s font-medium" >{errors.categoria}</div>}
                        </div>
                        <div className="sm:col-span-2">
                            <label for="descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                            <textarea type="text" name="descripcion" rows="4"
                                id="descripcion" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
                                border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={servicio.descripcion} placeholder={servicioLocal.descripcion} required
                                onChange={handleSetServicio}/>
                                {errors.descripcion && <div className="text-red-600 text-s font-medium" >{errors.descripcion}</div>}
                        </div>
                        <div className="sm:col-span-2">
                            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                            <div className="flex flex-row">
                                <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">$</span>
                                <input type="number" id="monto" name="monto"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                                dark:focus:border-primary-500" value={servicio.monto} placeholder={servicioLocal.monto} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                                    onChange={handleSetServicio}/>
                                    
                            </div>
                            {errors.monto && <div className="text-red-600 text-s font-medium" >{errors.monto}</div>}
                        </div>
                        <div className="w-full">
                            <label for="region" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Región</label>
                            <select id="region" name="region" className="bg-gray-50 border border-gray-300 
                            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={handleSetServicio}
                                value={servicio.region}
                                required>
                                <option value="">Seleccione una región</option>
                                <option value="Metropolitana">Metropolitana</option>
                                <option value="Valparaiso">Valparaíso</option>
                                <option value="Biobio">Biobío</option>
                            </select>
                            {errors.region && <div className="text-red-600 text-s font-medium" >{errors.region}</div>}
                        </div>
                        <div className="w-full">
                            <label for="comuna" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comuna</label>
                            <select id="comuna" name="comuna" className="bg-gray-50 border border-gray-300 
                            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={handleSetServicio}
                                value={servicio.comuna}
                                required>
                                <option value="">Seleccione una comuna de </option>
                                {servicio.region === 'Metropolitana' && (
                                    <>
                                        <option value="Santiago">Santiago</option>
                                        <option value="Cerrillos">Cerrillos</option>
                                        <option value="Cerro Navia">Cerro Navia</option>
                                        <option value="Conchali">Conchalí</option>
                                        <option value="El Bosque">El Bosque</option>
                                        <option value="Estacion Central">Estación Central</option>
                                        <option value="Huechuraba">Huechuraba</option>
                                        <option value="Independencia">Independencia</option>
                                        <option value="La Cisterna">La Cisterna</option>
                                        <option value="La Florida">La Florida</option>
                                        <option value="La Granja">La Granja</option>
                                        <option value="La Pintana">La Pintana</option>
                                        <option value="La Reina">La Reina</option>
                                        <option value="Las Condes">Las Condes</option>
                                        <option value="Lo Barnechea">Lo Barnechea</option>
                                        <option value="Lo Espejo">Lo Espejo</option>
                                        <option value="Lo Prado">Lo Prado</option>
                                        <option value="Macul">Macul</option>
                                        <option value="Maipu">Maipú</option>
                                        <option value="Nunoa">Ñuñoa</option>
                                        <option value="Pedro Aguirre Cerda">Pedro Aguirre Cerda</option>
                                        <option value="Penalolen">Peñalolén</option>
                                        <option value="Providencia">Providencia</option>
                                        <option value="Pudahuel">Pudahuel</option>
                                        <option value="Quilicura">Quilicura</option>
                                        <option value="Quinta Normal">Quinta Normal</option>
                                        <option value="Recoleta">Recoleta</option>
                                        <option value="Renca">Renca</option>
                                        <option value="San Joaquin">San Joaquín</option>
                                        <option value="San Miguel">San Miguel</option>
                                        <option value="San Ramon">San Ramón</option>
                                        <option value="Vitacura">Vitacura</option>
                                        {/* Agrega más opciones de ciudades de la región Metropolitana */}
                                    </>
                                )}
                                {servicio.region === 'Valparaiso' && (
                                    <>
                                        <option value="Valparaiso">Valparaíso</option>
                                        <option value="Vina del Mar">Viña del Mar</option>
                                        {/* Agrega más opciones de ciudades de la región de Valparaíso */}
                                    </>
                                )}
                                {servicio.region === 'Biobio' && (
                                    <>
                                        <option value="Concepcion">Concepción</option>
                                        <option value="Chillan">Chillán</option>
                                        {/* Agrega más opciones de ciudades de la región del Biobío */}
                                    </>
                                )}
                            </select>
                            {errors.comuna && <div className="text-red-600 text-s font-medium" >{errors.comuna}</div>}
                        </div>
                        <div className="flex items-center space-x-4">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                                focus:ring-blue-300 focus:outline-none focus:ring-primary-300 font-medium rounded-lg 
                                text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={EditarServicios}>
                                Agregar datos
                            </button>
                            <button
                                type="button"
                                className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                                    Object.values(errors).some((error) => error !== '') ? 'cursor-not-allowed opacity-50' : ''
                                }`}
                                onClick={handleCancelar}
                                disabled={Object.values(errors).some((error) => error !== '')}
                            >Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EditarServicios;
