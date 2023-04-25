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
  const [selectedOption, setSelectedOption] = useState(null);

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
          sx={{ fontWeight: "bold", fontSize: "18px", ml: 2, mt: 2 }}
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
          <Typography sx={{ fontWeight: "bold" }}>$2494</Typography>
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
          <Typography sx={{ fontWeight: "bold" }}>$4</Typography>
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
          <Typography sx={{ fontWeight: "bold" }}>$4</Typography>
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
          <Typography sx={{ fontWeight: "bold" }}>$1</Typography>
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
          <Typography sx={{ fontWeight: "bold" }}>$2495</Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default OrderSummary;
