import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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

            <Box sx={{display:'flex',alignItems:'center'}}>
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
      <Paper sx={{}}>

      </Paper>
    </Box>
  );
}

export default Orders;
