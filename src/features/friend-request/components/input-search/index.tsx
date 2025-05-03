import { Loader2, Search } from "lucide-react";
import React from "react";
import { Input } from "~/components/ui/input";
import { IActionFriend } from "../hook";
import { observer } from "mobx-react-lite";

type IProps = Pick<IActionFriend, "searchFriend" | "isLoadingFriendSearch">;
export const InputSearch: React.FC<IProps> = observer(
  ({ searchFriend, isLoadingFriendSearch }) => {
    return (
      <Input
        placeholder="Search friends..."
        preFix={<Search />}
        suFix={
          isLoadingFriendSearch ? (
            <span>
              <Loader2 className="animate-spin" size={20} />
            </span>
          ) : undefined
        }
        onChange={(e) => searchFriend(e.target.value)}
      />
    );
  }
);
