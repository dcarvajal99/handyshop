import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SubirServicios = () => {
    const [servicio, setServicio] = useState({
        nombre_servicio: '',
        img_url: '',
        categoria: '',
        descripcion: '',
        monto: '',
        region: '',
        comuna: '',
    });
    const navigate = useNavigate()
    const handleSetServicio = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setServicio({ ...servicio, ...field });
        console.log(servicio);
    };

    const registrarUsuario = async () => {
        const urlServer = "http://localhost:3001";
        const endpoint = "/servicios";
        const token = localStorage.getItem("token");
        const id_usuario = localStorage.getItem("id_usuario");
        for (const key in servicio) {
            if (servicio[key] === '') {
                Swal.fire(
                    'Oooops!',
                    `El campo ${key} es obligatorio`,
                    'warning'
                  )
                return;
            }
        }
        try {
            console.log({
                headers: {
                    Authorization: "Bearer " + token,
                    servicio: servicio,
                    id_usuario: id_usuario
                },
            });
            await axios.post(urlServer + endpoint, {
                headers: {
                    Authorization: "Bearer " + token,
                    servicio: servicio,
                    id_usuario: id_usuario
                },
            });
            Swal.fire(
                '¡Servicio Registrado con Exito!',
                'Haz Clic para Continuar!',
                'success'
              )
            navigate("/");
        } catch (error) {
            Swal.fire(
                (error.response.data.mensaje),
                'You clicked the button!',
                'danger'
              )
            console.log(error);
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-5">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Ingresar nuevo servicio</h2>
                <form>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="sm:col-span-2">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de Servicio</label>
                            <input type="nombre_servicio" name="nombre_servicio"
                                id="nombre_servicio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                                dark:focus:border-primary-500" value={servicio.nombre_servicio} placeholder="Electricista con certificacion" required
                                onChange={handleSetServicio} />
                        </div>
                        <div className="w-full">
                            <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL de la imagen</label>
                            <input type="text" name="img_url"
                                id="img_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                            dark:focus:border-primary-500" value={servicio.img_url} placeholder="https://www.ejemplo.cl/imagen" required
                                onChange={handleSetServicio}
                            />
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
                                <option>Hogar</option>
                                <option>Mano de obra</option>
                                <option>Cuidado personal</option>
                                <option>Industrial</option>
                                <option>Transporte</option>
                                <option>Otros</option>
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                            <textarea type="text" name="descripcion" rows="4"
                                id="descripcion" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
                                border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={servicio.descripcion} placeholder="Ingrese una descripción" required
                                onChange={handleSetServicio}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                            <div className="flex flex-row">
                                <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">$</span>
                                <input type="number" id="monto" name="monto"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                                dark:focus:border-primary-500" value={servicio.monto} placeholder="0" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                                    onChange={handleSetServicio}
                                />
                            </div>
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
                        </div>
                        <div className="flex items-center space-x-4">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                                focus:ring-blue-300 focus:outline-none focus:ring-primary-300 font-medium rounded-lg 
                                text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={registrarUsuario}>
                                Agregar datos
                            </button>
                            {/* <button type="button" className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
             <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            Delete
            </button> */}
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SubirServicios;


