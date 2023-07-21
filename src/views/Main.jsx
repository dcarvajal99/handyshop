import React from 'react';
import NavbarWithDropdown from '../components/Navbar';
import CarouselMain from '../components/CarouselMain';
import ContainerCards from '../components/cards/ContainerCards';
import FooterApp from '../components/Footer';
import PaginationApp from '../components/PaginationApp';
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