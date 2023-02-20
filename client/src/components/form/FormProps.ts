import { IconType } from "react-icons";

export interface TextFieldProps {
  label: string;
  Icon: IconType;
  type: "text" | "password";
  name: string;
  reference: React.RefObject<HTMLInputElement>;
  error?: string;
}
export interface CheckboxProps {
  id: string;
  check: string;
}
