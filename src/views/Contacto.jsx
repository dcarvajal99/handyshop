import React from 'react';


const Contacto = () => {
  return (
    <><div className="flex flex-col items-center justify-start">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto  text-center lg:py-16 z-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Contáctanos</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Estamos aquí para responder tus preguntas. ¡No dudes en ponerte en contacto con nosotros!</p>
          <form className="w-full max-w-md mx-auto">
            <label for="name" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Nombre</label>
            <input type="text" id="name" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tu nombre" required />

            <label for="email" className="mt-4 mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email</label>
            <input type="email" id="email" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tu email" required />

            <label for="message" className="mt-4 mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Mensaje</label>
            <textarea id="message" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows="4" placeholder="Escribe tu mensaje aquí" required></textarea>

            <button type="submit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar mensaje</button>
          </form>
        </div>
      </section></div>
    </>
  );
};

export default Contacto;