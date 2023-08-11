import React from 'react';

const Filtros = () => {
    return (
        <section className="flex flex-col md:flex-row gap-3">
            
            <input type="text" id="first_name" 
            class="bg-gray-50 w-full border border-gray-300 h-12 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Electricista..." required/>


                <button type="submit" className="p-2.5 mr-2 mb-2 h-12 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Buscar</button>
            

            
            <select id="pricingType" name="pricingType"
                className="w-full h-10 border-2 border-gray-300 focus:outline-none focus:border-gray-300 text-gray-900 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                <option value="" selected="">Categoria</option>
                <option value="Freemium">Freemium</option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
            </select>
            <select id="pricingType" name="pricingType"
                className="w-full h-10 border-2 border-gray-300 focus:outline-none focus:border-gray-300 text-gray-900 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                <option value="All" selected="">All</option>
                <option value="Freemium">Freemium</option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
            </select>

        </section>
    );
};

export default Filtros;
