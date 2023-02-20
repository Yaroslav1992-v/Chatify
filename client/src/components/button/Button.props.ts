import { ReactNode } from "react";

export interface ButtonProps {
  type: "button" | "link";
  childen: ReactNode;
  size: "large" | "medium" | "small";
  to?: string;
}
