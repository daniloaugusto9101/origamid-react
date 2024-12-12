import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Cadastro from "../pages/Cadastro";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Produtos />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
