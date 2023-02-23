import React from "react";
import { MessageAreaProps } from "./../Chat.props";

export const TextArea = ({ textRef, onChange }: MessageAreaProps) => {
  return (
    <textarea
      ref={textRef}
      onChange={onChange}
      placeholder="Type Message..."
      className="chat-form__textArea"
    ></textarea>
  );
};
