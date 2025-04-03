import { ApisauceInstance, create } from "apisauce";

class Api {
  private static instance: ApisauceInstance;
  private static token: string;

  public static getInstance(): ApisauceInstance {
    if (!Api.instance) {
      Api.instance = create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });
      Api.instance.axiosInstance.interceptors.request.use(
        (request) => {
          const token = request?.headers?.token || Api.token;

          if (token) {
            request.headers["Authorization"] = "Bearer " + token;
          }

          return request;
        },
        (error) => {
          return error;
        }
      );
      Api.instance.axiosInstance.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          return error;
        }
      );
    }
    return Api.instance;
  }

  public static setToken(token: string) {
    Api.token = token;
  }
}

export { Api };
