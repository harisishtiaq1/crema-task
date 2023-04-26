import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  LinearProgress,
  Paper,
  Rating,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Laptop from "../../Assets/item-2.png";
import Camera from "../../Assets/item-4.png";
import HeadPhones from "../../Assets/item-3.png";
import Mobile from "../../Assets/item-1.png";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CachedIcon from "@mui/icons-material/Cached";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useNavigate } from "react-router-dom";
const images = [Laptop, Camera, HeadPhones, Mobile];
function ProductDetails() {
  const [slideIndex, setSlideIndex] = useState(0);
  const nevigate = useNavigate();
  const cart = () => {
    let path = "/cart";
    nevigate(path);
  };
  return (
    <Paper
      sx={{
        mt: 10,
        ml: 3,
        borderRadius: "14px",
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
            flexDirection: "column",
          }}
        >
          <Stack direction="row" sx={{ mt: 20, ml: 2 }}>
            <Stack sx={{ display: "flex", flexDirection: "column" }}>
              {images.map((item, index) => (
                <Box
                  onClick={() => setSlideIndex(index)}
                  key={index}
                  sx={{
                    mt: 3,
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{
                      width: "70px",
                      borderRadius: "10px",
                      border: "1px solid Black",
                      padding: "10px",
                    }}
                    src={item}
                    alt={`Slide ${index}`}
                  />
                </Box>
              ))}
            </Stack>
            <Box
              sx={{ mt: 3, ml: 2, width: "300px", height: "300px" }}
              component="img"
              src={images[slideIndex]}
            />
          </Stack>
          <Stack direction="row" spacing={3} sx={{ mt: 3 }}>
            <Button
              sx={{
                ml: 3,
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(10, 143, 220)",
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
                borderRradius: "8px",
                textTransform: "capitalize",
                fontWeight: 500,
                fontSsize: "0.875rem",
                lineHeight: 1.75,
                minWidth: "64px",
                padding: "6px 16px",
                "&:hover": {
                  backgroundColor: "rgb(10, 143, 220)",
                },
              }}
            >
              Add to Cart
            </Button>
            <Button
              sx={{
                mr: 3,
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(240, 79, 71)",
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
                borderRradius: "8px",
                textTransform: "capitalize",
                fontWeight: 500,
                fontSsize: "0.875rem",
                lineHeight: 1.75,
                minWidth: "64px",
                padding: "6px 16px",
                "&:hover": {
                  backgroundColor: "rgb(240, 79, 71)",
                },
              }}
              onClick={() => cart()}
            >
              Buy Now
            </Button>
          </Stack>
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
                No cost EMI ₹1,368/month. Standard EMI also available
              </Typography>
            </Stack>
            <Stack direction="row" spacing={20}>
              <Box>
                <Typography fontWeight="bold" sx={{ mt: 1 }}>
                  Deliver to
                </Typography>
                <TextField
                  InputProps={{
                    style: { borderRadius: "4px", height: "40px" },
                  }}
                  label="Pin Code"
                />
                <Typography sx={{ fontSize: "14px", mt: 2 }}>
                  Delivery in 5-7 Days
                </Typography>
                <Typography sx={{ fontSize: "14px", mt: 2 }}>
                  If ordered before 2:05 AM
                </Typography>
              </Box>
              <Box>
                <Typography fontWeight="bold" sx={{ mt: 1 }}>
                  Services
                </Typography>
                <Stack direction="row">
                  <Tooltip title="return policy">
                    <IconButton sx={{ mt: 1, color: "rgb(10, 143, 220)" }}>
                      <CachedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Typography sx={{ fontSize: "14px", mt: 2 }}>
                    30 Day Return Policy
                  </Typography>
                  <Tooltip title="info">
                    <IconButton
                      sx={{
                        mt: 2.5,
                        ml: 5,
                        color: "grey",
                        height: "10px",
                        width: "8px",
                      }}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Stack direction="row">
                  <Tooltip title="COD available">
                    <IconButton sx={{ mt: 1, color: "rgb(10, 143, 220)" }}>
                      <MonetizationOnIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Typography sx={{ fontSize: "14px", mt: 2 }}>
                    Cash on Delivery available
                  </Typography>
                  <Tooltip title="info">
                    <IconButton
                      sx={{
                        mt: 2.5,
                        ml: 5,
                        color: "grey",
                        height: "10px",
                        width: "8px",
                      }}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Box>
            </Stack>
            <Divider variant="middle" sx={{ mt: 2 }} />
            <Typography sx={{ fontWeight: "bold", fontSize: "15px", mt: 2 }}>
              Specification
            </Typography>
            <Stack direction="row" sx={{ mt: 2 }} spacing={29}>
              <Typography> Brand</Typography>
              <Typography>JBL</Typography>
            </Stack>
            <Stack direction="row" sx={{ mt: 2 }} spacing={20}>
              <Typography>Model Number</Typography>
              <Typography>SH12</Typography>
            </Stack>
            <Stack direction="row" sx={{ mt: 2 }} spacing={29}>
              <Typography>Color</Typography>
              <Typography>RED</Typography>
            </Stack>
            <Stack direction="row" sx={{ mt: 2 }} spacing={22}>
              <Typography>Inline Remote</Typography>
              <Typography>No</Typography>
            </Stack>
            <Divider variant="middle" sx={{ mt: 2 }} />
            <Typography sx={{ fontWeight: "bold", fontSize: "15px", mt: 2 }}>
              Product Details
            </Typography>
            <Stack direction="row" sx={{ mt: 2 }} spacing={23}>
              <Typography>Sweat Proof</Typography>
              <Typography>Yes</Typography>
            </Stack>
            <Stack direction="row" sx={{ mt: 2 }} spacing={24}>
              <Typography>Deep Bass</Typography>
              <Typography>Yes</Typography>
            </Stack>
            <Stack direction="row" sx={{ mt: 2 }} spacing={20}>
              <Typography>Water Resistant</Typography>
              <Typography>Yes</Typography>
            </Stack>
            <Stack direction="row" sx={{ mt: 2 }} spacing={10}>
              <Typography>System Requirements</Typography>
              <Typography>BLUETOOTH</Typography>
            </Stack>
            <Divider variant="middle" sx={{ mt: 2 }} />
            <Typography sx={{ fontWeight: "bold", fontSize: "15px", mt: 2 }}>
              Reviews
            </Typography>
            <Stack direction="row">
              <Box sx={{ mt: 4, position: "relative" }}>
                <CircularProgress
                  thickness={4}
                  size={180}
                  variant="determinate"
                  value={75}
                  sx={{ color: "green", strokeWidth: 4 }}
                />
                <Box sx={{ position: "absolute", top: 40, left: 40 }}>
                  <Typography sx={{ mt: 1, textAlign: "center" }}>
                    4.8
                    <IconButton sx={{ color: "black", mb: 1 }}>
                      <StarIcon />
                    </IconButton>
                  </Typography>
                  <Typography>Overall Rating</Typography>
                </Box>
              </Box>
              <Stack sx={{ mt: 4, ml: 4 }}>
                <Typography sx={{ margin: 0 }}>
                  5
                  <IconButton sx={{ color: "black", mb: 0.5, padding: 0 }}>
                    <StarIcon fontSize="small" />
                  </IconButton>
                  <LinearProgress
                    variant="determinate"
                    value={35}
                    color="secondary"
                    sx={{ width: "200px" }}
                  />
                </Typography>
                <Typography sx={{ margin: 0 }}>
                  4
                  <IconButton sx={{ color: "black", mb: 0.5, padding: 0 }}>
                    <StarIcon fontSize="small" />
                  </IconButton>
                  <LinearProgress
                    variant="determinate"
                    value={35}
                    color="secondary"
                    sx={{ width: "200px" }}
                  />
                </Typography>
                <Typography sx={{ margin: 0 }}>
                  3
                  <IconButton sx={{ color: "black", mb: 0.5, padding: 0 }}>
                    <StarIcon fontSize="small" />
                  </IconButton>
                  <LinearProgress
                    variant="determinate"
                    value={35}
                    color="secondary"
                    sx={{ width: "200px" }}
                  />
                </Typography>
                <Typography sx={{ margin: 0 }}>
                  2
                  <IconButton sx={{ color: "black", mb: 0.5, padding: 0 }}>
                    <StarIcon fontSize="small" />
                  </IconButton>
                  <LinearProgress
                    variant="determinate"
                    value={35}
                    color="secondary"
                    sx={{ width: "200px" }}
                  />
                </Typography>
                <Typography sx={{ margin: 0 }}>
                  1
                  <IconButton sx={{ color: "black", mb: 0.5, padding: 0 }}>
                    <StarIcon fontSize="small" />
                  </IconButton>
                  <LinearProgress
                    variant="determinate"
                    value={35}
                    color="secondary"
                    sx={{ width: "200px" }}
                  />
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default ProductDetails;
