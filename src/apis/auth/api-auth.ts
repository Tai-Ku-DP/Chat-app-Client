import { ApiResponse } from "apisauce";
import { Api } from "../config/api-config";
import { IPayloadLogin, IPayloadSignup } from "./types";
import { returnResponse } from "../config/api-problem";
import { envConfig } from "~/env";

const api = Api.getInstance();

const { NEXT_PUBLIC_BASE_URL_API_AUTH } = envConfig();
const serViceAuth = NEXT_PUBLIC_BASE_URL_API_AUTH;

const routes = {
  login: () => `${serViceAuth}/login`,
  signUp: () => `${serViceAuth}/register`,
};

const createAuthApi = () => {
  return {
    async signUp(payload: IPayloadSignup) {
      const url = routes.signUp();
      const result: ApiResponse<{ token: string }> = await api.post(url, {
        ...payload,
      });

      return returnResponse(result);
    },

    async login(payload: IPayloadLogin) {
      const url = routes.login();
      const result: ApiResponse<{ token: string }> = await api.post(url, {
        ...payload,
      });

      return returnResponse(result);
    },
  };
};

export const ApiAuth = createAuthApi();
