import {
  Box,
  Button,
  Grid,
  IconButton,
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
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import item1 from "../../Assets/item-1.png";
import item2 from "../../Assets/item-2.png";
import item3 from "../../Assets/item-3.png";
import React from "react";
import OrderSummary from "./OrderSummary";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cart() {
  const [number, setNumber] = useState(1);
  const [result, setResult] = useState(95);

  function handleAddClick(row, index) {
    console.log("row index");
    console.log("row index");
    console.log("row index");
    console.log("row index");
    rows[index].totalPrice = row.unitPrice * row.quantity;
    console.log(row, index);
    rows[index].quantity = row.quantity + 1;
  }

  function handleSubtractClick() {
    const newNumber = number - 1;
    if (number > 0) {
      setNumber(newNumber);
      setResult(result - 95);
    }
  }
  const [rows, setRows] = useState([
    {
      id: 0,
      img: item1,
      name: "Mens's Exclusive Watch",
      desc: "Brand: FastTrack",
      unitPrice: 95,
      totalPrice: 0,
      quantity: 1,
    },
    {
      id: 1,
      img: item2,
      name: "HP Pavilion Gaming Ryzen 7 Octa Core 4800H",
      desc: "Brand: FastTrack",
      unitPrice: 1230,
      totalPrice: 0,
      quantity: 1,
    },
    {
      id: 2,
      img: item3,
      name: "NIKON Z6 II Body Mirrorless Camera with 64GB SD Card",
      desc: "Brand: FastTrack",
      unitPrice: 1169,
      totalPrice: 0,
      quantity: 1,
    },
  ]);
  const nevigate = useNavigate();
  const products = () => {
    let path = "/products";
    nevigate(path);
  };
  const checkout = () => {
    let path = "/checkout";
    nevigate(path);
  };
  function handleDelete(id) {
    const newArray = rows.filter((item) => item.id !== id);
    setRows(newArray);
  }
  return (
    <Box sx={{ mt: 8, ml: 3 }}>
      <Stack sx={{ mt: 4 }}>
        <Box position="static" sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: "500", fontSize: "17px" }}>
            Cart
          </Typography>
        </Box>

        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12} sm={9} md={8}>
            <Paper
              sx={{
                width: "900px",
                height: "30px",
                borderRadius: "20px 20px 0px 0px",
              }}
            />
            <Paper sx={{ width: "900px", height: "400px" }}>
              <TableContainer sx={{ width: "900px" }}>
                <Table aria-label="simple table">
                  <TableHead sx={{ height: "20px" }}>
                    <TableRow style={{ backgroundColor: "#F4F7FE" }}>
                      <TableCell sx={{ fontWeight: "500" }}>Product</TableCell>
                      <TableCell sx={{ fontWeight: "500" }}>
                        Unit Price
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "500" }}>
                        QTY
                      </TableCell>
                      <TableCell sx={{ fontWeight: "500" }}>Total</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ height: "30px" }}>
                    {rows.map((row, index) => (
                      <TableRow key={row.name}>
                        <TableCell>
                          <Stack direction="row">
                            <Box
                              component="img"
                              src={row.img}
                              sx={{
                                mr: 1,
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                mt: 1,
                              }}
                            />
                            <Stack>
                              <Typography>{row.name}</Typography>
                              <Typography>{row.desc}</Typography>
                            </Stack>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography>{`$${row.unitPrice}`}</Typography>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              border: "1px solid grey",
                              borderRadius: "14px",
                              width: "100px",
                              height: "40px",
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <Stack
                              direction="row"
                              spacing={2}
                              sx={{ mt: 1, ml: 1 }}
                            >
                              <AddIcon
                                onClick={() => handleAddClick(row, index)}
                                fontSize="small"
                              />

                              <Typography sx={{ fontSize: "15px" }}>
                                {row.quantity}
                              </Typography>
                              <RemoveIcon
                                onClick={() => handleSubtractClick(row.id)}
                                fontSize="small"
                              />
                            </Stack>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography>{`$${
                            row.unitPrice * row.quantity
                          }`}</Typography>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            onClick={() => handleDelete(row.id)}
                            sx={{
                              backgroundColor: "black",
                              color: "white",
                              width: "25px",
                              height: "25px",
                              "&:hover": {
                                backgroundColor: "black",
                              },
                            }}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}
              >
                <Button
                  variant="contained"
                  onClick={() => products()}
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
                  }}
                >
                  Continue Shopping
                </Button>
                <Button
                  variant="contained"
                  onClick={() => checkout()}
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
                >
                  Check Out
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3} md={4}>
            <OrderSummary />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Cart;
