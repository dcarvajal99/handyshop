import React, { useState } from 'react';
import { Modal, Button } from 'flowbite-react';
import axios from 'axios';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Filtros = () => {

    const { URL, setServiciosFiltrados } = useContext(Context);
    const [openModal, setOpenModal] = useState();
    const navigate = useNavigate();

    const [filtro, setFiltro] = useState({
        categoria: "",
        monto_min: "",
        monto_max: "",
        region: "",
    });
    const deleteData = () => {
        setFiltro({
            categoria: "",
            monto_min: "",
            monto_max: "",
            region: "",
        });
    };

    const handdleSetFiltro = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setFiltro({ ...filtro, ...field });
    };



    const obtenerFiltro = async () => {

        const parametrosNoVacios = Object.keys(filtro)
            .filter(key => filtro[key] !== "") // Filtrar los valores no vacíos
            .map(key => `${key}=${encodeURIComponent(filtro[key])}`) // Codificar los valores para la URL
            .join("&"); // Concatenar con el símbolo "&"

        const endpoint = `/servicios/filter?${parametrosNoVacios}`;
        if (endpoint === "/servicios/filter?") {
            return Swal.fire(
                'Oooops!',
                `Debe contener Al menos un filtro para poder buscar`,
                'warning'
            )
        }
        try {
            const { data } = await axios.get(URL + endpoint,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            setServiciosFiltrados(data);
            navigate("/filtro")
        } catch ({ response: { data: mensaje } }) {
            alert(mensaje);
        }
    };
    return (
        <div className="bg-white p-4 md:p-0">
            <div className="hidden md:flex flex-col md:flex-row md:items-center md:justify-center p-4 m-4 space-x-2 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div className="hidden md:flex w-full md:w-72 space-x-4">
                    <input id="search1" name="search1" className="px-4 py-2 w-full rounded-lg" type="text" placeholder="Busqueda avanzada pronto..." disabled />
                </div>
                <div className="hidden md:flex px-4 py-2 text-gray-500 font-semibold cursor-pointer">
                    <select id="categoria" name="categoria" className="py-2 px-3 rounded-lg text-gray-500 font-semibold cursor-pointer"
                        value={filtro.categoria}
                        onChange={handdleSetFiltro}>
                        <option value="">Seleccione una Categoria</option>
                        <option>Hogar</option>
                        <option>Mano de obra</option>
                        <option>Cuidado personal</option>
                        <option>Industrial</option>
                        <option>Transporte</option>
                        <option>Otros</option>
                    </select>
                </div>
                <div className="hidden md:flex w-full md:w-72 space-x-4">
                    <input id="monto_min" name="monto_min" className="px-4 py-2 w-full rounded-lg" type="number" placeholder="Monto mínimo"
                        value={filtro.monto_min}
                        onChange={handdleSetFiltro} />
                </div>
                <div className="hidden md:flex w-full md:w-72 space-x-4">
                    <input id="monto_max" name="monto_max" className="px-4 py-2 w-full rounded-lg" type="number" placeholder="Monto máximo"
                        value={filtro.monto_max}
                        onChange={handdleSetFiltro} />
                </div>
                <div className="hidden md:flex px-4 py-2 text-gray-500 font-semibold cursor-pointer">
                    <select id="region" name="region" className="py-2 px-3 rounded-lg text-gray-500 font-semibold cursor-pointer"
                        value={filtro.region}
                        onChange={handdleSetFiltro}>
                        <option value="">Seleccione una región</option>
                        <option value="Metropolitana">Metropolitana</option>
                        <option value="Valparaiso">Valparaíso</option>
                        <option value="Biobio">Biobío</option>
                    </select>
                </div>
                <div className="hidden md:flex md:text-white md:bg-blue-700 md:hover:bg-blue-800 md:focus:ring-4 md:focus:outline-none md:focus:ring-blue-300 md:font-medium md:rounded-lg md:text-sm md:px-4 md:py-2 md:text-center md:dark:bg-blue-600 md:dark:hover:bg-blue-700 md:dark:focus:ring-blue-800">
                    <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
              text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800"
                        onClick={() => obtenerFiltro()}
                    >Buscar</p>
                    {/* <Button
                        onClick={() => { obtenerFiltro() }}
                    >Buscar</Button> */}
                </div>
            </div>
            <div className="md:hidden flex flex-row items-center justify-center">
                <Button onClick={() => { setOpenModal('pop-up'); deleteData() }} className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg">Aplicar filtros y búsqueda</Button>
            </div>
            <Modal show={openModal === 'pop-up'} size="sm" popup onClose={() => { setOpenModal(undefined); deleteData() }}>
                <Modal.Header />
                <Modal.Body>
                    <div className="flex flex-col items-center justify-center p-4 m-4 space-x-2 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                        <div className="px-4 py-2 w-full rounded-lg">
                            <input id="search" name="search" className="px-4 py-2 w-full rounded-lg" type="text" placeholder="Busqueda avanzada pronto..." disabled />
                        </div>
                        <div className="flex px-4 py-2 text-gray-500 font-semibold cursor-pointer">
                            <select id="categoria" name="categoria" className="py-2 px-3 rounded-lg text-gray-500 font-semibold cursor-pointer"
                                value={filtro.categoria}
                                onChange={handdleSetFiltro}>
                                <option value="">Seleccione una Categoria</option>
                                <option>Hogar</option>
                                <option>Mano de obra</option>
                                <option>Cuidado personal</option>
                                <option>Industrial</option>
                                <option>Transporte</option>
                                <option>Otros</option>
                            </select>
                        </div>
                        <div className="px-4 py-2 flex w-full md:w-72 space-x-4">
                            <input id="monto_min" name="monto_min" className="px-4 py-2 w-full rounded-lg" type="number" placeholder="Monto mínimo"
                                value={filtro.monto_min}
                                onChange={handdleSetFiltro} />
                        </div>
                        <div className="px-4 py-2 flex w-full md:w-72 space-x-4">
                            <input id="monto_max" name="monto_max" className="px-4 py-2 w-full rounded-lg" type="number" placeholder="Monto máximo"
                                value={filtro.monto_max}
                                onChange={handdleSetFiltro} />
                        </div>
                        <div className="flex px-4 py-2 text-gray-500 font-semibold cursor-pointer">
                            <select id="region" name="region" className="py-2 px-3 rounded-lg text-gray-500 font-semibold cursor-pointer"
                                value={filtro.region}
                                onChange={handdleSetFiltro}>
                                <option value="">Seleccione una región</option>
                                <option value="Metropolitana">Metropolitana</option>
                                <option value="Valparaiso">Valparaíso</option>
                                <option value="Biobio">Biobío</option>
                            </select>
                        </div>
                        <div className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                            <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
              text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800"
                                onClick={() => obtenerFiltro()}
                            >Buscar</p>
                            {/* <Button onClick={() => { obtenerFiltro() }}>Buscar</Button> */}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Filtros;



{/* <div className="bg-white flex justify-center items-center p-4 md:p-0">
<div className="md:flex md:flex-col md:items-center md:justify-center md:p-4 md:m-4 md:space-x-2 bg-white md:rounded-xl md:shadow-lg md:hover:shadow-xl md:transform md:hover:scale-105 md:transition md:duration-500">
    <div className="flex flex-col md:flex-row md:items-center md:justify-center p-4 m-4 space-x-2 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
        <div className="flex bg-white w-full md:w-72 space-x-4 rounded-lg">
            <input className="bg-white outline-white px-5 py-2.5 rounded-lg w-full md:w-72" type="text" placeholder="Article name or keyword..." />
        </div>
        <div className="flex px-5 py-2.5 rounded-lg text-gray-500 font-semibold cursor-pointer">
            <select id="pricingType" name="pricingType" className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                <option value="All" selected="">Categorias</option>
                <option value="Freemium">Freemium</option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
            </select>
        </div>
        <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <span>Search</span>
        </div>
    </div>
</div>
<Button className="md:hidden bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg" onClick={openModal}>Open Filters</Button>
<Modal isOpen={modalIsOpen} onClose={closeModal} position="top" className="modal">
    <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Search and Filters</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center p-4 m-4 space-x-2 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex bg-white w-full md:w-72 space-x-4 rounded-lg">
                <input className="bg-white outline-white px-5 py-2.5 rounded-lg w-full md:w-72" type="text" placeholder="Article name or keyword..." />
            </div>
            <div className="flex px-5 py-2.5 rounded-lg text-gray-500 font-semibold cursor-pointer">
                <select id="pricingType" name="pricingType" className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                    <option value="All" selected="">Categorias</option>
                    <option value="Freemium">Freemium</option>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                </select>
            </div>
            <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <span>Search</span>
            </div>
        </div>
        <Button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg mt-4" onClick={closeModal}>Close Modal</Button>
    </div>
</Modal>
</div> */}

/* <section className="flex flex-col md:flex-row gap-3">
            
            <input type="text" id="first_name" 
            className="bg-gray-50 w-full border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Electricista..." required/>


                <button type="submit" className="p-2.5 mr-2 mb-2 h-12 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Buscar</button>
            

            
            <select id="pricingType" name="pricingType"
                className="w-full h-10 border-2 border-gray-300 focus:outline-none focus:border-gray-300 text-gray-900 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                <option value="All" selected="">All</option>
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

        </section> */