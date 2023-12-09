import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import closeIcon from "../../../icons/stickIcon/close.svg";
import { LogInForm } from "../../../../widgets/log-in-form";
import { ContactsModalContent } from "../../content/contacts-modal-content";
import { RegistrationForm } from "../../../../widgets/registration-form";
import { AdressForm } from "../../../../widgets/adress-form";
import { AdressControl } from "../../../../widgets/adress-control";

interface IMyModal {
  isShowModal?: boolean;
  title: string;
  handleClose?: () => void;
}

const MyModal: React.FC<IMyModal> = ({ title, isShowModal, handleClose }) => {
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

  const MyModalAdress = () => {
    return <AdressForm />;
  };

  const MyModalControlAdress = () => {
    return <AdressControl />;
  };

  const selectedModalContent = () => {
    switch (modalType) {
      case "Вход":
        return <MyModalLogIn />;
      case "Контакты":
        return <MyModalContacts />;
      case "Регистрация":
        return <MyModalRegistration />;
      case "Новый адрес":
        return <MyModalAdress />;
      case "Доставка":
        return <MyModalControlAdress />;
      default:
        return null; // Можно вернуть что-то по умолчанию или null
    }
  };

  // логика ниже для определения в каких модалках должен быть stub и больший размер
  const [isFullHeightModal, setIsFullHeightModal] = useState(false);
  const [isMiniHeightModal, setIsMiniHeightModal] = useState(false);

  useEffect(() => {
    const checkModalSize = () => {
      switch (modalType) {
        case "Регистрация":
          setIsFullHeightModal(true);
          break;
        case "Доставка":
          setIsMiniHeightModal(true);
          break;
        default:
          setIsFullHeightModal(false);
          setIsMiniHeightModal(false);
      }
    };
    checkModalSize();
  }, [modalType]);

  // логика для закрытия модалки при клике за ее границами
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose?.();
      }
    };

    // слушатель события при монтировании компонента
    document.addEventListener("mousedown", handleClickOutside);

    // слушатель события при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);

  return (
    <>
      {isFullHeightModal && <div className={styles.modal__stub}></div>}
      {isMiniHeightModal && <div className={styles.modal__stub_mini}></div>}
      <div
        ref={modalRef}
        className={`
          ${styles.modal} 
          ${isShowModal && styles.modal__active} 
          ${isFullHeightModal ? styles.modal__full : ""} 
          ${isMiniHeightModal ? styles.modal__mini : ""}
        `}
      >
        <p className={styles.modal__title}>{title}</p>
        <button className={styles.modal__close} onClick={handleClose}>
          <img src={closeIcon} alt="" />
        </button>
        <div className={styles.modal__content}>{selectedModalContent()}</div>
      </div>
    </>
  );
};

export { MyModal };
