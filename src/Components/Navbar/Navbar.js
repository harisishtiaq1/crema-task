import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import React from "react";
import Transition from "../../Assets/Transition.png";
const drawerWidth = 200;

const navItems = ["Products","ProductDetails","Orders", "Checkout", "Cart"];
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
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={item.name}
                sx={{
                  "&:hover": {
                    color: "black",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ backgroundColor: "#F4F7FE", fontFamily: "Poppins, sans-serif" }}
      >
        <AppBar sx={{ background: "white" }}>
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
              <Link
                href="/"
                sx={{
                  mr: 3,
                  my: 2,
                  fontSize: "17px",
                  cursor: "pointer",
                  color: "black",
                  textDecoration: "none",
                  fontFamily: " Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Products
              </Link>
              <Link
                href="/details"
                sx={{
                  mr: 3,
                  my: 2,
                  fontSize: "17px",
                  cursor: "pointer",
                  color: "black",
                  textDecoration: "none",
                  fontFamily: " Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Product Details
              </Link>
              <Link
                href="/orders"
                sx={{
                  mr: 3,
                  my: 2,
                  fontSize: "17px",
                  cursor: "pointer",
                  color: "black",
                  textDecoration: "none",
                  fontFamily: " Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Orders
              </Link>
              <Link
                href="/checkout"
                sx={{
                  mr: 3,
                  my: 2,
                  fontSize: "17px",
                  cursor: "pointer",
                  color: "black",
                  textDecoration: "none",
                  fontFamily: " Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                CheckOut
              </Link>
              <Link
                href="/cart"
                sx={{
                  mr: 3,
                  my: 2,
                  fontSize: "17px",
                  cursor: "pointer",
                  color: "black",
                  textDecoration: "none",
                  fontFamily: " Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Cart
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
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
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
