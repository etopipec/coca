<template>
  <header class="header container">
    <NuxtLink to="/">
      <img src="/logo.svg" alt="Logo">
    </NuxtLink>
    <ul class="header__menu size-16">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
      <li class="contact w-semibold"><NuxtLink to="/contact">Contact Us -></NuxtLink></li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0 22px;
}

.header__menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.contact {
  margin-left: 2.25rem;
  line-height: 2rem;
  border-bottom: .0625rem solid var(--neutral-100);
}
</style>
