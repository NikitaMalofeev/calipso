import React from "react";
import { Routes, Route} from "react-router-dom";
import { MainPage } from "../pages/main";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      {/* Main area */}
      <Route path={"/main"} element={<MainPage />}>
        {/* <Route path="registration" element={</>} /> */}
      </Route>
      {/* Redirects */}
    </Routes>
  );
};

export { MainRouter };
