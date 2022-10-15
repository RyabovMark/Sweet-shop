import React from 'react';
import Main from "./pages/Main";
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Cart from "./pages/Cart";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App