import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Footer } from 'flowbite-react';

const FooterApp = () => {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            alt="Logo"
                            href="#"
                            name="HS"
                            src={process.env.PUBLIC_URL + '../img/logo/logo.gif'}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Nosotros" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    HandyShop
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Nosotros
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Centro de ayuda" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Ayuda
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Soporte
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Contacto corporativo
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Trabaja con nosotros
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Políticas de privacidad
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terminos y Condiciones
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Consejos de seguridad
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Reglas
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        by="HandyShop™"
                        href="#"
                        year={new Date().getFullYear()}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="#"
                            icon={BsFacebook}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsInstagram}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsTwitter}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsGithub}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsDribbble}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterApp;
