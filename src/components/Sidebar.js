import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import InfoIcon from "@mui/icons-material/Info";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "#111828",
        height: "100%",
        color: "#F0F9FF",
      }}
      role="presentation"
      onClick={() => setOpen(!open)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon sx={{ color: "#F0F9FF" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="career">
          <ListItem button>
            <ListItemIcon sx={{ color: "#F0F9FF" }}>
              <DirectionsWalkIcon />
            </ListItemIcon>
            <ListItemText primary="Career" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/contactus">
          <ListItem button>
            <ListItemIcon sx={{ color: "#F0F9FF" }}>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="aboutus">
          <ListItem button>
            <ListItemIcon sx={{ color: "#F0F9FF" }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          sx={{ color: "#F0F9FF" }}
          size="large"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </IconButton>
        {/* <Button onClick={() => setOpen(!open)}>Right</Button> */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(!open)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
