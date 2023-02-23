import React from "react";
import { Title, Return } from "../../components";
import { Call, Video, Dots } from "../../components/actions";
import { Actions } from "../../components/actions/Actions";
import { Image } from "../../components/info";

export const ChatNav = () => {
  return (
    <div className="chat__nav">
      <div className="chats__left">
        <Return where="chats" />
        <Image url="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Title tag="name" children="Crush" />
      </div>
      <Actions
        children={[<Call key={1} />, <Video key={2} />, <Dots key={3} />]}
      />
    </div>
  );
};
