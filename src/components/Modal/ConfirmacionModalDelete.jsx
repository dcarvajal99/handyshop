import React, { useState, useContext } from 'react';
import {Modal, Button } from 'flowbite-react';
import HiOutlineExclamationCircle from '@meronex/icons/hi/HiOutlineExclamationCircle';
import Context from '../../context/ContextProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function ConfirmacionModalDelete({id_servicio}) {

  const { usuario,setServicio_eliminado } = useContext(Context);
  const PORT = process.env.PORT || 3001;
  const URL = process.env.REACT_APP_BACKEND_URL || `http://localhost:${PORT}`;
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const navigate = useNavigate();

  const handleClickDelete = async (id) => {
    const endpoint = `/servicios/${usuario.id_usuario}/${id}`;
    try {
      const data = await axios.delete(URL + endpoint, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      Swal.fire(
        '¡Servicio Eliminado con Éxito!',
        'Haz Clic para Continuar!',
        'success'
      );
      navigate(`/micuenta`);
    } catch ({ response: { data: mensaje } }) {
      alert(mensaje + " 🙁");
    }
  };


  

  
  return (
    <>
      <button onClick={() => props.setOpenModal('pop-up')} className={`text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
                                focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ""
                                `}>Eliminar</button>
      <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => {handleClickDelete(id_servicio);
                props.setOpenModal(undefined);}}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => {props.setOpenModal(undefined); }}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}