import React, { useState } from "react";
import style from "./styles.module.scss";

interface ILinkButton {
  title: string;
  href: string;
  handleClick?: () => void;
  //   isActive?: boolean;
}

const MyLinkButton: React.FC<ILinkButton> = ({ title, href, handleClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (handleClick) {
      e.preventDefault();
      handleClick();
    }
    setIsActive(!isActive);
  };

  return (
    <a
      href={href}
      className={`${style.link} ${isActive ? style.link__active : ""}`}
      onClick={handleLinkClick}
    >
      <p className={style.link__title}>{title}</p>
    </a>
  );
};

export { MyLinkButton };
