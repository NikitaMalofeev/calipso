import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.scss";
import { Header } from "../../shared/ui/header";
import { BrandCard } from "../../shared/ui/cards/brand-card/BrandCard";
import { initialProducts } from "../../shared/config/initialProducts";
import { CatalogModal } from "../../shared/ui/modals/catalog-modal";
import { OrderModal } from "../../shared/ui/modals/order-modal";
import { DeliveryModal } from "../../shared/ui/modals/delivery-modal";
import { MyModal } from "../../shared/ui/kit/my-modal";
import useModalScrollLock from "../../shared/hooks/useModalScrollLock";
import {
  hideMyModal,
  showMyModal as showMyModalAction,
} from "../../features/modal-slice/modalSlice";
import { NewsAndPromotion } from "../../widgets/news-sections";
import { Footer } from "../../shared/ui/footer";
import { VacanciesSection } from "../../widgets/vacancies-section";
import { PromotionSection } from "../../widgets/promotion-section";
import { Advantages } from "../../widgets/advantages-section";
import { About } from "../../widgets/about-section";
import { ServicesSection } from "../../widgets/services-section";
import { TrustSection } from "../../widgets/trust-section";
import { CertificatesSection } from "../../widgets/certificates-section";

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
      <ServicesSection />
      <PromotionSection />
      <CertificatesSection />
      <TrustSection />
      <NewsAndPromotion />
      <VacanciesSection />

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
