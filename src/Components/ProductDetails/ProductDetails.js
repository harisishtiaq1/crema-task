import {
  Box,
  Divider,
  IconButton,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import item2 from "../../Assets/item-2.png";
function ProductDetails() {
  return (
    <Paper
      sx={{
        mt: 10,
        ml: 3,
        borderRadius: "16px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Stack direction="column">
          <Typography sx={{ fontWeight: "bold", ml: 3 }}>
            HP Pavilion Gaming Ryzen 7 Octa Core 4800H
          </Typography>
          <Stack direction="row" sx={{ ml: 3 }}>
            <Rating name="read-only" value={4} readOnly />
            <Typography
              sx={{ ml: 2, color: "grey", fontSize: "13px", mt: 0.5 }}
            >
              4356 reviews
            </Typography>
            <Typography sx={{ ml: 2, fontSize: "13px", mt: 0.5 }}>
              SKU : MB023
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mr: 3 }}>
          <IconButton
            sx={{
              backgroundColor: "rgb(0, 127, 177)",
              color: "white",
              width: "30px",
              height: "30px",
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "rgb(59, 89, 152)",
              color: "white",
              width: "30px",
              height: "30px",
            }}
          >
            <FacebookIcon fontSize="small" />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "rgb(0, 172, 237)",
              color: "white",
              width: "30px",
              height: "30px",
            }}
          >
            <TwitterIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
      <Divider variant="middle" sx={{ mt: 3 }} />
      <Stack direction="row">
        <Box
          sx={{
            width: "400px",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mt: 3, width: "300px" }} component="img" src={item2} />
        </Box>
        <Box>
          <Stack direction="column">
            <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
              $1000
            </Typography>
            <Typography
              sx={{
                color: "rgb(10, 143, 220)",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              In Stoke
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default ProductDetails;
