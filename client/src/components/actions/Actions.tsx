import React, { ReactNode } from "react";
interface ActionProps {
  children: ReactNode[];
}
export const Actions: React.FC<ActionProps> = ({ children }) => {
  return <div className="actions">{children}</div>;
};
