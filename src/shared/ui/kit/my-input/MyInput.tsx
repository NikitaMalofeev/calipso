import React, { useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import InputMask from "react-input-mask";
import styles from "./styles.module.scss";

interface MyInputProps {
  value?: string;
  placeholder: string;
  name: string;
  inputType?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const MyInput: React.FC<MyInputProps> = ({
  value,
  placeholder,
  name,
  inputType,
  onChange,
}) => {
  const [isValueEntered, setIsValueEntered] = useState(!!value);
  const [showPassword, setShowPassword] = useState(false)

  const handleShowLabel = (value: string | undefined) => {
    setIsValueEntered(!!value);
  };

  return (
    <>
      {inputType === "phone" && (
        <div className={styles.input__container}>
          <InputMask
            type="phone"
            mask="+7 999 999 9999"
            value={value}
            name={name}
            className={styles.input}
            onChange={(e) => {
              handleShowLabel(e.target.value);
              onChange(e)
            }}
            placeholder={placeholder}
            onClick={() => setIsValueEntered(true)}
            onMouseLeave={() => handleShowLabel(value)}
          />
          <div className={!isValueEntered ? styles.label : styles.label__active}>{placeholder}</div>
        </div>
      )}
      {inputType === "password" && (
        <div className={styles.input__container}>
        <InputMask
          type={showPassword ? "text" : "password"}
          mask=""
          value={value}
          name={name}
          className={styles.input}
          onChange={(e) => {
            handleShowLabel(e.target.value);
            onChange(e)
          }}
          placeholder={placeholder}
          onClick={() => setIsValueEntered(true)}
          onMouseLeave={() => handleShowLabel(value)}
          autoComplete="false"
        />
        <div className={!isValueEntered ? styles.label : styles.label__active}>{placeholder}</div>
        <div className={styles.input__visibility} onClick={() => setShowPassword(true)} onMouseLeave={() => setShowPassword(false)}>Показать</div>
      </div>
      )}
      {inputType === "text" && (
        <div className={styles.input__container}>
        <InputMask
          type="text"
          mask=""
          value={value}
          name={name}
          className={styles.input}
          onChange={(e) => {
            handleShowLabel(e.target.value);
            onChange(e)
          }}
          placeholder={placeholder}
          onClick={() => setIsValueEntered(true)}
          onMouseLeave={() => handleShowLabel(value)}
        />
        <div className={!isValueEntered ? styles.label : styles.label__active}>{placeholder}</div>
      </div>
      )}
    </>
  );
};

export { MyInput };
