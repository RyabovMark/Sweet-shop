import React, {useState} from 'react';
import {
  Backdrop,
  Box,
  Button, CircularProgress, Divider,
  Grid, IconButton,
  Paper,
  Stack,
  TextField, Tooltip,
  Typography
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import {personalData, location, timeDelivery} from "../data/Data";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/actions";
import {useAddOrderMutation} from "../services/cakeApi";
import {useNavigate} from "react-router-dom";

const Item = ({children}) => {
  return (
    <Paper elevation={3}>
      {children}
    </Paper>
  )
}

const Cart = () => {
  const navigate = useNavigate()
  const {removeFromCart, clearCart} = useActions()
  const [addOrder, {isLoading}] = useAddOrderMutation()
  const cart = useSelector(state => state.projectSlice.cart)
  const [customer, setCustomer] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    mail: '',
    city: '',
    house: '',
    porch: '',
    street: '',
    flat: '',
    flatPhone: '',
    date: '',
    time: '',
    payVariants: '',
    comments: '',
  })

  const orderValue = cart.reduce((sum, current) => sum + current.totalPrice, 0)

  const handlerTopSection = (event) => {
    setCustomer({...customer, [event.target.name]: event.target.value})
  }

  const handlerOrder = async () => {
    await addOrder({...customer, product: cart})
    if (!isLoading)
      navigate('..')
    clearCart([])
  }

  return (
    <Box width='70%' mx='auto' mb={{xs: '50px', md: '100px'}}>
      <Backdrop open={isLoading} sx={{color: 'secondary.main', zIndex: 9999}}>
        <CircularProgress color='inherit'/>
      </Backdrop>
      <Box sx={{mb: {xs: '30px', md: '60px'}}}>
        <Typography textAlign='center' fontWeight={800}
                    sx={{
                      fontSize: {xs: '25px', md: '30px'},
                      mt: {xs: '50px', md: '100px'},
                      mb: {xs: '20px', md: '30px'},
                    }}>Оформление заказа</Typography>
        <Typography textAlign='center'
                    sx={{
                      fontSize: {xs: '20px', md: '25px'},
                      mb: {xs: '25px', md: '40px'}
                    }}>Личные данные</Typography>
        <Grid container spacing={2}>
          {personalData.map(item => (
            <Grid item xs={6} key={item.id} display='flex'
                  justifyContent='center'>
              <TextField name={item.value} variant='outlined' label={item.title}
                         onChange={handlerTopSection} sx={{width: '100%'}}/>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{mb: {xs: '30px', md: '60px'}}}>
        <Typography textAlign='center'
                    sx={{
                      fontSize: {xs: '20px', md: '25px'},
                      mb: {xs: '25px', md: '40px'}
                    }}>Адрес доставки</Typography>
        <Grid container spacing={2}>
          {location.map(item => (
            <Grid item xs={6} key={item.id} display='flex'
                  md={item.title === 'Улица' ? 6 : 3} justifyContent='center'>
              <TextField name={item.value} variant='outlined'
                         label={item.title}
                         onChange={handlerTopSection} sx={{width: '100%'}}/>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{mb: {xs: '30px', md: '60px'}}}>
        <Typography textAlign='center'
                    sx={{
                      fontSize: {xs: '20px', md: '25px'},
                      mb: {xs: '25px', md: '40px'}
                    }}>Дата и время доставки</Typography>
        <Grid container spacing={2}>
          {timeDelivery.map(item => (
            <Grid item xs={6}
                  md={item.title === 'Способ оплаты' || item.title === 'Комментарии к доставке' ? 6 : 3}
                  key={item.id} display='flex'
                  justifyContent='center'>
              <TextField name={item.value} variant='outlined' label={item.title}
                         onChange={handlerTopSection} sx={{width: '100%'}}
                         multiline
                         rows={item.title === 'Комментарии к доставке' ? 4 : 1}

              />
            </Grid>
          ))}
          <Grid item xs={6}>
            <Typography><span className='underline-offset-3'>*</span>Бесплатная
              доставка пр заказе от
              5000₽</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mb='30px'>
        <Typography textAlign='center'
                    sx={{
                      fontSize: {xs: '20px', md: '25px'},
                      mb: {xs: '25px', md: '40px'}
                    }}>Ваш заказ</Typography>
        <Stack spacing={1}>
          {cart.map(item => (
            <Item key={item.id}>
              <Box display='flex' justifyContent='space-between' p='15px'>
                <Box>
                  <Typography sx={{
                    fontSize: {
                      sx: '20px',
                      md: '25px'
                    }, fontWeight: 600
                  }}>{item.name}, {item.type === 'cake' || item.type === 'cheese' ? `${item.cakeWeight} кг.` : `${item.cupcakeQuantity} шт.`}</Typography>
                  <Typography sx={{
                    fontSize: {
                      sx: '15px',
                      md: '20px'
                    }, color: 'custom.mediumGrey'
                  }}>{item.cakeFilling && `Начинка: ${item.cakeFilling}`}</Typography>
                  <Typography sx={{
                    fontSize: {
                      sx: '15px',
                      md: '20px'
                    }, color: 'custom.mediumGrey'
                  }}>{item.cakeTaste && `Вкус: ${item.cakeTaste}`}</Typography>
                </Box>
                <Box display='flex' flexDirection='column'
                     justifyContent='space-between'>
                  <Typography sx={{
                    fontSize: {
                      sx: '15px',
                      md: '20px'
                    }, fontWeight: 600
                  }}>{item.totalPrice}₽</Typography>
                  <Tooltip title='Удалить из корзины'>
                    <IconButton onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon color='#999'/>
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Item>
          ))}
        </Stack>
      </Box>
      {orderValue < 5000 &&
        <Box mb='30px'>
          <Box display='flex' justifyContent='space-between'>
            <Typography sx={{
              fontSize: {
                sx: '20px',
                md: '25px'
              }, fontWeight: 600
            }}>Доставка</Typography>
            <Typography sx={{
              fontSize: {
                sx: '15px',
                md: '20px'
              }, fontWeight: 600
            }}>300₽</Typography>
          </Box>
          <Divider/>
        </Box>}
      <Box mb='30px'>
        <Box display='flex' justifyContent='space-between'>
          <Typography sx={{
            fontSize: {
              sx: '20px',
              md: '25px'
            }, fontWeight: 600
          }}>Итого</Typography>
          <Typography sx={{
            fontSize: {
              sx: '15px',
              md: '20px'
            }, fontWeight: 600
          }}>{orderValue}₽</Typography>
        </Box>
        <Divider/>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Button onClick={() => handlerOrder()}>Оформить заказ</Button>
      </Box>
    </Box>
  );
}

export default Cart