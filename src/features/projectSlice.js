import { createSlice } from "@reduxjs/toolkit";

const LS_CART_KEY = "rck";

const initialState = {
  cart: JSON.parse(localStorage.getItem(LS_CART_KEY) ?? "[]"),
  activeSideBar: false,
};

export const projectSlice = createSlice({
  name: "projectSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem(LS_CART_KEY, JSON.stringify(state.cart));
    },
    clearCart: (state, action) => {
      state.cart = action.payload;
    },
    setActiveSideBar: (state, action) => {
      state.activeSideBar = action.payload;
    },
  },
});

export const projectSliceActions = projectSlice.actions;
export const projectSliceReducer = projectSlice.reducer;
