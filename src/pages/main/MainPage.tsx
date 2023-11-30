import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../shared/ui/header";
import { BrandCard } from "../../widgets/BrandCard/BrandCard";
import { PreorderCard } from "../../widgets/PreorderCard.tsx";
import { initialOverview } from "../../shared/config/initialPreorderOverview";
import { CatalogModal } from "../../shared/ui/catalog-modal";
import { OrderModal } from "../../shared/ui/order-modal/OrderModal";
import { DeliveryModal } from "../../shared/ui/delivery-modal";
import { initialProducts } from "../../shared/config/initialProducts";
import { MyModal } from "../../shared/ui/my-modal";
import { hideMyModal, showMyModal as showMyModalAction } from "../../features/modal-slice/modalSlice";
import { NewsAndPromotion } from "../../widgets/NewsAndStock";

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
  

  //FIXME переработать обработчик(отмены скрола при открытии модального окна) на что-то более локаничное и по хорошему перенести со страницы
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = isVisibleCatalogModal ? 'hidden' : 'auto';
      // перенести логику в открытие и закрытие 
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [isVisibleCatalogModal, isVisibleDeliveryModal, isVisibleOrderModal]);

  // перенести по такому же принципу оставшиеся модальные окна
  // логика для работы со стейтом modalSlice для управления модальными окнами
  const dispatch = useDispatch();

  const handleShowMyModal = (modalType: string) => {
    dispatch(showMyModalAction(modalType));
    console.log(modalType)
    document.body.style.overflow = 'hidden' 
  };

  const handleClose = () => {
    dispatch(hideMyModal());
    document.body.style.overflow = 'auto'
  };

  const myModalVisible = useSelector((state: any) => state.modal.isVisibleMyModal);
  const myModalType = useSelector((state: any) => state.modal.modalType);

  return (
    <>
    <Header handleShowCatalogModal={showCatalogModal} handleShowLogInModal={() => handleShowMyModal("Вход")} handleShowContactsModal={() => {handleShowMyModal("Контакты")}}/>
    <BrandCard/>
    {initialOverview.map((item, index) => (
      <PreorderCard key={index} title={item.name} description={item.description}/>
    ))}
    <NewsAndPromotion />

    {/*Модальные окна */}
    <CatalogModal title="Каталог" isShowModal={isVisibleCatalogModal} handleClose={hideCatalogModal} isDepthModal={false} handleShowOrderModal={showOrderModal} allGoods={initialProducts}/>
    <OrderModal title="Заказ" isShowModal={isVisibleOrderModal} handleClose={hideOrderModal} isDepthModal={true} handleShowDeliveryModal={showDeliveryModal} allGoods={initialProducts}/>
    <DeliveryModal title="Доставка" handleClose={hideDeliveryModal} isDepthModal={true} isShowModal={isVisibleDeliveryModal} allGoods={initialProducts}/>

    <MyModal isShowModal={myModalVisible} handleClose={handleClose} title={myModalType} />
    </>
  );
};

export { MainPage };
