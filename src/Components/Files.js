import React, { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
} from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";

const MyComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "list-popover" : undefined;

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List style={{ width: 200, padding: 0 }}>
          <ListItem style={{ padding: 8 }}>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem style={{ padding: 8 }}>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem style={{ padding: 8 }}>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default MyComponent;
