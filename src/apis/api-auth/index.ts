import { ApiResponse } from "apisauce";
import { Api } from "../api-config";
import { IPayloadLogin } from "./types";
import { returnResponse } from "../api-problem";

const api = Api.getInstance();
const serViceAuth = process.env.NEXT_PUBLIC_BASE_URL_API_AUTH;

export const routes = {
  login: () => `${serViceAuth}/login`,
};

const createAuthApi = () => {
  return {
    async login(payload: IPayloadLogin) {
      const url = routes.login();
      console.log({ prefixUrl: process.env.NEXT_PUBLIC_BASE_URL });
      const result: ApiResponse<{ token: string }> = await api.post(url, {
        ...payload,
      });

      return returnResponse(result);
    },
  };
};

export const ApiAuth = createAuthApi();
