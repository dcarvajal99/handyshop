import Main from "./views/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarWithDropdown from "./components/navbar/Navbar";
import Favoritos from "./views/Favoritos";
import SubirServicios from "./views/SubirServicios";
import QuienesSomos from "./views/QuienesSomos";
import { ContextProvider } from "./context/ContextProvider";
import FooterApp from "./components/footer/Footer";
import ServiceDetail from "./views/ServiceDetail";
import Carrito from "./views/Carrito";
import RegisterUsers from "./views/RegisterUsers";
import RecoverPassword from "./views/RecoverPassword";
import ContratoExitoso from "./components/contratoExitoso/ContratoExitoso";
import Micuenta from "./views/Micuenta";
import EditarServicios from "./views/EditarServicios";
import NotFoundPage from "./views/NotFoundPage";
import ServiciosFiltrados from "./views/ServiciosFiltrados";
import Contacto from "./views/Contacto";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ContextProvider>
        <NavbarWithDropdown />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/subir-servicios" element={<SubirServicios />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/service-detail/:id" element={<ServiceDetail />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/register-users" element={<RegisterUsers />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/contratoexitoso/:id" element={<ContratoExitoso />} />
          <Route path="/micuenta" element={<Micuenta />} />
          <Route path="/editar-servicios/:id" element={<EditarServicios />} />
          <Route path="/filtro" element={<ServiciosFiltrados />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FooterApp />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
