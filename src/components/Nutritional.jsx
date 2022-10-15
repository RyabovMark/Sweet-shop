import React from "react";
import { Box, Typography } from "@mui/material";

const Nutritional = ({ props }) => {
  return (
    <Box mb="20px" sx={{ display: { xs: "none", md: "block" } }}>
      <Typography
        sx={{
          fontSize: {
            xs: "18px",
            md: "22px",
            fontWeight: 700,
          },
        }}
      >
        Пищевая ценность на 100г.:
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "15px",
            md: "20px",
          },
        }}
      >
        Калорийность: {props?.calories || 0} Ккал
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "15px",
            md: "20px",
          },
        }}
      >
        Углеводы: {props?.carbs || 0} г.
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "15px",
            md: "20px",
          },
        }}
      >
        Жиры: {props?.fat || 0} г.
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "15px",
            md: "20px",
          },
        }}
      >
        Белки: {props?.protein || 0} г.
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "15px",
            md: "20px",
          },
        }}
      >
        Соль: {props?.salt || 0}{" "}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "15px",
            md: "20px",
          },
        }}
      >
        Сахар: {props?.sugars || 0} г.
      </Typography>
    </Box>
  );
};

export default Nutritional;
