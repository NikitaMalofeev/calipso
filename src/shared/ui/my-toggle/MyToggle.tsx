import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface ToggleProps {
  initialToggleName: string[];
  setActiveType: React.Dispatch<React.SetStateAction<string>>;
  isSecondToggle?: boolean;
}

const MyToggle: React.FC<ToggleProps> = ({
  initialToggleName,
  setActiveType,
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeToggle, setActiveToggle] = useState(false);

  const handleChangeType = (type: string, index: number) => {
    setActiveType(type);
    setActiveIndex(index);
    setActiveToggle(true);
  };

  return (
    <div
      className={`${!activeToggle ? styles.toggle : styles.toggle__active}`}
    >
      {initialToggleName.map((type, index) => (
        <button
          key={index}
          className={`${styles.toggle__button} ${
            activeIndex === index && styles.toggle__buttonActive
          }`}
          onClick={() => handleChangeType(type, index)}
          type="button"
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export { MyToggle };
