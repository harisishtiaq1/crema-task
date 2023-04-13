import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Products from "../Products/Products"
import React from "react";
import Transition from "../../Assets/Transition.png";
const drawerWidth = 200;
const navItems = [
  "Products",
  "Product Detail",
  "Orders",
  "Cart",
  "Checkout",
  "Confirmation",
];
function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Box
          component="img"
          alt="img"
          sx={{ height: 35, mt: 1 }}
          src={Transition}
        ></Box>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{backgroundColor:"#F4F7FE"}}>
      <AppBar sx={{ background: "transparent" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="/">
            <Box
              component="img"
              alt="img"
              sx={{ height: 40 }}
              src={Transition}
            ></Box>
          </Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((items, index) => (
              <Link
                key={index}
                sx={{
                  mr: 3,
                  my: 2,
                  fontSize: "17px",
                  cursor: "pointer",
                  color: "Black",
                  textDecoration: "none",
                  fontFamily: " Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                {items}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="permanent"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Products/>
      </Box>
  );
}

export default Navbar;
