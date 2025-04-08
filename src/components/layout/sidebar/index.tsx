import Link from "next/link";
import { CONSTANT_MENU_ITEM } from "../utils";

export const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 z-10 hidden h-svh w-sidebar-width md:flex left-0 p-2">
      <div className="bg-white dark:bg-sidebar w-full p-2 border rounded-md flex flex-col gap-1 overflow-hidden overflow-y-scroll ">
        {CONSTANT_MENU_ITEM.map((item) => (
          <Link
            href={item?.href || ""}
            className="flex cursor-pointer w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-hidden [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-gray-500 hover:bg-sidebar-accent hover:text-bg-sidebar-accent-foreground h-8 text-sm"
            key={item.href}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
