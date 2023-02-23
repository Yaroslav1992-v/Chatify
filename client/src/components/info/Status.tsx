import React from "react";
import { Title } from "../title/Title";
import { Image } from "./index";

export const Status = () => {
  return (
    <div className="status">
      <Image url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <div className="status__box">
        <Title tag="name" children="My Status" />
        <span className="status__update">Tap to add Status update</span>
      </div>
    </div>
  );
};
