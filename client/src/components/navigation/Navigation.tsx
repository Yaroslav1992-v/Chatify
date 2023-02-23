import React from "react";
import { Title } from "../title/Title";
import { SearchIcon } from "./SearchIcon";

export const Navigation = () => {
  return (
    <div className="navigation">
      <Title tag="h1" children="Chatify" />
      <div className="navigation__right">
        <SearchIcon />
        <button className="navigation__dots"></button>
      </div>
    </div>
  );
};
