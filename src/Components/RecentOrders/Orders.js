import {
  Box,
  Button,
  Collapse,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Scrollbars from "react-custom-scrollbars";

const thumbStyle = {
  backgroundColor: "#888",
  borderRadius: "6px",
  cursor: "pointer",
  width: "7px",
  height: "5px",
};

const rows = [
  {
    id: "#SK231",
    product: "HP Pavilion Gaming Ryzen 7 Octa Core 4800H",
    customer: "Ina Hughes",
    delivery: "08-21-2020",
    price: "$1250",
    payment: "COD",
    color: "rgb(226, 167, 46)",
    bgColor: "rgba(226, 167, 46, 0.267)",
    status: "Completed",
  },

  {
    id: "#SK232",
    product: "Addidas Shoes",
    customer: "Myrtie Ferguson",
    delivery: "08-12-2020",
    price: "$100",
    payment: "Prepaid",
    color: "rgb(67, 200, 136)",
    bgColor: "rgba(67, 200, 136, 0.267)",
    status: "Delivered",
  },
  {
    id: "#SK233",
    product: "Sleeve Jacket",
    customer: "Johnny Herrera",
    delivery: "07-30-2020",
    price: "$1020",
    payment: "Prepaid",
    color: "rgb(248, 78, 78)",
    bgColor: "rgba(248, 78, 78, 0.267)",
    status: "Pending",
  },

  {
    id: "#SK234",
    product: "Mens's Exclusive Watch",
    customer: "Ina Hughes",
    delivery: "08-21-2020",
    price: "$1250",
    color: "rgb(226, 167, 46)",
    bgColor: "rgba(226, 167, 46, 0.267)",
    status: "Completed",
    payment: "COD",
  },

  {
    id: "#SK235",
    product: "Addidas Shoes",
    customer: "Myrtie Ferguson",
    delivery: "08-12-2020",
    price: "$100",
    color: "rgb(67, 200, 136)",
    bgColor: "rgba(67, 200, 136, 0.267)",
    status: "Delivered",
    payment: "Prepaid",
  },

  {
    id: "#SK236",
    product: "Sleeve Jacket",
    customer: "Johnny Herrera",
    delivery: "07-30-2020",
    price: "$1020",
    color: "rgb(248, 78, 78)",
    bgColor: "rgba(248, 78, 78, 0.267)",
    status: "Pending",
    payment: "Prepaid",
  },

  {
    id: "#SK237",
    product: "Bicycle",
    customer: "Ina Hughes",
    delivery: "08-21-2020",
    price: "$1250",
    payment: "COD",
    color: "rgb(226, 167, 46)",
    bgColor: "rgba(226, 167, 46, 0.267)",
    status: "Completed",
  },
  {
    id: "#SK238",
    product: "Addidas Shoes",
    customer: "Johnny Herrera",
    delivery: "08-12-2020",
    price: "$100",
    color: "rgb(67, 200, 136)",
    bgColor: "rgba(67, 200, 136, 0.267)",
    status: "Delivered",
    payment: "Prepaid",
  },

  {
    id: "#SK239",
    product: "Sleeve Jacket",
    customer: "Myrtie Ferguson",
    delivery: "07-30-2020",
    price: "$1020",
    color: "rgb(248, 78, 78)",
    bgColor: "rgba(248, 78, 78, 0.267)",
    status: "Pending",
    payment: "Prepaid",
  },
  {
    id: "#SK240",
    product: "Bicycle",
    customer: "Ina Hughes",
    delivery: "08-21-2020",
    price: "$1250",
    color: "rgb(226, 167, 46)",
    bgColor: "rgba(226, 167, 46, 0.267)",
    status: "Completed",
    payment: "COD",
  },
  {
    id: "#SK241",
    product: "Addidas Shoes",
    customer: "Myrtie Ferguson",
    delivery: "08-12-2020",
    price: "$100",
    color: "rgb(67, 200, 136)",
    bgColor: "rgba(67, 200, 136, 0.267)",
    status: "Delivered",
    payment: "Prepaid",
  },

  {
    id: "#SK242",
    product: "Sleeve Jacket",
    customer: "Johnny Herrera",
    delivery: "07-30-2020",
    price: "$1020",
    color: "rgb(248, 78, 78)",
    bgColor: "rgba(248, 78, 78, 0.267)",
    status: "Pending",
    payment: "Prepaid",
  },

  {
    id: "#SK243",
    product: "Bicycle",
    customer: "Ina Hughes",
    delivery: "08-21-2020",
    price: "$1250",
    color: "rgb(226, 167, 46)",
    bgColor: "rgba(226, 167, 46, 0.267)",
    status: "Completed",
    payment: "COD",
  },
  {
    id: "#SK244",
    product: "Addidas Shoes",
    customer: "Myrtie Ferguson",
    delivery: "08-12-2020",
    price: "$100",
    color: "rgb(67, 200, 136)",
    bgColor: "rgba(67, 200, 136, 0.267)",
    status: "Delivered",
    payment: "Prepaid",
  },

  {
    id: "#SK245",
    product: "Sleeve Jacket",
    customer: "Johnny Herrera",
    delivery: "07-30-2020",
    price: "$1020",
    color: "rgb(248, 78, 78)",
    bgColor: "rgba(248, 78, 78, 0.267)",
    status: "Pending",
    payment: "Prepaid",
  },

  {
    id: "#SK246",
    product: "Bicycle",
    customer: "Ina Hughes",
    delivery: "08-21-2020",
    price: "$1250",
    color: "rgb(226, 167, 46)",
    bgColor: "rgba(226, 167, 46, 0.267)",
    status: "Completed",
    payment: "COD",
  },
  {
    id: "#SK247",
    product: "Addidas Shoes",
    customer: "Myrtie Ferguson",
    delivery: "08-12-2020",
    price: "$100",
    color: "rgb(67, 200, 136)",
    bgColor: "rgba(67, 200, 136, 0.267)",
    status: "Delivered",
    payment: "Prepaid",
  },

  {
    id: "#SK248",
    product: "Sleeve Jacket",
    customer: "Johnny Herrera",
    delivery: "07-30-2020",
    price: "$1020",
    color: "rgb(248, 78, 78)",
    bgColor: "rgba(248, 78, 78, 0.267)",
    status: "Pending",
    payment: "Prepaid",
  },

  {
    id: "#SK249",
    product: "Bicycle",
    customer: "Ina Hughes",
    delivery: "08-21-2020",
    price: "$1250",
    color: "rgb(226, 167, 46)",
    bgColor: "rgba(226, 167, 46, 0.267)",
    status: "Completed",
    payment: "COD",
  },
  {
    id: "#SK250",
    product: "Addidas Shoes",
    customer: "Myrtie Ferguson",
    delivery: "08-12-2020",
    price: "$100",
    color: "rgb(67, 200, 136)",
    bgColor: "rgba(67, 200, 136, 0.267)",
    status: "Delivered",
    payment: "Prepaid",
  },
];
function Orders() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 12));
    setPage(0);
  };
  const [showPaper, setShowPaper] = useState(false);
  return (
    <>
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
                  sx={{
                    color: "grey",
                    ml: 2,
                    mt: 1,
                    flex: 1,
                    fontSize: "13px",
                  }}
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
                    mr: 2,
                  }}
                >
                  Add Orders
                </Button>
                <TablePagination
                  SelectProps={{
                    sx: {
                      display: "none",
                    },
                  }}
                  component="div"
                  count={rows.length}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onPageChange={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  labelRowsPerPage={() => ""}
                />
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
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Delivery Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Payment Method
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{
                          textDecoration: "underline",
                          color: "#1565C0",
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
                      <TableCell>
                        <Box
                          sx={{
                            color: row.color,
                            fontSize: "16px",
                            backgroundColor: row.bgColor,
                            padding: "5px 5px",
                            display: "inline-block",
                          }}
                        >
                          {row.status}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <TableCell>
                          <IconButton
                            sx={{ backgroundColor: "none" }}
                            onClick={() => setShowPaper(!showPaper)}
                          >
                            <MoreVertIcon />
                          </IconButton>
                        </TableCell>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbars>
      </Box>
      <Collapse in={showPaper}>
        <Paper
          sx={{
            position: "absolute",
            minWidth: "16px",
            minHeight: "16px",
            bottom: 284,
            left: 1170,
          }}
        >
          <List>
            <ListItem>
              <Stack direction="column">
                <ListItemText primary="View Order" />
                <ListItemText primary="Edit" />
                <ListItemText primary="Delete" />
              </Stack>
            </ListItem>
          </List>
        </Paper>
      </Collapse>
    </>
  );
}

export default Orders;
