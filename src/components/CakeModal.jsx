import React, {useState} from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import {useActions} from "../hooks/actions";
import {
  filling,
  taste,
  weightCake,
  quantityCupcake
} from "../data/Data";
import Nutritional from "./Nutritional";

const CakeModal = ({item, setModal}) => {
  const [cartItem, setCartItem] = useState({
    id: item.id,
    name: item.name,
    type: item.type,
    image: item.imageUrl,
    price: item.price,
    cakeWeight: null,
    cupcakeQuantity: null,
    cakeTaste: '',
    cakeFilling: '',
    commentField: '',
  })
  let costs = item.type === 'cake' || item.type === 'cheese' ?
    cartItem.cakeWeight : cartItem.cupcakeQuantity;
  let price = costs * cartItem.price;

  const width = document.getElementById('container').offsetWidth * 0.9

  const {addToCart} = useActions()

  const handlerWish = (event) => {
    setCartItem({...cartItem, commentField: event.target.value})
  }

  const handleCartItemSet = (event, value) => {
    setCartItem({...cartItem, [event]: value})
  }

  const handlerCart = () => {
    addToCart({...cartItem, totalPrice: price,})
    setModal(false)
  }

  return (
    <Box position='absolute' top='50%' left='50%'
         sx={{
           transform: 'translate(-50%, -50%)',
           width,
           p: {xs: '10px', md: '30px'}
         }} bgcolor='primary.main'
    >
      <Box display='flex' sx={{
        flexDirection: {xs: 'column', md: 'row'},
        justifyContent: {md: 'space-between'},
        alignItems: {xs: 'center', md: 'flex-start'}
      }}>
        <Box sx={{width: {xs: '90%', md: '38%'}}}>
          <img className='w-full' src={item.imageUrl} alt='modalImage'/>
        </Box>
        <Box display='flex' flexDirection='column'
             sx={{width: {xs: '90%', md: '58%'}}}>
          <Typography sx={{
            fontSize: {
              xs: '25px',
              md: '35px',
            },
            mb: {xs: '10', md: '20px'},
            fontWeight: 700,
          }}>{item.name}</Typography>
          <Nutritional props={item.nutritional}/>
          <Typography sx={{
            fontSize: {
              xs: '18px',
              md: '22px',
            },
            fontWeight: 700,
          }}>{item.type === 'cake' || item.type === 'cheese' ? 'Вес:' : 'Количество:'} < /Typography>
          <Box width='100%'>
            <Grid container
                  sx={{mb: {xs: '10px', md: '20px'}, width: '100%'}}>
              {item.type === 'cake' || item.type === 'cheese' ?
                <>
                  {weightCake.map(item => (
                    <Grid item xs={2.4} key={item.id}>
                      <Button
                        onClick={() => handleCartItemSet('cakeWeight', item.value)}
                        sx={{
                          bgcolor: 'custom.white',
                          color: item.value === cartItem.cakeWeight ? '#C3A082' : '#000',
                          fontSize: {xs: '15px', md: '20px'}
                        }}>{item.title}</Button>
                    </Grid>
                  ))}
                </>
                :
                <>
                  {quantityCupcake.map(item => (
                    <Grid item xs={2.4} key={item.id}>
                      <Button
                        onClick={() => handleCartItemSet('cupcakeQuantity', item.value)}
                        sx={{
                          bgcolor: 'custom.white',
                          color: item.value === cartItem.cupcakeQuantity ? '#C3A082' : '#000',
                          fontSize: '20px'
                        }}>{item.title}</Button>
                    </Grid>
                  ))}
                </>
              }
            </Grid>
          </Box>
          <Typography sx={{
            fontSize: {
              xs: '18px',
              md: '22px',
            },
            fontWeight: 700,
          }}>Вкус</Typography>
          <Grid container sx={{mb: {xs: '10px', md: '20px'},}}>
            {taste.map(item => (
              <Grid item xs={3} key={item.id}>
                <Button
                  onClick={() => handleCartItemSet('cakeTaste', item.title)}
                  sx={{
                    bgcolor: 'custom.white',
                    color: item.title === cartItem.cakeTaste ? '#C3A082' : '#000',
                    fontSize: {xs: '15px', md: '20px'}
                  }}>{item.title}</Button>
              </Grid>
            ))}
          </Grid>
          <Typography sx={{
            fontSize: {
              xs: '18px',
              md: '22px',
            },
            fontWeight: 700,
          }}>Начинка</Typography>
          <Grid container sx={{mb: {xs: '10', md: '20px'}}}>
            {filling.map(item => (
              <Grid item xs={2.4} key={item.id}>
                <Button
                  onClick={() => handleCartItemSet('cakeFilling', item.title)}
                  sx={{
                    fontSize: {xs: '15px', md: '20px'},
                    bgcolor: 'custom.white',
                    color: item.title === cartItem.cakeFilling ? '#C3A082' : '#000',
                  }}>{item.title}</Button>
              </Grid>
            ))}
          </Grid>
          <Typography sx={{
            fontSize: {
              xs: '18px',
              md: '22px',
            },
            fontWeight: 700,
          }}>Ваши пожелания</Typography>
          <TextField value={cartItem.commentField}
                     rows={3}
                     multiline
                     onChange={handlerWish}
                     placeholder='Напишите пожелания к заказу'/>
          <Box sx={{mt: {xs: '10', md: '20px'}}}>
            {item.type === 'cake' || item.type === 'cheese' ?
              <Button disabled={!cartItem.cakeWeight && true} onClick={() => {
                handlerCart()
              }}><Typography>Купить {cartItem.cakeWeight && ` за ${cartItem.cakeWeight * item.price}₽`}
              </Typography></Button>
              :
              <Button disabled={!cartItem.cupcakeQuantity && true}
                      onClick={() => {
                        handlerCart()
                      }}><Typography>Купить {cartItem.cupcakeQuantity && ` за ${cartItem.cupcakeQuantity * item.price}₽`}</Typography></Button>
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


export default CakeModal