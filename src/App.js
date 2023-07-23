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


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ContextProvider>
        <NavbarWithDropdown />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/subir-servicios" element={<SubirServicios />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <FooterApp />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
