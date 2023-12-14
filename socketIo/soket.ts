import { io } from "socket.io-client"; //ウェブソケット通信用

//Socket接続
export const girakV = io("https://chat.girak.moe/", {
  transports: ["websocket"],
  reconnection: true,
  reconnectionDelay: 100,
  reconnectionDelayMax: 1000,
});
