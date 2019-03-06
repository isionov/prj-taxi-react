import React from "react";
import ReactDOM from "react-dom";
import getStore from "./store.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RootRouter from "./components/RootRouter";
import "typeface-roboto";

const store = getStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <RootRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
