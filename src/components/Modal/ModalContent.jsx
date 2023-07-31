import React from 'react';

const ModalContent = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="Modal-overlay p-5 rounded-lg mx-auto bg-gray-600 m-10 relative max-w-sm cursor-pointer">
      {/* Contenido del modal */}
      <div className="bg-white p-6 rounded-lg text-center">
        <h3 className="text-xl m-5 font-medium text-gray-900 dark:text-white">Iniciar Sección:</h3>
        <form className="space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingrese su Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ingrese su Contraseña:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="registro">
            <a href="/register-users" className="text-gray-900 font-medium ">
              Recuperar Contraseña?
            </a>
            <br />
            <a href="/register-users" className="text-gray-900 font-medium ">
              Registrate!!
            </a>
          </div>
        </form>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4" onClick={onClose}>
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default ModalContent;

