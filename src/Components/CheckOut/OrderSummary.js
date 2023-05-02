import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function OrderSummary() {
  const [selectedOption, setSelectedOption] = useState("option2");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Stack>
      <Paper
        sx={{ width: "400px", padding: "8px", borderRadius: "14px", ml: 3 }}
      >
        <Typography
          variant="p"
          component="h6"
          sx={{ fontWeight: "500", fontSize: "18px", ml: 2, mt: 2 }}
        >
          Order Summary
        </Typography>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            ml: 2,
          }}
        >
          <Typography sx={{ color: "grey" }}>Grand Total:</Typography>
          <Typography sx={{ fontWeight: "500" }}>$2494</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            ml: 2,
          }}
        >
          <Typography sx={{ color: "grey" }}>Discount:</Typography>
          <Typography sx={{ fontWeight: "500" }}>$4</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            ml: 2,
          }}
        >
          <Typography sx={{ color: "grey" }}>Shipping Charge:</Typography>
          <Typography sx={{ fontWeight: "500" }}>$4</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            ml: 2,
          }}
        >
          <Typography sx={{ color: "grey" }}>Estimated Tax:</Typography>
          <Typography sx={{ fontWeight: "500" }}>$1</Typography>
        </Stack>
        <Divider sx={{ mt: 2 }} variant="middle" />
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            ml: 2,
          }}
        >
          <Typography sx={{ color: "grey" }}>Order Total:</Typography>
          <Typography sx={{ fontWeight: "500" }}>$2495</Typography>
        </Stack>
      </Paper>
      <Paper
        sx={{
          width: "400px",
          padding: "8px",
          borderRadius: "14px",
          ml: 3,
          mt: 2,
        }}
      >
        <Typography
          variant="p"
          component="h6"
          sx={{ fontWeight: "500", fontSize: "18px", ml: 2, mt: 2 }}
        >
          Payment Info
        </Typography>
        <FormControl sx={{ mt: 2, ml: 2 }}>
          <RadioGroup>
            <FormControlLabel
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleRadioChange}
              control={<Radio />}
              label="COD"
            />
            {selectedOption === "option1" && (
              <Typography>Cash On delivery</Typography>
            )}
            <FormControlLabel
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleRadioChange}
              control={<Radio />}
              label="CARD"
            />
            {selectedOption === "option2" && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    InputProps={{
                      style: { borderRadius: "10px" },
                    }}
                    label="Full Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    InputProps={{
                      style: { borderRadius: "10px" },
                    }}
                    label="Card Number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    InputProps={{
                      style: { borderRadius: "10px" },
                    }}
                    label="Expiry Date"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    InputProps={{
                      style: { borderRadius: "10px" },
                    }}
                    label="CVV"
                  />
                </Grid>
              </Grid>
            )}
            <FormControlLabel
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleRadioChange}
              control={<Radio />}
              label="PAYPAL"
            />
            {selectedOption === "option3" && (
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    InputProps={{
                      style: { borderRadius: "10px" },
                    }}
                    fullWidth
                    label="PayPal Email Address"
                  />
                </Grid>
              </Grid>
            )}
          </RadioGroup>
        </FormControl>
        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          Place Order
        </Button>
      </Paper>
    </Stack>
  );
}

export default OrderSummary;
