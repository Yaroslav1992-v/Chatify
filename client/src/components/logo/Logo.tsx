import React from "react";
import logo from "../../images/logo.png";

export const Logo = (): JSX.Element => {
  return (
    <div className="Logo">
      <img className="Logo-image" src={logo} alt="logo  " />
    </div>
  );
};
