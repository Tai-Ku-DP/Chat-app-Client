import { ApiResponse } from "apisauce";
import { Api } from "../config/api-config";
import { returnResponse } from "../config/api-problem";
import { envConfig } from "~/env";
import { IUser } from "~/store/user-store/types";

const api = Api.getInstance();
const { NEXT_PUBLIC_BASE_URL_API_USER } = envConfig();
const serViceUser = NEXT_PUBLIC_BASE_URL_API_USER;

const routes = {
  getProfile: () => `${serViceUser}/profile`,
};

const createUserApi = () => {
  return {
    async getProfile() {
      const url = routes.getProfile();
      const result: ApiResponse<IUser> = await api.get(url);

      return returnResponse(result);
    },
  };
};

export const ApiUser = createUserApi();
