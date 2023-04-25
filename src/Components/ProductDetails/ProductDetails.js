import { Paper, Rating, Stack, Typography } from "@mui/material";
import React from "react";

function ProductDetails() {
  const [value, setValue] = React.useState(4);
  return (
    <Paper
      sx={{
        mt: 10,
        ml: 3,
        borderRadius: "16px",
      }}
    >
      <Typography sx={{ fontWeight: "bold", ml: 3 }}>
        HP Pavilion Gaming Ryzen 7 Octa Core 4800H
      </Typography>
      <Stack direction="row" sx={{ ml: 3 }}>
        <Rating name="read-only" value={value} readOnly />
        <Typography sx={{ ml: 2, color: "grey", fontSize: "13px", mt: 0.5 }}>
          4356 reviews
        </Typography>
        <Typography sx={{ ml: 2, fontSize: "13px", mt: 0.5 }}>
          SKU : MB023
        </Typography>
      </Stack>
    </Paper>
  );
}

export default ProductDetails;
