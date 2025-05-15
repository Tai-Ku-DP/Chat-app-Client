import { useCallback } from "react";
import { toast } from "sonner";
import {
  IPramsAcceptFriendRequest,
  IPramsDeleteFriendRequest,
  IPramsSendFriendRequest,
} from "~/apis/friend/types";
import { GetReturnType } from "~/lib";
import { useStores } from "~/store/root-store/root-store-context";

export type IActionFriendRequest = GetReturnType<typeof useActionFriendRequest>;
export const useActionFriendRequest = () => {
  const { friendStore } = useStores();

  const acceptFriendRequest = useCallback(
    async (friendSearchId: string, params: IPramsAcceptFriendRequest) => {
      const res = await friendStore.acceptFriend(friendSearchId, {
        ...params,
      });

      if (res) {
        return toast.success("Accept friend request successfully");
      }

      return toast.error("Accept friend request error");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const sendFriendRequest = useCallback(
    async (friendSearchId: string, params: IPramsSendFriendRequest) => {
      const res = await friendStore.sendFriendRequest(friendSearchId, {
        ...params,
      });

      if (res) {
        return toast.success("Send friend request successfully");
      }

      return toast.error("Send friend request error");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const cancelFriendRequest = useCallback(
    async (friendSearchId: string, params: IPramsDeleteFriendRequest) => {
      const res = await friendStore.cancelFriendRequest(friendSearchId, {
        ...params,
      });

      if (res) {
        return toast.success("Cancel friend request successfully");
      }

      return toast.error("Cancel friend request error");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    acceptFriendRequest,
    sendFriendRequest,
    cancelFriendRequest,
  };
};
