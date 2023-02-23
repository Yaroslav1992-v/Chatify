import React from "react";
import { ChatNav } from "./ChatNav";
import MessageBox from "./MessageBox/MessageBox";
import { MessageForm } from "./MessageForm/MessageForm";

export const Chat = () => {
  return (
    <section className="chat">
      <div className="container">
        <ChatNav />
        <MessageBox />
        <MessageForm />
      </div>
    </section>
  );
};
