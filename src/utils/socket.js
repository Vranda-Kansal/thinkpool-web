import { io } from "socket.io-client";

export const createSocketConnection = () => {
  const token = localStorage.getItem("token");
  return io(import.meta.env.VITE_SOCKET_URL, {
    withCredentials: true,
    auth: {
      token,
    },
  });
};
