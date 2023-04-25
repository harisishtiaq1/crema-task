import {
  Box,
  Divider,
  IconButton,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import item2 from "../../Assets/item-2.png";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
        <Box sx={{ mt: 2 }}>
          <Stack direction="column" sx={{ ml: 5 }}>
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
            <Typography
              sx={{
                mt: 2,
                color: "grey",
                fontSize: "14px",
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, making
              it look like readable English. Many desktop publishing packages
              and web page editors now use..
            </Typography>
            <Divider sx={{ mt: 2 }} />
            <Typography fontWeight="bold" sx={{ mt: 1 }}>
              Available Offers
            </Typography>
            <Stack direction="row">
              <IconButton sx={{ color: "rgb(10, 143, 220)", fontSize: "18px" }}>
                <LocalOfferIcon fontSize="small" />
              </IconButton>
              <Typography sx={{ fontSize: "12px", mt: 1 }}>
                Special PriceGet extra ₹598 off (price inclusive of discount)
              </Typography>
            </Stack>
            <Stack direction="row">
              <IconButton sx={{ color: "rgb(10, 143, 220)", fontSize: "18px" }}>
                <CalendarMonthIcon fontSize="small" />
              </IconButton>
              <Typography sx={{ fontSize: "12px", mt: 1 }}>
                Special PriceGet extra ₹598 off (price inclusive of discount)
              </Typography>
            </Stack>
            <Stack direction="row">
              <Box>
                <Typography fontWeight="bold" sx={{ mt: 1 }}>
                  Deliver to
                </Typography>
                <TextField label="Pin Code" sx={{height:"100px",borderRadius:"10px"}}/>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default ProductDetails;
