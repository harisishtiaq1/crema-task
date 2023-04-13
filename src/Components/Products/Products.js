import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Scrollbars from "react-custom-scrollbars";
const marks = [
  {
    value: 0,
    label: "$ 0",
  },

  {
    value: 100,
    label: "$ 500",
  },
];
const thumbStyle = {
  backgroundColor: "#888",
  borderRadius: "6px",
  cursor: "pointer",
  width: "4px",
  height: "5px",
};
function Products() {
  const [value, setValue] = React.useState([10, 37]);

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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Scrollbars
              style={{ width: 280, height: 500 }}
              autoHide={true}
              renderThumbVertical={({ style, ...props }) => (
                <div {...props} style={{ ...style, ...thumbStyle }} />
              )}
            >
              <Paper
                sx={{
                  width: 270,
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
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
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
        </Grid>
      </Stack>
    </Box>
  );
}

export default Products;
