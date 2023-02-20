import React from "react";

import { AuthCheckProps } from "./AuthProps";

export const AuthCheck = ({ question, to, changePage }: AuthCheckProps) => {
  return (
    <div className="auth__check">
      <p className="auth__question">{question}</p>
      <button onClick={changePage} className="auth__link">
        {to}
      </button>
    </div>
  );
};
