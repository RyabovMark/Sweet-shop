import "./index.css";
import App from "./App";
import React from "react";
import {store} from "./app/store";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {theme} from "./theme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);
