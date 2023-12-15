import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";
import { Header } from "../../header";
import { useDispatch, useSelector } from "react-redux";
import {
  hideMyModal,
  showMyModal as showMyModalAction,
} from "../../../../features/modal-slice/modalSlice";
import { MyModal } from "../my-modal";
import { Footer } from "../../footer";

const CategoryLayout: React.FC = () => {

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
      <Header/>
      <div className={styles.main}>
        <Outlet />
      </div>
      <Footer />

       {/*Модальные окна */}

      <MyModal
        isShowModal={myModalVisible}
        handleClose={handleClose}
        title={myModalType}
      />
    </div>

    
  );
};

export { CategoryLayout };
