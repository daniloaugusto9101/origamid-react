import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Forms from "../pages/Forms";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Produtos />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
