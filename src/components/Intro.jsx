import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Intro = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(https://www.accademia.me/site/uploads/2019/08/katarzyna-grabowska-V15j7K48MUE-unsplash-1-scaled.jpg?id=25654)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: { xs: "350px", md: "700px" },
        mb: { xs: "50px", md: "100px" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "15%",
          transform: "translateY(-50%)",
          zIndex: 999,
          bgcolor: "primary.main",
          p: { xs: "15px", md: "20px 70px 20px 30px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "30px" },
            fontWeight: 800,
          }}
        >
          Десерты ручной работы
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px" },
            fontStyle: "italic",
            fontWeight: 800,
            my: { xs: "10px", md: "20px" },
          }}
        >
          Сделано с любовью для ваших душевных <br />
          событий...
        </Typography>
        <Button
          sx={{
            color: "custom.black",
            bgcolor: "custom.white",
            border: "1px solid #999999",
            fontWeight: 800,
            fontSize: "20px",
          }}
        >
          Попробовать
        </Button>
      </Box>
    </Box>
  );
};

export default Intro;
