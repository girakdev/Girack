import { defineStore } from "pinia";
import type { ServerInfo } from "@/types/serverInfo";

export const useServerInfoState = defineStore("serverInfo", {
  state: () =>
    ({
      _serverInfo: null,
    } as {
      _serverInfo: ServerInfo | null;
    }),
  getters: {
    serverData: (state) => {
      return state._serverInfo;
    },
  },
  actions: {
    setServerInfo(data: ServerInfo) {
      this._serverInfo = data;
    },
  },
});
