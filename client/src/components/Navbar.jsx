import React, { useState } from "react";
import {
  AppBar,
  Box,
  Grid,
  Link,
  Typography,
  MenuItem,
  Popover,
  IconButton,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import TrackerIcon from "../assets/tracker_icon.svg";
import AccountIcon from "../assets/account_icon.svg";
import LogoPath from "../assets/internship_tracker_logo.svg";

const pages = [
  {
    label: "Find an internship",
    link: "/search",
  },
  {
    label: "About",
    link: "/about",
  },
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar sx={{ p: 1, bgcolor: "background.dark" }}>
      <Grid container justifyContent="center">
        <Grid
          container
          item
          xl={8}
          lg={9}
          sm={10}
          xs={11}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link
            component={RouterLink}
            to="/"
            title="Internship Tracker Home Page"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            <img src={LogoPath} alt="Internship Tracker Logo" height="32" />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ p: 1, mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Popover
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                mt: 5,
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "background.dark",
                  width: 300,
                  p: 1,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                  <Link
                    component={RouterLink}
                    to={page.link}
                    underline="none"
                    color="text.main"
                  >
                    {page.label}
                  </Link>
                </MenuItem>
              ))}
            </Popover>
            <Link
              component={RouterLink}
              to="/"
              title="Internship Tracker Home Page"
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            >
              <img src={LogoPath} alt="Internship Tracker Logo" height="32" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                LinkComponent={RouterLink}
                key={page.link}
                onClick={handleCloseNavMenu}
                to={page.link}
                sx={{
                  ml: 3,
                  display: "block",
                }}
              >
                <Typography variant="navText">{page.label}</Typography>
              </Button>
            ))}
          </Box>
          <Box>
            <Button sx={{ p: 0 }}>
              <img src={TrackerIcon} alt="tracker" />
            </Button>
            <Button sx={{ p: 0 }}>
              <img src={AccountIcon} alt="account" />
            </Button>
          </Box>
          {/* TODO: add AuthContext
          {authUser ? (
            <Box>
              <Button sx={{ p: 0 }}>
                <img src={TrackerIcon} alt="tracker" />
              </Button>
              <Button sx={{ p: 0 }}>
                <img src={AccountIcon} alt="account" />
              </Button>
            </Box>
          ) : (
            <Box>
              <Button>
                <Typography variant="navText">Sign In</Typography>
              </Button>
              <Button
                variant="rounded"
                color="thai"
                sx={{
                  ml: { sx: 1, sm: 2 },
                  padding: { sx: ".3rem .6rem", sm: ".6rem 1.3rem" },
                }}
              >
                <Typography
                  variant="navText"
                  color="white"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  Create an account
                </Typography>
                <Typography
                  variant="navText"
                  color="white"
                  sx={{ display: { xs: "flex", sm: "none" } }}
                >
                  Sign Up
                </Typography>
              </Button>
            </Box>
          )} */}
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
