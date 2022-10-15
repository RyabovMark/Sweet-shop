import React, { useState } from "react";
import { Box, Button, DialogContent, Modal, Typography } from "@mui/material";
import { useActions } from "../hooks/actions";
import { useSelector } from "react-redux";
import CakeModal from "./CakeModal";

const CardItem = ({ item }) => {
  const [modal, setModal] = useState(false);
  const { removeFromCart } = useActions();
  const { cart } = useSelector((state) => state.projectSlice);
  let findItem = cart.find((i) => i.id === item.id);

  const handlerOpenModal = () => {
    setModal(true);
  };

  const handlerClickRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <>
      <Modal open={modal} onClose={() => setModal(false)}>
        <DialogContent>
          <CakeModal item={item} setModal={setModal} />
        </DialogContent>
      </Modal>
      <Box
        display="flex"
        flexDirection="column"
        mx="auto"
        height="100%"
        p="20px"
      >
        <Box minHeight="310px">
          <img src={item.imageUrl} alt="cardPhoto" />
        </Box>
        <Typography
          fontWeight={800}
          mb="20px"
          sx={{
            fontSize: {
              xs: "20px",
              md: "25px",
            },
          }}
        >
          {item.name}
        </Typography>
        <Typography
          sx={{
            flex: "1 0 auto",
            fontSize: { xs: "15px", md: "20px" },
            mb: "10px",
          }}
        >
          {item.description}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "15px",
              md: "20px",
            },
          }}
        >
          Вес: <b>от {item.weight}кг.</b>
        </Typography>
        <Typography sx={{ fontSize: { xs: "15px", md: "20px" }, mb: "10px" }}>
          Цена от: <b>{item.price}₽</b>
        </Typography>
        <Box>
          {!findItem && (
            <Button onClick={handlerOpenModal}>Добавить в корзину</Button>
          )}
          {findItem && (
            <Button onClick={handlerClickRemove}>Удалить из корзины</Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default CardItem;
