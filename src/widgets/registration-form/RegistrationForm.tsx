import React from "react";
import styles from "./styles.module.scss";
import { Formik, useFormik } from "formik";
// import { ILogIn } from "../../../shared/types";
// import { BlockLogIn } from "../../../features/block-sign-in";
// import { initialLogInType } from "../../../shared/config/initialLogIn";

const getEmptyForm = (type: string) => {
  switch (type) {
    case "эл.почта":
      return {
        id: Date.now(),
        type,
        email: "",
        password: "",
      };
    case "телефон":
      return {
        id: Date.now(),
        type,
        phone: "",
        password: "",
      };
    case "одноразовый пароль":
      return {
        id: Date.now(),
        type,
        single: "",
        password: "",
      };
    default:
      return {
        id: Date.now(),
        type,
        password: "",
      };
  }
};

const RegistrationForm: React.FC = () => {

  return (
    <div className={styles.container}>
    </div>
  );
};

export { RegistrationForm };
