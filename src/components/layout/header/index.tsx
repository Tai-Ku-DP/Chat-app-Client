"use client";

import { Bell, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { useStores } from "~/store/root-store/root-store-context";
import { observer } from "mobx-react-lite";

const Space = () => <div className="flex-1" />;
export const Header = observer(() => {
  const { theme, setTheme } = useTheme();
  const { userStore } = useStores();

  return (
    <header className="bg-background/50 flex h-14 items-center gap-3 backdrop-blur-xl lg:h-[60px] w-full sticky z-10">
      <button
        data-slot="button"
        className="flex items-center size-9 border rounded-md justify-center cursor-pointer hover:bg-accent transition-all duration-300"
      >
        <Menu size={16} />
      </button>

      <span className="text-red-400">{userStore?.user?.email}email</span>
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
});
