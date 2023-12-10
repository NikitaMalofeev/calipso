import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import closeIcon from "../../../icons/stickIcon/close.svg";
import { LogInForm } from "../../../../widgets/log-in-form";
import { ContactsModalContent } from "../../content/contacts-modal-content";
import { RegistrationForm } from "../../../../widgets/registration-form";
import { AdressForm } from "../../../../widgets/adress-form";
import { AdressControl } from "../../../../widgets/adress-control";
import { CatalogModal } from "../../modals/catalog-modal";

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

  const myModalCatalog = () => {
    return <CatalogModal />
  }

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
        return null;
    }
  };

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

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);

  const animateModal = (modalType: string) => {
    const modal = modalRef.current;

    if (modalType === "Контакты" || modalType === "Вход") {
      if (modal) {
        modal.style.transition = 'none';
        modal.style.opacity = '0';
        modal.style.transform = 'translateY(100%)';
  
        requestAnimationFrame(() => {
          modal.style.transition = 'opacity 300ms, transform 300ms';
          modal.style.opacity = '1';
          modal.style.transform = 'translateY(0)';
        });
      }
    } else {
      if (modal) {
        modal.style.transition = 'none';
        modal.style.opacity = '0';
        modal.style.transform = 'translateX(100%)';
  
        requestAnimationFrame(() => {
          modal.style.transition = 'opacity 300ms, transform 300ms';
          modal.style.opacity = '1';
          modal.style.transform = 'translateX(0)';
        });
      }
    }
  };

  useEffect(() => {
    if (modalType) {
      animateModal(modalType);
    }
  }, [modalType]);

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
