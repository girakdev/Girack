<template>
  <div class="flex bg-indigo-900">
    <UniqueSideBer :serverData="null" />
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useServerInfoState } from "@/composables/store/serverInfo";
import { girakV } from "~/socketIo/soket";
import { serverInfoOn } from "~/socketIo/infoServer";

const { setServerInfo } = useServerInfoState();
const { serverData } = storeToRefs(useServerInfoState());
// girakV.on("infoServer", (dat: ServerInfo) => {
//   console.log(dat);
//   setServerInfo(dat);
// }

const res = serverInfoOn;
girakV.emit("getInfoServer");
console.log(res);
</script>
