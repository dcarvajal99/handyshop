import React from 'react';
import Context from '../../context/ContextProvider';
import { useContext,useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const ModalContent = ({ isOpen, onClose }) => {

  const { setUsuario } = useContext(Context);
  const navigate = useNavigate()
  const [usuario, setUsuarioLocal] = useState({});
  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  const iniciarSesion = async () => {
    const urlServer = "http://localhost:3001";
    const endpoint = "/login";
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const {data} = await axios.post(urlServer + endpoint, usuario);
      console.log(data.usuario);
      alert("Usuario identificado con éxito 😀");
      localStorage.setItem("token", data.token);
      setUsuario(data.usuario);
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
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
              value={usuario.email}
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
              value={usuario.password}
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
            <button className="bg-blue-700 hover:bg-blue-800 text-2xl text-white px-4 py-3 rounded-lg mb-5" onClick={iniciarSesion}>
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

