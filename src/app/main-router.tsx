import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/main";
import { PromotePage } from "../pages/promote";
import { VacancyPage } from "../pages/vacancy";
import { ProductionPage } from "../pages/production";
import { NewsPage } from "../pages/news";
import { AboutPage } from "../pages/about";
import { CategoryLayout } from "../shared/ui/kit/category-layout";
import { AboutWaterPage } from "../pages/about-water";
import { ServicesPage } from "../pages/services";
import { CertificatesPage } from "../pages/certificates";

const MainRouter: React.FC = () => {
  return (
    <Routes>
      {/* Main area */}
      <Route path={"/"} element={<MainPage />}>
      </Route>

       {/* Category area */}
       <Route path="/category" element={<CategoryLayout/>}>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="water" element={<AboutWaterPage />}></Route>
          <Route path="production" element={<ProductionPage />}></Route>
          <Route path="services" element={<ServicesPage />}></Route>
          <Route path="promote" element={<PromotePage />}></Route>
          <Route path="certificates" element={<CertificatesPage />}></Route>
          <Route path="news" element={<NewsPage />}></Route>
          <Route path="vacancy" element={<VacancyPage />}></Route>

        </Route>
      {/* Redirects */}
    </Routes>
  );
};

export { MainRouter };
