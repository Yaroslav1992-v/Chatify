import React from "react";
import { Image } from "../info";
import { Return } from "../return-arrow/return";
import { Title } from "../title/Title";

import { NavigationProps } from "./navigation.props";

export const NavBar = ({ where, title }: NavigationProps): JSX.Element => {
  return (
    <div className="navBar">
      <div className="navBar-left">
        <Return where={where} />
        <Image url="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        {title && <Title tag="h2" children={title} />}
      </div>
    </div>
  );
};
