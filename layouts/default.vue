<script setup lang="ts">
useHead({
  title: 'Coca',
})
</script>

<template>
  <div>
    <CommonHeader />
    <main>
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>
