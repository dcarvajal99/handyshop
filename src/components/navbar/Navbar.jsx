import React from 'react';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';

export default function NavbarWithDropdown() {
     const { usuarios } = useContext(Context);
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
            { <NavLink to="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        HandyShop
                    </span>
                </NavLink> }
                    {/* ...otros contenidos de la aplicación... */}
            {usuarios.nombre?
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
                        Home
                    </p>
                </NavLink>
                <NavLink to="/quienes-somos">
                    ¿Quienes Somos?
                </NavLink>
                    {usuarios.nombre === undefined ?
                        <NavLink to="/login">
                            Login
                        </NavLink>
                        :
                        <></>
                    }
            </Navbar.Collapse>
            <div >
                <NavLink to="/register-users">
                    <button type="button" class="text-white bg-green-700 font-medium mr-2 rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600">Crear Cuenta</button>
                </NavLink>
                <NavLink to="/form-elements">
                    <button type="button" class="text-white bg-green-700 font-medium mr-2 rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600">Iniciar Seción</button>
                </NavLink>
                
            </div>

            
        </Navbar>
    )
}
