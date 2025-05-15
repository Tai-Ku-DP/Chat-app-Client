import { ApiResponse } from "apisauce";
import { Api } from "../config/api-config";
import { returnResponse } from "../config/api-problem";
import { envConfig } from "~/env";
import {
  IPramsAcceptFriendRequest,
  IPramsDeleteFriendRequest,
  IPramsSendFriendRequest,
  ResponseBooleanCommon,
  ResponseCommonFriendRequest,
} from "./types";
import { IFriendSearchStatus } from "~/store/friend-store/types";

const api = Api.getInstance();
const { NEXT_PUBLIC_BASE_URL_API_FIEND_REQUEST } = envConfig();
const serViceFriendRequest = NEXT_PUBLIC_BASE_URL_API_FIEND_REQUEST;

const routes = {
  defaultFriendRequest: () => `${serViceFriendRequest}`,
  acceptFriendRequest: (requestId: string) =>
    `${serViceFriendRequest}/${requestId}`,
  cancelFriendRequest: (requestId: string) =>
    `${serViceFriendRequest}/${requestId}`,
};

export const createFriendApi = () => {
  return {
    async acceptFriendRequest({
      requestId,
    }: IPramsAcceptFriendRequest): Promise<ResponseBooleanCommon> {
      const url = routes.acceptFriendRequest(requestId);

      const result: ApiResponse<boolean> = await api.patch(url);

      return returnResponse(result);
    },

    async sendFriendRequest(
      params: IPramsSendFriendRequest
    ): Promise<ResponseCommonFriendRequest> {
      const url = routes.defaultFriendRequest();

      const result: ApiResponse<IFriendSearchStatus> = await api.post(url, {
        ...params,
      });

      return returnResponse(result);
    },

    async cancelFriendRequest(
      params: IPramsDeleteFriendRequest
    ): Promise<ResponseCommonFriendRequest> {
      const url = routes.cancelFriendRequest(params.requestId);

      const result: ApiResponse<IFriendSearchStatus> = await api.delete(url);

      return returnResponse(result);
    },
  };
};

export const ApiFriend = createFriendApi();
