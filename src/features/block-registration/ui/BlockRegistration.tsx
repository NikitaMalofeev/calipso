import React, { useState } from "react";
import { Stepper, Step, StepLabel, styled } from "@mui/material";
import { IRegistration } from "../../../shared/types";
import { MyInput } from "../../../shared/ui/my-input";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import backIcon from "../../../shared/icons/backIcons.svg";
import styles from "./styles.module.scss";
import { MyButton } from "../../../shared/ui/my-button";
import { MyToggle } from "../../../shared/ui/my-toggle";
import {
  initialRegistrationType,
  initialRegistrationWay,
} from "../../../shared/config/initialRegistration";

interface BlockRegistrationProps {
  block: IRegistration;
  index: number;
  setFieldValue: (field: string, value: any) => void;
  handleChange: React.ChangeEventHandler;
  handleSubmit: () => void;
}

const BlockRegistration: React.FC<BlockRegistrationProps> = ({
  block,
  index,
  setFieldValue,
  handleChange,
  handleSubmit,
}) => {
  // стилизация mui
  const StyledStepLabel = styled(StepLabel)({
    "& .MuiStepLabel-iconContainer": {
      // изменение цвета фона
      borderRadius: "16px",
      color: "white",
    },
    "& .MuiStepLabel-icon": {
      backgroundColor: "D9D9D9", // изменение цвета текста
    },
    "& .MuiStepLabel-label": {
      color: "#D9D9D9",
      fontSize: "12px",
      marginTop: "8px",
    },
    "& .MuiStepper-root": {
      marginBottom: "100px",
    },
  });

  const [steps, setSteps] = useState<number>(0);

  const handleNext = () => {
    setSteps((prev) => {
      // Убедимся, что steps не превышает 3
      return prev < 4 ? prev + 1 : 4;
    });
  };

  const handleBack = () => {
    setSteps((prev) => prev - 1);
  };

  const stepLabels = [
    "Тип регистрации",
    "Основная информация",
    "Контактное лицо",
    "подтверждение",
  ];

  // достаю значения введенные на первых stepах чтобы вывести их в последнем
  const dataIndividualMain = Object.values(
    useSelector((state: any) => state.registration.dataIndividual.main)
  );
  const dataIndividualContact = Object.values(
    useSelector((state: any) => state.registration.dataIndividual.contact)
  );

  const [activeType, setActiveType] = useState("телефон");

  const handleEndRegistration = () => {
    handleSubmit()
    handleNext()
  }

  const handleToggleChange = (selectedValue: string, field: string) => {
    setFieldValue(`form[${index}].dataIndividual.${field}`, selectedValue);
  };

  // FIXMEFIXME перенести разные типы регистрации в разные компоненты, а то останется франкенштейн

  return (
    <div className={styles.block}>
      {steps > 0 && (
        <button
          className={styles.block__back}
          title="Back"
          type="button"
          onClick={handleBack}
          disabled={steps === 0}
        >
          <img src={backIcon} alt="" />
        </button>
      )}

      {steps < 4 && (
        <Stepper activeStep={steps} alternativeLabel>
          {stepLabels.map((label, stepIndex) => (
            <Step key={stepIndex}>
              <StyledStepLabel>
                {steps >= stepIndex ? label : ""}
              </StyledStepLabel>
            </Step>
          ))}
        </Stepper>
      )}

      {/* рендер инпутов в зависимости от текущего шага(1)*/}
      {steps === 0 && (
        <>
          <p className={styles.block__ownership}>Форма собственности</p>
          <MyToggle
            value={block.type}
            name={`form[${index}].type`}
            initialToggleName={initialRegistrationType}
            setActiveType={setActiveType}
            onChange={(selectedValue) => handleToggleChange(selectedValue, "type")}
          />
          <p className={styles.block__method}>Метод авторизации</p>
          <MyToggle
            value={block.dataIndividual?.method}
            name={`form[${index}].dataIndividual.method`}
            initialToggleName={initialRegistrationWay}
            setActiveType={setActiveType}
            onChange={(selectedValue) => handleToggleChange(selectedValue, "method")}
          />
        </>
      )}
      {steps === 1 && (
        <div className={styles.block__container}>
          {activeType === "телефон" && <div>УРААААААААААААААААА</div>}
          <MyInput
            placeholder={"Почта"}
            value={block.dataIndividual?.main.email}
            name={`form[${index}].dataIndividual.main.email`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Пароль"}
            value={block.dataIndividual?.main.password}
            name={`form[${index}].dataIndividual.main.password`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Повтор пароля"}
            value={block.dataIndividual?.main.repeatPassword}
            name={`form[${index}].dataIndividual.main.repeatPassword`}
            onChange={handleChange}
          />
        </div>
      )}
      {/* рендер инпутов в зависимости от текущего шага(2)*/}
      {steps === 2 && (
        <div className={styles.block__container}>
          <MyInput
            placeholder={"Контактное лицо(ФИО)"}
            value={block.dataIndividual?.contact.contactPerson}
            name={`form[${index}].dataIndividual.contact.contactPerson`}
            onChange={handleChange}
          />
          <MyInput
            placeholder={"Рабочий номер телефона"}
            value={block.dataIndividual?.contact.phone}
            name={`form[${index}].dataIndividual.contact.phone`}
            onChange={handleChange}
          />
        </div>
      )}
      {/* FIXME достать нормально значение из state, возможно изменить сам стейт, что делать с плейсхолдерами, правильный ли подход вообще так использовать инпуты, в общем жесть */}
      {/* рендер инпутов в зависимости от текущего шага(3)*/}
      {steps === 3 && (
        <div className={styles.block__container}>
          <p className={styles.block__title}>Основная информация</p>
          {(dataIndividualMain as string[]).map(
            (item: string, index: number) => (
              <>
                {index === 3 ? (
                  ""
                ) : (
                  <>
                    <MyInput
                      value={item}
                      name=""
                      onChange={() => {}}
                      placeholder={["Почта", "Пароль", "Повтор пароля"][index]}
                      key={index}
                    />
                  </>
                )}
              </>
            )
          )}
          <p className={styles.block__title}>Контактная информация</p>
          {(dataIndividualContact as string[]).map(
            (item: string, index: number) => (
              <>
                <MyInput
                  value={item}
                  name=""
                  onChange={() => {}}
                  placeholder={
                    ["Контактное лицо(ФИО)", "Рабочий номер телефона"][index]
                  }
                  key={index}
                />
              </>
            )
          )}
        </div>
      )}
      {/* отображение кнопок в зависимости от степа */}
      {steps <= 1 && (
        <MyButton title="Далее" type="button" handleClick={handleNext} />
      )}
      {steps === 2 && (
        <MyButton title="Далее" type="button" handleClick={handleEndRegistration} />
      )}
      {steps === 3 && (
        <MyButton title="Подтвердить" type="button" handleClick={handleEndRegistration} />
      )}
      {/* контент регистрации успешной или нет */}
      {steps === 4 && (
        <div>Регистрация успешна</div>
      )}
    </div>
  );
};

export { BlockRegistration };
