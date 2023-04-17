import React from "react";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "../RecentOrders/Orders";
import Checkout from "../CheckOut/Checkout";
import Filters from "../Products/Filters";

function Layout() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" exact element={<Filters/>} />
          <Route path="/orders" exact element={<Orders />} />
          <Route path="/checkout" exact element={<Checkout />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}

export default Layout;
