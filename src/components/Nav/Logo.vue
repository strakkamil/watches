<template>
  <RouterLink to="/">
    <span>CALIBRE</span>
    <span class="dot">·</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
span {
  font-size: 22px;
  letter-spacing: 0.08em;
  font-family: "Franques";

  &.dot {
    margin-left: 5px;
    color: var(--gold);
  }
}
</style>
