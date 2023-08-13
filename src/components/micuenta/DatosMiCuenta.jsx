import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

const DatosMiCuenta = () => {
    const { usuario, URL, setUsuario } = useContext(Context);
    const [formEnabled, setFormEnabled] = useState(false);
    const [PassEnabled, setPassEnabled] = useState(false);
    const [passwordErrors, setPasswordErrors] = useState({});
    const navigate = useNavigate();

    const [usuarioLocal, setUsuarioLocal] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
    });

    const [password, setPassword] = useState({
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
    });

    const handleSetPass = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setPassword({ ...password, ...field });
        setErrors({ ...errors, [name]: "" });

        if (name === 'confirmPassword') {
            setPasswordErrors({
                ...passwordErrors,
                confirmPassword: password.password !== value ? 'Las contraseñas no coinciden' : ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!usuarioLocal.nombre.trim()) {
            newErrors.nombre = 'Nombre es requerido';
        }

        if (!usuarioLocal.apellido.trim()) {
            newErrors.apellido = 'Apellido es requerido';
        }

        if (!usuarioLocal.direccion.trim()) {
            newErrors.direccion = 'Dirección es requerida';
        }

        if (!usuarioLocal.telefono.trim()) {
            newErrors.telefono = 'Teléfono es requerido';
        }

        return newErrors;
    };

    const handleKeyPress = (event) => {
        const pattern = /[0-9]/;
        if (!pattern.test(event.key)) {
          event.preventDefault();
        }
      };

    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setUsuarioLocal({ ...usuarioLocal, ...field });
        setErrors({ ...errors, [name]: '' });
    };

    const handleEditar = () => {
        setFormEnabled(true);
    };

    const handleEditarPass = () => {
        setPassEnabled(true);
    };

    const handleGuardar = (check) => {
        if (password.password !== password.confirmPassword) {
            return;
        }

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setFormEnabled(false);
        setPassEnabled(false);
        if (check === 1) EditarDatosUsario();
        if (check === 2) EditarDatosPassword();
    };

    const handleCancelar = () => {
        setFormEnabled(false);
        setPassEnabled(false);
        setUsuarioLocal({
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            direccion: usuario.direccion,
            telefono: usuario.telefono,
        });

        setPassword({
            password: "•••••••••",
            confirmPassword: "•••••••••",
        });

        setPasswordErrors({});
    };

    useEffect(() => {
        console.log(usuario);
    }, [usuario]);


    const EditarDatosUsario = async () => {
        const token = localStorage.getItem("token");
        const endpoint = "/usuarios/" + localStorage.getItem("id_usuario") || usuario.id_usuario;
        for (const key in usuarioLocal) {
            if (usuarioLocal[key] === '') {
                alert(`El campo ${key} es obligatorio`);
                return;
            }
        }
        try {
            const response = await axios.put(
                URL + endpoint,
                {
                    nombre: usuarioLocal.nombre,
                    apellido: usuarioLocal.apellido,
                    direccion: usuarioLocal.direccion,
                    telefono: usuarioLocal.telefono,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            console.log(response);
            Swal.fire(
                '¡Usuario Editado con Éxito!',
                'Haz Clic para Continuar!',
                'success'
              );

            navigate("/micuenta");
        } catch (error) {
            alert(error.response.data.mensaje);
            console.log(error);
        }
        obtenerUsuario();
    };
    const EditarDatosPassword = async () => {
        const token = localStorage.getItem("token");
        const endpoint = "/usuarios/pass/" + localStorage.getItem("id_usuario") || usuario.id_usuario;
        if (passwordErrors.password || passwordErrors.confirmPassword) {
            return;
        }

        if (password.password !== password.confirmPassword) {
            setPasswordErrors({
                ...passwordErrors,
                confirmPassword: 'Las contraseñas no coinciden'
            });
            return;
        }
        try {
            console.log(password.password);
            const response = await axios.put(
                URL + endpoint,
                {
                    password: password.password
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            console.log(response);
            Swal.fire(
                '¡Contraseña Editada con Éxito!',
                'Haz Clic para Continuar!',
                'success'
              );

            navigate("/micuenta");
        } catch (error) {
            alert(error.response.data.mensaje);
            console.log(error);
        }
        obtenerUsuario();
    };
    const obtenerUsuario = async () => {
        const endpoint = "/usuarios?email=" + localStorage.getItem("email");
        try {
            const { data } = await axios.get(URL + endpoint,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            console.log(data.usuario);
            localStorage.setItem("usuario", JSON.stringify(data.usuario));
            localStorage.setItem("id_usuario", data.usuario.id_usuario);
            setUsuario(data.usuario);
        } catch ({ response: { data: mensaje } }) {
            alert(mensaje);
            console.log(mensaje);
        }
    };

    return (
        <>                  
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
                                            className={`bg-gray-50 border border-gray-9000 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                                            value={usuarioLocal.email}
                                            placeholder={usuario.email}
                                            required=""
                                            readOnly
                                        />
                                        {/* EN ESTE INPUT SE DEBE DEJAR BIEN CLARO QUE NO SE PUEDE MODIFICAR . */}
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            id="nombre"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${formEnabled ? "" : "pointer-events-none"
                                                }`}
                                            value={usuarioLocal.nombre}
                                            placeholder={usuario.nombre}
                                            required=""
                                            readOnly={!formEnabled}
                                            onChange={handleSetUsuario}
                                        />
                                        {errors.nombre && <div className="text-red-600 text-s font-medium">{errors.nombre}</div>}
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                                        <input
                                            type="text"
                                            name="apellido"
                                            id="apellido"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${formEnabled ? "" : "pointer-events-none"
                                                }`}
                                            value={usuarioLocal.apellido}
                                            placeholder={usuario.apellido}
                                            required=""
                                            readOnly={!formEnabled}
                                            onChange={handleSetUsuario}
                                        />
                                        {errors.apellido && <div className="text-red-600 text-s font-medium">{errors.apellido}</div>}
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${PassEnabled ? "" : "pointer-events-none"
                                                }`}
                                            value={password.password}
                                            placeholder="•••••••••"
                                            required=""
                                            readOnly={!PassEnabled}
                                            onChange={handleSetPass}
                                        />
                                        {passwordErrors.password && <p className={`text-red-500 text-xs${PassEnabled ? "" : "hidden"
                                            }`}>{passwordErrors.password}</p>}

                                        {/*  ESTE SOLO SE PUEDE MODIFICAR CUANDO SE HABILITE EL BOTON DE CAMBIAR CONTRASEÑA */}
                                    </div>
                                    <div className="sm:col-span-2">
                                        {/* Confirmar contraseña */}
                                        <div className="sm:col-span-2">
                                            <label htmlFor="confirmpassword" className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${PassEnabled ? "" : "hidden"
                                                }`}>Confirmar Contraseña</label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${!PassEnabled ? "hidden" : ""}`}
                                                value={password.confirmPassword}
                                                placeholder="•••••••••"
                                                required=""
                                                readOnly={!PassEnabled}
                                                onChange={handleSetPass}
                                            />
                                            {passwordErrors.confirmPassword && <p className={`text-red-500 text-xs ${PassEnabled ? "" : "hidden"
                                                }`}>{passwordErrors.confirmPassword}</p>}

                                            {/*  ESTE SOLO SE PUEDE MODIFICAR CUANDO SE HABILITE EL BOTON DE CAMBIAR CONTRASEÑA */}
                                        </div>
                                        <div className="sm:col-span-2"></div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
                                        <input
                                            type="text"
                                            name="direccion"
                                            id="direccion"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${formEnabled ? "" : "pointer-events-none"
                                                }`}
                                            value={usuarioLocal.direccion}
                                            placeholder={usuario.direccion}
                                            required=""
                                            readOnly={!formEnabled}
                                            onChange={handleSetUsuario}
                                        />
                                        {errors.direccion && <div className="text-red-600 text-s font-medium">{errors.direccion}</div>}
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de Telefono</label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            id="telefono"
                                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${formEnabled ? "" : "pointer-events-none"
                                                }`}
                                            value={usuarioLocal.telefono}
                                            placeholder={usuario.telefono}
                                            inputMode="numeric"
                                            pattern="[0-9]{9}"
                                            required
                                            onChange={handleSetUsuario}
                                            onKeyPress={handleKeyPress}
                                            readOnly={!formEnabled}
                                        />
                                        {errors.telefono && <div className="text-red-600 text-s font-medium">{errors.telefono}</div>}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button
                                        type="button"
                                        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${formEnabled || PassEnabled ? "hidden" : ""
                                            }`}
                                        onClick={handleEditar}
                                    >
                                        Modificar Datos
                                    </button>
                                    <button
                                        type="button"
                                        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${!formEnabled ? "hidden" : ""
                                            }`}
                                        onClick={() => { handleGuardar(1) }}
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        type="button"
                                        className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${!formEnabled ? "hidden" : ""
                                            }`}
                                        onClick={() => { handleCancelar() }}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="button"
                                        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${PassEnabled || formEnabled ? "hidden" : ""
                                            }`}
                                        onClick={handleEditarPass}
                                    >
                                        Cambiar Contraseña
                                    </button>
                                    <button
                                        type="button"
                                        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${!PassEnabled ? "hidden" : ""
                                            }`}
                                        onClick={() => { handleGuardar(2);  }}
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        type="button"
                                        className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${!PassEnabled ? "hidden" : ""
                                            }`}
                                        onClick={() => { handleCancelar() }}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
            </section>
        </>
    );
};

export default DatosMiCuenta;