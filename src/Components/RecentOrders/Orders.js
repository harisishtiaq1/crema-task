import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Scrollbars from "react-custom-scrollbars";

const thumbStyle = {
  backgroundColor: "#888",
  borderRadius: "6px",
  cursor: "pointer",
  width: "4px",
  height: "5px",
};
function createData(
  id,
  product,
  customer,
  delivery,
  price,
  payment,
  status,
  action
) {
  return { id, product, customer, delivery, price, payment, status, action };
}

const rows = [
  createData(
    "#SK231",
    "HP Pavilion Gaming Ryzen 7 Octa Core 4800H",
    "Ina Hughes",
    "08-21-2020",
    "$1250",
    "COD"
  ),
  createData(
    "#SK232",
    "Addida Shoes",
    "Myrtie Ferguson",
    "08-12-2020",
    "$100",
    "Prepaid"
  ),
  createData(
    "#SK233",
    "Sleeve Jacket",
    "Johnny Herrera",
    "07-30-2020",
    "$1020",
    "Prepaid"
  ),
  createData(
    "#SK234",
    "Mens's Exclusive Watch",
    "Ina Hughes",
    "08-21-2020",
    "$1250",
    "COD"
  ),
  createData(
    "#SK235",
    "Addida Shoes",
    "Myrtie Ferguson",
    "08-12-2020",
    "$100",
    "Prepaid"
  ),
  createData(
    "#SK236",
    "Sleeve Jacket",
    "Johnny Herrera",
    "07-30-2020",
    "$1020",
    "Prepaid"
  ),
  createData("#SK237", "Bicycle", "Ina Hughes", "08-21-2020", "$1250", "COD"),
  createData(
    "#SK238",
    "Addida Shoes",
    "Johnny Herrera",
    "08-12-2020",
    "$100",
    "Prepaid"
  ),
  createData(
    "#SK239",
    "Sleeve Jacket",
    "Myrtie Ferguson",
    "07-30-2020",
    "$1020",
    "Prepaid"
  ),
  createData("#SK240", "Bicycle", "Ina Hughes", "08-21-2020", "$1250", "COD"),
  createData(
    "#SK241",
    "Addida Shoes",
    "Myrtie Ferguson",
    "08-12-2020",
    "$100",
    "Prepaid"
  ),
  createData(
    "#SK242",
    "Sleeve Jacket",
    "Johnny Herrera",
    "07-30-2020",
    "$1020",
    "Prepaid"
  ),
  createData("#SK243", "Bicycle", "Ina Hughes", "08-21-2020", "$1250", "COD"),
  createData(
    "#SK244",
    "Addida Shoes",
    "Myrtie Ferguson",
    "08-12-2020",
    "$100",
    "Prepaid"
  ),
  createData(
    "#SK245",
    "Sleeve Jacket",
    "Johnny Herrera",
    "07-30-2020",
    "$1020",
    "Prepaid"
  ),
  createData("#SK246", "Bicycle", "Ina Hughes", "08-21-2020", "$1250", "COD"),
  createData(
    "#SK247",
    "Addida Shoes",
    "Myrtie Ferguson",
    "08-12-2020",
    "$100",
    "Prepaid"
  ),
  createData(
    "#SK248",
    "Sleeve Jacket",
    "Johnny Herrera",
    "07-30-2020",
    "$1020",
    "Prepaid"
  ),
  createData("#SK249", "Bicycle", "Ina Hughes", "08-21-2020", "$1250", "COD"),
  createData(
    "#SK250",
    "Addida Shoes",
    "Myrtie Ferguson",
    "08-12-2020",
    "$100",
    "Prepaid"
  ),
];

function Orders() {
  return (
    <Box sx={{ mt: 8, ml: 3 }}>
      <Stack sx={{ mt: 4 }}>
        <Box position="static" sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "17px" }}>
            Recent Orders
          </Typography>
        </Box>
        <Box position="static">
          <Paper
            sx={{
              paddingTop: "7px",
              width: "1300px",
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

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                sx={{
                  padding: "8px",
                  fontSize: "10px",
                  fontFamily: "Sans-serif",
                  mr: 5,
                }}
              >
                Add Orders
              </Button>
              <IconButton>
                <ArrowBackIosIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          </Paper>
        </Box>
      </Stack>
      <Scrollbars
        style={{ width: 1300, height: 430 }}
        autoHide={true}
        renderThumbVertical={({ style, ...props }) => (
          <div {...props} style={{ ...style, ...thumbStyle }} />
        )}
      >
        <TableContainer sx={{ width: "1300px" }} component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ height: "20px" }}>
              <TableRow style={{ backgroundColor: "#F4F7FE" }}>
                <TableCell sx={{ fontWeight: "bold" }}>Order ID</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Customer</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Delivery Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Payment Method
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      textDecoration: "underline",
                      color: "#A0C4EB",
                      fontSize: "15px",
                      height: "80px",
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.id}
                  </TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.customer}</TableCell>
                  <TableCell>{row.delivery}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbars>
    </Box>
  );
}

export default Orders;
