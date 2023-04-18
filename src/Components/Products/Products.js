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
  TablePagination,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import Laptop from "../../Assets/item-2.png";
import Camera from "../../Assets/item-4.png";
import HeadPhones from "../../Assets/item-3.png";
import Mobile from "../../Assets/item-1.png";
import Scrollbars from "react-custom-scrollbars";

const thumbStyle = {
  backgroundColor: "#888",
  borderRadius: "6px",
  cursor: "pointer",
  width: "4px",
  height: "5px",
};
const items = [
  {
    src: Laptop,
    alt: "img1",
    text: "HP Pavilion Gaming Ryzen 7 Octa Core 4800H",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Camera,
    alt: "img2",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: HeadPhones,
    alt: "img3",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Mobile,
    alt: "img1",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Camera,
    alt: "img2",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: HeadPhones,
    alt: "img3",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Laptop,
    alt: "img1",
    text: "HP Pavilion Gaming Ryzen 7 Octa Core 4800H",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Camera,
    alt: "img2",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: HeadPhones,
    alt: "img3",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Mobile,
    alt: "img1",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: Camera,
    alt: "img2",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
  {
    src: HeadPhones,
    alt: "img3",
    text: "NIKON Z6 II Body Mirrorless Camera with 64GB SD",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout.",
  },
];

function Products() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <Box position="static">
        <Paper
          sx={{
            paddingTop: "7px",
            width: "990px",
            height: "60px",
            borderRadius: "16px 16px 0px 0px",
            display:'flex',
            justifyContent:'space-between'
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

          <Box sx={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
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
            <TablePagination
              sx={{
                ".css-16c50h-MuiInputBase-root-MuiTablePagination-select": {
                  display: "none",
                },
              }}
              component="div"
              count={items.length}
              page={page}
              rowsPerPage={rowsPerPage}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              // labelDisplayedRows={() => ''}
              labelRowsPerPage={() => ""}
            />
              </Box>
        </Paper>
      </Box>
      <Paper
        sx={{
          backgroundColor: "transparent",
          paddingTop: "7px",
          width: "990px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Scrollbars
          style={{ width: 990, height: 430 }}
          autoHide={true}
          renderThumbVertical={({ style, ...props }) => (
            <div {...props} style={{ ...style, ...thumbStyle }} />
          )}
        >
          <Grid container spacing={2}>
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
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
                        sx={{
                          maxWidth: "250px",
                          height: "200px",
                          ml: 12,
                          mt: 5,
                        }}
                        image={item.src}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="h6"
                          sx={{ fontWeight: "bold", fontSize: "17px" }}
                        >
                          {item.text}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="h6"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: "15px",
                            color: "grey",
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Scrollbars>
      </Paper>
    </>
  );
}

export default Products;
