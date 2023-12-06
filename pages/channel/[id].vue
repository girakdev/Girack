<template>
  <UniqueHeader :channelName="channelName" />
</template>

<script setup lang="ts">
const route = useRoute();

const channelName = route.path;
</script>
