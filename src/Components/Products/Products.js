import { Box, Divider, Grid, Paper, Slider, Typography } from "@mui/material";
import React from "react";

function valuetext(value) {
  return `${value}°C`;
}

function Products() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ mt: 10, ml: 3 }}>
      <Typography
        position="static"
        sx={{ mt: 4, fontWeight: "bold", fontSize: "17px" }}
      >
        Products
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper
            sx={{
              maxWidth: 270,
              width: "100%",
              mt: 3,
              padding: "15px",
              borderRadius: "10px",
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
              Customization
            </Typography>
            <Divider sx={{ mt: 2 }} />
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
                width: 270,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Products;
