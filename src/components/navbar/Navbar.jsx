import React from 'react';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import Context from '../../context/ContextProvider';

export default function NavbarWithDropdown() {
     const { usuarios } = useContext(Context);
     const [openModal, setOpenModal] = useState(false);

     const toggleModal = () => {
     setOpenModal(!openModal);
      };

     let temporal = undefined;
    /* let usuarios = undefined; */
    return (
        <Navbar fluid rounded >
            <Navbar.Brand  >
                <img
                    alt="HandyShop Logo"
                    className="mr-3 h-6 sm:h-9"
                    src={process.env.PUBLIC_URL + '../img/logo/logo.gif'}
                />
            </Navbar.Brand>
                    {/* ...otros contenidos de la aplicación... */}
            {temporal?
                <div className="flex md:order-1">
                    <Dropdown inline label={<Avatar alt="User settings" img={process.env.PUBLIC_URL + '../img/navbar/icon-profile.png'} rounded />} >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                UserTest
                            </span>
                            <span className="block truncate text-sm font-medium">
                                test@test.cl
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <NavLink to="/favoritos">
                                Favoritos
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <NavLink to="/subir-servicios">
                                Subir Servicios
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                :
                <></>
            }

            <Navbar.Collapse>
                <NavLink to="/">
                    <p>
                        Inicio
                    </p>
                </NavLink>
                <NavLink to="/quienes-somos">
                    ¿Quienes Somos?
                </NavLink>
                    {temporal === undefined ?
                    <>
                        <NavLink to="/register-users">
                        Crear Cuenta
                        </NavLink>
                        <NavLink to="/model-content">
                        <p onClick={toggleModal}>Iniciar Sesión</p> {/* Usamos onClick para llamar a toggleModal */}
                        </NavLink>
                    </>
                        :
                        <></>
                    }
            </Navbar.Collapse>
 </Navbar>
    )
}