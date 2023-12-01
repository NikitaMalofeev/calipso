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

const BlockLogIn: React.FC<BlockLogInProps> = ({
  block,
  index,
  handleChange,
}) => {
  // Важно! default value для выбранного radio установлен и в форме и в самом radio одинаковый "телефон"
  return (
    <div className={styles.container}>
      {block.type === "почта" && (
        <>
          <MyInput
            placeholder={"Эл.почта"}
            value={block.email}
            name={`form[${index}].email`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Пароль"}
            value={block.password}
            name={`form[${index}].password`}
            onChange={handleChange}
          />
        </>
      )}
      {block.type === "телефон" && (
        <>
          <MyInput
            placeholder={"Телефон"}
            value={block.phone}
            name={`form[${index}].phone`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Пароль"}
            value={block.password}
            name={`form[${index}].password`}
            onChange={handleChange}
          />
        </>
      )}
      {block.type === "sms" && (
        <>
          <MyInput
            placeholder={"Одноразовый пароль"}
            value={block.single}
            name={`form[${index}].single`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Пароль"}
            value={block.password}
            name={`form[${index}].password`}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};

export { BlockLogIn };
