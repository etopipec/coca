<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__cta">
        <div class="cta__content">
          <span class="cta__title w-medium size-64">Think beyond the wave</span>
          <p class="cta__description w-medium size-18">
            Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help
          </p>
        </div>
        <button class="cta__submit w-bold size-16">Try for free</button>
      </div>
      <div class="footer__sitemap"></div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 7rem 0 2.81rem;
  background-color: var(--neutral-100);
}

.footer__cta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cta__content {
  display: flex;
  flex-direction: column;
  grid-gap: 1.5rem;
}

.cta__title {
  max-width: 45rem;
  color: var(--neutral-10);
}

.cta__description {
  max-width: 33.93rem;
  color: var(--neutral-50);
}

.cta__submit {
  padding: 1rem 2rem; 
  border-radius: 6.25rem;
  color: var(--neutral-100);
  background-color: var(--neutral-10);
  cursor: pointer;
}
</style>
