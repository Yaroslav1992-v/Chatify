import React from "react";
import { AddFileIcon } from "./../../../icons/AddFileIcon";

export const FileFiled = () => {
  return (
    <>
      <label htmlFor="file" className="chat-form__fileLabel">
        <AddFileIcon />
      </label>
      <input id="file" className="chat-form__fileInput" type="file" />
    </>
  );
};
