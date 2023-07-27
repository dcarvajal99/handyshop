import React from 'react';
import { Button, Label } from 'flowbite-react';

const ModalContent = ({ email, setEmail, closeModal }) => {
  return (
    <div className="Modal-overlay p-5 rounded-lg mx-auto bg-green-600 m-10 relative max-w-sm cursor-pointer">
      <div className="Modal text-center">
        <h3 className="text-xl m-5 font-medium text-gray-900 dark:text-white">Iniciar Sección en Nuestra Plataforma</h3>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email">Your email</Label>
          </div>
          <input
            id="email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password">Your password</Label>
          </div>
          <input id="password" type="password" required />
        </div>
        <div className="flex justify-between m-5">
          <div className="flex items-center gap-2">
            <input id="remember" type="Checkbox" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <a href="/Modal" className="text-gray-900">
            Contraseña Perdida?
          </a>
        </div>
        <div className="inline-flex items-center m-10">
          <Button onClick={closeModal}>Log in to your account</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
