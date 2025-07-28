import { createContext, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

const socket = io("http://192.168.1.199:5000");

export const SocketProvider = ({ children }) => (
  <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
);

export const useSocket = () => useContext(SocketContext);
