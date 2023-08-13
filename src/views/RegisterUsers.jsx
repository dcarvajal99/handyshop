import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RegisterUsers = () => {
  const PORT = process.env.PORT || 3001;
  const URL = process.env.REACT_APP_BACKEND_URL || `http://localhost:${PORT}`;
  const [isValidEmail, setIsValid] = useState(false);
  const [usuario, setUsuario] = useState({
    email: '',
    nombre: '',
    apellido: '',
    password: '',
    direccion: '',
    telefono: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    nombre: '',
    apellido: '',
    password: '',
    direccion: '',
    telefono: ''
  });

  const navigate = useNavigate();

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    setIsValid(validateEmail(usuario.email));
    const newErrors = {};

    if (!usuario.email) {
      newErrors.email = 'Correo electrónico es requerido';
    } else if (!isValidEmail) {
      newErrors.email = 'Correo electrónico inválido';
    }

    if (!usuario.nombre.trim()) {
      newErrors.nombre = 'Nombre es requerido';
    }

    if (!usuario.apellido.trim()) {
      newErrors.apellido = 'Apellido es requerido';
    }

    if (!usuario.password.trim()) {
      newErrors.password = 'Contraseña es requerida';
    }

    if (!usuario.direccion.trim()) {
      newErrors.direccion = 'Dirección es requerida';
    }

    if (!usuario.telefono.trim()) {
      newErrors.telefono = 'El número de teléfono es requerido';
    }

    return newErrors;
  };


  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const handleKeyPress = (event) => {
    const pattern = /[0-9]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  };

  const registrarUsuario = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const endpoint = "/usuarios";

    try {
      await axios.post(URL + endpoint, usuario);
      Swal.fire(
        '¡Usuario Registrado con Éxito!',
        'Haz Clic para Continuar!',
        'success'
      );
      navigate("/");
    } catch (error) {
      Swal.fire(
        'Error al Registrar Usuario',
        error.response.data.mensaje,
        'error'
      );
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
              {errors.email && <div className="text-red-600 text-s font-medium" >{errors.email}</div>}
            </div>
            <div className="w-full">
              <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
              <input type="text" name="nombre"
                id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
              dark:focus:border-primary-500" value={usuario.nombre} placeholder="Nombre" required=""
                onChange={handleSetUsuario} />
              {errors.nombre && <div className="text-red-600 text-s font-medium">{errors.nombre}</div>}
            </div>
            <div className="w-full">
              <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
              <input type="text" name="apellido"
                id="apellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
               dark:focus:border-primary-500" value={usuario.apellido} placeholder="apellido" required=""
                onChange={handleSetUsuario} />
              {errors.apellido && <div className="text-red-600 text-s font-medium">{errors.apellido}</div>}
            </div>
            <div className="sm:col-span-2">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
              <input type="password" name="password"
                id="contraseña" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
              dark:focus:border-primary-500" value={usuario.password} placeholder="•••••••••" required=""
                onChange={handleSetUsuario} />
              {errors.password && <div className="text-red-600 text-s font-medium">{errors.password}</div>}
            </div>
            <div className="sm:col-span-2">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
              <input type="text" name="direccion"
                id="direccion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
              dark:focus:border-primary-500" value={usuario.direccion} placeholder="Dirección" required=""
                onChange={handleSetUsuario} />
              {errors.direccion && <div className="text-red-600 text-s font-medium">{errors.direccion}</div>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Número de Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={usuario.telefono}
                placeholder="912345678"
                inputMode="numeric"
                pattern="[0-9]{9}"
                required
                onChange={handleSetUsuario}
                onKeyPress={handleKeyPress}
              />
              {errors.telefono && <div className="text-red-600 text-s font-medium">{errors.telefono}</div>}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={registrarUsuario}
            >
              Agregar datos
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterUsers;

