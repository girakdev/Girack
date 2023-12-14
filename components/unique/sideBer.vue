<template>
  <div class="w-60 h-screen bg-indigo-800 text-slate-100">
    <div
      class="flex justify-center gap-4 items-center h-32 bg-gradient-to-r from-indigo-500"
    >
      <div class="text-center text-lg">{{ props.serverData ?? "" }}</div>
    </div>
    <div
      class="text-xl px-4 py-2 my-1 mx-2 bg-indigo-400 rounded-md cursor-pointer"
      @click="router.push('/')"
    >
      TOP
    </div>
    <div class="overflow-auto h-[calc(100vh_-_120px_-_65px_-_64px)] px-2">
      <div v-for="channel in channels" :key="channel.id" class="">
        <div
          class="text-2xl mt-2 rounded-md"
          @click="channelMove(channel.id)"
          :class="{
            'bg-indigo-400': channel.id === pathId,
          }"
        >
          -_-{{ channel.name }}>
        </div>
      </div>
    </div>
    <div
      class="flex justify-start gap-4 px-1 items-center h-16 bg-gradient-to-r from-indigo-500"
    >
      <img
        class="w-12 rounded-full"
        src="https://girak.moe/proxy/avatar.webp?url=https%3A%2F%2Fgirak.moe%2Ffiles%2Ff881b52c-8372-4b6f-944e-e428719be52a&avatar=1"
      />
      <div class="text-center text-lg">UserName</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type getchannelList } from "~/types/channel";
import type { ServerInfo } from "~/types/serverInfo";
const router = useRouter();
const pathId = ref<string>("");

interface Prop {
  serverData: ServerInfo | null;
}

const props = withDefaults(defineProps<Prop>(), {});

const channels = ref<getchannelList[]>([]);
for (let i = 0; i < 30; i++) {
  const test = {
    name: "asdf" + i,
    id: i.toString(),
  };
  channels.value.push(test);
}

const channelMove = (id: string) => {
  router.push("/channel/" + id);
  pathId.value = id;
};
</script>

<style lang="scss">
.sideBer {
  width: 240px;
  height: 100vh;
  &__server__logo {
    margin: 0 auto;
    width: 100%;
    height: 120px;
    object-fit: cover;
  }
  &__user {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    img {
      width: 40px;
      border-radius: 50%;
    }
    &__name {
      text-align: center;
      font-size: larger;
    }
  }
  &__channel {
    height: calc(100vh - 120px - 77px);

    &__list {
      display: flex;
      flex-direction: column;
      margin: 8px 0;
      gap: 8px;
    }
    &__name {
      font-size: x-large;
      font-weight: 500;
      &--active {
        background-color: $primary-container;
      }
    }
  }
}
</style>
