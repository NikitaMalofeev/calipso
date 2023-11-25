import React from "react";
import { HeaderButton } from "../header-button/HeaderButton";
import { BurgerButton } from "../burger-button";
import styles from "./styles.module.scss";
import iconPhone from '../../icons/phone.svg'

interface IHeaderProps {
  handleShowCatalogModal: () => void;
  handleShowSignInModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  handleShowSignInModal,
  handleShowCatalogModal
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__buttons}>
        <HeaderButton title={"Вход"} handleClick={handleShowSignInModal}/>
        <HeaderButton title={"Каталог"} handleClick={handleShowCatalogModal}/>
      </div>
      <img className={styles.header__icon} src={iconPhone} alt={"Phone"} />
      <BurgerButton />
    </div>
  );
};

export { Header };
