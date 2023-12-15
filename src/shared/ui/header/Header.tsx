import React from "react";
import { HeaderButton } from "../buttons/header-button";
import { BurgerButton } from "../buttons/burger-button";
import styles from "./styles.module.scss";
import iconPhone from '../../icons/symbolIcons/miniPhone.svg'
import { useDispatch } from "react-redux";
import { showMyModal } from "../../../features/modal-slice/modalSlice";

interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = ({
}) => {

  const dispatch = useDispatch()
  return (
    <div className={styles.header}>
      <div className={styles.header__buttons}>
        <HeaderButton title={"Вход"} handleClick={() => dispatch(showMyModal("Вход"))}/>
        <HeaderButton title={"Каталог"} handleClick={() => dispatch(showMyModal("Каталог"))}/>
      </div>
      <img className={styles.header__icon} src={iconPhone} alt={"Phone"} onClick={() => dispatch(showMyModal("Контакты"))}/>
      <BurgerButton />
    </div>
  );
};

export { Header };
