import { createContext, useContext } from "react";

import { io, Socket } from "socket.io-client";
import { getCookiesUser } from "~/features";

export const socket = io(process.env.NEXT_PUBLIC_BASE_URL, {
  extraHeaders: {
    authorization: `Bearer ${getCookiesUser()}`,
  },
});

const SocketContext = createContext<Socket>(socket);

export const SocketProvider = SocketContext.Provider;

export const useSocketContext = () => useContext(SocketContext);
