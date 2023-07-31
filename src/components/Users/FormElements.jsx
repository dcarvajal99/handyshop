import React, { useState } from 'react';
import { Label } from 'flowbite-react';

const ModalContent = ({ email, setEmail, closeModal }) => {
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar tu lógica de validación personalizada
    if (email === '' || password === '') {
      alert('Por favor, completa todos los campos');
    } else if (!email.includes('@')) {
      alert('Por favor, ingresa un correo electrónico válido');
    } else if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
    } else {
      // Si los campos son válidos, puedes enviar el formulario aquí
      // Por ejemplo, puedes llamar a una función que procese los datos
      console.log('Formulario enviado');
    }
  };

  return (
    <div className="Modal-overlay p-5 rounded-lg mx-auto bg-gray-600 m-10 relative max-w-sm cursor-pointer">
      <div className="Modal text-center">
        <h3 className="text-xl m-5 font-medium text-gray-900 dark:text-white">Iniciar Sección en Nuestra Plataforma</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email">Your email</Label>
            </div>
            <input
              id="email"
              type="email"
              placeholder="name@handyshop.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Your password</Label>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>
          <div className="flex justify-between m-5">
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a href="/Modal" className="text-gray-900">
              Contraseña Perdida?
            </a>
          </div>
          <button
            type="submit"
            className="text-white bg-red-900 font-medium rounded-xl text-xl w-auto p-5 m-3 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalContent;
