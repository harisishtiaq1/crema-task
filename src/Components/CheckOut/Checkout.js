import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import OrderSummary from "./OrderSummary";

function Checkout() {
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const handleDeliveryChange = (event) => {
    setDeliveryAddress(event.target.value);
  };
  return (
    <Box sx={{ mt: 8, ml: 3 }}>
      <Stack sx={{ mt: 4 }}>
        <Box position="static" sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "17px" }}>
            CheckOut
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={9} md={8}>
            <Paper
              sx={{ width: "900px", borderRadius: "14px", padding: "15px" }}
            >
              <Typography
                variant="h6"
                component="h6"
                sx={{ mt: 2, ml: 2, fontWeight: "bold" }}
              >
                Delivery Address
              </Typography>

              <Box
                sx={{
                  border: "1px solid lightgrey",
                  borderRadius: "10px",
                  width: "800px",
                  ml: 5,
                  height: "100%",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction="row">
                  <Stack sx={{ mt: 2, ml: 2 }}>
                    <Radio
                      value="option1"
                      checked={deliveryAddress === "option1"}
                      onChange={handleDeliveryChange}
                    />
                  </Stack>
                  <Stack direction="column">
                    <Typography sx={{ mt: 1, ml: 1, fontWeight: "bold" }}>
                      Crema User&nbsp;&nbsp; &nbsp; +1 508-966-0591
                    </Typography>
                    <Typography sx={{ mt: 1, ml: 1 }}>
                      777 Brockton Avenue, Abington MA, 2351
                    </Typography>
                    {deliveryAddress === "option1" && (
                      <Button
                        variant="contained"
                        sx={{
                          padding: "8px",
                          fontSize: "10px",
                          fontFamily: "Sans-serif",
                          mr: 5,
                          width: "120px",
                          mt: 1,
                        }}
                      >
                        Add Orders
                      </Button>
                    )}
                  </Stack>
                </Stack>
                {deliveryAddress === "option1" && (
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                )}
              </Box>
              <Box
                sx={{
                  border: "1px solid lightgrey",
                  borderRadius: "10px",
                  width: "800px",
                  ml: 5,
                  mt: 2,
                  height: "100%",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction="row">
                  <Stack sx={{ mt: 2, ml: 2 }}>
                    <Radio
                      value="option2"
                      checked={deliveryAddress === "option2"}
                      onChange={handleDeliveryChange}
                    />
                  </Stack>
                  <Stack direction="column">
                    <Typography sx={{ mt: 1, ml: 1, fontWeight: "bold" }}>
                      Crema User&nbsp;&nbsp; &nbsp; +1 508-966-0592
                    </Typography>
                    <Typography sx={{ mt: 1, ml: 1 }}>
                      777 Brockton Avenue, Abington MA, 2351
                    </Typography>
                    {deliveryAddress === "option2" && (
                      <Button
                        variant="contained"
                        sx={{
                          padding: "8px",
                          fontSize: "10px",
                          fontFamily: "Sans-serif",
                          mr: 5,
                          width: "120px",
                          mt: 1,
                        }}
                      >
                        Add Orders
                      </Button>
                    )}
                  </Stack>
                </Stack>
                {deliveryAddress === "option2" && (
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                )}
              </Box>
              <Box
                sx={{
                  border: "1px solid lightgrey",
                  borderRadius: "10px",
                  width: "800px",
                  ml: 5,
                  mt: 2,
                  height: "100%",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction="row">
                  <Stack sx={{ mt: 2, ml: 2 }}>
                    <Radio
                      value="option3"
                      checked={deliveryAddress === "option3"}
                      onChange={handleDeliveryChange}
                    />
                  </Stack>
                  <Stack direction="column">
                    <Typography sx={{ mt: 1, ml: 1, fontWeight: "bold" }}>
                      Crema User &nbsp;&nbsp; &nbsp;+1 508-966-0593
                    </Typography>
                    <Typography sx={{ mt: 1, ml: 1 }}>
                      777 Brockton Avenue, Abington MA, 2351
                    </Typography>
                    {deliveryAddress === "option3" && (
                      <Button
                        variant="contained"
                        sx={{
                          padding: "8px",
                          fontSize: "10px",
                          fontFamily: "Sans-serif",
                          mr: 5,
                          width: "120px",
                          mt: 1,
                        }}
                      >
                        Add Orders
                      </Button>
                    )}
                  </Stack>
                </Stack>
                {deliveryAddress === "option3" && (
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                )}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3} md={4}>
            <OrderSummary />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Checkout;
