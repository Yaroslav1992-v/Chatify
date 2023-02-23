import React from "react";
import { Message } from "./Message";
import { getTime } from "./../../../utils/date";

export const Messages = () => {
  const messages = [
    {
      sender: true,
      message: "Baby apny mera message scene kar ky reply hee nai kia",
      name: "Faiq Imtiaz",
    },
    {
      sender: true,
      message: "Reply to karo",
      name: "Faiq Imtiaz",
    },
    {
      sender: false,
      message: "Han Bhai hy mery pass ik project",
      name: "Faiq Imtiaz",
    },
  ];
  return (
    <ul className="chat__messages">
      {messages.map((m, i) => (
        <Message
          message={m.message}
          name={m.name}
          sender={m.sender}
          date={getTime(new Date())}
          key={i}
        />
      ))}
    </ul>
  );
};
