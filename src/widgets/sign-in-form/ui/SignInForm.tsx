import React from "react";
import styles from "./styles.module.scss";
import { Formik, useFormik } from "formik";
import { ISignIn } from "../../../shared/types";
import { BlockSignIn } from "../../../features/block-sign-in";
import { initialSignInType } from "../../../shared/config/initialSignIn";
import { RadioButtonsGroup } from "../../../shared/ui/my-radio-buttons";

const getEmptyForm = (type: string) => {
  switch (type) {
    case "email":
      return {
        id: Date.now(),
        type,
        email: "",
        password: "",
      };
    case "phone":
      return {
        id: Date.now(),
        type,
        phone: "",
        password: "",
      };
      case "single":
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


const SignInForm: React.FC = ({}) => {
  const { values, handleChange, handleSubmit, setValues, setFieldValue } =
    useFormik({
      initialValues: { form: [getEmptyForm("phone") as unknown as ISignIn] },
      onSubmit: (values) => {
        console.log(values.form);
      },
    });

    const handleTypeChange = (type: string) => {
      setValues({
        ...values,
        form: [getEmptyForm(type) as unknown as ISignIn],
      });
    };

  return (
    <div className={styles.container}>
      <form className={styles.form} action="">
        <div className={styles.form__radio}>
          <RadioButtonsGroup
            value={values.form[0].type}
            name={`form[0].type`}
            onChange={(e) => handleTypeChange(e.target.value)}
            itemList={initialSignInType}
            defaultValue="телефон"
          />
        </div>
        {values.form.map((block, index) => (
          <BlockSignIn
            block={block}
            index={index}
            key={block.id}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
        ))}
      </form>
      <button className={styles.form__button} onClick={() => handleSubmit()}>
        Войти
      </button>
      <p className={styles.form__remember} onClick={() => {}}>
        Забыли пароль?
      </p>
      <p className={styles.form__registration} onClick={() => {}}>
        Зарегистрироваться
      </p>
    </div>
  );
};

export { SignInForm };
