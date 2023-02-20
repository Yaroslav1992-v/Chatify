import React, { useState } from "react";
import { CheckboxProps } from "./FormProps";

export const Checkbox = ({ id, check }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked((prevState) => !prevState);
  };
  return (
    <div className="form__checkBox">
      <label
        onClick={handleCheck}
        className={"form__checkBox-label" + (checked ? " checked" : "")}
        htmlFor={id}
      ></label>

      <input id={id} className="form__checkBox-input" type="checkbox" />
      <label
        onClick={handleCheck}
        className="form__checkBox-remember"
        htmlFor={id}
      >
        {check}
      </label>
    </div>
  );
};
