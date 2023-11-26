import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import closeIcon from "../../icons/close.svg";
import { LogInForm } from "../../../widgets/log-in-form";
import { ContactsModalContent } from "../contacts-modal-content";
import { RegistrationForm } from "../../../widgets/registration-form";

interface IMyModal {
  type: string;
  isShowModal?: boolean;
  isFullHeightModal?: boolean;
  title: string;
  handleClose?: () => void;
}

const MyModal: React.FC<IMyModal> = ({
  title,
  type,
  isShowModal,
  isFullHeightModal,
  handleClose,
}) => {
  const modalType = useSelector((state: any) => state.modal.modalType);

  const MyModalLogIn = () => {
    return <LogInForm />;
  };

  const MyModalContacts = () => {
    return <ContactsModalContent />;
  };

  const MyModalRegistration = () => {
    return <RegistrationForm />;
  };

  const selectedModalContent = () => {
    switch (modalType) {
      case "Вход":
        return <MyModalLogIn />;
      case "Контакты":
        return <MyModalContacts />;
      case "Регистрация":
        return <MyModalRegistration />;
      default:
        return null; // Можно вернуть что-то по умолчанию или null
    }
  };

  return (
    <>
      {isFullHeightModal && <div className={styles.modal__stub}></div>}
      <div
        className={`${styles.modal} ${isShowModal && styles.modal__active} ${
          isFullHeightModal && styles.modal__full
        }`}
      >
        <p className={styles.modal__title}>{title}</p>
        <button className={styles.modal__close}>
          <img src={closeIcon} alt="" onClick={handleClose} />
        </button>
          {selectedModalContent()}
      </div>
    </>
  );
};

export { MyModal };
