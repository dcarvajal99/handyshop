import React from "react";
import ContainerServiciosFiltradosCard from "../components/Cards/cardFiltrados/ContainerServiciosFiltradosCard";

const ServiciosFiltrados = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-start">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-6xl">
                    Servicios Filtrados:
                </h1>
                <p className="text-gray-800 dark:text-gray-300 md:text-xl">
                    {`Estos son los servicios que coinciden con tu búsqueda:`}
                </p>
                
            </div>
            <ContainerServiciosFiltradosCard />
        </>
    );
    }

export default ServiciosFiltrados;  