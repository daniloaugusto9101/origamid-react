import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Cadastro from "../pages/Cadastro";
import Compras from "../pages/Compras";
import FormValidate from "../components/FormValidate/FormValidate";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Produtos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/formValidate" element={<FormValidate />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
