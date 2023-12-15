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
import { initialProducts } from "../../../config/initialProducts";
import useModalScrollLock from "../../../hooks/useModalScrollLock";
import { OrderModal } from "../../modals/order-modal";
import { DeliveryModal } from "../../modals/delivery-modal";
import { CatalogTotalButton } from "../../../../features/catalog-total-button";
import { ProductPopup } from "../../content/product-popup";

interface IMyModal {
  isShowModal?: boolean;
  title: string;
  handleClose?: () => void;
}

const MyModal: React.FC<IMyModal> = ({ title, isShowModal, handleClose }) => {
  const modalType = useSelector((state: any) => state.modal.modalType);

  const [showPopup, setShowPopup] = useState(false);
  const { isModalOpen, setModalOpen } = useModalScrollLock();

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

  const MyModalCatalog = () => {
    return (
      <CatalogModal
        allGoods={initialProducts}
        showPopUp={() => setShowPopup(true)}
      />
    );
  };

  const MyModalOrder = () => {
    return <OrderModal allGoods={initialProducts} />;
  };

  const MyModalDelivery = () => {
    return <DeliveryModal allGoods={initialProducts} />;
  };

  useEffect(() => {
    const checkModalState = () => {
      isShowModal ? setModalOpen(true) : setModalOpen(false);
    };
    checkModalState();
  }, [modalType]);

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
      case "Каталог":
        return <MyModalCatalog />;
      case "Заказ":
        return <MyModalOrder />;
      case "Оформление":
        return <MyModalDelivery />;
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

  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node) &&
        // FIXME убрать последнее условие, конфликтует с закрытием popup
        modalType !== "Каталог"
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
    const modal = modalContentRef.current;

    if (modal) {
      if (!isModalOpen) {
        modal.style.transition = "none";
        modal.style.opacity = "0";
        modal.style.transform = "translateX(100%)";

        requestAnimationFrame(() => {
          modal.style.transition = "opacity 300ms, transform 0ms";
          modal.style.opacity = "1";
          modal.style.transform = "translateX(0)";
        });
      } else {
        modal.style.transition = "none";
        modal.style.opacity = "0";
        modal.style.transform = "translateX(100%)";

        requestAnimationFrame(() => {
          modal.style.transition = "opacity 300ms, transform 300ms";
          modal.style.opacity = "1";
          modal.style.transform = "translateX(0)";
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
      {isMiniHeightModal && <div className={styles.modal__stub}></div>}
      <div
        className={`
          ${styles.modal} 
          ${isShowModal && styles.modal__active}  
          ${isMiniHeightModal ? styles.modal__mini : ""}
        `}
      >
        <div
          className={
            modalType !== "Каталог"
              ? styles.modal__header
              : styles.modal__header_fixed
          }
        >
          <p className={styles.modal__title}>{title}</p>
          <button className={styles.modal__close} onClick={handleClose}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
        <div className={styles.modal__content} ref={modalContentRef}>
          {selectedModalContent()}
        </div>
      </div>
      {modalType === "Каталог" && (
        <>
          <CatalogTotalButton allGoods={initialProducts} />

          <ProductPopup
            name="Вода Calipso негазир."
            isShowPopup={showPopup}
            handleClose={() => {
              setShowPopup(false);
            }}
          />
        </>
      )}
    </>
  );
};

export { MyModal };
