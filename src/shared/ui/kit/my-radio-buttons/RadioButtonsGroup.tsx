// RadioButtonsGroup.tsx

import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  styled,
} from "@mui/material";
import styles from "./styles.module.scss";
import controlImg from "../../../icons/additionalIcons/dotsControl.svg"

interface RadioGroupItemProps {
  id: number;
  name: string;
}

// FIXME для переиспользуемости радио кнопок сделал 4 свойства needMargin needContainer needControlImg isControl, прввильный ли это подход?
interface RadioButtonsGroupProps {
  itemList?: (RadioGroupItemProps | string)[];
  name: string;
  value?: string | undefined;
  needMargin?: { [key: string]: boolean };
  needContainer?: boolean;
  needControlImg?: boolean;
  defaultValue?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isControl?: (index: number) => void;
}

const CustomizeRadioGroup = styled(RadioGroup)({
  width: "100%",
});

const CustomizeFormControl = styled(FormControl)({
  width: "100%",
  marginBottom: "20px",
  "& .MuiFormGroup-root": {
    width: "100%",
  },
});

const CustomizeFormControlLabel = styled(FormControlLabel)({
  margin: "0 20px",
});

const RadioButtonsGroup: React.FC<RadioButtonsGroupProps> = ({
  itemList,
  name,
  defaultValue,
  needMargin,
  needContainer,
  needControlImg,
  onChange,
  isControl,
}) => {
  return (
    <CustomizeFormControl>
      <CustomizeRadioGroup defaultValue={defaultValue}>
        {itemList?.map((item, index) => (
          <div className={needContainer ? styles.container : ""} key={index}>
            <CustomizeFormControlLabel
              control={
                <Radio
                  value={typeof item === "string" ? item : item.name}
                  name={name}
                  onChange={onChange}
                />
              }
              label={typeof item === "string" ? item : item.name}
              name={name}
              style={
                needMargin && typeof item === "object" && needMargin[item.name]
                  ? ({ marginBottom: "60px" } as React.CSSProperties)
                  : {}
              }
            />
            {needControlImg && isControl && (
              <button className={styles.control} onClick={() => isControl(index)}>
                <img src={controlImg} alt="" />
              </button>
            )}
          </div>
        ))}
      </CustomizeRadioGroup>
    </CustomizeFormControl>
  );
};

export { RadioButtonsGroup };
