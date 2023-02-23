import React from "react";
import logo from "../../images/logo.png";
interface LogoType {
  size?: "large" | "small";
}
export const Logo = ({ size }: LogoType): JSX.Element => {
  return (
    <div className={"Logo" + (size === "small" ? " Logo-small" : "")}>
      <img className="Logo-image" src={logo} alt="logo  " />
    </div>
  );
};
