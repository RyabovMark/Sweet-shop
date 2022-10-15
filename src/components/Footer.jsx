import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { footerIcon, menuList } from "../data/Data";

const Footer = () => {
  const scroller = (to) => {
    const el = document.getElementById(to);
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box aria-label="footer">
      <Box
        display="flex"
        flexDirection="column"
        bgcolor="custom.black"
        sx={{ py: { xs: "15px", md: "30px" } }}
      >
        <Grid
          container
          mb="40px"
          display="flex"
          alignItems="center"
          sx={{
            rowGap: { xs: "15px", md: "30px" },
            my: { xs: "15px", md: "30px" },
          }}
        >
          {menuList
            .filter((item) => item.title !== "onemorecake")
            .map((item) => (
              <Grid
                item
                xs={12}
                md={2.4}
                key={item.id}
                onClick={() => scroller(item?.scroll)}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "20px" },
                    cursor: "pointer",
                    fontWeight: 500,
                    textAlign: "center",
                    color: "custom.white",
                  }}
                >
                  {item.title}
                </Typography>
              </Grid>
            ))}
        </Grid>
        <Typography
          sx={{
            fontSize: { xs: "15px", md: "20px" },
            fontWeight: 500,
            textAlign: "center",
            color: "custom.white",
            mb: "20px",
          }}
        >
          © 2022 - onemorecakemoscow@example.com
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "15px", md: "20px" },
            fontWeight: 500,
            textAlign: "center",
            color: "custom.white",
            mb: "20px",
          }}
        >
          Политика конфиденциальности
        </Typography>
        <Box mx="auto">
          <Grid container>
            {footerIcon.map((item) => (
              <Box
                px="15px"
                key={item.id}
                borderRadius="30px"
                bgcolor="primary.main"
                m
              >
                <img
                  className="h-14"
                  key={item.id}
                  src={item.logo}
                  alt="paymentSystem"
                />
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
