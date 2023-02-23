import React from "react";
interface Date {
  date: string;
}
export const MessageDate = ({ date }: Date) => {
  return (
    <div className="chat__date">
      <p>{date}</p>
    </div>
  );
};
