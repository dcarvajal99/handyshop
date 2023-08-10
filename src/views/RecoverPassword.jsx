import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'flowbite-react';
import Swal from 'sweetalert2';

const RecoverPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setErrors({ ...errors, email: 'Ingresa un correo electrónico válido' });
      return false;
    }
    setErrors({ ...errors, email: '' });
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail()) {

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Las instrucciones para restablecer tu contraseña se han enviado a tu correo electrónico.',
        showConfirmButton: false,
        timer: 4500
      }).then(() => {
        navigate("/");
      });
    } else {
      console.log('Formulario contiene errores');
    }
  };

  return (
    <form className="h-auto text-center max-w-lg mx-auto rounded-lg bg-gray-50 p-5 mb-10 m-10">
      <label htmlFor="email" className="mb-2 text-2xl text-gray-900">
        Tu correo electrónico:
      </label>
      <input
        type="email"
        id="email"
        aria-describedby="helper-text-explanation"
        className={`bg-gray-50 ml-5 border-gray-300 text-gray-900 text-sm rounded-lg p-4 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          errors.email ? 'border-red-500' : ''
        }`}
        placeholder="nombre@Handyshop.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && (
        <p className="mt-2 font-medium bg-red-300 text-l text-red-500 rounded-lg">{errors.email}</p>
      )}
      <p id="helper-text-explanation" className="mt-2 text-sm text-gray-900 dark:text-gray-400">
        Nunca compartiremos tus detalles. Lee nuestra{' '}
        <a href="#" className="font-medium text-red-900 hover:underline dark:text-blue-500">
          Política de privacidad
        </a>
        .
      </p>
        <Button
          type="submit"
          className="m-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg text-lg sm:w-auto px-5 py-2.5 text-center"
          onClick={handleSubmit}
        >
          Enviar
        </Button>
    </form>
  );
};

export default RecoverPassword;

                