import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Forms from "../pages/Forms";
import Forms2 from "../pages/Forms2";
import Forms3 from "../pages/Forms3";
import Forms4 from "../pages/Forms4";
import Forms5 from "../pages/Forms5";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Produtos />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/forms2" element={<Forms2 />} />
        <Route path="/forms3" element={<Forms3 />} />
        <Route path="/forms4" element={<Forms4 />} />
        <Route path="/forms5" element={<Forms5 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
