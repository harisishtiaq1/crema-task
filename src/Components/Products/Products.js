import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, Paper, Stack } from "@mui/material";
import React from "react";

function Products() {
  return (
    <Box>
      <Paper sx={{ backgroundColor: "blueviolet", height: "200px" }}>
        <Box
          sx={{
            backgroundColor: "white",
            width: "200px",
            borderRadius: "10px",
            padding: "1px",
          }}
        >
          <Stack direction="row">
            <InputBase sx={{ ml: 3, mt: 0.5 }} placeholder="Search here" />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

export default Products;
