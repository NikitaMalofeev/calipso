import React from "react";
import "./styles/App.scss";
import "./styles/Normalize.scss"
import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./main-router";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
