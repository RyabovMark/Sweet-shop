import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { deliveryTerms, paymentTerms } from "../data/Data";

const DeliveryAndPay = () => {
  return (
    <Box id="delivery and pay">
      <Box sx={{ mb: { xs: "50px", md: "100px" } }}>
        <Typography
          textAlign="center"
          fontWeight={800}
          sx={{
            fontSize: { xs: "25px", md: "30px" },
            mb: { xs: "20px", md: "30px" },
          }}
        >
          Стоимость и условия доставки
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            fontSize: { xs: "15px", md: "20px" },
            mb: "40px",
          }}
        >
          Доставка и самовывоз осуществляется ежедневно с 09:00 до 21:00
          <br />
          по Москве и Московской области
        </Typography>
        <Grid container rowSpacing="30px">
          {deliveryTerms.map((item) => (
            <Grid item key={item.id} xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  px: "50px",
                }}
              >
                <Typography
                  textAlign="left"
                  fontWeight={800}
                  sx={{
                    fontSize: { xs: "20px", md: "25px" },
                    mb: "20px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  textAlign="left"
                  sx={{
                    flex: "1 0 auto",
                    fontSize: { xs: "15px", md: "20px" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mb: { xs: "50px", md: "100px" } }}>
        <Box mb="40px">
          <Typography
            textAlign="center"
            fontWeight={800}
            sx={{
              fontSize: { xs: "25px", md: "30px" },
              mb: { xs: "20px", md: "30px" },
            }}
          >
            Оплата
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              fontSize: { xs: "15px", md: "20px" },
              mb: "40px",
            }}
          >
            При заказе свыше 5 000₽
            <br />
            заказ принимается по 50% предоплате
          </Typography>
        </Box>
        <Grid container>
          {paymentTerms.map((item) => (
            <Grid item key={item.id} xs={6}>
              <Box mx="auto">
                <Typography
                  fontWeight={800}
                  sx={{
                    fontSize: { xs: "20px", md: "25px" },
                    mb: { xs: "10px", md: "20px" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "20px" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeliveryAndPay;
