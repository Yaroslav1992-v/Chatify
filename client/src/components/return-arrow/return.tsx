import React from "react";
import { useNavigate } from "react-router-dom";
import goBack from "../../images/return.png";
import { ReturnProps } from "./return.props";
export const Return = ({ where }: ReturnProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="return">
      <button onClick={() => navigate(where)} className="return__btn">
        <img
          className="return__image"
          src={goBack}
          alt="
      return arrow"
        />
      </button>
    </div>
  );
};
