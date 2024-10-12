<script setup lang="ts">
useHead({
  title: 'Coca',
})
</script>

<template>
  <div>
    <CommonHeader />
    <main class="main">
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 7.375rem - 46.375rem);
}
</style>
