export interface MenuProps {
  menu: MenuItem[];
  handleMenu: (name: string) => void;
}

export type MenuItem = {
  name: string;
  active: boolean;
};
export interface MenuItemProps extends MenuItem {
  onClick: (name: string) => void;
}
