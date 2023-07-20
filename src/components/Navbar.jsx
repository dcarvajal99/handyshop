import React from 'react';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';

export default function NavbarWithDropdown() {
    return (
        <Navbar fluid rounded >
            <Navbar.Brand href="https://flowbite-react.com">
                <img
                    alt="HandyShop Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/favicon.svg"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    HandyShop
                </span>
            </Navbar.Brand>
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
                        Favoritos
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Subir Servicios
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active href="#">
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    ¿Quienes Somos?
                </Navbar.Link>
                <Navbar.Link href="#">
                    Services
                </Navbar.Link>
                <Navbar.Link href="#">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
