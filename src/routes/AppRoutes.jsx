import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
