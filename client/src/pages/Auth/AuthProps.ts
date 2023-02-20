export interface AuthCheckProps {
  question: string;
  to: "Sign In" | "Sign Up";
  changePage: () => void;
}
export interface Errors {
  email?: string;
  password?: string;
  name?: string;
}
export type AuthType = "login" | "register";
