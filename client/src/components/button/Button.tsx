import React from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "./Button.props";

export const Button = ({ type, childen, size, to }: ButtonProps) => {
  switch (type) {
    case "link":
      return (
        <Link className={`button  button-${size}`} to={to ? to : ""}>
          {childen}
        </Link>
      );
    case "button":
      return <button className={`button  button-${size}`}>{childen}</button>;
  }
};
