import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import Nopage from "./pages/nopage/Nopage";
import Mystate from "././context/data/myState";

const App = () => {
  return (
    <>
      <Mystate>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Nopage />} />
            {/* <Route path="" element /> */}
          </Routes>
        </Router>
      </Mystate>
    </>
  );
};

export default App;
