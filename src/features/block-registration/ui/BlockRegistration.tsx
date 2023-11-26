import React from "react";
import styles from "./styles.module.scss";
import { ILogIn } from "../../../shared/types";
import { MyInput } from "../../../shared/ui/my-input";

interface BlockLogInProps {
  block: ILogIn;
  index: number;
  setFieldValue: (field: string, value: any) => void;
  handleChange: React.ChangeEventHandler;
}

const BlockRegistration: React.FC<BlockLogInProps> = ({
  block,
  index,
  handleChange,
}) => {
  // Важно! default value для выбранного radio установлен и в форме и в самом radio одинаковый "телефон"
  return (
          <MyInput
            placeholder={"Эл.почта"}
            value={block.email}
            name={`form[${index}].email`}
            onChange={handleChange}
          />
        
  );
};

export { BlockRegistration };
