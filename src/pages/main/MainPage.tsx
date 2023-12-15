import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.scss";
import { Header } from "../../shared/ui/header";
import { BrandCard } from "../../shared/ui/cards/brand-card/BrandCard";
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
      <Header/>
      <BrandCard />
      <About />
      <Advantages />
      <ServicesSection />
      <PromotionSection />
      <CertificatesSection />
      <TrustSection />
      <NewsAndPromotion />
      <VacanciesSection />

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
