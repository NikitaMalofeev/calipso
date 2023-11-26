import React, {useState, useEffect} from "react";
import { Header } from "../../shared/ui/header";
import { BrandCard } from "../../widgets/BrandCard/BrandCard";
import { PreorderCard } from "../../widgets/PreorderCard.tsx";
import { initialOverview } from "../../shared/config/initialPreorderOverview";
import { CatalogModal } from "../../shared/ui/catalog-modal";
import { OrderModal } from "../../shared/ui/order-modal/OrderModal";
import { DeliveryModal } from "../../shared/ui/delivery-modal";
import { initialProducts } from "../../shared/config/initialProducts";
import { MyModal } from "../../shared/ui/my-modal";

const MainPage: React.FC = () => {

  const [isVisibleCatalogModal, setIsVisibleCatalogModal] = useState(false);
  const showCatalogModal = () => {
    setIsVisibleCatalogModal(true)
  };
  const hideCatalogModal = () => setIsVisibleCatalogModal(false);
  
  const [isVisibleOrderModal, setIsVisibleOrderModal] = useState(false);
  const showOrderModal = () => setIsVisibleOrderModal(true);
  const hideOrderModal = () => setIsVisibleOrderModal(false);

  const [isVisibleDeliveryModal, setIsVisibleDeliveryModal] = useState(false);
  const showDeliveryModal = () => setIsVisibleDeliveryModal(true);
  const hideDeliveryModal = () => setIsVisibleDeliveryModal(false);

  // FIXME перенести все модалки в MyModal
  // модалка которая меняет тип контента снизу
  const [modalType, setModalType] = useState("")
  const [isVisibleMyModal, setIsVisibleMyModal] = useState(false);
  const showMyModal = (type: string) => {
    setModalType(type)
    setIsVisibleMyModal(true);
  }
  const hideMyModal = () => setIsVisibleMyModal(false);

    // FIXME временная мера пока не сделал все модалки в одной
    useEffect(() => {
      hideCatalogModal()
    }, [isVisibleMyModal])

  //FIXME переработать обработчик на что-то более локаничное и по хорошему перенести со страницы
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = isVisibleCatalogModal ? 'hidden' : 'auto';
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisibleCatalogModal, isVisibleDeliveryModal, isVisibleOrderModal, isVisibleMyModal]);

  return (
    <>
    <Header handleShowCatalogModal={showCatalogModal} handleShowSignInModal={() => showMyModal("Вход")} handleShowContactsModal={() => {showMyModal("Контакты")}}/>
    <BrandCard/>
    {initialOverview.map((item, index) => (
      <PreorderCard key={index} title={item.name} description={item.description}/>
    ))}

    {/*Модальные окна */}
    <CatalogModal title="Каталог" isShowModal={isVisibleCatalogModal} handleClose={hideCatalogModal} isDepthModal={false} handleShowOrderModal={showOrderModal} allGoods={initialProducts}/>
    <OrderModal title="Заказ" isShowModal={isVisibleOrderModal} handleClose={hideOrderModal} isDepthModal={true} handleShowDeliveryModal={showDeliveryModal} allGoods={initialProducts}/>
    <DeliveryModal title="Доставка" handleClose={hideDeliveryModal} isDepthModal={true} isShowModal={isVisibleDeliveryModal} allGoods={initialProducts}/>

    <MyModal isShowModal={isVisibleMyModal} type={modalType} handleClose={() => hideMyModal()} title={modalType}/>
    </>
  );
};

export { MainPage };
