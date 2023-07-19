import React from 'react';
import NavbarWithDropdown from '../components/Navbar';
import CarouselMain from '../components/CarouselMain';
import ProductCard from '../components/Cards/Card';
const Main = () => {
    return (
        <>
        <NavbarWithDropdown />

        <CarouselMain />
        <ProductCard/>
        </>
    )
}

export default Main;