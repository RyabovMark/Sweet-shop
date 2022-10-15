import React from 'react';
import {Box} from "@mui/material";
import Intro from "../components/Intro";
import About from "../components/About";
import DeliveryAndPay from "../components/DeliveryAndPay";
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";
import Products from "../components/Products";
import QuestionSection from "../components/QuestionSection";

const Main = () => {

  return (
    <Box display='flex' flexDirection='column' justifyContent='space-between'>
      <Intro/>
      <Products/>
      <About/>
      <DeliveryAndPay/>
      <Reviews/>
      <Contacts/>
      <QuestionSection/>
    </Box>
  );
}

export default Main