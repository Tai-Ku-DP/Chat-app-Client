import { ApiResponse } from "apisauce";
import { Api } from "../config/api-config";
import { returnResponse } from "../config/api-problem";
import { envConfig } from "~/env";
import { IUser } from "~/store/user-store/types";
import { ResponseUser } from "./types";

const api = Api.getInstance();
const { NEXT_PUBLIC_BASE_URL_API_USER } = envConfig();
const serViceUser = NEXT_PUBLIC_BASE_URL_API_USER;

const routes = {
  getProfile: () => `${serViceUser}/profile`,
};

export const createUserApi = () => {
  return {
    async getProfile(): Promise<ResponseUser> {
      const url = routes.getProfile();
      const result: ApiResponse<IUser> = await api.get(url);

      return returnResponse(result);
    },
  };
};

export const ApiUser = createUserApi();
