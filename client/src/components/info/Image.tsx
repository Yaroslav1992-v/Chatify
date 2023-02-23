import React from "react";

import AddStatusBtn from "./AddStatusBtn";
type ImageProps = {
  url: string;
  you?: boolean;
};
export const Image = ({ url, you = false }: ImageProps) => {
  return (
    <div className="Image">
      <img src={url} alt="pic" />
      {you && <AddStatusBtn />}
    </div>
  );
};
