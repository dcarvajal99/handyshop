import React from 'react';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function NavbarWithDropdown() {
    const [active, setActive] = React.useState(false);

    return (
        <Navbar fluid rounded >
            <Navbar.Brand  >

                    <img
                        alt="HandyShop Logo"
                        className="mr-3 h-6 sm:h-9"
                        src="/favicon.svg"
                    />
            </Navbar.Brand>
                {/* <NavLink to="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        HandyShop
                    </span>
                </NavLink> */}
            
            <div className="flex md:order-2">
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
            <Navbar.Collapse>
                <NavLink to="/">
                    <p>
                        Home
                    </p>
                </NavLink>
                <NavLink to="/quienes-somos">
                    ¿Quienes Somos?
                </NavLink>
                <Navbar.Link>
                    Services
                </Navbar.Link>
                <Navbar.Link>
                    Pricing
                </Navbar.Link>
                <Navbar.Link>
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
