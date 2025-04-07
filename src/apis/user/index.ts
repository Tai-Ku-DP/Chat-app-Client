import { ApiResponse } from "apisauce";
import { Api } from "../api-config";
import { returnResponse } from "../api-problem";

const api = Api.getInstance();
const serViceUser = process.env.NEXT_PUBLIC_BASE_URL_API_USER;

export const routes = {
  getProfile: () => `${serViceUser}/profile`,
};

const createUserApi = () => {
  return {
    async getProfile() {
      const url = routes.getProfile();
      const result: ApiResponse<{ token: string }> = await api.get(url);

      return returnResponse(result);
    },
  };
};

export const ApiUser = createUserApi();
