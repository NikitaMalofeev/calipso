import React from "react";
import {Select, MenuItem, styled} from "@mui/material";

interface SelectProps {
    placeholder: string;
    value: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const CustomizeSelect = styled(Select)`
    max-width: 390px;

    
`

const MySelect: React.FC<SelectProps> = ({
    placeholder,
    value,
    name,
    onChange
}) => {
  return (
    <CustomizeSelect
      label={placeholder}
    >
      <MenuItem value={1}>Алматы</MenuItem>
      <MenuItem value={2}>Астана</MenuItem>
      <MenuItem value={3}>Шымкент</MenuItem>
      <MenuItem value={4}>Караганда</MenuItem>
      <MenuItem value={5}>Петропавловск</MenuItem>
    </CustomizeSelect>
  );
};

export {MySelect};
