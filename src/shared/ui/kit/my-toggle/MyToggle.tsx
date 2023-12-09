import React, { useState } from "react";
import styles from "./styles.module.scss";

interface ToggleProps {
  value?: string;
  name?: string;
  initialToggleName: { icon: string; name: string, iconActive: string }[];
  setActiveType: React.Dispatch<React.SetStateAction<string>>;
  onChange: (type: string) => void;
}

const MyToggle: React.FC<ToggleProps> = ({
  initialToggleName,
  setActiveType,
  onChange,
}) => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeToggle, setActiveToggle] = useState(false);

  const handleChangeType = (type: string, index: number) => {
    setActiveType(type);
    setActiveIndex(index);
    setActiveToggle(true);

    onChange(type);
  };

  return (
    <div className={`${!activeToggle ? styles.toggle : styles.toggle__active}`}>
      {initialToggleName.map((type, index) => (
        <div className={styles.toggle__container} key={index}>
          <button
            className={`${styles.toggle__button} ${
              activeIndex === index && styles.toggle__buttonActive
            }`}
            onClick={() => handleChangeType(type.name, index)}
            type="button"
            defaultValue={type.name[0]}
          >
              <div className={activeIndex === index ? styles.toggle__icon : styles.toggle__icon_active}>
              <img src={type.icon} alt="" />
              </div>
          </button>
          <p className={styles.toggle__description}>{activeIndex === index ? type.name : ""}</p>
        </div>
      ))}
    </div>
  );
};

export { MyToggle };
