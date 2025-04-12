import React from "react";
import { IMenuItem } from "../../utils";
import Link from "next/link";
import { IPropsSidebarContainer } from "..";
import { cn } from "~/lib";

type IProps = {
  item: IMenuItem;
} & Pick<IPropsSidebarContainer, "isCollapseSidebar">;

export const SidebarItem: React.FC<IProps> = ({ item }) => {
  return (
    <Link
      href={item?.href || ""}
      className={cn(
        "flex cursor-pointer items-center gap-2 overflow-hidden",
        "rounded-md px-2 outline-hidden [&>svg]:size-4 [&>svg]:shrink-0",
        "[&>svg]:text-gray-500 hover:bg-sidebar-accent hover:text-bg-sidebar-accent-foreground h-8 text-sm",
        "-ml-[1px]"
      )}
    >
      {item.icon}
      <span className="line-clamp-1">{item.label}</span>
    </Link>
  );
};
