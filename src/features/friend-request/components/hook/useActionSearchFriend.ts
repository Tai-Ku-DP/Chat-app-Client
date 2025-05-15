import debounce from "lodash/debounce";
import { useCallback, useState } from "react";
import { GetReturnType } from "~/lib";
import { useStores } from "~/store/root-store/root-store-context";

export type IActionSearchFriend = GetReturnType<typeof useActionSearchFriend>;
export const useActionSearchFriend = () => {
  const { friendStore } = useStores();

  const [isLoadingFriendSearch, setIsLoadingFriendSearch] = useState(false);

  const onSearchAPI = async (value: string) => {
    await friendStore.searchFriend({ email: value });
    setIsLoadingFriendSearch(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(debounce(onSearchAPI, 300), []);

  const searchFriend = useCallback(async (value: string) => {
    setIsLoadingFriendSearch(true);

    debounceSearch(value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoadingFriendSearch,
    listSearchFriend: friendStore.listFriendSearch,
    searchFriend,
  };
};
