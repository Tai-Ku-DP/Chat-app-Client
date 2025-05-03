import { ApiResponse } from "apisauce";
import { Api } from "../config/api-config";
import { returnResponse } from "../config/api-problem";
import { envConfig } from "~/env";
import { IUser } from "~/store/user-store/types";
import {
  IParamsSearchUser,
  ResponseSearchUser,
  ResponseSearchUserWithStatus,
  ResponseUser,
} from "./types";
import { IFriendSearch } from "~/store/friend-store/types";

const api = Api.getInstance();
const { NEXT_PUBLIC_BASE_URL_API_USER } = envConfig();
const serViceUser = NEXT_PUBLIC_BASE_URL_API_USER;

const routes = {
  getProfile: () => `${serViceUser}/profile`,
  searchUser: () => `${serViceUser}/search`,
  searchUserWithStatus: () => `${serViceUser}/search-with-status`,
};

export const createUserApi = () => {
  return {
    async getProfile(): Promise<ResponseUser> {
      const url = routes.getProfile();
      const result: ApiResponse<IUser> = await api.get(url);

      return returnResponse(result);
    },

    async searchUser(params: IParamsSearchUser): Promise<ResponseSearchUser> {
      const url = routes.searchUser();
      const result: ApiResponse<IUser[]> = await api.get(url, {
        ...params,
      });

      return returnResponse(result);
    },

    async searchUserWithStatus(
      params: IParamsSearchUser
    ): Promise<ResponseSearchUserWithStatus> {
      const url = routes.searchUserWithStatus();
      const result: ApiResponse<IFriendSearch[]> = await api.get(url, {
        ...params,
      });

      return returnResponse(result);
    },
  };
};

export const ApiUser = createUserApi();
