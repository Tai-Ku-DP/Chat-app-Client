import React from "react";

type IProps = {
  children: React.ReactNode;
};

export const Main: React.FC<IProps> = ({ children }) => {
  return <main className="p-4 pt-16">{children}</main>;
};
