import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import Item from "../../Assets/item-2.png";
const items = [
  {
    src: Item,
    alt: "img1",
    text: "HP Pavilion Gaming Ryzen 7 Octa Core 4800H",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Item,
    alt: "img2",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Item,
    alt: "img3",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Item,
    alt: "img1",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Item,
    alt: "img2",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Item,
    alt: "img3",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
];

function Products() {
  return (
    <>
      <Box position="fixed">
        <Paper
          sx={{
            paddingTop: "7px",
            width: "1000px",
            height: "60px",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "16px 16px 0px 0px",
          }}
        >
          <Paper
            sx={{
              ml: 2,
              width: "230px",
              height: "40px",
              backgroundColor: "#F4F7FE",
              borderRadius: "40px",
            }}
          >
            <InputBase
              sx={{ color: "grey", ml: 2, mt: 1, flex: 1, fontSize: "13px" }}
              placeholder="Search Here"
            />
            <IconButton type="button">
              <SearchIcon fontSize="small" />
            </IconButton>
          </Paper>

          <Box>
            <IconButton
              sx={{
                backgroundColor: "rgba(10, 143, 220, 0.05)",
                color: "rgb(149, 156, 169)",
                mr: 2,
              }}
            >
              <ListIcon />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "rgba(10, 143, 220, 0.05)",
                color: "rgb(10, 143, 220)",
                mr: 2,
              }}
            >
              <ViewCompactIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Paper>
      </Box>
      <Paper
        sx={{
          mt: 6,
          backgroundColor: "transparent",
          paddingTop: "7px",
          width: "990px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={6} key={item}>
              <Card
                sx={{
                  margin: "13px",
                  borderRadius: "40px",
                  paddingTop: "10px",
                  width: 450,
                  height: 420,
                  boxShadow:
                    "3px 3px 5px rgb(0 0 0 / 25%), -3px -3Fpx 5px rgb(255 255 255 / 6%)",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ width: "250px", ml: 12, mt: 5 }}
                    image={item.src}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h1">
                      {item.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
}

export default Products;
