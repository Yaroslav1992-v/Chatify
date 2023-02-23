import React from "react";
import { ChatsProps } from "./Info.props";
import { Image } from "./Image";
import { Title } from "../title/Title";
import { getTime } from "./../../utils/date";

export const Chats = ({
  chatName,
  lastMessage,
  from = "",
  date,
}: ChatsProps) => {
  return (
    <div className="chats">
      <Image url="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <div className="chats__container">
        <div className="chats__top">
          <Title tag="name" children={chatName} />
          <span className="chats__date">{getTime(date)}</span>
        </div>
        <div className="chats__bottom">
          {from && <p className="chats__from">{from}</p>}
          <p className="chats__lastMessage">{lastMessage}</p>
        </div>
      </div>
    </div>
  );
};
