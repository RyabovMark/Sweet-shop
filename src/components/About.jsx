import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {aboutItems} from "../data/Data";

const About = () => {

  return (
    <Box id='about'>
      <Box sx={{mb: {xs: '50px', md: '100px'}}}>
        <Typography textAlign='center' fontWeight={800}
                    sx={{
                      fontSize: {xs: '25px', md: '30px'},
                      mb: {xs: '20px', md: '30px'}
                    }}>O
          «ONEMORECAKE»</Typography>
        <Typography textAlign='center'
                    sx={{
                      fontSize: {xs: '15px', md: '20px'},
                      mb: '40px'
                    }}>
          Мы печем и доставляем по все Москве маленькие радости, которыми<br/>
          вы можете порадовать своего ребенка на день рождения,<br/>
          подарить любимому человеку и угостить друзей
        </Typography>
        <Grid container rowSpacing='30px'>
          {aboutItems.map(item => (
            <Grid item key={item.id} xs={6} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  px: '15px',
                }}>
                <Box mb='20px'>
                  <img className='mx-auto h-[100px]' src={item.image}
                       alt='about'/>
                </Box>
                <Typography textAlign='center' fontWeight={800}
                            sx={{
                              fontSize: {xs: '20px', md: '25px'},
                              mb: {xs: '10px', md: '20px'}
                            }}>{item.title}</Typography>
                <Typography textAlign='center'
                            sx={{
                              flex: '1 0 auto',
                              fontSize: {xs: '15px', md: '20px'},
                            }}>{item.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default About