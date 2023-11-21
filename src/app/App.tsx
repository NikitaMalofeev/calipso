import React from "react";
import "./styles/App.scss";
import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./main-router";
import { Provider } from "react-redux";
import store from "../entities/store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
