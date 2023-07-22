import React from 'react';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';

export default function NavbarWithDropdown() {
    const [active, setActive] = React.useState(false);
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
            
            {/* <NavLink to="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        HandyShop
                    </span>
                </NavLink> */}
                <button type="submit" className=" px-5 py-2.5 sm:mt-6 text-sm font-medium text-center text-dark bg-gray-400 rounded-lg focus:ring-4 focus:ring-primary-200">
                    Agregar Servicio
                </button>
            {usuarios.nombre ?
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
                <NavLink to="/quienes-somos">
                    ¿Quienes Somos?
                </NavLink>
                {
                    usuarios.nombre === undefined ?
                        <NavLink to="/login">
                            Login
                        </NavLink>
                        :
                        <></>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}
