import React from 'react';
import Context from '../../context/ContextProvider';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const ModalContent = ({ isOpen, onClose }) => {

  const { setUsuario} = useContext(Context);
  const [usuarioLocal, setUsuarioLocal] = useState({});
  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuarioLocal, ...field });
  };

  const PORT = process.env.PORT || 3001;
  const URL = process.env.REACT_APP_BACKEND_URL || `http://localhost:${PORT}`;

  const iniciarSesion = async () => {
    const endpoint = "/usuarios/login";
    const { email, password } = usuarioLocal;
    try {
      if (!email || !password) return Swal.fire(
        'Oooops!',
        `Email y Password son Obligatorias`,
        'warning'
      )
      const { data } = await axios.post(URL + endpoint, usuarioLocal);
      console.log(data.usuario);
      Swal.fire(
        '¡Usuario Logueado con Exito!',
        'Haz Clic para Continuar!',
        'success'
      )
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));
      localStorage.setItem("id_usuario", data.usuario.id_usuario);
      setUsuario(data.usuario);
    } catch ({ response: { data: mensaje } }) {
      Swal.fire(
        'Usuario o Contraseña Incorrectos!',
        'Intentalo Nuevamente!',
        'danger'
      )
      console.log(mensaje);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed top-0 z-50 p-4 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-75 bg-black">
      {/* boton de cerra modal */}
      <button
        type="button"
        className="absolute top-0 right-0 m-6 text-2xl font-bold text-white"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Contenido del modal */}
      <div className="bg-white p-6 rounded-lg text-center">
        <h3 className="m-5 text-xl text-gray-900 dark:text-white">Iniciar Sesión:</h3>
        <div className="space-y-6" >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl text-gray-900 dark:text-white"
            >
              Ingrese su Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={usuarioLocal.email}
              onChange={handleSetUsuario}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@Handyshop.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl text-gray-900 dark:text-white"
            >
              Ingrese su Contraseña:
            </label>
            <input
              value={usuarioLocal.password}
              type="password"
              name="password"
              id="password"
              onChange={handleSetUsuario}
              className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Contraseña"
              required
            />
          </div>
          <div className="registro">
            <button className="bg-blue-700 hover:bg-blue-800 text-2xl text-white px-4 py-3 rounded-lg mb-5" onClick={() => {
              iniciarSesion();
              onClose();
            }}>
              Ingresar
            </button>
            <div className="text">
              <a href="/recover-password" className="text-gray-900 text-sm m-3">
                ¿Recuperar Contraseña?
              </a>
              <a href="/register-users" className="text-gray-900 m-3">
                ¿No tiene Cuenta?
              </a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;

