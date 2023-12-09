import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.scss";
import { Header } from "../../shared/ui/header";
import { BrandCard } from "../../widgets/BrandCard/BrandCard";
import { PreorderCard } from "../../widgets/PreorderCard.tsx";
import { initialOverview } from "../../shared/config/initialPreorderOverview";
import { initialProducts } from "../../shared/config/initialProducts";
import { CatalogModal } from "../../shared/ui/catalog-modal";
import { OrderModal } from "../../shared/ui/order-modal/OrderModal";
import { DeliveryModal } from "../../shared/ui/delivery-modal";
import { MyModal } from "../../shared/ui/my-modal";
import useModalScrollLock from "../../shared/hooks/useModalScrollLock";
import {
  hideMyModal,
  showMyModal as showMyModalAction,
} from "../../features/modal-slice/modalSlice";
import { NewsAndPromotion } from "../../widgets/NewsAndStock";
import { Footer } from "../../shared/ui/footer";
import { Vacancies } from "../../widgets/Vacancies";
import { AdvantageCard, advantagesOverview } from "../../shared/ui/advantages-card";
import { Promotion } from "../../widgets/Promotion";
import { Advantages } from "../../widgets/Advantages";
import { About } from "../../widgets/About";
import { Services } from "../../widgets/ServicesSection";
import { TrustSection } from "../../widgets/TrustSection";
import { CertificatesSection } from "../../widgets/CertificatesSection";

const MainPage: React.FC = () => {
  const { isModalOpen, setModalOpen } = useModalScrollLock();

  const [isVisibleCatalogModal, setIsVisibleCatalogModal] = useState(false);
  const showCatalogModal = () => {
    setIsVisibleCatalogModal(true);
    setModalOpen(true)
  };
  const hideCatalogModal = () => {
    setIsVisibleCatalogModal(false);
    setModalOpen(false)
  };

  const [isVisibleOrderModal, setIsVisibleOrderModal] = useState(false);
  const showOrderModal = () => {
    setIsVisibleOrderModal(true);
    setModalOpen(true)
  };
  const hideOrderModal = () => {
    setIsVisibleOrderModal(false);
    setModalOpen(false)
  };

  const [isVisibleDeliveryModal, setIsVisibleDeliveryModal] = useState(false);
  const showDeliveryModal = () => {
    setIsVisibleDeliveryModal(true);
    setModalOpen(true)
  };
  const hideDeliveryModal = () => {
    setIsVisibleDeliveryModal(false);
    setModalOpen(false)
  };

  // перенести по такому же принципу оставшиеся модальные окна
  // логика для работы со стейтом modalSlice для управления модальными окнами
  const dispatch = useDispatch();

  const handleShowMyModal = (modalType: string) => {
    dispatch(showMyModalAction(modalType));
    console.log(modalType);
    setModalOpen(true)
  };

  const handleClose = () => {
    dispatch(hideMyModal());
    setModalOpen(false)
  };

  const myModalVisible = useSelector(
    (state: any) => state.modal.isVisibleMyModal
  );
  const myModalType = useSelector((state: any) => state.modal.modalType);

  return (
    <div className={styles.main__container}>
      <Header
        handleShowCatalogModal={showCatalogModal}
        handleShowLogInModal={() => handleShowMyModal("Вход")}
        handleShowContactsModal={() => {
          handleShowMyModal("Контакты");
        }}
      />
      <BrandCard />
      <About />
      <Advantages />
      <Services />
      <Promotion />
      <CertificatesSection />
      <TrustSection />
      <NewsAndPromotion />

      {/*Модальные окна */}
      <CatalogModal
        title="Каталог"
        isShowModal={isVisibleCatalogModal}
        handleClose={hideCatalogModal}
        isDepthModal={false}
        handleShowOrderModal={showOrderModal}
        allGoods={initialProducts}
      />
      <OrderModal
        title="Заказ"
        isShowModal={isVisibleOrderModal}
        handleClose={hideOrderModal}
        isDepthModal={true}
        handleShowDeliveryModal={showDeliveryModal}
        allGoods={initialProducts}
      />
      <DeliveryModal
        title="Доставка"
        handleClose={hideDeliveryModal}
        isDepthModal={true}
        isShowModal={isVisibleDeliveryModal}
        allGoods={initialProducts}
      />

      <MyModal
        isShowModal={myModalVisible}
        handleClose={handleClose}
        title={myModalType}
      />
      <Footer />
    </div>
  );
};

export { MainPage };
