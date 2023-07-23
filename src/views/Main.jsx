import React from 'react';
import CarouselMain from '../components/carousel/CarouselMain';
import ContainerCards from '../components/cards/ContainerCards';
import PaginationApp from '../components/pagination/PaginationApp';
import Filtros from '../components/filtros/EstiloFiltro';


const Main = () => {
    return (
        <>
        <CarouselMain />
        <Filtros/>
        <ContainerCards/>
        <PaginationApp/>
        </>
    )
}

export default Main;