import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterUsers = () => {

  const [usuario, setUsuario] = useState({
    email: '',
    nombre: '',
    apellido: '',
    password: '',
    direccion: '',
    telefono: ''
  });
  const navigate = useNavigate()
  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
    console.log(usuario);
  };

  const registrarUsuario = async () => {
    const urlServer = "http://localhost:3001";
    const endpoint = "/usuarios";
    for (const key in usuario) {
      if (usuario[key] === '') {
        alert(`El campo ${key} es obligatorio`);
        return;
      }
    }
    try {
      await axios.post(urlServer + endpoint, usuario);
      alert("Usuario registrado con éxito");
      navigate("/");
    } catch (error) {
      alert(error.response.data.mensaje);
      console.log(error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-5">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Formulario de registro</h2>
        <form>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="sm:col-span-2">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" name="email"
                id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
              dark:focus:border-primary-500" value={usuario.email} placeholder="ejemplo@handyshop.cl" required=""
                onChange={handleSetUsuario} />
            </div>
            <div className="w-full">
              <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
              <input type="text" name="nombre"
                id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
              dark:focus:border-primary-500" value={usuario.nombre} placeholder="Nombre" required=""
                onChange={handleSetUsuario}
              />
            </div>
            <div className="w-full">
              <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
              <input type="text" name="apellido"
                id="apellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
               dark:focus:border-primary-500" value={usuario.apellido} placeholder="apellido" required=""
                onChange={handleSetUsuario}
              />
            </div>
            <div className="sm:col-span-2">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
              <input type="password" name="password"
                id="contraseña" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
              dark:focus:border-primary-500" value={usuario.password} placeholder="•••••••••" required=""
                onChange={handleSetUsuario}
              />
            </div>
            <div className="sm:col-span-2">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
              <input type="text" name="direccion"
                id="direccion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
              dark:focus:border-primary-500" value={usuario.direccion} placeholder="Dirección" required=""
                onChange={handleSetUsuario}
              />
            </div>
            <div className="sm:col-span-2">
              <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de Telefono</label>
              <input type="tel" id="telefono" name="telefono"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                dark:focus:border-primary-500" value={usuario.telefono} placeholder="912345678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                onChange={handleSetUsuario}
              />
            </div>
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
        </form>
      </div>
    </section>
  );
};

export default RegisterUsers;