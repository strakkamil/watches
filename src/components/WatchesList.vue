<template>
  <section class="watches-list container">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.watches-list {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: var(--hairline);
  gap: 1px;
  border: 1px solid var(--hairline);
}
</style>
