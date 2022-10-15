import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import {Box, Container} from "@mui/material";
import UpButton from "../components/UpButton";

const Layout = () => {

  return (
    <Container maxWidth='xl' id='container'
               sx={{
                 display: 'flex',
                 flexDirection: 'column',
                 height: '100vh',
                 minWidth: '414px'
               }}>
      <Header/>
      <Box aria-label='outlet-container'
           sx={{flex: '1 1 auto', position: 'relative'}}>
        <Outlet/>
        <UpButton/>
      </Box>
      <Footer/>
    </Container>
  );
}

export default Layout