import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  styled,
} from "@mui/material";

interface RadioGroupItemProps {
  id: number;
  name: string;
}

interface RadioGroupProps {
  itemList: RadioGroupItemProps[];
  name: string;
  value?: string | undefined;
  defaultValue?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomizeRadioGroup = styled(RadioGroup)({
  width: "100%"
});

const CustomizeFormControl = styled(FormControl)({
  width: "100%",
  marginBottom: "20px",
  "& .MuiFormGroup-root": {
    marginLeft: "25px",
    width: "100%",
  }, // изменение грид сетки для расположения радио кнопок
});

const CustomizeFormControlLabel = styled(FormControlLabel)({
  margin: "0 30px"
});

const RadioButtonsGroup: React.FC<RadioGroupProps> = ({
  itemList,
  name,
  defaultValue,
  onChange,
}) => {
  return (
    <CustomizeFormControl>
      <CustomizeRadioGroup  defaultValue={defaultValue}>
        {itemList.map((item, index) => (
          <CustomizeFormControlLabel
            control={
              <Radio value={item.name} name={name} onChange={onChange}/>
            }
            label={item.name}
            key={index}
            name={name}
          />
        ))}
      </CustomizeRadioGroup>
    </CustomizeFormControl>
  );
};

export { RadioButtonsGroup };
