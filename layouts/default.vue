<template>
  <div class="flex">
    <UniqueSideBer :serverData="test" />
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
import type { ServerInfo } from "~/types/serverInfo";

const { setServerInfo } = useServerInfoState();
const { serverData } = storeToRefs(useServerInfoState());
const test = ref<ServerInfo | null>(null);

girakV.on("infoServer", (dat: ServerInfo) => {
  test.value = dat;
  return dat;
});
girakV.emit("getInfoServer");
</script>
