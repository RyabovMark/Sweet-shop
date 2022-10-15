import React, {useRef, useState} from 'react';
import {useAddQuestionMutation} from '../services/cakeApi'
import {
  Backdrop,
  Box,
  Button,
  Chip, CircularProgress,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';

const QuestionSection = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');

  const [addQuestion, {isLoading}] = useAddQuestionMutation();

  const handleInputName = (event) => {
    setName(event.target.value)
  }

  const handleInputPhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
  }

  const handleInputDescription = (event) => {
    setDescription(event.target.value)
  }

  const onClickAddButton = async () => {
    await addQuestion({
      name,
      phoneNumber,
      description,
      exampleFile: '',
    })
    setName('');
    setPhoneNumber('');
    setDescription('')
  }

  return (
    <>
      <Backdrop open={isLoading} sx={{color: 'secondary.main', zIndex: 9999}}>
        <CircularProgress color='inherit'/>
      </Backdrop>
      <Box sx={{
        position: 'relative',
        backgroundImage: `url(https://www.dva-m.ru/wp-content/uploads/19303900_konditerskaya2_5743176.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left right',
        backgroundSize: 'cover',
        height: {xs: '600px', md: '900px'},
      }}>
        <Box position='absolute' top='50%' left='50%'
             sx={{
               transform: 'translate(-50%, -50%)',
               width: {xs: '80%', md: '40%', lg: '40%'},
               p: {xs: '20px', md: '40px'}
             }} bgcolor='primary.main'
        >
          <Box display='flex' flexDirection='column'>
            <Typography textAlign='center' fontWeight={800}
                        sx={{
                          fontSize: {xs: '25px', md: '30px'},
                          mb: {xs: '10px', md: '30px'}
                        }}>Торт по эскизу</Typography>
            <Typography textAlign='left' color='custom.mediumGrey'
                        sx={{
                          fontSize: {xs: '15px', md: '20px'},
                          mb: {xs: '10px', md: '30px'}
                        }}>Если вам не подошел ни один из тортов на нашем сайте,
              загрузите изображение торта, который хотите и мы сделаем для вас
              точно таким-же</Typography>
            <TextField label='Имя' onChange={handleInputName} value={name}
                       variant='outlined'
                       sx={{mb: {xs: '5px', md: '20px'}}}/>
            <TextField label='Телефон' onChange={handleInputPhoneNumber}
                       value={phoneNumber} variant='outlined'
                       sx={{mb: {xs: '5px', md: '20px'}}}/>
            <TextField label='Напишите комментарии к заказу'
                       onChange={handleInputDescription} value={description}
                       multiline rows={4}
                       variant='outlined'
                       sx={{mb: {xs: '5px', md: '20px'}}}/>
            <Box display='flex'
                 sx={{
                   mb: {xs: '5px', md: '20px'},
                   flexDirection: {xs: 'column', md: 'row'}
                 }}>
              <Tooltip
                title='На данный момент функция загрузки файлов недоступна'>
                <Chip icon={<PermMediaOutlinedIcon/>}
                      label='Загрузить фотографию'
                      variant='outlined'/>
              </Tooltip>
            </Box>
            <Button onClick={() => onClickAddButton()}
                    disabled={!(phoneNumber.length >= 12 && name.length >= 3)}>Отправить</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default QuestionSection