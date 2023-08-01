import React, { useState } from 'react';
import ModalContent from '../components/Modal/ModalContent'; // Asegúrate de que la ruta del archivo sea correcta

const SignInModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={handleToggleModal}>Iniciar Sesión xd</button>
      <ModalContent isOpen={isModalOpen} onClose={handleToggleModal} />
    </div>
  );
};

export default SignInModal;