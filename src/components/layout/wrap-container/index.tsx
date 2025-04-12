import React from "react";
import { IActionSidebar } from "../hook";
import { cn } from "~/lib";

type IProps = {
  children: React.ReactNode;
} & Pick<IActionSidebar, "paddingLeftSidebar">;

export const WrapContainer: React.FC<IProps> = ({
  paddingLeftSidebar,
  children,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col flex-1 pr-4 transition-all duration-300",
        paddingLeftSidebar
      )}
    >
      {children}
    </div>
  );
};
