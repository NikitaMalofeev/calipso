import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface ToggleProps {
  value?: string;
  name?: string;
  initialToggleName: string[];
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

    onChange(type)
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
