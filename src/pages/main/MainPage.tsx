import React, {useState, useEffect, useRef} from "react";
import { Header } from "../../shared/ui/header";
import { BrandCard } from "../../widgets/BrandCard/BrandCard";
import { PreorderCard } from "../../widgets/PreorderCard.tsx";
import { initialOverview } from "../../shared/config/initialPreorderOverview";
import { CatalogModal } from "../../shared/ui/catalog-modal";

const MainPage: React.FC = () => {
  const [isVisibleCatalogModal, setIsVisibleCatalogModal] = useState(false);
  const showCatalogModal = () => setIsVisibleCatalogModal(true);
  const hideCatalogModal = () => setIsVisibleCatalogModal(false);

  //FIXME переработать обработчик на что-то более локаничное и по хорошему перенести со страницы
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = isVisibleCatalogModal ? 'hidden' : 'auto';
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisibleCatalogModal]);

  return (
    <>
    <Header showCatalogModal={showCatalogModal}/>
    <BrandCard/>
    {initialOverview.map((item) => (
      <PreorderCard key={item.id} title={item.name} description={item.description}/>
    ))}

    {/*Модальные окна */}
    <CatalogModal title="Каталог" isShowModal={isVisibleCatalogModal} handleClose={hideCatalogModal} isDepthModal={false}/>
    </>
  );
};

export { MainPage };
