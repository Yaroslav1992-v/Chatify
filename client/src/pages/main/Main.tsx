import React, { useState } from "react";
import { Menu, MenuItem, Navigation } from "../../components";
import { Chats } from "../../components/info/Chats";
import { Status } from "../../components/info/Status";
import { pageNameType } from "./Main.props";
import { MainEmpty } from "./MainEmpty";

export const Main = () => {
  const [menu, setMenu] = useState<MenuItem[]>([
    { name: "Chats", active: false },
    { name: "Groups", active: true },
    { name: "Status", active: false },
    { name: "Calls", active: false },
  ]);

  const [active, setActive] = useState<pageNameType>("Groups");
  const handleMenu = (name: string) => {
    const updatedMenu: MenuItem[] = menu.map((item) => {
      if (item.name !== name) {
        item.active = false;
      } else {
        item.active = true;
        setActive(item.name as pageNameType);
      }
      return item;
    });
    setMenu(updatedMenu);
  };
  return (
    <section className="main">
      <div className="container">
        <Navigation />
        <Menu menu={menu} handleMenu={handleMenu} />

        {active !== "Status" ? (
          <div className="wrapper">
            {" "}
            <div className="main__container">
              {active === "Chats" ? (
                <Chats
                  chatName="Ali Tahir"
                  date={new Date()}
                  lastMessage="maciej.kowalski@email.com"
                />
              ) : (
                <MainEmpty pageName={active} />
              )}
            </div>
          </div>
        ) : (
          <div className="main__container">
            <Status />
          </div>
        )}
      </div>
    </section>
  );
};
