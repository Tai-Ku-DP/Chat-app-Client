import React from "react";

type IProps = {
  children: React.ReactNode;
};

export const WrapContainer: React.FC<IProps> = ({ children }) => {
  return <div className="flex flex-1 gap-4">{children}</div>;
};
