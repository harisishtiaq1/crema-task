import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

function Checkout() {
  return (
    <Box sx={{ mt: 8, ml: 3 }}>
      <Stack sx={{ mt: 4 }}>
        <Box position="static" sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "17px" }}>
            CheckOut
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{width:'800px',height:"400px"}}>
              <Typography>Delivery Address</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Checkout;
