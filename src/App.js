import React from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "../src/Components/RecentOrders/Orders";
import Checkout from "../src/Components/CheckOut/Checkout";
import Filters from "../src/Components/Products/Filters";
import { Box } from "@mui/material";
import Cart from "./Components/Cart/Cart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: "#F4F7FE",
            height: "90vh",
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Filters />} />
            <Route path="/details" exact element={<ProductDetails />} />
            <Route path="/orders" exact element={<Orders />} />
            <Route path="/checkout" exact element={<Checkout />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/products" exact element={<Filters />} />
            <Route path="/checkout" exact element={<Checkout />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
