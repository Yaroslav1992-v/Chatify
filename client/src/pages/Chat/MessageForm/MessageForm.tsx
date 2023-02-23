import React, { useRef, useState } from "react";

import { EmojisIcon } from "./../../../icons/EmojisIcon";
import { TextArea } from "./TextArea";
import { FileFiled } from "./FileFiled";
import { MicIcon } from "./../../../icons/MicIcon";
import { BagIcon } from "../../../icons/BagIcon";
import { SendIcon } from "./../../../icons/SendIcon";

export const MessageForm = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [action, setAction] = useState<Boolean>(false);
  const handleChange = () => {
    const height = textRef.current!.scrollHeight;
    if (textRef.current!.value && !action) {
      setAction(true);
    } else {
      setAction(false);
    }
    if (height < 100) {
      textRef.current!.style.height = height + "px";
    }
  };
  return (
    <form className="chat-form">
      <div className="chat-form__box">
        <button className="chat-form__emojis">
          <EmojisIcon />
        </button>
        <TextArea textRef={textRef} onChange={handleChange} />
        <FileFiled />
        <BagIcon />
      </div>
      {!action ? (
        <button className="chat-form__action">
          <MicIcon />
        </button>
      ) : (
        <button className="chat-form__action">
          <SendIcon />
        </button>
      )}
    </form>
  );
};
