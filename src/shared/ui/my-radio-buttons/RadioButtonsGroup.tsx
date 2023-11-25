import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ISignIn } from "../../types";

interface RadioGroupItemProps {
  id: number;
  name: string;
  onAddBlock: (type: string) => void;
}

interface RadioGroupProps {
  itemList: RadioGroupItemProps[];
  name: string;
}

const types = ["phone", "email"];

const RadioButtonsGroup: React.FC<RadioGroupProps> = ({ itemList, name }) => {
  const [activeType, setActiveType] = useState<string>("phone");
  
  return (
    <FormControl>
      <RadioGroup>
        {itemList.map((item) => (
          <FormControlLabel
            value={item.name}
            control={<Radio />}
            label={item.name}
            key={item.id}
            name={name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export { RadioButtonsGroup };
