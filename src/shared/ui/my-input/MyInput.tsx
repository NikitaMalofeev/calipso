import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

interface MyInputProps {
  value?: string;
  placeholder: string;
  name: string;
  setFieldValue?: (field: string, value: any) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const CustomizeMyInput = styled(TextField)({
  width: "100%",
  marginBottom: "25px",
  "& .MuiInputLabel-root": {
    color: "#979797",
    "&.Mui-focused": {
      color: "black",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid #F5F4F2",
      borderRadius: "20px",
    },
    "&:hover fieldset": {
      border: "2px solid black",
    },
    "&.Mui-focused fieldset": {
      border: "2px solid black",
    },
  },
});

const MyInput: React.FC<MyInputProps> = ({
  value,
  placeholder,
  name,
  setFieldValue,
  onChange,
}) => {
  return (
    <CustomizeMyInput
      type="text"
      label={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export { MyInput };
