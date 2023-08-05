import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const DatosMiCuenta = () => {
    const { usuario, port } = useContext(Context);
    const [formEnabled, setFormEnabled] = useState(false);
    const navigate = useNavigate();


    const [usuarioLocal, setUsuarioLocal] = useState({
        email: "",
        nombre: "",
        apellido: "",
        password: "",
        direccion: "",
        telefono: "",
    });

    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setUsuarioLocal({ ...usuarioLocal, ...field });
        console.log(usuarioLocal);
    };

    const handleEditar = () => {
        setFormEnabled(true);
    };

    const handleGuardar = () => {
        setFormEnabled(false);
        // Aquí podrías implementar la lógica para guardar los datos modificados.
    };
    const handleCancelar = () => {
        setFormEnabled(false);
        // setear los datos del usuario en el formulario

        setUsuarioLocal({
            email: usuario.email,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            password: "•••••••••",
            direccion: usuario.direccion,
            telefono: usuario.telefono,
        });
    };

    useEffect(() => {
        console.log(usuario);
    }, [usuario]);

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-5">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Mis datos</h2>
                    <section className="bg-white dark:bg-gray-900">
                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-5">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Mis datos</h2>
                    <form action="#">
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                                        formEnabled ? "" : "pointer-events-none"
                                    }`}
                                    value={usuarioLocal.email}
                                    placeholder={usuario.email}
                                    required=""
                                    readOnly={!formEnabled}
                                    onChange={handleSetUsuario}
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                                        formEnabled ? "" : "pointer-events-none"
                                    }`}
                                    value={usuarioLocal.nombre}
                                    placeholder={usuario.nombre}
                                    required=""
                                    readOnly={!formEnabled}
                                    onChange={handleSetUsuario}
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                                <input
                                    type="text"
                                    name="apellido"
                                    id="apellido"
                                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                                        formEnabled ? "" : "pointer-events-none"
                                    }`}
                                    value={usuarioLocal.apellido}
                                    placeholder={usuario.apellido}
                                    required=""
                                    readOnly={!formEnabled}
                                    onChange={handleSetUsuario}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                                        formEnabled ? "" : "pointer-events-none"
                                    }`}
                                    value={usuarioLocal.password}
                                    placeholder="•••••••••"
                                    required=""
                                    readOnly={!formEnabled}
                                    onChange={handleSetUsuario}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
                                <input
                                    type="text"
                                    name="direccion"
                                    id="direccion"
                                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                                        formEnabled ? "" : "pointer-events-none"
                                    }`}
                                    value={usuarioLocal.direccion}
                                    placeholder={usuario.direccion}
                                    required=""
                                    readOnly={!formEnabled}
                                    onChange={handleSetUsuario}
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de Telefono</label>
                                <input
                                    type="tel"
                                    name="telefono"
                                    id="telefono"
                                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
                                        formEnabled ? "" : "pointer-events-none"
                                    }`}
                                    value={usuarioLocal.telefono}
                                    placeholder={usuario.telefono}
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    required
                                    readOnly={!formEnabled}
                                    onChange={handleSetUsuario}
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                type="button"
                                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                                    formEnabled ? "hidden" : ""
                                }`}
                                onClick={handleEditar}
                            >
                                Modificar Datos
                            </button>
                            <button
                                type="button"
                                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                                    !formEnabled ? "hidden" : ""
                                }`}
                                onClick={handleGuardar}
                            >
                                Guardar
                            </button>
                            <button
                                type="button"
                                className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                                    !formEnabled ? "hidden" : ""
                                }`}
                                onClick={()=>{handleCancelar()}}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
                </div>
            </section>
        </>
    );
};

export default DatosMiCuenta;
