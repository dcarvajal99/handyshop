import React from 'react';
import { useContext } from 'react';
import Context from '../../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import LittleCard from './LittleCard';

const ContainerLittleCard = () => {
  const { servicios } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <LittleCard />
    </div>
  );
};

export default ContainerLittleCard;

/* {servicios.map((servicio) => (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      key={servicio.id}
    >
    </div>
  ))} */