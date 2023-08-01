import React from "react";
import ContainerFavCards from "../components/Cards/favcards/ContainerFavCards";

const Favoritos = () => {
 
    return (
        <>
            <div className="flex flex-col items-center justify-start">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-6xl">
                    Favoritos
                </h1>
                <p className="text-gray-800 dark:text-gray-300 md:text-xl">
                    Aquí se mostrarán tus favoritos
                </p>
                
            </div>
            <ContainerFavCards />

        </>
    );
    }

export default Favoritos;  