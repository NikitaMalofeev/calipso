import React, { useState } from "react";
import styles from "./styles.module.scss";
import backIcon from "../../../shared/icons/stickIcon/backIcons.svg";
import { MyInput } from "../../../shared/ui/kit/my-input";
import { MyButton } from "../../../shared/ui/buttons/my-button";
import { MyToggle } from "../../../shared/ui/kit/my-toggle";
import { useDispatch, useSelector } from "react-redux";
import {
  initialRegistrationType,
  initialRegistrationWay,
  stepLabelsIndividual,
  stepLabelsLegal,
} from "../../../shared/config/initialRegistration";
import {
  setRegistrationMethod,
  setRegistrationType,
} from "../../../features/user-slice/registrationSlice";
import { IRegistration } from "../../../shared/types";
import { NotificationStatus } from "../../../shared/ui/content/notification-request-status";
import { MyStepper } from "../../../shared/ui/kit/my-stepper";

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
  const [steps, setSteps] = useState<number>(0);
  const dispatch = useDispatch();
  const [activeType, setActiveType] = useState("");

  const handleNext = () => {
    setSteps((prev) => {
      // Убедимся, что steps не превышает 3
      return prev < 5 ? prev + 1 : 5;
    });
  };

  const handleBack = () => {
    setSteps((prev) => prev - 1);
  };

  const updateSteps = (newStep: number) => {
    setSteps(newStep)
  }

  const handleEndRegistration = () => {
    handleSubmit();
    handleNext();
  };

  // достаю значения введенные на первых stepах чтобы вывести их в последнем
  const dataIndividualMain = Object.values(
    useSelector((state: any) => state.registration.dataIndividual.main)
  );
  const dataIndividualContact = Object.values(
    useSelector((state: any) => state.registration.dataIndividual.contact)
  );
  const dataType = useSelector((state: any) => state.registration.type);
  const dataMethod = useSelector((state: any) => state.registration.method);

  // достаю значения введенные на первых stepах чтобы вывести их в последнем
  const dataLegalEntry = Object.values(
    useSelector((state: any) => state.registration.dataLegal.entryData)
  );
  const dataLegalRequisites = Object.values(
    useSelector((state: any) => state.registration.dataLegal.requisites)
  );
  const dataLegalContact = Object.values(
    useSelector((state: any) => state.registration.dataLegal.contact)
  );

  // useEffect с деструктуризацией после Selectro .registration

  // функции для изменения toggle кнопок и отправки их состояний в глобальный стейт
  const handleToggleChangeType = (type: string) => {
    setFieldValue(`form[${index}].type`, type);
    setActiveType(type);
    dispatch(setRegistrationType(type));
  };

  const handleToggleChangeMethod = (method: string) => {
    setFieldValue(`form[${index}].method`, method);
    dispatch(setRegistrationMethod(method));
    setActiveType(method);
    console.log(method);
  };

  const formType = useSelector((state: any) => state.registration.type);

  //выбираю какие лейблы отображать в stepper
  const currentStepLabels =
    formType === "физ.лицо" ? stepLabelsIndividual : stepLabelsLegal;

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

      {steps <= 5 && (
        <>
        <MyStepper steps={steps} stepsItem={currentStepLabels} activeStep={steps} updateSteps={updateSteps}/>
        </>
      )}

      {/* рендер инпутов в зависимости от текущего шага(1) и выбранного типа регистрации*/}
      {steps === 0 && (
        <>
          <p className={styles.block__ownership}>Форма собственности</p>
          <MyToggle
            value={block.type}
            name={`form[${index}].type`}
            initialToggleName={initialRegistrationType}
            setActiveType={setActiveType}
            onChange={(selectedValue) => {
              handleToggleChangeType(selectedValue);
            }}
          />
          <p className={styles.block__method}>Метод авторизации</p>
          <MyToggle
            value={block.method}
            name={`form[${index}].method`}
            initialToggleName={initialRegistrationWay}
            setActiveType={setActiveType}
            onChange={(selectedValue) =>
              handleToggleChangeMethod(selectedValue)
            }
          />
        </>
      )}
      {steps === 1 && (
        <div className={styles.block__container}>
          {formType === "юр.лицо" ? (
            <>
              <MyInput
                inputType="text"
                placeholder={"Почта"}
                value={block.dataLegal?.entryData.email}
                name={`form[${index}].dataLegal.entryData.email`}
                onChange={handleChange}
              />
              <MyInput
                inputType="password"
                placeholder={"Пароль"}
                value={block.dataLegal?.entryData.password}
                name={`form[${index}].dataLegal.entryData.password`}
                onChange={handleChange}
              />
              <MyInput
                inputType="password"
                placeholder={"Повтор пароля"}
                value={block.dataLegal?.entryData.repeatPassword}
                name={`form[${index}].dataLegal.entryData.repeatPassword`}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <MyInput
                inputType="text"
                placeholder={"Почта"}
                value={block.dataIndividual?.main.email}
                name={`form[${index}].dataIndividual.main.email`}
                onChange={handleChange}
              />
              <MyInput
                inputType="password"
                placeholder={"Пароль"}
                value={block.dataIndividual?.main.password}
                name={`form[${index}].dataIndividual.main.password`}
                onChange={handleChange}
              />
              <MyInput
                inputType="password"
                placeholder={"Повтор пароля"}
                value={block.dataIndividual?.main.repeatPassword}
                name={`form[${index}].dataIndividual.main.repeatPassword`}
                onChange={handleChange}
              />
            </>
          )}
        </div>
      )}
      {/* рендер инпутов в зависимости от текущего шага(2) и выбранного типа регистрации*/}
      {steps === 2 && (
        <div className={styles.block__container}>
          {formType === "юр.лицо" ? (
            <>
              <MyInput
                inputType="text"
                placeholder={"Наименование юр.лица"}
                value={block.dataLegal?.requisites?.nameLegal}
                name={`form[${index}].dataLegal.requisites.nameLegal`}
                onChange={handleChange}
              />
              <MyInput
                inputType="text"
                placeholder={"БИН"}
                value={block.dataLegal?.requisites?.BIN}
                name={`form[${index}].dataLegal.requisites.BIN`}
                onChange={handleChange}
              />
              <MyInput
                inputType="text"
                placeholder={"Номер банковского счета"}
                value={block.dataLegal?.requisites?.bankNumber}
                name={`form[${index}].dataLegal.requisites.bankNumber`}
                onChange={handleChange}
              />
              <MyInput
                inputType="text"
                placeholder={"Бик"}
                value={block.dataLegal?.requisites?.BIK}
                name={`form[${index}].dataLegal.requisites.BIK`}
                onChange={handleChange}
              />
              <MyInput
                inputType="text"
                placeholder={"Банк"}
                value={block.dataLegal?.requisites?.bank}
                name={`form[${index}].dataLegal.requisites.bank`}
                onChange={handleChange}
              />
              <MyInput
                inputType="text"
                placeholder={"Юридический адрес"}
                value={block.dataLegal?.requisites?.legalAdress}
                name={`form[${index}].dataLegal.requisites.legalAdress`}
                onChange={handleChange}
              />
              <MyInput
                inputType="text"
                placeholder={"Фактический адрес"}
                value={block.dataLegal?.requisites?.factAdress}
                name={`form[${index}].dataLegal.requisites.factAdress`}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <MyInput
                inputType="text"
                placeholder={"Контактное лицо(ФИО)"}
                value={block.dataIndividual?.contact?.contactPerson}
                name={`form[${index}].dataIndividual.contact.contactPerson`}
                onChange={handleChange}
              />
              <MyInput
                placeholder={"Рабочий номер телефона"}
                value={block.dataIndividual?.contact?.phone}
                name={`form[${index}].dataIndividual.contact.phone`}
                onChange={handleChange}
                inputType="phone"
              />
            </>
          )}
        </div>
      )}
      {/* FIXME достать нормально значение из state, возможно изменить сам стейт, что делать с плейсхолдерами, правильный ли подход вообще так использовать инпуты, в общем жесть */}
      {/* рендер инпутов в зависимости от текущего шага(3) и выбранного типа регистрации*/}
      {steps === 3 && (
        <div className={styles.block__container}>
          {formType === "юр.лицо" ? (
            <>
              <MyInput
                inputType="text"
                placeholder={"Контактное лицо(ФИО)"}
                value={block.dataLegal?.contact.contactPerson}
                name={`form[${index}].dataLegal.contact.contactPerson`}
                onChange={handleChange}
              />
              <MyInput
                inputType="text"
                placeholder={"Должность"}
                value={block.dataLegal?.contact.post}
                name={`form[${index}].dataLegal.contact.post`}
                onChange={handleChange}
              />
              <MyInput
                placeholder={"Номер телефона"}
                value={block.dataLegal?.contact.phone}
                name={`form[${index}].dataLegal.contact.phone`}
                onChange={handleChange}
                inputType="phone"
              />
            </>
          ) : (
            <>
              <p className={styles.block__title}>Основная информация</p>
              <div className={styles.block__display}>{dataType}</div>
              <div className={styles.block__display}>{dataMethod}</div>
              {(dataIndividualMain as string[]).map(
                (item: string, index: number) => (
                  <>
                    {index === 3 ? (
                      ""
                    ) : (
                      <>
                        <MyInput
                          inputType="text"
                          value={item}
                          name=""
                          onChange={() => {}}
                          placeholder={
                            ["Почта", "Пароль", "Повтор пароля"][index]
                          }
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
                      inputType="text"
                      value={item}
                      name=""
                      onChange={() => {}}
                      placeholder={
                        ["Контактное лицо(ФИО)", "Рабочий номер телефона"][
                          index
                        ]
                      }
                      key={index}
                    />
                  </>
                )
              )}
            </>
          )}
        </div>
      )}
      {steps === 4 && (
        <div className={styles.block__container}>
          {formType === "юр.лицо" ? (
            <div>
              <p className={styles.block__title}>Основная информация</p>
              <div className={styles.block__display}>{dataType}</div>
              <div className={styles.block__display}>{dataMethod}</div>
              {(dataLegalEntry as string[]).map(
                (item: string, index: number) => (
                  <>
                    <MyInput
                      inputType="text"
                      value={item}
                      name=""
                      onChange={() => {}}
                      placeholder={["Почта", "Пароль"][index]}
                      key={index}
                    />
                  </>
                )
              )}
              <p className={styles.block__title}>Реквизиты</p>
              {(dataLegalRequisites as string[]).map(
                (item: string, index: number) => (
                  <>
                    <MyInput
                      inputType="text"
                      value={item}
                      name=""
                      onChange={() => {}}
                      placeholder={[`${item}`][index]}
                      key={index}
                    />
                  </>
                )
              )}
              <p className={styles.block__title}>Контактное лицо</p>
              {(dataLegalContact as string[]).map(
                (item: string, index: number) => (
                  <>
                    <MyInput
                      inputType="text"
                      value={item}
                      name=""
                      onChange={() => {}}
                      placeholder={[`${item}`][index]}
                      key={index}
                    />
                  </>
                )
              )}
            </div>
          ) : (
            <div className={styles.registration__succes}>
              <NotificationStatus title="Регистрация пройдена" status={true} />
            </div>
          )}
        </div>
      )}
      {steps === 5 && (
        <NotificationStatus title="Регистрация пройдена" status={true} />
      )}
      {/* отображение кнопок в зависимости от степа */}
      {steps <= 1 && (
        <>
          {/* FIXME Не оч хорошо но пока добавить отступ */}
          <div className={styles.stub}></div>
          <MyButton title="Далее" type="button" handleClick={handleNext} />
        </>
      )}
      {steps === 2 && (
        <MyButton
          title="Далее"
          type="button"
          handleClick={handleEndRegistration}
        />
      )}
      {steps === 3 && formType === "физ.лицо" && (
        <MyButton
          title="Подтвердить"
          type="button"
          handleClick={handleEndRegistration}
        />
      )}
      {steps === 3 && formType === "юр.лицо" && (
        <MyButton
          title="Далее"
          type="button"
          handleClick={handleEndRegistration}
        />
      )}
      {steps === 4 && formType === "юр.лицо" && (
        <MyButton
          title="Подтвердить"
          type="button"
          handleClick={handleEndRegistration}
        />
      )}
    </div>
  );
};

export { BlockRegistration };
