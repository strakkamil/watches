<template>
  <section class="watches-list container">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.watches-list {
  margin-top: 30px;
  display: grid;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);
  background-color: var(--hairline);
  gap: 1px;
  border: 1px solid var(--hairline);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
