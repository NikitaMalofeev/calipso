import React, { useState } from "react";
import { initialCatalogChapter } from "../../../shared/config/initialCatalogChapter";
import styles from "./styles.module.scss"
import { CatalogButton } from "../../../shared/ui/buttons/burger-button/catalog-button";

interface CatalogMenuProps {
  onValueChange: (selectedValue: string) => void;
}

const CatalogButtonMenu: React.FC<CatalogMenuProps> = ({
  onValueChange
}) => {

  const [selectedValue, setSelectedValue] = useState('')

  const handleButtonClick = (itemName: string) => {
    setSelectedValue(itemName);
    onValueChange(itemName); 
  }
  return (
    <>
    <div className={styles.buttons}>
        {initialCatalogChapter.map((item, index) => (
            <CatalogButton title={item.name} key={index} handleClick={() => handleButtonClick(item.name)}/>
        ))}
      </div>
    </>
  );
};

export { CatalogButtonMenu };
