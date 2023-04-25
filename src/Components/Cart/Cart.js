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

const rows = [
  {
    img: item1,
    name: "Mens's Exclusive Watch",
    desc: "Brand: FastTrack",
    unitPrice: "$95",
    totalPrice: "$95",
  },
  {
    img: item2,
    name: "HP Pavilion Gaming Ryzen 7 Octa Core 4800H",
    desc: "Brand: FastTrack",
    unitPrice: "$1230",
    totalPrice: "$1230",
  },
  {
    img: item3,
    name: "NIKON Z6 II Body Mirrorless Camera with 64GB SD Card",
    desc: "Brand: FastTrack",
    unitPrice: "$1169",
    totalPrice: "$1169",
  },
];
function Cart() {
  return (
    <Box sx={{ mt: 8, ml: 3 }}>
      <Stack sx={{ mt: 4 }}>
        <Box position="static" sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "17px" }}>
            Cart
          </Typography>
        </Box>

        <Grid container>
          <Grid item xs={12} sm={9} md={8}>
            <Paper
              sx={{
                width: "900px",
                height: "30px",
                borderRadius: "20px 20px 0px 0px",
              }}
            />
            <Paper sx={{ width: "900px" }}>
              <TableContainer sx={{ width: "900px" }}>
                <Table aria-label="simple table">
                  <TableHead sx={{ height: "20px" }}>
                    <TableRow style={{ backgroundColor: "#F4F7FE" }}>
                      <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Unit Price
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "bold" }}>
                        QTY
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ height: "30px" }}>
                    {rows.map((row) => (
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
                        <TableCell>{row.unitPrice}</TableCell>
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
                              <AddIcon fontSize="small" />
                              <Typography sx={{ fontSize: "15px" }}>
                                1
                              </Typography>
                              <RemoveIcon fontSize="small" />
                            </Stack>
                          </Box>
                        </TableCell>
                        <TableCell>{row.totalPrice}</TableCell>
                        <TableCell>
                          <IconButton
                            sx={{
                              backgroundColor: "black",
                              color: "white",
                              width: "25px",
                              height: "25px",
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
            </Paper>
            
            <Paper
              sx={{
                width: "900px",
                display:'flex',
                justifyContent:'space-between',
                height: "40px",
                borderRadius: "0px 0px 20px 20px",
                border:'none'
              }}>

              <Button variant="contained">
                Continue Shopping
              </Button>
              <Button variant="contained">
                Check Out
              </Button>
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
