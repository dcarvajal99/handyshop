import React from 'react';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';
import CartItem from '../cart/CartItem';
import { Link } from 'react-router-dom';
import ModalContent from '../Modal/ModalContent';
import { useNavigate } from 'react-router-dom';

export default function NavbarWithDropdown() {

    const { usuario, isModalOpen, handleToggleModal, usuariologeado, setUsuariologeado, setUsuario,setCart } = useContext(Context);
    const navigate = useNavigate();
    //funcion para que cuando se presione el boton log out se cierre la sesion y borre los datos del usuario en el local storage , estado y contexto
    const handleClickUsuarioLogOut = () => {
        setUsuariologeado(!usuariologeado);
        localStorage.removeItem('usuario');
        setCart([]);
        localStorage.removeItem('carrito');
        setUsuario({});
        navigate('/');
    }


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
                        <Dropdown.Item onClick={handleClickUsuarioLogOut} >
                            Cerrar Sesión
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                : <>
                    <div className="flex items-center md:order-2 space-x-5">
                        <Link to={"/carrito"}>
                            🛒
                            <CartItem />
                            {/*{cart.length > 0 ? <CartItem /> : null}*/}
                        </Link>
                        <Navbar.Toggle />
                    </div>
                </>
            }

            <Navbar.Collapse>

                <NavLink to="/">
                    <p>Inicio</p>
                </NavLink>
                <NavLink to="/quienes-somos">
                    <p>¿Quienes Somos?</p>
                </NavLink>
                <NavLink to="/contacto">
                    <p>Contacto</p>
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

            </Navbar.Collapse>
        </Navbar>
    )
}