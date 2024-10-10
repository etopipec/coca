<script setup lang="ts">
useHead({
  title: 'Coca',
})
</script>

<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <footer>footer</footer>
  </div>
</template>
