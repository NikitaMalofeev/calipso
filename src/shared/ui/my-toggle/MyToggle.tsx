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
  const [activeIndex, setActiveIndex] = useState(-1);
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
        <div className={styles.toggle__container}>
          <button
            key={index}
            className={`${styles.toggle__button} ${
              activeIndex === index && styles.toggle__buttonActive
            }`}
            onClick={() => handleChangeType(type.name, index)}
            type="button"
          >
            {activeIndex !== index ? (
              <img src={type.icon} alt="" className={styles.toggle__icon}/>
            ) : (
              <img src={type.iconActive} alt="" className={styles.toggle__icon}/>
            )}
          </button>
          <p className={styles.toggle__description}>{type.name}</p>
        </div>
      ))}
    </div>
  );
};

export { MyToggle };
