import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Bookmarks, Call, Flight, Home } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import "./Navbar.css";

const drawerWidth = "100vw";

const navigateItems = [
  {
    index: 0,
    icon: <Home />,
    label: "Accueil",
    route: "/",
  },
  {
    index: 1,
    icon: <Flight />,
    label: "Nouveau voyage",
    route: "nouveau-voyage",
  },
  {
    index: 2,
    icon: <Bookmarks />,
    label: "Mes Carnets",
    route: "mes-carnets",
  },
  {
    index: 3,
    icon: <Call />,
    label: "Contact",
    route: "contact",
  },
];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ bgcolor: "#eee" }}>
          <Typography noWrap sx={{ flexGrow: 1 }} mt={1} component="div">
            <Link to="/">
              <img src={logoImg} alt="logo" width={60} />
            </Link>
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{
              ...(open && { display: "none" }),
              display: { xs: "block", md: "none" },
            }}
            size="large"
          >
            <MenuIcon sx={{ color: "#eba226", fontSize: "1.5em" }} />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            {navigateItems.map((item) => (
              <ListItem
                button
                onClick={() => navigate(item.route)}
                key={item.id}
                disablePadding
                sx={{ color: "#eba226" }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#eba226", fontSize: "1em" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          bgcolor: "#eba326bc",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader sx={{ bgcolor: "#eba326bc" }}>
          <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List
          sx={{
            bgcolor: "#eba326bc",
            height: "100vh",
            color: "white",
            display: "flex",
            flexDirection: "column",
          }}
          onClick={handleDrawerClose}
        >
          {navigateItems.map((item) => (
            <ListItem
              button
              onClick={() => navigate(item.route)}
              key={item.id}
              disablePadding
              sx={{
                flexDirection: "column",
                mt: "3vh",
              }}
            >
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#eee" },
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#FCFCFC",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
