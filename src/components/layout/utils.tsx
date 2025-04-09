import { MessageSquare, User, Users } from "lucide-react";
import { JSX } from "react/jsx-runtime";

export type IMenuItem = {
  href: string;
  icon: JSX.Element;
  label: string;
};

export const CONSTANT_MENU_ITEM: IMenuItem[] = [
  {
    href: "profile",
    label: "Profile",
    icon: <User />,
  },
  {
    href: "friend-request",
    label: "Friend request",
    icon: <Users />,
  },
  {
    href: "conversation",
    label: "Conversations",
    icon: <MessageSquare />,
  },
];
