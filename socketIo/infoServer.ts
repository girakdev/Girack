import { girakV } from "@/socketIo/soket";
import type { ServerInfo } from "@/types/serverInfo";
import { useServerInfoState } from "@/composables/store/serverInfo";
const state = useServerInfoState();

export const serverInfoOn = girakV.on("infoServer", (dat: ServerInfo) => {
  console.log(dat);
  state.setServerInfo(dat);
});
