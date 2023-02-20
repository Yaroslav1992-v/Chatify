import React, { useState } from "react";
import { TextFieldProps } from "./FormProps";

export const TextField = ({
  label,
  Icon,
  type = "text",
  name,
  reference,
  error = "",
}: TextFieldProps) => {
  return (
    <>
      <div className="form__textField">
        <Icon className="form__textField-icon" />
        <label htmlFor={label} className="form__textField-label">
          {label}
        </label>
        <input
          ref={reference}
          className={"form__textField-input" + (error ? " input-error" : "")}
          placeholder={label}
          type={type}
          name={name}
          id={label}
        />
      </div>
      {error && <p className="form__error">{error && error}</p>}
    </>
  );
};
