import React, { useState } from "react";
import "./Reviews.css";
import { Box, IconButton, Typography } from "@mui/material";
import { reviews } from "../data/Data";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Reviews = () => {
  const [counter, setCounter] = useState(1);
  const maxStep = reviews.length;

  const handleNext = () => {
    if (counter !== maxStep) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handlePrev = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    } else {
      setCounter(maxStep);
    }
  };

  return (
    <Box id="reviews" sx={{ mb: { xs: "50px", md: "100px" } }}>
      <Typography
        textAlign="center"
        fontWeight={800}
        sx={{
          fontSize: { xs: "25px", md: "30px" },
          mb: { xs: "20px", md: "30px" },
        }}
      >
        Что о нас говорят
      </Typography>
      <Box width="60%" mx="auto">
        {reviews.map((item) => (
          <Box
            key={item.id}
            className={counter === item.id ? "show" : "not-show"}
          >
            <Box display="flex" justifyContent="space-between" mb="20px">
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    md: "20px",
                  },
                  fontStyle: "italic",
                }}
              >
                {item.date}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "20px" },
                  fontWeight: 700,
                }}
              >
                {item.reviewer}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  md: "20px",
                },
              }}
            >
              {item.review}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box display="flex" width="150px" mx="auto" alignItems="center">
        <IconButton onClick={handlePrev}>
          <KeyboardArrowLeft fontSize="large" />
        </IconButton>
        <Typography textAlign="center">
          {counter}/{maxStep}
        </Typography>
        <IconButton onClick={handleNext}>
          <KeyboardArrowRight fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Reviews;
