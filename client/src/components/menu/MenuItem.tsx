import React from "react";
import { MenuItemProps } from "./Menu.props";

export const MenuItem = ({ name, onClick, active }: MenuItemProps) => {
  return (
    <li className="menu__item">
      <button
        onClick={() => onClick(name)}
        className={"menu__btn" + (active ? " menu__btn-active" : "")}
      >
        {name}
      </button>
    </li>
  );
};
