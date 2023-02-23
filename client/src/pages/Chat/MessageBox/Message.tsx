import React from "react";
import { MessageDate } from "./MessageDate";
interface MessageProps {
  message?: string;
  date: string;
  sender: boolean;
  name?: string;
}
export const Message = ({ message, date, sender, name }: MessageProps) => {
  return (
    <li className={"chat__message" + (!sender ? " chat__message-user" : "")}>
      <div className="chat__messageInfo">
        {sender && <span className="chat__sender">{name}</span>}
        <div className="chat__message-content">
          {message && <p>{message}</p>}
        </div>
        <p className="chat__messageTime"> {date} </p>{" "}
      </div>
    </li>
  );
};
