import React from 'react';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';
import CartItem from '../cart/CartItem';
import { Link } from 'react-router-dom';
import ModalContent from '../Modal/ModalContent';

export default function NavbarWithDropdown() {
    const { usuario, isModalOpen, handleToggleModal,usuariologeado,handleClickUsuarioLogeado } = useContext(Context);
    
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
           
            {usuariologeado ?

                <div className="flex items-center md:order-2 space-x-5">
                    <Link to={"/carrito"}>
                        🛒
                        <CartItem />
                        {/*{cart.length > 0 ? <CartItem /> : null}*/}
                    </Link>
                    <Dropdown inline label={<Avatar alt="User settings" img={process.env.PUBLIC_URL + '../img/navbar/icon-profile.png'} rounded />} >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {usuario.nombre} {usuario.apellido}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {usuario.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <NavLink to="/micuenta">
                                Mi cuenta
                            </NavLink>
                        </Dropdown.Item>
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
                        <Dropdown.Item onClick={handleClickUsuarioLogeado}>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle/>
                </div>
                : <><Navbar.Toggle /></>
            }
            
            <Navbar.Collapse>
                <NavLink to="/">
                     <p>Inicio</p>
                </NavLink>
                <NavLink to="/quienes-somos">
                    <p>¿Quienes Somos?</p>
                </NavLink>

                {usuariologeado ?
                    <></>
                    :
                    <>
                        <NavLink to="/register-users">
                                Crear Cuenta
                        </NavLink>
                        <div>
                            <button onClick={handleToggleModal}>Iniciar Sesión</button>
                            <ModalContent isOpen={isModalOpen} onClose={handleToggleModal} />
                        </div>
                    </>
                }
                <Link to={"/carrito"}>
                    🛒
                    <CartItem />
                    {/*{cart.length > 0 ? <CartItem /> : null}*/}
                </Link>
            </Navbar.Collapse>
        </Navbar>
    )
}