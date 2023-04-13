import {
  AppBar,
  Box,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Transition from "../../Assets/Transition.png";

const navItems = [
  "Products",
  "Product Detail",
  "Orders",
  "Cart",
  "Checkout",
  "Confirmation",
];
function Navbar() {
  return (
    <Container>
      <AppBar sx={{ backgroundColor: "transparent" }}>
        <Toolbar sx={{display:'flex',justifyContent:"space-between"}}>
            <Link href="/">
            <Box
              component="img"
              alt="img"
              sx={{ height: 40 }}
              src={Transition}
            ></Box>
            </Link>
            <Box>
              {navItems.map((items) => (
                <Link
                  sx={{
                    mr: 3,
                    my: 2,
                    fontSize:'17px',
                    cursor: "pointer",
                    color:'Black',
                    textDecoration: "none",
                  }}
                >
                  {items}
                </Link>
              ))}</Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Navbar;
