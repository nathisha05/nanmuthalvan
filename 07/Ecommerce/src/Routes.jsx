<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./Home";
import Product from "./Product";
import Navbar from "./Navbar";
import AllComponents from './AllComponent'
export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="buyer" element={<AllComponents />}>
          <Route index element={<Example />} />
          <Route path="pro" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
=======
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./Home";
import Product from "./Product";
import Navbar from "./Navbar";
import AllComponents from './AllComponent'
export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="buyer" element={<AllComponents />}>
          <Route index element={<Example />} />
          <Route path="pro" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> 846b000 (Success)
