import { Loader2, Search } from "lucide-react";
import { observer } from "mobx-react-lite";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { ListUser } from "../list-friend";
import { IActionFriendRequest, IActionSearchFriend } from "../hook";

type PropsActionSearchFriend = Pick<
  IActionSearchFriend,
  "listSearchFriend" | "searchFriend" | "isLoadingFriendSearch"
>;

type PropsActionFriendRequest = Pick<
  IActionFriendRequest,
  "acceptFriendRequest" | "sendFriendRequest" | "cancelFriendRequest"
>;

export type PropsDialogAddFriendParent = {
  open: boolean;
  onClose: () => void;
} & PropsActionSearchFriend &
  PropsActionFriendRequest;

const DialogAddFriendComponent: React.FC<PropsDialogAddFriendParent> = ({
  open,

  isLoadingFriendSearch,
  listSearchFriend,
  searchFriend,

  acceptFriendRequest,
  sendFriendRequest,
  cancelFriendRequest,

  onClose,
}) => {
  console.log(JSON.parse(JSON.stringify(listSearchFriend)));

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="px-0 h-[calc(100vh-64px)]">
        <div className="flex flex-col gap-4">
          <DialogHeader className="px-4">
            <DialogTitle className="text-lg font-semibold">
              Add New Friend
            </DialogTitle>

            <DialogDescription className="text-muted-foreground text-sm">
              Enter email to find new friends
            </DialogDescription>
          </DialogHeader>

          <div className="relative border-y">
            <Input
              placeholder="Search friends..."
              className="focus-visible:ring-[0px] border-none"
              preFix={<Search />}
              onChange={(e) => searchFriend(e.target.value)}
              suFix={
                isLoadingFriendSearch ? (
                  <span>
                    <Loader2 className="animate-spin" size={20} />
                  </span>
                ) : undefined
              }
            />
          </div>

          <ListUser
            listSearchFriend={listSearchFriend}
            //
            acceptFriendRequest={acceptFriendRequest}
            sendFriendRequest={sendFriendRequest}
            cancelFriendRequest={cancelFriendRequest}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const DialogAddFriend = observer(DialogAddFriendComponent);
