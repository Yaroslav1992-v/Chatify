import React from "react";
import { Button, Logo } from "../../components";
import { pageNameType } from "./Main.props";

export const MainEmpty = ({ pageName }: { pageName: pageNameType }) => {
  const ButtonText = (pageName: pageNameType) => {
    switch (pageName) {
      case "Chats":
        return "Start Chatting";

      case "Groups":
        return "Create Group";

      case "Calls":
        return "Start Call";
    }
  };
  return (
    <div className="main__empty">
      {pageName !== "Status" ? (
        <>
          <Logo size="small" />
          <h2 className="main__empty-message">{`You haven’t ${pageName} yet`}</h2>
          <Button
            type="button"
            size="small"
            childen={ButtonText(pageName)}
          ></Button>{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
};
