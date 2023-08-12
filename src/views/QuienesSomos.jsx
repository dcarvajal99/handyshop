import React from "react";
import ContainerLittleCard from "../components/Cards/littlecards/ContainerLittleCards";

const QuienesSomos = () => {
    return (

        <>
            <div className="flex flex-col items-center justify-start">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">¿Quienes somos?</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">                    Somos una página dedicada a la venta de servicios indispensables tanto para hogares como servicios básicos.</p>
                <p  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Ver más
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </p>
                
            </div>
            <ContainerLittleCard />
        </>
    );
}

export default QuienesSomos;
