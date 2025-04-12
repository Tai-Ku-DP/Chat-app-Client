import React from "react";
import { CONSTANT_MENU_ITEM } from "../utils";
import { SidebarItem } from "./sidebar-item";
import { IActionSidebar } from "../hook";
import { cn } from "~/lib";

export type IPropsSidebarContainer = Pick<
  IActionSidebar,
  "isCollapseSidebar" | "widthSidebar"
>;

export const Sidebar: React.FC<IPropsSidebarContainer> = ({
  isCollapseSidebar,
  widthSidebar,
}) => {
  return (
    <div
      className={cn(
        "fixed inset-y-0 z-10 hidden h-svh md:flex left-0 p-2 transition-all duration-300",
        widthSidebar
      )}
    >
      <div
        className={cn(
          "bg-white dark:bg-sidebar w-full p-2 border rounded-md",
          "flex flex-col gap-1 overflow-hidden overflow-y-scroll"
        )}
      >
        {CONSTANT_MENU_ITEM.map((item) => (
          <SidebarItem
            key={item.href}
            item={item}
            isCollapseSidebar={isCollapseSidebar}
          />
        ))}
      </div>
    </div>
  );
};
