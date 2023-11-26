import React from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../icons/close.svg";
import { SignInForm } from "../../../widgets/sign-in-form";
import { ContactsModalContent } from "../contacts-modal-content";

interface IMyModal {
  type: string;
  isShowModal: boolean;
  title: string;
  handleClose?: () => void;
}

const MyModalSignIn = () => {
  return <SignInForm />;
};

const MyModalContacts = () => {
  return <ContactsModalContent />;
};

const MyModal: React.FC<IMyModal> = ({
  title,
  type,
  isShowModal,
  handleClose,
}) => {

  const selectedModalContent = () => {
    switch (type) {
      case "Вход":
        return <MyModalSignIn />;
      case "Контакты":
        return <MyModalContacts />;
      default:
        return null; // Можно вернуть что-то по умолчанию или null
    }
  }

  return (
    <div className={`${styles.modal} ${isShowModal && styles.modal__active}`}>
        <p className={styles.modal__title}>{title}</p>
        <button className={styles.modal__close}><img src={closeIcon} alt="" onClick={handleClose}/></button>
        {selectedModalContent()}
    </div>
  );
};

export { MyModal };
