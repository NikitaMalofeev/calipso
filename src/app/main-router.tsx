import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/main";
import { PromotePage } from "../pages/promote";
import { VacancyPage } from "../pages/vacancy";
import { ProductionPage } from "../pages/production";
import { NewsPage } from "../pages/news";
import { AboutPage } from "../pages/about";
import { CategoryLayout } from "../shared/ui/category-layout";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      {/* Main area */}
      <Route path={"/"} element={<MainPage />}>
      </Route>

       {/* Category area */}
       <Route path="/category" element={<CategoryLayout/>}>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="water" element={<AboutPage />}></Route>
          <Route path="production" element={<ProductionPage />}></Route>
          <Route path="services" element={<ProductionPage />}></Route>
          <Route path="promote" element={<PromotePage />}></Route>
          <Route path="sertificates" element={<NewsPage />}></Route>
          <Route path="news" element={<NewsPage />}></Route>
          <Route path="vacancy" element={<VacancyPage />}></Route>

        </Route>
      {/* Redirects */}
    </Routes>
  );
};

export { MainRouter };
