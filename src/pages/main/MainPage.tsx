import React from "react";
import { Header } from "../../shared/ui/header";
import { BrandCard } from "../../widgets/BrandCard/BrandCard";
import { PreorderCard } from "../../widgets/PreorderCard.tsx";
import { initialOverview } from "../../shared/config/initialPreorderOverview";

const MainPage: React.FC = () => {
  return (
    <>
    <Header/>
    <BrandCard/>
    {initialOverview.map((item) => (
      <PreorderCard key={item.id} title={item.name} description={item.description} buttonColorStyle={item.btnColor}/>
    ))}
    </>
  );
};

export { MainPage };
