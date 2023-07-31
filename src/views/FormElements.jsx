import React, { useState } from 'react';
import ModalContent from '../components/Modal/ModalContent';

const FormElements = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
    <span onClick={toggleModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
        MOdal-PrUeba
      </span>
      {openModal && (
        <ModalContent
          email={email}
          setEmail={setEmail}
          closeModal={toggleModal} // Pasa la función toggleModal para cerrar el modal
        />
      )}
    </>
  );
};

export default FormElements;
