import React from "react";
import { Return } from "../return-arrow/return";
import { Title } from "../title/Title";

import { NavigationProps } from "./navigation.props";

export const NavBar = ({ where, title }: NavigationProps): JSX.Element => {
  return (
    <div className="navBar">
      <div className="navBar-left">
        <Return where={where} />
        {title && <Title tag="h2" children={title} />}
      </div>
    </div>
  );
};
