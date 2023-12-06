<template>
  <div class="sideBer">
    <img
      class="sideBer__server__logo"
      src="https://girak.moe/proxy/avatar.webp?url=https%3A%2F%2Fgirak.moe%2Ffiles%2Ff881b52c-8372-4b6f-944e-e428719be52a&avatar=1"
    />
    <div class="sideBer__user">
      <img
        class="sideBer__user__icon"
        src="https://girak.moe/proxy/avatar.webp?url=https%3A%2F%2Fgirak.moe%2Ffiles%2Ff881b52c-8372-4b6f-944e-e428719be52a&avatar=1"
      />
      <div class="sideBer__user__name">UserName</div>
    </div>
    <div class="sideBer__channel scroll_bar">
      <div
        v-for="channel in channels"
        :key="channel.id"
        class="sideBer__channel__list"
      >
        <div
          class="sideBer__channel__name"
          @click="channelMove(channel.id)"
          :class="{
            'sideBer__channel__name--active': channel.id === pathId,
          }"
        >
          -_-{{ channel.name }}>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type getchannelList } from "~/types/channel";
const router = useRouter();
const route = useRoute();
const pathId = ref<string>("");
// お問い合わせ内容の状態を管理
const channels = ref<getchannelList[]>([]);
for (let i = 0; i < 30; i++) {
  const test = {
    name: "asdf" + i,
    id: i.toString(),
  };
  channels.value.push(test);
}

const channelMove = (id: string) => {
  router.push(id);
  pathId.value = id;
};
</script>

<style lang="scss">
.sideBer {
  background-color: $surface;
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
