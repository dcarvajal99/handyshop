import React from "react";
import DetailsServices from "../components/detailsServices/DetailsServices";
import Cart from "../components/cart/Cart";
import ContratoExitoso from "../components/contratoExitoso/ContratoExitoso";
const Favoritos = () => {
    return (
        <>
       <ContratoExitoso />
       <DetailsServices />
       <Cart />
        </>
    );
    }

export default Favoritos;