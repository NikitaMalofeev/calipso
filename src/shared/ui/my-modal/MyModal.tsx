import React from "react";
import styles from "./styles.module.scss";
import closeIcon from "../../icons/close.svg";
import { SignInForm } from "../../../widgets/sign-in-form";

interface IMyModal {
  type: string;
  isShowModal: boolean;
  handleClose?: () => void;
}

const MyModalSignIn = () => {
  return <SignInForm />;
};

const MyModalContacts = () => {
  return <div>Modal Type Contacts</div>;
};

const MyModal: React.FC<IMyModal> = ({
  type,
  isShowModal,
  handleClose,
}) => {

  const selectedModalContent = () => {
    switch (type) {
      case "Sign-in":
        return <MyModalSignIn />;
      case "Contacts":
        return <MyModalContacts />;
      default:
        return null; // Можно вернуть что-то по умолчанию или null
    }
  }

  return (
    <div className={`${styles.modal} ${isShowModal && styles.modal__active}`}>
        <button className={styles.modal__close}><img src={closeIcon} alt="" onClick={handleClose}/></button>
        {selectedModalContent()}
    </div>
  );
};

export { MyModal };
