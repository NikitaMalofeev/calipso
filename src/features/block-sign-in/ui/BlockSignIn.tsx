import React from "react";
import styles from "./styles.module.scss";
import { ISignIn } from "../../../shared/types";
import { RadioButtonsGroup } from "../../../shared/ui/my-radio-buttons";
import { initialSignInType } from "../../../shared/config/initialSignIn";
import { MyInput } from "../../../shared/ui/my-input";

interface BlockProjectProps {
  block: ISignIn;
  index: number;
  setFieldValue: (field: string, value: any) => void;
  handleChange: React.ChangeEventHandler;
}

const BlockSignIn: React.FC<BlockProjectProps> = ({
  block,
  index,
  handleChange,
  setFieldValue,
}) => {
  // Важно! default value для выбранного radio установлен и в форме и в самом radio одинаковый "телефон"
  return (
    <div className={styles.container}>
      <p className={styles.container__title}>Вход</p>
      <div className={styles.container__radio}>
        <RadioButtonsGroup
          value={block.type}
          name={`form[${index}].type`}
          onChange={handleChange}
          itemList={initialSignInType}
          defaultValue="телефон"
        />
      </div>
      {block.type === "эл.почта" ? (
        <>
          <MyInput
            placeholder={"Эл.почта"}
            value={block.phone}
            name={`form[${index}].phone`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Пароль"}
            value={block.phone}
            name={`form[${index}].password`}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <MyInput
            placeholder={"Телефон"}
            value={block.phone}
            name={`form[${index}].phone`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Пароль"}
            value={block.phone}
            name={`form[${index}].password`}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};

export { BlockSignIn };
