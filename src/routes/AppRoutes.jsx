import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Form from "../pages/Form";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Produtos />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
