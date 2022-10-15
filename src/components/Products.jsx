import React, {useState} from 'react';
import {Box, Button, ButtonGroup, Grid, Typography} from "@mui/material";
import {useGetFilteredDataQuery} from "../services/cakeApi";
import CardItem from "./CardItem";
import SkeletonItem from "./SkeletonItem";
import {filterItems} from "../data/Data";

const Products = () => {
  const [countPerPage, setCountPerPage] = useState(6)
  const [filterField, setFilterField] = useState('')

  const {
    data,
    isLoading,
    isError
  } = useGetFilteredDataQuery([filterField, countPerPage])

  const clickCountHandler = () => {
    setCountPerPage(countPerPage + 6);
  }

  const btnCountDisable = () => {
    return countPerPage > data?.length
  }

  const clickFilterField = (field) => {
    setCountPerPage(6)
    setFilterField(field);
  }

  return (
    <Box display='flex' flexDirection='column' alignItems='center'
         sx={{mx: '-20px', mb: {xs: '50px', md: '100px'}}} id='products'>
      <Typography textAlign='center' fontWeight={800}
                  sx={{
                    fontSize: {xs: '25px', md: '30px'},
                    mb: {xs: '20px', md: '35px'}
                  }}>Наша продукция</Typography>
      <ButtonGroup variant='outlined'>
        {filterItems.map(item => (
          <Button key={item.id}
                  onClick={() => clickFilterField(item.field)}
                  sx={{
                    bgcolor: 'custom.white',
                    color: item.field === filterField ? '#C3A082' : '#000',
                    fontSize: '20px'
                  }}>{item.title}</Button>
        ))}
      </ButtonGroup>
      {isError && <Typography variant='h4' textAlign='center'>Что-то пошло не
        так</Typography>}
      <Grid container>
        {
          isLoading ?
            Array.from({length: 6}).map((_, index) => (
              <Grid item key={index} xs={12} md={4}>
                <SkeletonItem/>
              </Grid>
            )) :
            data?.map(item => (
              <Grid item key={item?.id} xs={12} md={4}>
                <CardItem item={item}/>
              </Grid>
            ))}
      </Grid>
      <Button disabled={btnCountDisable()} onClick={() => clickCountHandler()}
              sx={{
                color: 'custom.black',
                bgcolor: 'custom.white',
                mt: '20px',
                border: '1px solid #999999',
                fontWeight: 800,
                fontSize: '20px'
              }}>Показать еще</Button>
    </Box>
  );
}

export default Products