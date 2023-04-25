import React from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "../src/Components/RecentOrders/Orders";
import Checkout from "../src/Components/CheckOut/Checkout";
import Filters from "../src/Components/Products/Filters";
import { Box } from "@mui/material";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "#F4F7FE",
          fontFamily: "Poppins, sans-serif",
          height: "90vh",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Filters />} />
          <Route path="/orders" exact element={<Orders />} />
          <Route path="/checkout" exact element={<Checkout />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
