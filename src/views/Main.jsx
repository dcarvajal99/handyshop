import React from 'react';
import CarouselMain from '../components/carousel/CarouselMain';
import ContainerCards from '../components/Cards/ContainerCards';
import PaginationApp from '../components/Pagination/PaginationApp';

const Main = () => {
    return (
        <>
        <CarouselMain />
        <ContainerCards/>
        <PaginationApp/>
        </>
    )
}

export default Main;