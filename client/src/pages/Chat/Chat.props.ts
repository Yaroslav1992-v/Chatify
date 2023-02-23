export interface Chatprops {}
export interface ChatIconProps {
  svg: JSX.Element;
}
export interface MessageAreaProps {
  textRef: React.RefObject<HTMLTextAreaElement>;
  onChange: () => void;
}
