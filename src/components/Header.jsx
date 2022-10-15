import React, { useEffect } from "react";
import {
  AppBar,
  Badge,
  Box,
  CssBaseline,
  Grid,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuList from "./MenuList";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { menuList } from "../data/Data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/actions";

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setActiveSideBar } = useActions();
  const { cart, activeSideBar } = useSelector((state) => state.projectSlice);

  const scroller = (to) => {
    const el = document.getElementById(to);
    el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (to) => {
    if (location.pathname === "/Sweet-shop") {
      scroller(to);
    } else {
      new Promise((resolve) => resolve(navigate("/Sweet-shop"))).finally(() =>
        scroller(to)
      );
    }
  };

  const HideOnScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1400) {
        setActiveSideBar(true);
      } else {
        setActiveSideBar(false);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CssBaseline>
      <HideOnScroll {...props}>
        <AppBar
          id="header"
          position="sticky"
          sx={{
            height: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            {activeSideBar ? (
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <MenuList />
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: "30px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  onemorecake
                </Typography>
                {location.pathname !== "/cart" && (
                  <IconButton disabled={cart.length === 0}>
                    <Link to="cart">
                      <Badge badgeContent={cart.length} color="info">
                        <LocalMallOutlinedIcon
                          fontSize="large"
                          sx={{ color: "custom.black" }}
                        />
                      </Badge>
                    </Link>
                  </IconButton>
                )}
              </Box>
            ) : (
              <Grid container>
                {menuList.map((item) => (
                  <Grid
                    item
                    key={item.id}
                    xs={1.75}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => scrollTo(item?.scroll)}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        fontSize: `${
                          item.title === "onemorecake" ? "30px" : "20px"
                        }`,
                        textTransform: `${
                          item.title === "onemorecake"
                            ? "uppercase"
                            : "capitalaze"
                        }`,
                        cursor: `${
                          item.title === "onemorecake" ? "" : "pointer"
                        }`,
                        fontWeight: 700,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                ))}
                <Grid
                  item
                  xs={1.5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {location.pathname !== "/cart" && (
                    <IconButton disabled={cart.length === 0}>
                      <Link to="cart">
                        <Badge badgeContent={cart.length} color="info">
                          <LocalMallOutlinedIcon
                            fontSize="large"
                            sx={{ color: "custom.black" }}
                          />
                        </Badge>
                      </Link>
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </CssBaseline>
  );
};

export default Header;
