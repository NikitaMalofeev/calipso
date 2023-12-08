import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
import { BlockRegistration } from "../../features/block-registration";
import { IRegistration } from "../../shared/types";
import { setRegistrationIndividualData, setRegisrationLegalData } from "../../features/user-slice/registrationSlice";

interface RegistrationFormProps {
}

const getEmptyForm = (type: string, method: string) => {
  switch (type) {
    case "физ.лицо":
      return {
        id: Date.now(),
        type,
        method,
        dataIndividual: {
          main: {
            email: "",
            password: "",
            repeatPassword: "",
          },
          contact: {
            contactPerson: "",
            phone: "",
          },
        },
      };
    case "юр.лицо":
      return {
        id: Date.now(),
        type,
        method,
        dataLegal: {
          entryData: { 
            email: "", 
            password: "", 
            repeatPassword: "" },
          requisites: {
            nameLegal: "",
            BIN: "",
            bankNumber: "",
            BIK: "",
            bank: "",
            legalAdress: "",
            factAdress: "",
          },
          contact: { 
            contactPerson: "", 
            post: "", 
            phone: "" },
        },
      };
    default:
      return {
        id: Date.now(),
        type,
        method,
      };
  }
};

const RegistrationForm: React.FC = () => {
  const { values, handleChange, setValues, setFieldValue } =
    useFormik({
      initialValues: {
        form: [getEmptyForm("физ.лицо", "телефон") as unknown as IRegistration],
      },
      onSubmit: (values) => {
        console.log(values.form);
      },
    });

  const CustomhandleSubmit = () => {
    if(formType === "физ.лицо") {
      dispatch(setRegistrationIndividualData(values.form[0].dataIndividual))
    } else {
      dispatch(setRegisrationLegalData(values.form[0].dataLegal))
    };
    console.log(values.form);
  };

  // логика для изменения типа формы после изменения ее в глобальном стейте для создания формы нужного типа

  const formType = useSelector((state: any) => state.registration.type);
  const formMethod = useSelector((state: any) => state.registration.method);

  const handleTypeChange = () => {
    setValues({
      form: [getEmptyForm(formType, formMethod) as unknown as IRegistration],
    });
    console.log(formType);
    console.log("test");
  };
  
  //триггерю из нижнего компонента вызов изменения формы
  useEffect(() => {
    handleTypeChange()
  }, [formType])

  const dispatch = useDispatch();

  return (
    <>
      <form className={styles.form} action="">
        {values.form.map((block, index) => (
          <React.Fragment key={index}>
            <BlockRegistration
              block={block}
              index={index}
              key={index}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
              handleSubmit={CustomhandleSubmit}
            />
          </React.Fragment>
        ))}
      </form>
    </>
  );
};

export { RegistrationForm };
