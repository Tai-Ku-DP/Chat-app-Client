import { observer } from "mobx-react-lite";
import {
  DialogAddFriend,
  FriendRequestsHeader,
  InputSearch,
  useSearchFriend,
} from "./components";
import { useCallback, useState } from "react";

const FriendRequestComponent = () => {
  const [openDialogAddFriend, setOpenDialogAddFriend] = useState(false);

  const { searchFriend, isLoadingFriendSearch, listSearchFriend } =
    useSearchFriend();

  const toggleOpenDialogAddFriend = useCallback(
    () => setOpenDialogAddFriend((prev) => !prev),
    []
  );

  return (
    <>
      <div className="overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto">
          <FriendRequestsHeader onAddFriend={toggleOpenDialogAddFriend} />

          <div className="mb-6">
            <InputSearch
              searchFriend={searchFriend}
              isLoadingFriendSearch={false}
            />
          </div>

          {/* <div className="space-y-4">
            <div className="text-sm font-medium text-muted-foreground">
              PENDING REQUESTS (3)
            </div>

            <div className="bg-card rounded-lg border shadow-sm">
              <div className="p-4 flex items-center justify-between border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Jacquenetta Slowgrave"
                    />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Jacquenetta Slowgrave</div>
                    <div className="text-sm text-muted-foreground">
                      2 mutual friends
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full size-9 p-0"
                  >
                    <X className="size-4" />
                    <span className="sr-only">Reject</span>
                  </Button>
                  <Button size="sm" className="rounded-full size-9 p-0">
                    <Check className="size-4" />
                    <span className="sr-only">Accept</span>
                  </Button>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Nickola Peever"
                    />
                    <AvatarFallback>NP</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Nickola Peever</div>
                    <div className="text-sm text-muted-foreground">
                      5 mutual friends
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full size-9 p-0"
                  >
                    <X className="size-4" />
                    <span className="sr-only">Reject</span>
                  </Button>
                  <Button size="sm" className="rounded-full size-9 p-0">
                    <Check className="size-4" />
                    <span className="sr-only">Accept</span>
                  </Button>
                </div>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Farand Hume"
                    />
                    <AvatarFallback>FH</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Farand Hume</div>
                    <div className="text-sm text-muted-foreground">
                      1 mutual friend
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full size-9 p-0"
                  >
                    <X className="size-4" />
                    <span className="sr-only">Reject</span>
                  </Button>
                  <Button size="sm" className="rounded-full size-9 p-0">
                    <Check className="size-4" />
                    <span className="sr-only">Accept</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-sm font-medium text-muted-foreground mt-6">
              SUGGESTED FRIENDS (2)
            </div>

            <div className="bg-card rounded-lg border shadow-sm">
              <div className="p-4 flex items-center justify-between border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Ossie Peasey"
                    />
                    <AvatarFallback>OP</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Ossie Peasey</div>
                    <div className="text-sm text-muted-foreground">
                      8 mutual friends
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="gap-1">
                  <Plus className="size-4" />
                  <span>Add Friend</span>
                </Button>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Hall Negri"
                    />
                    <AvatarFallback>HN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Hall Negri</div>
                    <div className="text-sm text-muted-foreground">
                      3 mutual friends
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="gap-1">
                  <Plus className="size-4" />
                  <span>Add Friend</span>
                </Button>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <DialogAddFriend
        open={openDialogAddFriend}
        isLoadingFriendSearch={isLoadingFriendSearch}
        searchFriend={searchFriend}
        listSearchFriend={listSearchFriend}
        onClose={toggleOpenDialogAddFriend}
      />
    </>
  );
};

export const FriendRequestFeature = observer(FriendRequestComponent);
