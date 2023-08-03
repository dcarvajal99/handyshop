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
import FormElements from "./views/FormElements";
import RecoverPassword from "./views/RecoverPassword";
import ContratoExitoso from "./components/contratoExitoso/ContratoExitoso";
import Micuenta from "./views/Micuenta";


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ContextProvider>
        <NavbarWithDropdown />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/subir-servicios" element={<SubirServicios />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/service-detail/:id" element={<ServiceDetail />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/register-users" element={<RegisterUsers />} />
          <Route path="/form-elements" element={<FormElements />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/contratoexitoso" element={<ContratoExitoso />} />
          <Route path="/micuenta" element={<Micuenta />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <FooterApp />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
