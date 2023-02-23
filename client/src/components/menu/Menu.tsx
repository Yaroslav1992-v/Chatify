import React from "react";
import { MenuProps } from "./Menu.props";
import { MenuItem } from "./MenuItem";

export const Menu = ({ menu, handleMenu }: MenuProps) => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {menu.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            onClick={handleMenu}
            active={item.active}
          />
        ))}
      </ul>
    </nav>
  );
};
