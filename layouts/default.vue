<template>
  <div class="main">
    <UniqueSideBer />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.main {
  display: flex;
}
</style>
