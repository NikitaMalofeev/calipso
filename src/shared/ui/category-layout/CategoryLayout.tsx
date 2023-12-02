import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import { Header } from "../header";
import { useDispatch, useSelector } from "react-redux";
import {
  hideMyModal,
  showMyModal as showMyModalAction,
} from "../../../features/modal-slice/modalSlice";
import { CatalogModal } from "../catalog-modal";
import { OrderModal } from "../order-modal";
import { DeliveryModal } from "../delivery-modal";
import { MyModal } from "../my-modal";
import { initialProducts } from "../../config/initialProducts";

const height: number = document.documentElement.clientHeight - 85  // здесь 85 это высота шапки сайта
const CategoryLayout: React.FC = () => {

  //FIXME убрать из layout всю логику кроме MyModal после рефактора модалок под одну

  const [isVisibleCatalogModal, setIsVisibleCatalogModal] = useState(false);
  const showCatalogModal = () => {
    setIsVisibleCatalogModal(true);
    document.body.style.overflow = "hidden";
  };
  const hideCatalogModal = () => {
    setIsVisibleCatalogModal(false);
    document.body.style.overflow = "auto";
  };

  const [isVisibleOrderModal, setIsVisibleOrderModal] = useState(false);
  const showOrderModal = () => {
    setIsVisibleOrderModal(true);
    document.body.style.overflow = "hidden";
  };
  const hideOrderModal = () => {
    setIsVisibleOrderModal(false);
    document.body.style.overflow = "auto";
  };

  const [isVisibleDeliveryModal, setIsVisibleDeliveryModal] = useState(false);
  const showDeliveryModal = () => {
    setIsVisibleDeliveryModal(true);
    document.body.style.overflow = "hidden";
  };
  const hideDeliveryModal = () => {
    setIsVisibleDeliveryModal(false);
    document.body.style.overflow = "auto";
  };

  // перенести по такому же принципу оставшиеся модальные окна
  // логика для работы со стейтом modalSlice для управления модальными окнами
  const dispatch = useDispatch();

  const handleShowMyModal = (modalType: string) => {
    dispatch(showMyModalAction(modalType));
    console.log(modalType);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    dispatch(hideMyModal());
    document.body.style.overflow = "auto";
  };

  const myModalVisible = useSelector(
    (state: any) => state.modal.isVisibleMyModal
  );
  const myModalType = useSelector((state: any) => state.modal.modalType);


  return (
    <div className={styles.wrapper}>
      <Header
        handleShowCatalogModal={showCatalogModal}
        handleShowLogInModal={() => handleShowMyModal("Вход")}
        handleShowContactsModal={() => {
          handleShowMyModal("Контакты");
        }}
      />
      <div className={styles.main} style={{height: height}}>
        <Outlet />
      </div>

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
    </div>

    
  );
};

export { CategoryLayout };
