import React from "react";
import { formatMessageDate } from "../../../utils/date";
import { MessageDate } from "./MessageDate";
import { Messages } from "./Messages";

const MessageBox = () => {
  const date = formatMessageDate(new Date());
  return (
    <div className="chat__messageBox">
      <MessageDate date={date} />
      <Messages />
    </div>
  );
};

export default MessageBox;
