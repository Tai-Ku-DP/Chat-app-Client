import React from "react";

type IProps = {
  children: React.ReactNode;
};

export const Main: React.FC<IProps> = ({ children }) => {
  return (
    <main className="relative flex w-full flex-1 flex-col">{children}</main>
  );
};
