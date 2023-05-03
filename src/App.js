import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../src/Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "../src/Components/RecentOrders/Orders";
import Checkout from "../src/Components/CheckOut/Checkout";
import { Box, CircularProgress } from "@mui/material";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const Cart = React.lazy(() => import("./Components/Cart/Cart"));
const Filters = React.lazy(() => import("./Components/Products/Filters"));

function App() {
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFallback(false);
    }, 2000); // 30 seconds

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      fontWeightBold: "600",
    },
    backgroundColor: "#F4F7FE",
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
          <Toaster
            gutter={24}
            toastOptions={{
              className: "",
              style: {
                fontWeight: "500",
                padding: "6px",
                fontSize: "15px",
                backgroundColor: "#43A047",
                color: "white",
              },
            }}
          />
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Suspense>
                  {showFallback ? (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress disableShrink />
                    </Box>
                  ) : (
                    <Filters />
                  )}
                </Suspense>
              }
            />
            <Route
              path="/details"
              exact
              element={
                <Suspense>
                  {showFallback ? (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress disableShrink />
                    </Box>
                  ) : (
                    <ProductDetails />
                  )}
                </Suspense>
              }
            />
            <Route
              path="/orders"
              exact
              element={
                <Suspense>
                  {showFallback ? (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress disableShrink />
                    </Box>
                  ) : (
                    <Orders />
                  )}
                </Suspense>
              }
            />
            <Route
              path="/checkout"
              exact
              element={
                <Suspense>
                  {showFallback ? (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress disableShrink />
                    </Box>
                  ) : (
                    <Checkout />
                  )}
                </Suspense>
              }
            />
            <Route
              path="/cart"
              exact
              element={
                <Suspense>
                  {showFallback ? (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress disableShrink />
                    </Box>
                  ) : (
                    <Cart />
                  )}
                </Suspense>
              }
            />
            <Route path="/products" exact element={<Filters />} />
            <Route path="/checkout" exact element={<Checkout />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
