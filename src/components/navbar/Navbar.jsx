import React from 'react';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';

export default function NavbarWithDropdown() {
    const { usuarios } = useContext(Context);

    let temporal = undefined;
    /*let temporal = usuarios.nombre;*/

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
            {temporal === undefined ?
                <></>
                :
                <div className="flex md:order-1">
                    <Dropdown inline label={<Avatar alt="User settings" img={process.env.PUBLIC_URL + '../img/navbar/icon-profile.png'} rounded />} >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {usuarios.nombre} {usuarios.apellido}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {usuarios.email}
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
                </div>
            }
            <Navbar.Toggle />
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
                        <NavLink to="/sign-in">
                            Iniciar sesión
                        </NavLink>

                    </>
                    :
                    <></>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}