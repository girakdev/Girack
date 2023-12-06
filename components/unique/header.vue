<template>
  <div class="header">
    <div class="header__channel">
      <div>#{{ props.channelName }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  channelName: string;
}
const props = withDefaults(defineProps<Props>(), {});
</script>

<style lang="scss">
.header {
  background-color: $surface;
  width: calc(100vw - 240px);
  height: 48px;
  &__channel {
    font-size: 24px;
    padding-top: 4px;
  }
}
</style>
