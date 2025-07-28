import { createContext, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

const socket = io("https://whatsapp-clone-p09n.onrender.com");

export const SocketProvider = ({ children }) => (
  <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
);

export const useSocket = () => useContext(SocketContext);
