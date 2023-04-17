import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";

function Checkout() {
  return (
    <Box sx={{ mt: 8, ml: 3 }}>
      <Stack sx={{ mt: 4 }}>
        <Box position="static" sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "17px" }}>
            CheckOut
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper
              sx={{ width: "900px", borderRadius: "14px", padding: "15px" }}
            >
              <Typography
                variant="h6"
                component="h6"
                sx={{ mt: 2, ml: 2, fontWeight: "bold" }}
              >
                Delivery Address
              </Typography>

              <Box
                sx={{
                  border: "1px solid lightgrey",
                  borderRadius: "10px",
                  width: "800px",
                  ml: 5,
                  mt: 2,
                  height: "100%",
                  padding: "10px",
                }}
              >
                <Stack direction="row">
                  <Stack sx={{ mt: 2, ml: 2 }}>
                    <Radio
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </Stack>
                  <Stack direction="column">
                    <Typography sx={{ mt: 1, ml: 1, fontWeight: "bold" }}>
                      Crema User +1 508-966-0591
                    </Typography>
                    <Typography sx={{ mt: 1, ml: 1 }}>
                      777 Brockton Avenue, Abington MA, 2351
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        padding: "8px",
                        fontSize: "10px",
                        fontFamily: "Sans-serif",
                        mr: 5,
                        width: "120px",
                        mt: 1,
                      }}
                    >
                      Add Orders
                    </Button>
                  </Stack>
                </Stack>
                  <Stack sx={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Stack>
              </Box>
              <Box
                sx={{
                  border: "1px solid lightgrey",
                  borderRadius: "10px",
                  width: "800px",
                  ml: 5,
                  mt: 2,
                  height: "100%",
                  padding: "10px",
                }}
              >
                <Stack direction="row">
                  <Stack sx={{ mt: 2, ml: 2 }}>
                    <Radio
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </Stack>
                  <Stack direction="column">
                    <Typography sx={{ mt: 1, ml: 1, fontWeight: "bold" }}>
                      Crema User +1 508-966-0591
                    </Typography>
                    <Typography sx={{ mt: 1, ml: 1 }}>
                      777 Brockton Avenue, Abington MA, 2351
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        padding: "8px",
                        fontSize: "10px",
                        fontFamily: "Sans-serif",
                        mr: 5,
                        width: "120px",
                        mt: 1,
                      }}
                    >
                      Add Orders
                    </Button>
                  </Stack>
                  <Stack>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Box
                sx={{
                  border: "1px solid lightgrey",
                  borderRadius: "10px",
                  width: "800px",
                  ml: 5,
                  mt: 2,
                  height: "100%",
                  padding: "10px",
                }}
              >
                <Stack direction="row">
                  <Stack sx={{ mt: 2, ml: 2 }}>
                    <Radio
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </Stack>
                  <Stack direction="column">
                    <Typography sx={{ mt: 1, ml: 1, fontWeight: "bold" }}>
                      Crema User +1 508-966-0591
                    </Typography>
                    <Typography sx={{ mt: 1, ml: 1 }}>
                      777 Brockton Avenue, Abington MA, 2351
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        padding: "8px",
                        fontSize: "10px",
                        fontFamily: "Sans-serif",
                        mr: 5,
                        width: "120px",
                        mt: 1,
                      }}
                    >
                      Add Orders
                    </Button>
                  </Stack>
                  <Stack>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Checkout;
