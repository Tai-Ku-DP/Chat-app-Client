"use client";

import { Bell, Moon, PanelLeft, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { IActionSidebar } from "../hook";
import React from "react";

const Space = () => <div className="flex-1" />;

type IProps = Pick<
  IActionSidebar,
  "toggleCollapseSidebar" | "isCollapseSidebar"
>;

export const Header: React.FC<IProps> = ({ toggleCollapseSidebar }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background/50 flex h-14 items-center gap-3 backdrop-blur-xl lg:h-[60px] w-full sticky z-10">
      <button
        onClick={toggleCollapseSidebar}
        data-slot="button"
        className="flex items-center size-9 border rounded-md justify-center cursor-pointer hover:bg-accent transition-all duration-300"
      >
        <PanelLeft size={16} />
      </button>

      <Space />

      <button
        data-slot="button"
        className="flex relative items-center size-9 border rounded-md justify-center cursor-pointer hover:bg-accent transition-all duration-300"
      >
        <Bell size={16} />
        <span className="size-2 absolute bg-red-400 rounded-full -top-0.5 -right-1" />
      </button>

      <button
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
            return;
          }

          setTheme("light");
        }}
        data-slot="button"
        className="flex items-center size-9 border rounded-md justify-center cursor-pointer hover:bg-accent transition-all duration-300"
      >
        {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/188551500?s=48&v=4" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};
