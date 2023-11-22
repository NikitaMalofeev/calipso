import React, {useState, useEffect, useRef} from "react";
import { Header } from "../../shared/ui/header";
import { BrandCard } from "../../widgets/BrandCard/BrandCard";
import { PreorderCard } from "../../widgets/PreorderCard.tsx";
import { initialOverview } from "../../shared/config/initialPreorderOverview";
import { CatalogModal } from "../../shared/ui/catalog-modal";
import { OrderModal } from "../../shared/ui/order-modal/OrderModal";
import { MyModal } from "../../shared/ui/my-modal";

const MainPage: React.FC = () => {
  const [isVisibleCatalogModal, setIsVisibleCatalogModal] = useState(false);
  const showCatalogModal = () => setIsVisibleCatalogModal(true);
  const hideCatalogModal = () => setIsVisibleCatalogModal(false);
  
  const [isVisibleOrderModal, setIsVisibleOrderModal] = useState(false);
  const showOrderModal = () => setIsVisibleOrderModal(true);
  const hideOrderModal = () => setIsVisibleOrderModal(false);

  const [isVisibleDeliveryModal, setIsVisibleDeliveryModal] = useState(false);
  const showDeliveryModal = () => setIsVisibleDeliveryModal(true);
  const hideDeliveryModal = () => setIsVisibleDeliveryModal(false);

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
    <CatalogModal title="Каталог" isShowModal={isVisibleCatalogModal} handleClose={hideCatalogModal} isDepthModal={false} handleShowOrderModal={showOrderModal}/>
    <OrderModal title="Заказ" isShowModal={isVisibleOrderModal} handleClose={hideOrderModal} isDepthModal={true} handleShowDeliveryModal={showDeliveryModal}/>
    {/* DeliveryModal жду пока придумаю как засунуть все в одну модалку*/}
    <MyModal title="Доставка" isShowModal={isVisibleDeliveryModal} handleClose={hideDeliveryModal} isDepthModal={true}/>
    </>
  );
};

export { MainPage };
