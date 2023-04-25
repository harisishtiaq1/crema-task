import { Paper, Rating, Stack, Typography } from "@mui/material";
import React from "react";

function ProductDetails() {
  const [value, setValue] = React.useState(4);
  return (
    <Paper
      sx={{
        height: "300px",
        mt: 10,
        ml: 3,
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>
        HP Pavilion Gaming Ryzen 7 Octa Core 4800H
      </Typography>
      <Stack direction="row">
        <Rating name="read-only" value={value} readOnly />
        <Typography sx={{ ml: 2, mt: 1 }}>4356 reviews</Typography>
      </Stack>
    </Paper>
  );
}

export default ProductDetails;
