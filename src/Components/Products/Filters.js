import {
  Box,
  Checkbox,
  Collapse,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import Products from "./Products";
import { ExpandMore } from "@mui/icons-material";
const thumbStyle = {
  backgroundColor: "#888",
  borderRadius: "6px",
  cursor: "pointer",
  width: "4px",
  height: "5px",
};

function Filters() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [value, setValue] = useState([50, 400]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ mt: 8, ml: 3 }}>
      <Stack sx={{ mt: 4 }}>
        <Box position="static" sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "17px" }}>
            Products
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Scrollbars
              style={{ width: 300, height: 500 }}
              autoHide={true}
              renderThumbVertical={({ style, ...props }) => (
                <div {...props} style={{ ...style, ...thumbStyle }} />
              )}
            >
              <Paper
                sx={{
                  width: 300,
                  padding: "15px",
                  borderRadius: "16px",
                  fontFamily: " Poppins, sans-serif",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    ml: 3,
                  }}
                >
                  Filter By
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "grey",
                    fontSize: "15px",
                    ml: 3,
                  }}
                >
                  CATEGORIES
                </Typography>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 200,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItemButton onClick={handleClick}>
                    {open ? (
                      <ExpandMore />
                    ) : (
                      <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
                    )}
                    <ListItemText
                      sx={{ fontSize: "12px", ml: 3, color: "grey" }}
                      primary="Watches"
                    />
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton
                        sx={{ pl: 4, width: "200px", ml: 6, color: "grey" }}
                      >
                        <ListItemText primary="Mens Watches" />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ pl: 4, width: "200px", ml: 6, color: "grey" }}
                      >
                        <ListItemText primary="Women Watches" />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ pl: 4, width: "200px", ml: 6, color: "grey" }}
                      >
                        <ListItemText primary="Kids Watches" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
                <Divider variant="middle" sx={{ mt: 2 }} />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "grey",
                    fontSize: "15px",
                    ml: 3,
                    mt: 3,
                  }}
                >
                  Price
                </Typography>
                <Box
                  sx={{
                    width: 230,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                
                  <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={500}
                  />
                  <Typography sx={{position:"absolute",left:10,bottom:120}}>{`$${value[0]}`}</Typography>
                  <Typography sx={{position:"absolute",right:40,bottom:120}}>{`$${value[1]}`}</Typography>
                  
                </Box>
                <Divider variant="middle" sx={{ mt: 2 }} />
                <Typography
                  sx={{
                    color: "grey",
                    fontSize: "15px",
                    ml: 3,
                    mt: 3,
                  }}
                >
                  BRAND
                </Typography>
                <FormGroup
                  sx={{
                    ml: 3,
                    color: "grey",
                    fontFamily: " Poppins, sans-serif",
                  }}
                >
                  <FormControlLabel control={<Checkbox />} label="Fast Track" />
                  <FormControlLabel control={<Checkbox />} label="Titan" />
                  <FormControlLabel control={<Checkbox />} label="Casio" />
                  <FormControlLabel control={<Checkbox />} label="Sonata" />
                </FormGroup>
                <Divider variant="middle" sx={{ mt: 2 }} />
                <Typography
                  sx={{
                    color: "grey",
                    fontSize: "15px",
                    ml: 3,
                    mt: 3,
                  }}
                >
                  IDEAL FOR
                </Typography>
                <FormGroup
                  sx={{
                    ml: 3,
                    color: "grey",
                    fontFamily: " Poppins, sans-serif",
                  }}
                >
                  <FormControlLabel control={<Checkbox />} label="Men" />
                  <FormControlLabel control={<Checkbox />} label="Women" />
                  <FormControlLabel control={<Checkbox />} label="Couple" />
                  <FormControlLabel control={<Checkbox />} label="All" />
                </FormGroup>
                <Divider variant="middle" sx={{ mt: 2 }} />
                <Typography
                  sx={{
                    color: "grey",
                    fontSize: "15px",
                    ml: 3,
                    mt: 3,
                  }}
                >
                  DISCOUNT
                </Typography>
                <FormGroup
                  sx={{
                    ml: 3,
                    color: "grey",
                    fontFamily: " Poppins, sans-serif",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="60% or more"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="50% or more"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="40% or more"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="30% or more"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="20% or more"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="10% or more"
                  />
                </FormGroup>
                <Divider variant="middle" sx={{ mt: 2 }} />
                <Typography
                  sx={{
                    color: "grey",
                    fontSize: "15px",
                    ml: 3,
                    mt: 3,
                  }}
                >
                  COLOR
                </Typography>
                <Stack direction="row" spacing={1} sx={{ ml: 2, mt: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: "rgb(10, 143, 220)",
                      borderRadius: "400px",
                      height: "40px",
                      width: "40px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      backgroundColor: "rgb(135, 129, 189)",
                      borderRadius: "400px",
                      height: "40px",
                      width: "40px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      backgroundColor: "rgb(163, 211, 156)",
                      borderRadius: "400px",
                      height: "40px",
                      width: "40px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      backgroundColor: "rgb(245, 152, 157)",
                      borderRadius: "400px",
                      height: "40px",
                      width: "40px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      backgroundColor: "rgb(246, 150, 121)",
                      borderRadius: "400px",
                      height: "40px",
                      width: "40px",
                    }}
                  ></Box>
                </Stack>
                <Divider variant="middle" sx={{ mt: 2 }} />
                <Typography
                  sx={{
                    color: "grey",
                    fontSize: "15px",
                    ml: 3,
                    mt: 3,
                  }}
                >
                  CUSTOMER RATINGS
                </Typography>
                <FormGroup
                  sx={{
                    ml: 3,
                    fontWeight: "bold",
                    color: "rgb(107, 114, 128)",
                  }}
                >
                  <FormControlLabel control={<Checkbox />} label="5* & above" />
                  <FormControlLabel control={<Checkbox />} label="4* & above" />
                  <FormControlLabel control={<Checkbox />} label="3* & above" />
                  <FormControlLabel control={<Checkbox />} label="2* & above" />
                  <FormControlLabel control={<Checkbox />} label="1* & above" />
                </FormGroup>
              </Paper>
            </Scrollbars>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Products />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Filters;
